<template>
  <ul>
    <li>
      {{ infos.driverName }}
      - Tempo total: {{ infos.totalTime }}
      - Tempo médio: {{ infos.averageLap }}
    </li>

    <li>
      Médias:
      <ul>
        <li v-for="(split, index) in infos.averageSplits" :key="split">
          Setor {{ index + 1 }}: {{ split }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'DriverInfo',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const infos = computed(() => ({
      ...props.data,
    }));

    return {
      infos,
    };
  },
};
</script>
