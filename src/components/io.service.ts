import { Io } from 'src/components/models';
import { Ref, ref } from 'vue';

const ioService = () => {
  const ios: Ref<Array<Io>> = ref([]);

  return { ios };
};

const singleton = ioService();
const useIos = () => singleton;
export { useIos };
