<template>
<div class="btn-group">
    <button 
        @click="changeCount(-1), storeSetCartItem({id: id, count: count})" 
        class="btn">
    -
    </button>
    <div class="counter">{{counter}} </div>
    <button   
        @click="changeCount(+1), storeSetCartItem({id: id, count: count})"  
        class="btn">
        +
        </button>
</div>
    
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
    props:['id'],
    data(){
        return{
            count: 0,
        }
    },
    computed:{
        ...mapState({
            cart: 'cart'
        }),
        counter(){
            let item = this.cart.find(item => item.id === this.id)
            console.log(item,'da0')
            if(item){
                this.count = item.value
                return item.value
            } else {

                return this.count
            }
   
        }
    },
    methods:{
        ...mapMutations({
            storeSetCartItem:'SET_ITEM_CART'
        }),
        changeCount(value){
            this.count = this.count + value;
        }

    },
}
</script>
<style scoped>

.btn-group{
    display:flex;
    align-items: center;
}
.btn{
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;

}
.counter{
    width: 20px;
    height: 50px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 50px;
}
</style>