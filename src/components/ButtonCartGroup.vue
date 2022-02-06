<template>
  <div class="btn-group">
    <button
      :disabled="counter === 0"
      @click="changeCount(-1), storeSetCartItem({ id: id, count: count })"
      class="btn"
    >
      -
    </button>
    <div class="counter">{{ counter }}</div>
    <button
      @click="changeCount(+1), storeSetCartItem({ id: id, count: count })"
      class="btn"
    >
      +
    </button>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ...mapState({
      cart: "cart",
    }),
    counter() {
      let item = this.cart.find((item) => item.id === this.id);
      if (item) {
        this.count = item.value;
        return item.value;
      } else {
        return this.count;
      }
    },
  },
  methods: {
    ...mapMutations({
      storeSetCartItem: "SET_ITEM_CART",
    }),
    changeCount(value) {
      this.count = this.count + value;
    },
  },
};
</script>
<style scoped>
.btn-group {
  display: flex;
  align-items: center;
}
.btn {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 100%;
  background: rgb(144, 142, 105)
    linear-gradient(rgb(185, 181, 151), rgb(144, 142, 105));
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.5),
    inset 0 2px 1px rgba(255, 255, 255, 0.9), 0 4px 4px rgba(0, 0, 0, 0.9);
}
.counter {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 100%;
  background: rgb(144, 142, 105)
    linear-gradient(rgb(185, 181, 151), rgb(144, 142, 105));
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.5),
    inset 0 2px 1px rgba(255, 255, 255, 0.9), 0 4px 4px rgba(0, 0, 0, 0.9);
}
</style>
