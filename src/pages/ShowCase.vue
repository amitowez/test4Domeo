<template>
  <div class="container-show-case">
    <ProductFilter />
    <div class="showCase">
      <ProductItem
        v-for="product in products"
        :key="product.productId"
        :product="product"
      />
    </div>
    <Pagination />
  </div>
</template>
<script>
import Pagination from "../components/ShowCase/Pagination.vue";
import ProductFilter from "../components/ShowCase/ProductFilter.vue";
import ProductItem from "../components/ShowCase/ProductItem.vue";
import { mapState } from "vuex";
export default {
  components: { ProductFilter, ProductItem, Pagination },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: "products",
    }),
  },
};
</script>
<style scoped>
.container-show-case {
  background-color: black;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
}
.showCase {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>
