<template>
  <div class="product-container">
    <img
      class="product-image"
      :src="product.photoData.image"
      :alt="product.photoData.alt"
    />
    <div class="product-discription-group">
      <h2>{{ product.productName }}</h2>
      <p>{{ product.productDescription }}</p>
      <ButtonAdd :id="product.productId" />
    </div>
  </div>
</template>
<script>
import ButtonAdd from "../components/ButtonCartGroup.vue";
import { mapState } from "vuex";
export default {
  components: { ButtonAdd },
  computed: {
    ...mapState({
      products: "products",
    }),
    product() {
      return this.products.find(
        (product) => product.productId === +this.$route.params.id
      );
    },
  },
  methods: {},
};
</script>
<style scoped>
.product-container {
  padding: 50px;
  display: flex;
}
.product-image {
  border-radius: 10px;
}
.product-discription-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fcee0a;
  margin-left: 50px;
  border-radius: 10px;
  padding: 50px;
}
</style>
