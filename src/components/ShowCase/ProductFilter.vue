<template>
  <div class="wrapper">
    <select class="sort-select" name="select" id="">
      <option selected value="Без сортировки">Без сортировки</option>
      <option value="По возрастанию">По возрастанию</option>
      <option value="По убыванию">По убыванию</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.wrapper {
  padding: 20px;
  background-color: #fcee0a;
}
.sort-select {
  width: 150px;
}
</style>
