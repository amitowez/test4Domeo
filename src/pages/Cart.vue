<template>
  <div>
    <div v-if="cart[0]" class="btn-bue" @click="clickBue()">Купить</div>
    <div class="cart-container">
      <template v-if="cart[0]">
        <CartItem v-for="item in changeCart" :key="item.id" :item="item" />
      </template>
      <h1 v-else style="color: #fcee0a">Корзина пуста</h1>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CartItem from "../components/cart/CartItem.vue";
export default {
  components: { CartItem },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cart: "cart",
    }),
    changeCart() {
      return this.cart;
    },
  },
  methods: {
    clickBue() {
      alert("Товары успешно купленны!");
      localStorage.cart = "";
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.btn-bue {
  width: 100px;
  height: 30px;
  background-color: #fcee0a;
  color: black;
  border-radius: 5px;
  text-align: center;
  line-height: 31px;
  cursor: pointer;
}
</style>
