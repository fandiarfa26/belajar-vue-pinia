import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import MultipleCounter from "./components/MultipleCounter.vue";
import TodoList from "./components/TodoList.vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoEdit from "./components/TodoEdit.vue";

const pinia = createPinia();
const router = createRouter({
  routes: [
    {
      path: "/counter",
      component: MultipleCounter,
    },
    {
      path: "/todolist",
      children: [
        {
          path: "",
          component: TodoList,
          name: "todo-list",
        },
        {
          path: "add",
          component: TodoAdd,
          name: "todo-add",
        },
        {
          path: ":id",
          component: TodoEdit,
          name: "todo-edit",
        },
      ],
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount("#app");
