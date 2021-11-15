<template>
  <div class="wrapper">
    <input type="text" placeholder="1901010" />
    <button>SEARCH</button>
    <input-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputComponent from 'src/components/InputComponent.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { InputComponent },
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 3em;
}

input {
  margin-right: 1em;
}
</style>
