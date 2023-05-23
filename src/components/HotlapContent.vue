<template>
  <h1>Hotlap</h1>

  <IdealLap :data="idealLapData" />

  <div class="d-flex">
    <HotlapChart :data="hotlapChartData" />

    <DriverInfo :data="driverInfoData" />
  </div>
</template>
<script>
import { reactive, computed } from 'vue';
import laps from '@/services/laps';
import timeFormat from '@/utils/time';

import DriverInfo from '@/components/DriverInfo.vue';
import IdealLap from '@/components/IdealLap.vue';
import HotlapChart from '@/components/HotlapChart.vue';

export default {
  name: 'HotlapContent',
  components: {
    IdealLap,
    DriverInfo,
    HotlapChart,
  },
  setup() {
    const state = reactive({
      data: [],
      laps: [],
    });

    laps
      .getOverall()
      .then((data) => {
        state.data = data;
      });

    laps
      .getLaps()
      .then((data) => {
        state.laps = data;
      });

    const getLabelsFromLapsData = (lapsData) => lapsData.map((_item, i) => i + 1);

    const getDatasetsFromLapsData = (lapsData) => [{
      label: 'Voltas',
      backgroundColor: '#ff00ff',
      data: lapsData.map(({ lapTime }) => lapTime),
    }];

    const hotlapChartData = computed(() => {
      const lapsData = state.laps;

      if (lapsData.length === 0) {
        return {
          labels: [],
          datasets: [],
        };
      }

      return {
        labels: getLabelsFromLapsData(lapsData),
        datasets: getDatasetsFromLapsData(lapsData),
      };
    });

    const driverInfoData = computed(() => {
      const { data } = state;

      if (data.length === 0) return {};

      const { currentDriver, timing } = data.leaderBoardLines[0];
      const {
        shortName, firstName, lastName,
      } = currentDriver;

      const lapsData = state.laps;
      const averageSplits = [
        lapsData.reduce((acc, { splits }) => splits[0] / lapsData.length + acc, 0),
        lapsData.reduce((acc, { splits }) => splits[1] / lapsData.length + acc, 0),
        lapsData.reduce((acc, { splits }) => splits[2] / lapsData.length + acc, 0),
      ];

      return {
        driverName: `[${shortName}] ${firstName} ${lastName}`,
        totalTime: timeFormat.getTime(timing.totalTime),
        averageSplits: averageSplits.map((time) => timeFormat.getTime(time)),
        averageLap: timeFormat.getTime(averageSplits.reduce((acc, time) => time + acc, 0)),
      };
    });

    const idealLapData = computed(() => {
      const { getTime } = timeFormat;
      const { data } = state;

      if (data.length === 0) return {};

      const { bestSplits } = data;
      const idealLap = getTime(bestSplits.reduce((acc, split) => acc + split, 0));

      return {
        bestSplits: bestSplits.map((split) => getTime(split)),
        idealLap,
      };
    });

    return {
      idealLapData,
      driverInfoData,
      hotlapChartData,
    };
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
</style>
