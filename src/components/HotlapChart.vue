<template>
  <h1>Hotlap</h1>

  <DriverInfo />

  <IdealLap :data="idealLapData" />
</template>

<script>
import { reactive, computed } from 'vue';
import laps from '@/services/laps';

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

    const idealLapData = computed(() => {
      const { data } = state;

      if (data.length === 0) return 0;

      const { bestSplits } = data;

      return {
        bestSplits,
        idealLap: bestSplits.reduce((acc, split) => acc + split, 0),
      };
    });

    return {
      idealLapData,
    };
  },
};
</script>
