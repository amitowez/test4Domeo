<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({}),
  mounted() {
    this.$store.dispatch('getProducts', { _limit: 20 });
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  font-family: Roboto;
  background-color: #000;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
