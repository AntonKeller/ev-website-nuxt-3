<template>
  <footer class="footer-container">
    <div class="element">
      <div>8 (495) 717-01-01</div>
    </div>

    <div class="element">
      <div>info@evcons.ru</div>
    </div>

    <div class="element">
      <div>Москва, 3-я улица Ямского поля, д 2 к 7, офис 301</div>
    </div>

    <div class="element">
      <img class="opacity-75 w-[38px] h-[29px]" :src="'/assets/logotypes/ev-logotype-4-gray.png'" alt="no img">
      <div>© 2024, ООО Эверест Консалтиг</div>
    </div>

  </footer>
</template>

<script>
import 'primeicons/primeicons.css';

export default {
  name: "ev-footer"
}
</script>

<style scoped>

.footer-container {
  @apply w-full flex flex-col text-gray-50 text-center sm:text-left space-y-2.5 lg:space-y-3.5;
  @apply px-[calc(16vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-gray-50;
  text-shadow: 1px 1px 4px rgb(0, 0, 0, .15);
}

.element {
  @apply flex text-center items-center text-xs space-x-2.5 text-gray-600;
  @apply sm:space-x-3 text-left;
  @apply md:text-sm;
}

.element:last-child {
  @apply border-t border-t-gray-600/20 pt-2.5 md:pt-4 font-semibold;
}

</style>
