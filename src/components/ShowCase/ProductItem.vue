<template>
  <div class="product-wrapper">
    <div class="product-description-group">
      <img :src="product.photoData.thumbnailUrl" :alt="product.photoData.alt" />
      <router-link
        class="title"
        :to="{ name: 'product', params: { id: product.productId } }"
      >
        <h2>{{ product.productName }}</h2>
      </router-link>
      <div class="description">{{ changeDescription }}</div>
    </div>
    <div>
      <ButtonAdd :id="product.productId" />
    </div>
  </div>
</template>
<script>
import ButtonAdd from "../ButtonCartGroup.vue";
import { mapMutations } from "vuex";
export default {
  components: { ButtonAdd },
  props: ["product"],
  data() {
    return {
      description: "",
    };
  },
  computed: {
    changeDescription() {
      return this.description;
    },
  },
  methods: {
    ...mapMutations({
      storeSetCurrentPage: "SET_CURRENTPAGE",
    }),
  },
  mounted() {
    let newDescription = [];
    let description = this.product.productDescription.split("");
    if (description.length > 50) {
      for (let i = 0; i < 49; i++) {
        newDescription.push(description[i]);
      }
      this.description = newDescription.join("") + "...";
    }
  },
};
</script>
<style scoped>
.product-description-group {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  align-content: stretch;
}
.product-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px;
  background-color: #fcee0a;
  color: black;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0;
  min-width: 15%;
}

.title {
  transition: color 0.2s ease-in-out;
  color: black;
  margin: 10px 0;
  text-decoration: none;
  font-size: 20px;
}

.title:hover {
  color: rgb(255, 0, 128);
  font-size: 20px;
}
.description {
  margin: 10px;
}
</style>
