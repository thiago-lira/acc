<template>
  <h1>Hotlap</h1>
  <DriverInfo />
  <IdealLap />
</template>

<script>
import DriverInfo from '@/components/DriverInfo.vue';
import IdealLap from '@/components/IdealLap.vue';

export default {
  name: 'HotlapChart',
  components: {
    IdealLap,
    DriverInfo,
  },
};
</script>
