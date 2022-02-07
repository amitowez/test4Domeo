<template>
  <div class="wrapper">
    <!-- Можно разбить по компонентам -->
    <select
      class="select"
      @change="this.storeSortProducts($event.target.value)"
    >
      <option selected value="DEFAULT">Без сортировки</option>
      <option value="ASC">По возрастанию</option>
      <option value="DESC">По убыванию</option>
    </select>
    <select
      class="select"
      @change="this.storeChangeProductsAmount($event.target.value)"
    >
      <option v-if="id === undefind" :selected="id === undefind" value="100">
        Показать всё
      </option>
      <option :selected="id" value="10">Показывать по 10</option>
      <option v-if="id === undefind" value="20">Показывать по 20</option>
    </select>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["id"],
  watch: {
    storePerPage() {
      this.$store.dispatch("getProducts", {
        _page: this.$route.query._page || this.pagination.initialPage,
        _limit: this.pagination.perPage,
      });
    },
  },
  computed: {
    ...mapState({
      pagination: "pagination",
    }),
    storePerPage() {
      return this.pagination.perPage;
    },
  },
  methods: {
    ...mapMutations({
      storeSortProducts: "SORT_PRODUCTS",
      storeChangeProductsAmount: "CHANGE_PRODUCTS_AMOUNT",
    }),
  },
};
</script>
<style scoped>
.wrapper {
  padding: 20px;
  background-color: #fcee0a;
}
.select {
  width: 150px;
}
.select + .select {
  margin-left: 20px;
}
</style>
