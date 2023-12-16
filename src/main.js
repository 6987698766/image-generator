import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import Index from "./components/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Index }],
});

createApp(App).use(router).mount("#app");

export default router;
