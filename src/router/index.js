import { createRouter, createWebHashHistory } from "vue-router";
import ShowCase from "../pages/ShowCase.vue";
import Cart from "../pages/Cart.vue";

const routes = [
  { path: "/", redirect: "/showcase" },
  { path: "/showcase", name: "showcase", component: ShowCase },
  { path: "/cart", name: "cart", component: Cart },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
