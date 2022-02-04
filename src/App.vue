<template>
  <div >
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
     this.$store.dispatch("getPosts");
  }
};
</script>
<style >
body {
  background-color: #000;
}
</style>