import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import Counter from "./components/Counter.vue";

const pinia = createPinia();
const router = createRouter({
  routes: [
    {
      path: "/counter",
      component: Counter,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount("#app");
