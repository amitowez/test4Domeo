<template>
 <div class="container">
     <LeftPanel />
    <div class="showCase">

    </div>
 </div>
</template>
<script>
import LeftPanel from '../components/ShowCase/LeftPanel.vue'
export default {
    components: {LeftPanel},
  data(){
      return{

      }
  }
}
</script>
<style scoped>
.container{
    display: flex;
    width: 100%;
    height: 675px;
    position: relative;
}
.showCase{
    width: 100%;
    height: 100%;
    border: 1px solid yellow;
}
</style>