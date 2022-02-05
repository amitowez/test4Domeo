<template>
    <div class="cart-item">
        <img :src="item.thumbnailUrl" :alt="item.alt">
        <div>{{ item.productName }}</div>
      <ButtonAdd :id="item.id" />
    </div>
</template>
<script>
import ButtonAdd from '../ButtonCartGroup.vue'

export default {
    components:{ButtonAdd},
    props:['item'],
  data(){
      return{

      }
  },
}
</script>
<style scoped>
.cart-item{
        background-color: #fcee0a;
        color: black;
        display: flex;
        justify-content: space-evenly;
        height: 20%;
        width: 94%;
        margin: 3%;
        border-radius: 10px;
}

</style>