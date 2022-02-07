<template>
  <div class="container-show-case">
    <ProductFilter :id="categoryId" />
    <div class="showCase">
      <ProductItem
        v-for="product in products"
        :key="product.productId"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import ProductFilter from "./ProductFilter.vue";
import ProductItem from "./ProductItem.vue";
import { mapState } from "vuex";
export default {
  components: { ProductFilter, ProductItem },
  props: ["categoryId"],
  watch: {
    categoryId() {
      if (this.categoryId) {
        this.$store.dispatch("getProducts", {
          userId: this.categoryId,
        });
      }
    },
  },
  computed: {
    ...mapState({
      products: "products",
    }),
  },
  mounted() {
    if (this.categoryId) {
      this.$store.dispatch("getProducts", {
        userId: this.categoryId,
      });
    }
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
