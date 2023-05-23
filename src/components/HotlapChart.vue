<template>
  <h1>Hotlap</h1>

  <DriverInfo :data="driverInfoData" />

  <IdealLap :data="idealLapData" />
</template>

<script>
import { reactive, computed } from 'vue';
import laps from '@/services/laps';
import timeFormat from '@/utils/time';

import DriverInfo from '@/components/DriverInfo.vue';
import IdealLap from '@/components/IdealLap.vue';

export default {
  name: 'HotlapChart',
  components: {
    IdealLap,
    DriverInfo,
  },
  setup() {
    const state = reactive({
      data: [],
    });

    laps
      .getOverall()
      .then((data) => {
        state.data = data;
      });

    const driverInfoData = computed(() => {
      const { data } = state;

      if (data.length === 0) return {};

      const { currentDriver, timing } = data.leaderBoardLines[0];
      const {
        shortName, firstName, lastName,
      } = currentDriver;

      return {
        driverName: `[${shortName}] ${firstName} ${lastName}`,
        totalTime: timeFormat.getTime(timing.totalTime),
      };
    });

    const idealLapData = computed(() => {
      const { getTime } = timeFormat;
      const { data } = state;

      if (data.length === 0) return 0;

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
    };
  },
};
</script>
