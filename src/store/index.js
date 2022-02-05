import { createStore } from "vuex";
import axios from "axios";
import categoriesName from "../constants/categoriesName";
import { getPhotos } from "../api/getPhotos";
export default createStore({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }, urlParams) {
      const paramsString = new URLSearchParams(urlParams).toString();
      const photos = await getPhotos(paramsString);

      axios
        .get(`https://jsonplaceholder.typicode.com/posts?${paramsString}`)
        .then(({ data }) =>
          data.map(({ userId, id, title, body }) => {
            const photoData = photos.get(id);

            return {
              productCategory: categoriesName[userId - 1],
              productCategoryId: userId,
              productId: id,
              productName: title.split(" ").slice(0, 2).join(" "),
              productDescription: body,
              photoData,
            };
          })
        )
        .then((products) => {
          commit("SET_PRODUCTS", products);
        });
    },
  },
  modules: {},
  getters: {
    productCategories: (state) =>
      Array.from(
        new Set(
          state.products.map(({ productCategoryId }) => productCategoryId)
        ),
        (id) => {
          return {
            categoryId: id,
            categoryName: categoriesName[id - 1],
          };
        }
      ),
  },
});
