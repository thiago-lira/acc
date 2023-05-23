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
