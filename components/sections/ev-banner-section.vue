<template>
  <div class="banner-container">
    <div class="flex justify-center flex-col w-full px-1 mt-24 md:mt-0">
      <h1 class="banner--title"
          v-motion="{
      initial: {
        y: 100,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }"
      >
        {{ title }}
      </h1>
      <h2 class="banner--subtitle">
        {{ subTitle }}
      </h2>
      <div class="flex justify-center mt-4 gap-2 flex-wrap">

        <div class="b--btn bg-cyan-500/20 hover:bg-cyan-500/60">
          Оценка
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

        <div class="b--btn bg-emerald-500/20 hover:bg-emerald-500/60">
          Финансовый консалтинг
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

        <div class="b--btn bg-fuchsia-500/20 hover:bg-fuchsia-500/60">
          Строительный консалтинг
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>


        <div class="b--btn bg-amber-500/20 hover:bg-amber-500/60">
          Достижения
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

      </div>
      <evTabloid/>
    </div>
  </div>
</template>

<script>

import {infoBannerContentCards} from "../../configs/infoBannerCarousel";
import evTabloid from "../../components/ev-tabloid";

export default {

  name: "ev-banner-section",

  components: {
    evTabloid
  },

  data() {
    return {
      infoBannerContentCards,
      title: "Эверест Консалтинг",
      subTitle: "Работаем с 2010 года",
    }
  }

}
</script>

<style scoped>

.banner-container {
  @apply w-full flex flex-row justify-start items-start h-auto lg:min-h-[calc(100vh-65px)];
  @apply px-[1px] py-[1vw] sm:p-[7vw] md:p-[15vw] lg:px-[12vw] xl:pt-32;
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.75) top / cover no-repeat fixed url("../../assets/background/main_page/bg-everest.jpg");
}

.banner--title {
  @apply text-center font-extrabold text-gray-300 text-2xl sm:text-4xl md:text-5xl lg:text-5xl;
}

.banner--subtitle {
  @apply mt-4 uppercase text-center font-extrabold mt-4 text-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply px-4 py-1.5;
  @apply flex items-center;
  @apply text-base md:text-base;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-300 border-2 border-gray-200/20 rounded-2xl backdrop-blur-sm;
  @apply hover:border-gray-900/70;
}

</style>
