import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounter = defineStore("counter", () => {
  const counter = ref<number>(0);

  function increment() {
    counter.value++;
  }

  function reset() {
    counter.value = 0;
  }

  const doubled = computed(() => counter.value * 2);

  return {
    counter,
    increment,
    reset,
    doubled,
  };
});
