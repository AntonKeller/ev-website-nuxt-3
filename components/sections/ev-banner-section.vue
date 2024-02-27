<template>
  <div class="banner-container">

    <div class="z-10 flex flex-col items-center">

      <div class="flex flex-col md:flex-row items-center space-y-1.5">
        <div class="banner-title txt-shadow"
            v-motion
            :initial="{y: 15, opacity: 0.001}"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="1000"
        >
          Эверест
        </div>

        <div
            class="banner-subtitle txt-shadow self-end ml-2"
            v-motion
            :initial="{y: -15, opacity: 0.001}"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="1000"
        >
          На рынке с 2010 года
        </div>
      </div>

      <div class="flex justify-center items-center mt-6 sm:mt-8 lg:mt-10 xl:mt-12 gap-y-1.5 sm:gap-y-2 sm:gap-2 flex-wrap">
        <div
            v-for="service of serviceList"
            :key="service.id"
            class="b-btn"
            :class="service.classes"

        >
          {{ service.txt }}
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>
      </div>
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
      serviceList: [
        {
          id: 1,
          txt: "Оценка бизнеса",
          // classes: "z-30 bg-red-800/55  md:hover:bg-red-800/70",
          classes: "",
        },
        {
          id: 2,
          txt: "Финансовый консалтинг",
          // classes: "z-20 bg-cyan-800/55  md:hover:bg-cyan-800/70",
          classes: "",
        },
        {
          id: 3,
          txt: "Строительный консалтинг",
          // classes: "z-10 bg-emerald-800/55  md:hover:bg-emerald-800/70",
          classes: "",
        }
      ],
      infoBannerContentCards,
    }
  }

}
</script>

<style scoped>

.txt-shadow {
  text-shadow: 1px 1px 8px rgb(0, 0, 0, 0.95);
}

.banner-container {
  @apply relative w-full flex flex-col justify-center items-center h-auto lg:min-h-[calc(100vh)] rounded-3xl;
  @apply px-[40px] sm:px-[8vw] md:px-[15vw] lg:px-[12vw];
  @apply pt-28 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.4) top / cover no-repeat fixed url("../../assets/background/everest-1920.jpg");
}

.banner-title {
  @apply text-center font-extrabold text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl;
}

.banner-subtitle {
  @apply text-center font-extrabold text-gray-100 text-lg md:text-lg lg:text-xl xl:text-2xl;
}

.b-btn {
  @apply select-none cursor-pointer text-center flex flex-col justify-center;
  @apply h-[46px] w-full max-w-[320px] sm:h-auto sm:w-auto sm:py-4;
  @apply sm:block px-4 py-0.5 lg:px-3.5 lg:py-2;
  @apply text-base lg:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply hover:bg-red-950/85;
  @apply bg-gray-50/10 border md:border border-gray-50/25;
  @apply text-gray-100 rounded-lg backdrop-blur-md;
}

</style>
