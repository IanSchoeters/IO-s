<template>
  <form action="">
    <input type="text" placeholder="inkooporder" />
    <input type="text" placeholder="lijnnr" />
    <input type="text" placeholder="artikel" />
    <input type="text" placeholder="naam" />
    <input type="date" />
    <span>timestamp today</span>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputComponent',
});
</script>

<style lang="scss" scoped>
form {
  margin-top: 3em;
}
input {
  margin-right: 1em;
}
</style>
