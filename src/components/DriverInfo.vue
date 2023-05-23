<template>
  <ul>
    <li>
      {{ infos.driverName }}
      - Tempo total: {{ infos.totalTime }}
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
      driverName: props.data.driverName,
      totalTime: props.data.totalTime,
    }));

    return {
      infos,
    };
  },
};
</script>
