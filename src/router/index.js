import { createRouter, createWebHashHistory } from "vue-router";
import AllShowCase from "../pages/AllShowCase.vue";
import CategoryShowCase from "../pages/CategoryShowCase.vue";
import Cart from "../pages/Cart.vue";
import Product from "../pages/Product.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", redirect: "/showcase" },
  { path: "/allshowcase", name: "allshowcase", component: AllShowCase },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/product/:id", name: "product", component: Product },
  { path: "/contact", name: "contact", component: Contact },
  {
    path: "/categoryshowcase/:id",
    name: "categoryshowcase",
    component: CategoryShowCase,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
