<template>
  <footer class="footer-container">

    <div class="element md:mt-2">
      <img class="opacity-75 w-[38px] h-[29px]" :src="'/assets/logotypes/ev-logotype-4-gray.png'" alt="no img">
      <div class="ml-2 md:ml-4 lg:ml-5">© 2024, ООО Эверест Консалтиг</div>
    </div>

    <div class="w-[50%] mt-3 md:mt-6 h-[1px] bg-gray-300"></div>

    <div class="flex flex-col sm:flex-row items-center">
      <span class="element mt-3 md:mt-5 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md">
        <i class=" text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-inbox h-fit"></i>
        <span class="ml-2">info@evcons.ru</span>
      </span>

      <div class="element mt-3 md:mt-5">
      <span class="ml-1 sm:ml-2 md:ml-4 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md">
        <i class=" text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-phone h-fit"></i>
       <span class="ml-2">8 495 717-01-01</span>
      </span>
        <span class="ml-1 sm:ml-2 md:ml-4 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md">
        <i class=" text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-phone h-fit"></i>
        <span class="ml-2">8 499 557 07 97</span>
      </span>
      </div>
    </div>

    <div class="element font-normal mt-3 md:mt-4">
      Москва, 3-я улица Ямского поля, д 2 к 7, офис 301
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
  @apply w-full flex flex-col items-center text-gray-50 text-center;
  @apply py-6 sm:py-8 md:py-8 bg-gray-100 border-t border-t-gray-300/90 border-b border-b-gray-300/90;
}

.element {
  @apply flex text-center items-center text-xs md:text-sm text-gray-900;
}

</style>
