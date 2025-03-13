<script setup lang="ts">
import { useRouter } from "vue-router";
import useTodoList from "../store/useTodoList";
import { ref } from "vue";

const todoListStore = useTodoList();
const router = useRouter();

const text = ref("");
const done = ref(false);

function handleSubmit() {
  todoListStore.add(text.value, done.value);
  router.push({ name: "todo-list" });
}
</script>

<template>
  <h1>Create new todo</h1>
  <form @submit="handleSubmit">
    <input type="text" v-model="text" placeholder="New todo" />
    <br />
    <label for="done">
      <input type="checkbox" name="done" v-model="done" />
      Done
    </label>
    <br />
    <br />
    <button type="submit">Add</button>
  </form>
</template>
