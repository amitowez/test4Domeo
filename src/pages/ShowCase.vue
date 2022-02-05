<template>
 <div  class="container-show-case">
     <LeftPanel />
    <div class="showCase">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
 </div>
</template>
<script>
import LeftPanel from '../components/ShowCase/LeftPanel.vue'
import ProductItem from '../components/ShowCase/ProductItem.vue'
import {mapState} from 'vuex'
export default {
    components: {LeftPanel,ProductItem},
  data(){
      return{

      }
  },
  computed:{
 ...mapState({
         products: 'products',
     }),
  },
}
</script>
<style scoped>
.container-show-case{
    flex: auto;
    background-color: black;
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
}
.showCase{
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    height: 100%;

}
</style>