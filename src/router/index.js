import { createRouter, createWebHashHistory } from "vue-router";
import ShowCase from "../pages/ShowCase.vue";
import Cart from "../pages/Cart.vue";
import Product from "../pages/Product.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", redirect: "/showcase" },
  { path: "/showcase", name: "showcase", component: ShowCase },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/product:id", name: "product", component: Product },
  { path: "/contact", name: "contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
