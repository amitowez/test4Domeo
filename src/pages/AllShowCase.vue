<template>
  <div>
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
