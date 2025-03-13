import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { TodoType } from "../types/todo";

const useTodoList = defineStore("todo-list", () => {
  const id = ref(0);
  const todos = reactive<TodoType[]>([]);

  function add(text: string, done: boolean) {
    const newTodo = { id: id.value, text, done };
    todos.push(newTodo);
    id.value++;
  }

  function get(id: number) {
    return todos.find((todo) => todo.id === id);
  }

  function update(id: number, text: string, done: boolean) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index] = { id, text, done };
    }
  }

  function remove(id: number) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  function toggleDone(id: number) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  return {
    todos,
    add,
    get,
    update,
    remove,
    toggleDone,
  };
});

export default useTodoList;
