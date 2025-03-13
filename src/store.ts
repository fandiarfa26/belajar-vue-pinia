import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounter = defineStore("counter", () => {
  const counter = ref<number>(0);
  return {
    counter,
  };
});
