<template>
    <div class="cart-container" v-if="cart[0]" >
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import CartItem from '../components/cart/CartItem.vue'
export default {
  components:{CartItem},
  data(){
      return{

      }
  },
  computed:{
    ...mapState({
      cart: 'cart',
    }),
  }
}
</script>
<style scoped>
.cart-container{
  display: flex;


}
</style>