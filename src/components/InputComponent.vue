<template>
  <form @submit.prevent="addNewIo(newIo)">
    <input type="text" placeholder="IO" v-model="newIo.io" />
    <input type="text" placeholder="lijnnummer" v-model="newIo.linenumber" />
    <input type="text" placeholder="artikel" v-model="newIo.article" />
    <input type="text" placeholder="naam gebruiker" v-model="newIo.username" />
    <input type="date" placeholder="datum vandaag" v-model="newIo.dateToday" />
    <input type="text" placeholder="leverancier" v-model="newIo.supplier" />
    <input
      type="text"
      placeholder="tel leverancier"
      v-model="newIo.phoneSupplier"
    />
    <input type="date" v-model="newIo.deliveryDate" />
    <button>toevoegen</button>
  </form>

  <div>{{ newIo.dateToday }}</div>
 
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { Io } from 'src/components/models';
import { useIos } from 'src/components/io.service';

export default defineComponent({
  name: 'InputComponent',
  setup() {
    const newIo: Ref<Io> = ref(<Io>{
      dateToday: '2021-11-30',
      // new Date().toLocaleDateString()
    });
    const { ios } = useIos();

    function addNewIo(newIo: Io) {
      ios.value.push({ ...newIo });
    }

    return { newIo, addNewIo, ios };
  },
});
</script>

<style lang="scss" scoped>
form {
  margin-top: 2em;
}
input {
  margin-right: 3px;
}
button {
  margin-right: 3px;
}
div {
  display: inline-block;
  margin: 59px;
}
</style>
