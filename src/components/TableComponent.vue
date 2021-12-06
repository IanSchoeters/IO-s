<template>
  <table>
    <tr>
      <th>IO</th>
      <th>Lijnnummer</th>
      <th>Artikel</th>
      <th>Gebruiker</th>
      <th>Datum toegevoegd</th>
      <th>Leverancier</th>
      <th>Tel leverancier</th>
      <th>Leveringsdatum</th>
    </tr>
    <tr v-for="(io, index) in ios" :key="index">
      <td>{{ io.io }}</td>
      <td>{{ io.linenumber }}</td>
      <td>{{ io.article }}</td>
      <td>{{ io.username }}</td>
      <td>{{ io.dateToday }}</td>
      <td>{{ io.supplier }}</td>
      <td>{{ io.phoneSupplier }}</td>
      <td>{{ io.deliveryDate }}</td>
      
      <button>...</button>
      <button>X</button>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useIos } from 'src/components/io.service';

export default defineComponent({
  name: 'TableComponent',
  setup() {
    const { ios } = useIos();

    return { ios };
  },
});
</script>

<style lang="scss" scoped>
.table {
}

.th {
}
</style>
