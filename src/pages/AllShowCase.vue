<template>
  <div class="all-container">
    <ShowCase />
    <Pagination />
  </div>
</template>
<script>
import Pagination from "../components/ShowCase/Pagination.vue";
import ShowCase from "../components/ShowCase/ShowCase.vue";
export default {
  components: { ShowCase, Pagination },
};
</script>
<style scoped>
.all-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
