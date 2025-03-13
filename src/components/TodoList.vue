<script setup lang="ts">
import useTodoList from "../store/useTodoList";

const todoListStore = useTodoList();
</script>

<template>
  <h1>Todo List</h1>
  <RouterLink :to="{ name: 'todo-add' }">Add Todo</RouterLink>
  <table border v-if="todoListStore.todos.length">
    <thead>
      <tr>
        <th>ID</th>
        <th>Todo</th>
        <th>Done</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoListStore.todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.text }}</td>
        <td @click="todoListStore.toggleDone(todo.id)">
          {{ todo.done ? "✅" : "⌛" }}
        </td>
        <td>
          <RouterLink :to="{ name: 'todo-edit', params: { id: todo.id } }"
            >Edit</RouterLink
          >
          <button @click="todoListStore.remove(todo.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>Belum ada list todo.</p>
</template>
