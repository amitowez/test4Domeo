<template>
  <div class="pagination-wrapper">
    <button class="pagination-btn" :disabled="isPrevButtonDisabled">
      <router-link :to="paginateObject(currentPage - 1)"> « </router-link>
    </button>
    <span class="pagination-content">{{ currentPage }}</span>
    <button class="pagination-btn" :disabled="isNextButtonDisabled">
      <router-link :to="paginateObject(currentPage + 1)"> » </router-link>
    </button>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: null,
    };
  },
  mounted() {
    this.currentPage = +this.$route.query._page || this.pagination.initialPage;
  },
  watch: {
    $route(to) {
      this.currentPage = +to.query._page || this.pagination.initialPage;
      this.$store.dispatch("getProducts", {
        _page: this.currentPage,
        _limit: this.pagination.perPage,
      });
    },
  },
  computed: {
    ...mapState({
      pagination: "pagination",
    }),
    ...mapGetters(["totalPages"]),
    isPrevButtonDisabled() {
      return this.currentPage === this.pagination.initialPage;
    },
    isNextButtonDisabled() {
      return this.totalPages && this.currentPage + 1 > this.totalPages;
    },
  },
  methods: {
    paginateObject(pageTo) {
      return {
        query: {
          ...this.$route.query,
          _page: pageTo || 1,
        },
      };
    },
  },
};
</script>
<style scoped>
.pagination-wrapper {
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.pagination-content {
  margin: 0 5px;
  color: #02d8f3;
}
.pagination-btn {
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: #02d8f3;
  padding: 0;
}
.pagination-btn a {
  padding: 6px;
  color: inherit;
  font-size: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-btn:disabled {
  pointer-events: none;
}
</style>
