<template>
  <h2>
    Tempo Médio
  </h2>
  <table>
    <thead>
      <tr>
        <th>S1</th>
        <th>S2</th>
        <th>S3</th>
        <th>
          Volta
        </th>
      </tr>
    </thead>
    <tr>
      <td v-for="split in times.averageSplits" :key="split">
        {{ split }}
      </td>
      <td>
        {{ times.averageLap }}
      </td>
    </tr>
  </table>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'AverageTimes',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const times = computed(() => ({
      ...props.data,
    }));

    return {
      times,
    };
  },
};
</script>
