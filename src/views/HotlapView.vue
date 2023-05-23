<template>
  <div class="hotlap-view">
    <HotlapChart />
  </div>
</template>

<script>
import HotlapChart from '@/components/HotlapChart.vue';

export default {
  name: 'HotlapView',
  components: {
    HotlapChart,
  },
};
</script>
