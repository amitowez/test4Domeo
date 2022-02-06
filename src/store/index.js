import { createStore } from "vuex";
import { getProducts } from "../api/getProducts";
import categoriesName from "../constants/categoriesName";
import { getPhotos } from "../api/getPhotos";
export default createStore({
  state: {
    cart: [],
    products: [],
    productsAmount: null,
    pagination: {
      perPage: 10,
      initialPage: 1,
    },
  },
  mutations: {
    FILTER_BY_CATEGORY(state, categoryId) {
      state.products = state.products.filter(
        ({ productCategoryId }) => productCategoryId === categoryId
      );
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCTS_AMOUNT(state, productsAmount) {
      state.productsAmount = productsAmount;
    },
    SET_CATEGORIES(state, categories) {
      state.productCategories = categories;
    },
    CHANGE_PRODUCTS_AMOUNT(state, value) {
      state.pagination.perPage = value;
    },
    SORT_PRODUCTS(state, value) {
      const products = [...state.products];
      let compareFunction = () => {};
      switch (value) {
        case "ASC":
          compareFunction = (a, b) =>
            a.productName.localeCompare(b.productName);
          break;
        case "DESC":
          compareFunction = (a, b) =>
            b.productName.localeCompare(a.productName);
          break;
        default:
          break;
      }
      state.products = products.sort(compareFunction);
    },
    SET_ITEM_CART(state, { id: id, count: count }) {
      const item = state.cart.find((item) => item.id === id);
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
          state.cart = state.cart.filter((el) => +el.id !== item.id);
        }
      }
      localStorage.cart = JSON.stringify(state.cart);
    },
  },
  actions: {
    async getAllProducts({ dispatch, commit }) {
      const products = await getProducts();
      const productCategories = Array.from(
        new Set(products.map(({ userId }) => userId)),
        (id) => {
          return {
            categoryId: id,
            categoryName: categoriesName[id - 1],
          };
        }
      );
      commit("SET_CATEGORIES", productCategories);
      commit("SET_PRODUCTS_AMOUNT", products.length);

      dispatch("getProducts");
    },
    async getProducts({ commit }, urlParams) {
      const paramsString = new URLSearchParams(urlParams).toString();
      const data = await getProducts(paramsString);
      const photos = await getPhotos();

      const products = data.map(({ userId, id, title, body }) => {
        const photoData = photos.get(id);

        return {
          productCategory: categoriesName[userId - 1],
          productCategoryId: userId,
          productId: id,
          productName: title.split(" ").slice(0, 2).join(" "),
          productDescription: body,
          photoData,
        };
      });
      commit("SET_PRODUCTS", products);
    },
  },
  modules: {},
  getters: {
    totalPages: (state) =>
      Math.ceil(state.productsAmount / state.pagination.perPage),
  },
});
