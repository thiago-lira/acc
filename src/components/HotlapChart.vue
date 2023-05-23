<template>
  <h1>Hotlap</h1>
  <IdealLap />
</template>

<script>
import IdealLap from '@/components/IdealLap.vue';

export default {
  name: 'HotlapChart',
  components: {
    IdealLap,
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
