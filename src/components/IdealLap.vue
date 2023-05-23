<template>
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
      <td v-for="split in times.bestSplits" :key="split">
        {{ split }}
      </td>
      <td>
        {{ times.idealLap }}
      </td>
    </tr>
  </table>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'IdealLap',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const times = computed(() => ({
      bestSplits: props.data.bestSplits,
      idealLap: props.data.idealLap,
    }));

    return {
      times,
    };
  },
};
</script>
