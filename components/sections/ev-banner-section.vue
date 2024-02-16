<template>
  <div class="banner-container w-full px-1">

    <div class="z-10 flex flex-col lg:gap-y-4 items-center">

      <div class="overflow-hidden">
        <h1 class="banner--title"
            v-motion
            :initial="{y: 15, opacity: 0.001}"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="600"
        >
          Эверест <span class="inline-block py-2 px-6 bg-red-950 border-x-4 border-x-gray-50">Консалтинг</span>
        </h1>
      </div>

      <div class="overflow-hidden">
        <h2
            class="banner--subtitle"
            v-motion
            :initial="{
              y: -15,
              opacity: 0.001
            }"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="600"
        >
          На рынке с 2010 года
        </h2>
      </div>

      <div class="flex justify-center mt-4 gap-2 flex-wrap">
        <div
            v-for="service of serviceList"
            :key="service.id"
            class="b--btn"
            :class="service.classes"
            v-motion
            :initial="{
              opacity: 0.001,
              scale: 0.3
            }"
            :enter="{
              scale: 1,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="300*service.id"
        >
          {{ service.txt }}
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>
      </div>
    </div>

    <!--    <evTabloid/>-->

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
      serviceList: [
        {
          id: 1,
          txt: "Оценка бизнеса",
          classes: "bg-red-500/20 hover:bg-red-500/70",
        },
        {
          id: 2,
          txt: "Финансовый консалтинг",
          classes: "bg-cyan-500/20 hover:bg-cyan-500/70",
        },
        {
          id: 3,
          txt: "Строительный консалтинг",
          classes: "bg-emerald-500/20 hover:bg-emerald-500/70",
        }
      ],
      infoBannerContentCards,
    }
  }

}
</script>

<style scoped>

.banner-container {
  @apply relative w-full flex flex-col justify-center items-center h-auto lg:min-h-[calc(100vh-65px)];
  @apply px-[40px] sm:px-[7vw] md:px-[15vw] lg:px-[12vw];
  @apply pt-28 pb-16 sm:py-[6vw] md:py-[8vw] lg:py-[9vw];
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.9999) top / cover no-repeat fixed url("../../assets/background/main_page/bg-everest.jpg");
}

.banner--title {
  @apply text-center font-extrabold text-gray-100 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans;
}

.banner--subtitle {
  @apply mt-2 text-center font-extrabold text-gray-300 text-base md:text-lg lg:text-xl xl:text-4xl font-sans;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply text-center flex flex-row justify-center;
  @apply sm:block sm:inline px-4 py-0.5 md:px-4 md:py-2;
  @apply text-base lg:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-300 border-2 border-gray-200/20 rounded-xl backdrop-blur-xl;
}

</style>
