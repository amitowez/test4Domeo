import { createStore } from "vuex";
import axios from "axios";
import categoriesName from "../constants/categoriesName";
import { getPhotos } from "../api/getPhotos";
export default createStore({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ITEM_CART(state, { id: id, count: count }) {
      let item = state.cart.find((item) => item.id === id);
      if (!item) {
        let cartItem = {};
        let productItem = state.products.find((item) => item.productId === id);
        if (productItem) {
          cartItem.id = productItem.productId;
          cartItem.productName = productItem.productName;
          cartItem.thumbnailUrl = productItem.photoData.thumbnailUrl;
          cartItem.alt = productItem.photoData.alt;
          cartItem.value = count;
          state.cart.push(cartItem);
        }
      } else {
        item.value = count;
        if (item.value === 0) {
          console.log(state.cart.filter((el) => +el.id !== item.id));
          state.cart = state.cart.filter((el) => +el.id !== item.id);
        }
      }
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
