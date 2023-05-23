<template>
  <div class="driver-info">
    <table>
      <thead>
        <tr>
          <th>
            Nome
          </th>
          <th>
            Tempo total
          </th>
        </tr>
      </thead>
      <tr>
        <td>
          {{ infos.driverName }}
        </td>
        <td>
          {{ infos.totalTime }}
        </td>
      </tr>
    </table>

    <hr>

    <table>
      <thead>
        <tr>
          <th>S1</th>
          <th>S2</th>
          <th>S3</th>
          <th>
            Tempo médio
          </th>
        </tr>
      </thead>
      <tr>
        <td v-for="split in infos.averageSplits" :key="split">
          {{ split }}
        </td>
        <td>
          {{ infos.averageLap }}
        </td>
      </tr>
    </table>
  </div>
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
