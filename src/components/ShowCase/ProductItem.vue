<template>
<div class="product">
    <div class="product-discription-group">
    <img :src="product.photoData.thumbnailUrl" :alt="product.photoData.alt">
    <router-link
    class="title" 
    :to="{ name: 'product', params: { id: product.productId } }">
   <h2> {{product.productName}} </h2>
    </router-link>
    <div class="discription">{{product.productDescription}}</div>
    </div>
    <div>
    <ButtonAdd :id="product.productId" />
    </div>
</div>
</template>
<script>
import ButtonAdd from '../ButtonCartGroup.vue'
import {mapMutations} from 'vuex'
export default {
    components:{ ButtonAdd },
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
.product-discription-group{
        box-sizing: border-box;
    display: flex;
        justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    align-content: stretch;
}
.product{
    box-sizing: border-box;
    display: flex;
    padding: 5px;
    width: 18%;
    margin: 10px;
    height: 60%;
    background-color: #fcee0a;
    color: black;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-content: stretch;
}

.title{
    text-decoration: none;
    color: black;
}

</style>