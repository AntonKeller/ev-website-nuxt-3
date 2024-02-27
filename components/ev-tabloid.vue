<template>
  <div>

    <carousel
        :items-to-show="2.3"
        class="tabloid"
        :class="{hidden: !m1024}"
        transition="100"
        autoplay="4000"
        wrapAround
        mouseDrag
        pauseAutoplayOnHover
    >
      <slide
          v-for="slide of getSlides()"
          :key="slide.id"
          class="w-fit"
      >
        <div class="slide-content w-fit">
          <div class="slide-content--wrapper w-fit">
            <div class="slide-mark">everest</div>
            <div class="tabloid--title">{{ slide.title }}</div>
            <div class="tabloid--subtitle">{{ slide.subtitle }}</div>
            <div class="tabloid--description">{{ slide.text }}</div>
          </div>
        </div>
      </slide>
    </carousel>

  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import {getTabloidSlides} from "~/configs/tabloidSlides"

export default {

  name: "ev-tabloid",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data: () => ({
    p640: true,
    p1024: true,
    m1024: true,
    windowWidth: 0,
  }),

  methods: {

    getSlides: () => getTabloidSlides(),

  },

  created() {

    const onResize = () => {
      this.width = window.innerWidth;
      this.p640 = window.innerWidth <= 640;
      this.p1024 = window.innerWidth > 640 && window.innerWidth <= 1024;
      this.m1024 = window.innerWidth > 1024;
    }

    onResize();

    window.addEventListener('resize', onResize);
  },

}
</script>

<style scoped>

.tabloid {
  @apply h-fit max-w-full mt-4 sm:mt-6 md:mt-8 lg:mt-8 gap-4;
}

.slide-content {
  @apply px-2 py-6;
}

.slide-content--wrapper {
  @apply relative;
  @apply px-6 sm:px-8 md:px-10 lg:px-10 xl:px-12;
  @apply py-3 sm:py-4 md:py-4 lg:py-4 xl:py-6;
  @apply backdrop-blur-2xl border border-gray-900 rounded-lg;
}

.slide-mark {
  @apply absolute;
  @apply right-[15px] -top-[8px] px-8 py-1 rounded-md text-center;
  @apply font-light;
  @apply border border-gray-900/40;
  @apply text-sm xl:text-base text-gray-200 bg-red-800;
}

.tabloid--title {
  @apply font-extrabold text-gray-200 text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl;
}

.tabloid--subtitle {
  @apply mt-4 font-extrabold text-red-500/80 text-lg md:text-lg lg:text-lg xl:text-xl;
}

.tabloid--description {
  @apply mt-1.5 font-light text-gray-300 text-sm xl:text-base;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply mt-6 px-8 py-1;
  @apply flex items-center;
  @apply text-base md:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-300 border-2 border-gray-200/20 rounded-2xl backdrop-blur-sm;
  @apply hover:border-gray-900/70;
}
</style>
