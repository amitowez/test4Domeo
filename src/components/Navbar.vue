<template>
    <div  class="header">
        <div class="header-group">
            <router-link  class="header-text" style="cursor: pointer;" to="/showcase">Все товары</router-link>
            <div class="header-text dropdown">
             <div class="dropbtn">По категориям</div>
                <div class="dropdown-content">
                    <div v-for="category in productCategories" :key="category" class="item">{{category.categoryName}}</div>
                </div>
            </div>
            <div  class="header-text" style="cursor: pointer;">Контакты</div>
        </div>
        <router-link   class="header-text" style="cursor: pointer;" to="/cart">Корзина <span v-if="cartLength !== 0" >{{': '+cartLength }}</span>  </router-link>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
 data(){
     return{

     }
 },
 computed:{
    ...mapGetters(['productCategories']),
     ...mapState({
         products: 'products',
         cart: 'cart',
     }),
     cartLength(){
         return this.cart.length
     }
 },
 methods:{
     ...mapMutations({
        storeSetCurrentPage: 'SET_CURRENTPAGE',
     }),

    changeWorkWindow(type){
           console.log(renderCategories, type)
    },
 },
 

}
</script>
<style scoped>
.header {
width: 100%;
height: 80px;
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
background-color: #fcee0a;
-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.header-group{
    display: flex;
    width: 50%;

}
.header-text{
    background-color: #fcee0a;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 1.25;
    margin-left: 10px;
    border: 3px solid black;
    border-radius: 5px;
    transition: 300ms;
    text-decoration:none;
    color: black;
}
.header-text:hover{
    background-color: black;
    color: #fcee0a;
    border: 3px solid blue;
}
.header-drop{
    position: absolute;
    border: 1px solid #fcee0a;
    width: 100%;
    height: 10rem;
    top: 45px;
}

.dropbtn {
    display: inline-block;
}

.dropdown {
    position: relative;
    /* display: inline-block; */
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 43px;
}

.dropdown-content .item {
    color: #fcee0a;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
     background-color: black
}

.dropdown-content .item:hover {
    background-color: black;  
    cursor: pointer;
    color: blue;
}

.dropdown:hover .dropdown-content {
    display: block;

}

/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
</style>