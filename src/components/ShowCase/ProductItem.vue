<template>
<div class="product">
    <img :src="product.photoData.thumbnailUrl" :alt="product.photoData.alt">
    <router-link
    class="title" 
    :to="{ name: 'product', params: { id: product.productId } }">
    {{product.productName}}
    </router-link>
    <div class="discription">{{product.productDescription}}</div>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['product'],
  data(){
      return{

      }
  },
  methods:{
      ...mapMutations({
        storeSetCurrentPage: 'SET_CURRENTPAGE',
     }),
  },
  mounted(){

  }
}
</script>
<style scoped>
.product{
    box-sizing: border-box;
    display: flex;
    padding: 5px;
    width: 18%;
    margin: 10px;
    height: 50%;
    background-color: #fcee0a;
    color: black;
    border-radius: 5px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    align-content: stretch;
}

.title{
    text-decoration: none;
    color: black;
}

</style>