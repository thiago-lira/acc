<template>
  <h1>Hotlap</h1>
</template>

<script>
import { reactive } from 'vue';
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

    return {
      state,
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
