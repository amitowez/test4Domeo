<template>
    <div class="header">
        <div class="header-group">
            <div @click="changeWorkWindow('all')" class="header-text" style="cursor: pointer;">Все товары</div>  
            <div class="header-text dropdown">
            <div class="dropbtn">По категориям</div>
                <div class="dropdown-content">
                    <div v-for="category in categories" :key="category.id" class="item">{{category.title}}</div>
                </div>
            </div>
            <div @click="changeWorkWindow('contact')" class="header-text" style="cursor: pointer;">Контакты</div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
 data(){
     return{
         categories:[],
         categoryId: [],
         categoryName:['Самокаты', 'Лыжи', 'Люстры', 'Диваны', 'Питомцы', 'Квартиры', 'Виллы', 'Авто', 'Лодки', 'Самолеты',],

     }
 },
 computed:{
     ...mapState({
         products: 'products',
     }),
 },
 methods:{
     ...mapMutations({
         storeSetCat: 'SET_CATEGORIES',
     }),
    changeWorkWindow(type){
           
    },
 },
 created(){
            for(let i = 0;i < this.products.length; i++){
                let duplicated =  this.categoryId.includes(this.products[i].userId)
                if(!duplicated){
                    this.categoryId.push(this.products[i].userId)
                }
            }
            for(let j = 0;j < this.categoryId.length;j++){
                this.categories.push({title: this.categoryName[j], id: this.categoryId[j]})
            }

},
mounted(){

       this.storeSetCat(this.categories)
}
}
</script>
<style scoped>
.header {
width: 100%;
height: 60px;
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