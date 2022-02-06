<template>
  <div class="contact-container">
    <div>
      <h2 style="color: #fcee0a">Фрагмент карты</h2>
      <img
        class="contact-map"
        src="https://unimall.az/images/detailed/134/14759_buyuk.jpg"
        alt="Фрагмент карты согласно ТЗ:)"
      />
    </div>
    <div class="contact-description">
      <p class="contact-description__item">
        Вагоноремонтная улица, 19 Москва, Россия, 127644
      </p>
      <p class="contact-description__item">
        Дмитровское шоссе, 23к1 Москва, Россия, 127434
      </p>
      <a class="contact-description__item" href="tel: +74951234567"
        >+7 (495) 123-45-67</a
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contact-container {
  display: flex;
  padding: 50px;
  justify-content: space-between;
}
.contact-map {
  width: 650px;
  height: 500px;
}
.contact-description {
  display: inline-block;
  padding: 100px;
}

.contact-description__item {
  color: #fcee0a;
}
</style>
