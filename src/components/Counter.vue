<script setup lang="ts">
import { useCounter } from "../store.ts";

const counterStore = useCounter();
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});

function handleClick() {
  counterStore.counter++;
}

function handleReset() {
  //counterStore.counter = 0;
  // atau menggunakan $patch untuk mengubah beberapa nilai state sekaligus
  counterStore.$patch({ counter: 0 });
}
</script>

<template>
  <h1>Counter: {{ counterStore.counter }}</h1>
  <button @click="handleClick">Increment</button>
  <button @click="handleReset">Reset</button>
</template>
