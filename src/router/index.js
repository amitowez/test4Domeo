import { createRouter, createWebHashHistory } from "vue-router";
import AllShowCase from "../pages/AllShowCase.vue";
import CategoryShowCase from "../pages/CategoryShowCase.vue";
import Cart from "../pages/Cart.vue";
import Product from "../pages/Product.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", redirect: "/products" },
  { path: "/products", name: "products", component: AllShowCase },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/product/:id", name: "product", component: Product },
  { path: "/contact", name: "contact", component: Contact },
  {
    path: "/products/:id",
    name: "productsByCategory",
    component: CategoryShowCase,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
