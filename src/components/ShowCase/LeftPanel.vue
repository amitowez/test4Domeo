<template>
    <div class="leftPanel">
        <select class="sort-select" name="select" id="">
            <option selected value="Без сортировки">Без сортировки</option>
            <option value="По возрастанию">По возрастанию</option>
            <option value="По убыванию">По убыванию</option>
        </select>
    </div>
</template>
<script>
export default {
  data(){
      return{

      }
  }
}
</script>
<style scoped>
.leftPanel{
    width: 300px;
    height: 100%;
    background-color: red;
}
.sort-select{
    width: 200px;
}
</style>