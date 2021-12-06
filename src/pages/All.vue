<template>
  <table-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableComponent from 'src/components/TableComponent.vue';

export default defineComponent({
  components: { TableComponent },
  name: 'AllPage',
});
</script>
