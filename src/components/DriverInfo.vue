<template>
  <ul>
    <li>
      {{ driver }}
      - Tempo total: {{ totalTime }}
    </li>
  </ul>
</template>

<script>
import { reactive, computed } from 'vue';
import laps from '@/services/laps';

export default {
  name: 'DriverInfo',
  setup() {
    const state = reactive({
      data: [],
    });

    laps
      .getOverall()
      .then((data) => {
        const [leader] = data.leaderBoardLines;

        state.data = leader;
      });

    const driver = computed(() => {
      const { data } = state;

      if (data.length === 0) return 0;

      const { shortName, firstName, lastName } = data.currentDriver;

      return `[${shortName}] ${firstName} ${lastName}`;
    });

    const totalTime = computed(() => {
      const { data } = state;

      if (data.length === 0) return 0;

      return data.timing.totalTime;
    });

    return {
      state,
      totalTime,
      driver,
    };
  },
};
</script>
