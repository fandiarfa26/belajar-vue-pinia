<script setup lang="ts">
import { useCounter } from "../store/useCounter.ts";

const counterStore = useCounter();
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});
counterStore.$onAction((action) => {
  console.log(action);
});

function handleIncrement() {
  // counterStore.counter++;

  // jika menggunakan action store
  counterStore.increment();
}

function handleReset() {
  // counterStore.counter = 0;
  // atau menggunakan $patch untuk mengubah beberapa nilai state sekaligus
  // counterStore.$patch({ counter: 0 });

  // jika menggunakan action store
  counterStore.reset();
}
</script>

<template>
  <h1>Counter: {{ counterStore.counter }}</h1>
  <h2>Doubled: {{ counterStore.doubled }}</h2>
  <button @click="handleIncrement">Increment</button>
  <button @click="handleReset">Reset</button>
</template>
