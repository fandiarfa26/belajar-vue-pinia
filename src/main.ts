import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import MultipleCounter from "./components/MultipleCounter.vue";

const pinia = createPinia();
const router = createRouter({
  routes: [
    {
      path: "/counter",
      component: MultipleCounter,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount("#app");
