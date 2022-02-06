<template>
  <ShowCase :categoryId="+this.$route.params.id" />
</template>
<script>
import ShowCase from "../components/ShowCase/ShowCase.vue";
export default {
  components: { ShowCase },
};
</script>
