<template>
    <div class="container">
        <img :src="product.photoData.image" :alt="product.photoData.alt">
        <h2>{{ product.productName }}</h2>
        <p>{{ product.productDescription }}</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState({
            products: 'products',
        }),
        product() {
        
        return this.products.find(product =>  product.productId === +this.$route.params.id);
        },
    },
    methods:{
    },

}
</script>
<style scoped>

</style>