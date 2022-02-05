import { createStore } from "vuex";
import axios from "axios";
import categoriesName from "../constants/categoriesName";

export default createStore({
  state: {
    products: [],
    rendering: {
      typeWorkWindow: "all",
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) =>
          data.map(({ userId, id, title, body }) => ({
            productCategory: categoriesName[userId - 1],
            productCategoryId: userId,
            productId: id,
            productName: title.split(" ").slice(0, 2).join(" "),
            productDescription: body,
          }))
        )
        .then((data) => {
          commit("SET_PRODUCTS", data);
        });
    },
  },
  modules: {},
  getters: {
    productCategories: (state) =>
      Array.from(
        new Set(state.products.map(({ productCategory }) => productCategory))
      ),
  },
});
