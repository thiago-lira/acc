<template>
  <h1>Hotlap</h1>
  <table>
    <thead>
      <tr>
        <th>S1</th>
        <th>S2</th>
        <th>S3</th>
        <th>Ideal</th>
      </tr>
    </thead>
    <tr>
      <td v-for="split in state.data.bestSplits" :key="split">
        {{ split }}
      </td>
      <td>
        {{ idealLap }}
      </td>
    </tr>
  </table>
</template>

<script>
import { reactive, computed } from 'vue';
import laps from '@/services/laps';

export default {
  name: 'HotlapChart',
  setup() {
    const state = reactive({
      data: [],
    });

    laps
      .getOverall()
      .then((data) => {
        state.data = data;
      });

    const idealLap = computed(() => {
      const { data } = state;

      if (data.length === 0) return 0;

      const { bestSplits } = data;

      return bestSplits.reduce((acc, split) => acc + split, 0);
    });

    return {
      state,
      idealLap,
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
