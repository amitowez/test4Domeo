<template>
  <ShowCase />
</template>
<script>
import ShowCase from "../components/ShowCase/ShowCase.vue";
export default {
  components: { ShowCase },
  mounted() {
    console.log(+this.$route.params.id);
  },
};
</script>
