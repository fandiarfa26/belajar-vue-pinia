<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useTodoList from "../store/useTodoList";
import { ref, watchEffect } from "vue";

const todoListStore = useTodoList();
const route = useRoute();
const router = useRouter();

const text = ref("");
const done = ref(false);

function handleSubmit() {
  todoListStore.update(Number(route.params.id), text.value, done.value);
  router.push({ name: "todo-list" });
}

watchEffect(() => {
  const getTodo = todoListStore.get(Number(route.params.id));
  if (getTodo) {
    text.value = getTodo.text;
    done.value = getTodo.done;
  }
});
</script>

<template>
  <h1>Edit todo</h1>
  <form @submit="handleSubmit">
    <input type="text" v-model="text" placeholder="New todo" />
    <br />
    <label for="done">
      <input type="checkbox" name="done" v-model="done" />
      Done
    </label>
    <br />
    <br />
    <button type="submit">Update</button>
  </form>
</template>
