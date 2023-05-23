<template>
  <Line
    :data="chart.data"
    :options="chart.options"
    class="chart"
  />
</template>

<script>
import { computed } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default {
  name: 'HotlapChart',
  components: {
    Line,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const chart = computed(() => ({
      options: {
        responsive: false,
        maintainAspectRatio: false,
      },
      data: props.data,
    }));

    return {
      chart,
    };
  },
};
</script>

<style scoped>
.chart {
  height: 100px;
  width: 50%;
}
</style>
