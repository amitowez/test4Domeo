<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
// import Vue from 'vue';
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({}),
 mounted(){
     this.$store.dispatch("getProducts", { _limit: 20, });
  }
};
</script>
<style >
body {
  background-color: #000;
}
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>