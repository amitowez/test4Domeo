<template>
  <div class="header">
    <div class="menu-group">
      <div class="menu-group__item dropdown">
        <div class="dropdown-button">По категориям</div>
        <div class="dropdown-content">
          <div
            v-for="category in productCategories"
            :key="category"
            class="dropdown-content__item"
          >
            <router-link
              :to="{
                name: 'productsByCategory',
                params: { id: category.categoryId },
              }"
            >
              {{ category.categoryName }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="menu-group__item">
        <router-link class="menu-group__link" to="/products"
          >Все товары</router-link
        >
      </div>
      <div class="menu-group__item">
        <router-link class="menu-group__link" to="/contact"
          >Контакты</router-link
        >
      </div>
    </div>
    <div class="menu-group__item">
      <router-link class="menu-group__link" to="/cart"
        >Корзина <span v-if="cartLength !== 0">{{ ": " + cartLength }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      productCategories: "productCategories",
      products: "products",
      cart: "cart",
    }),
    cartLength() {
      return this.cart.length;
    },
  },
  methods: {
    ...mapMutations({
      storeSetCurrentPage: "SET_CURRENTPAGE",
      storeFilterByCategory: "FILTER_BY_CATEGORY",
    }),

    changeWorkWindow(type) {
      console.log(renderCategories, type);
    },
  },
};
</script>
<style scoped>
.header {
  max-width: 100%;
  padding: 6px;
  display: flex;
  margin-left: -10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  background-color: #000;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.menu-group {
  display: flex;
}
.menu-group__item {
  color: #fcee0a;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 10px;
  transition: color 0.2s ease-in-out;
  padding: 16px 8px;
  position: relative;
}

.menu-group__item::before {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  content: "";
  transform: skewX(340deg);
  background-color: #202020;
  transition: background-color 0.2s ease-in-out;
}

.menu-group__item:hover {
  color: black;
}

.menu-group__item:hover::before {
  background: #fcee0a;
}

.menu-group__link,
.dropdown-button {
  position: relative;
  color: inherit;
  text-decoration: none;
}

.dropdown-button {
  display: inline-block;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 60px;
  right: 10px;
}

.dropdown-content__item {
  color: #fcee0a;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: black;
  border: 1px solid #202020;
}

.dropdown-content__item:hover {
  background-color: black;
  cursor: pointer;
  color: #02d8f3;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
