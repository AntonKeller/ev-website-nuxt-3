<template>
  <div class="rating-container">

<!--        <div>-->
<!--          <div-->
<!--              v-for="title of  getTitles()"-->
<!--              :key="title.key"-->
<!--          >-->
<!--            {{ title.text }}-->
<!--          </div>-->
<!--        </div>-->
<!--        {{getTitles()}}-->

    <div class="z-10 flex flex-col gap-y-4">

      <div class="px-6 flex justify-center items-center gap-x-8">
        <i @click="prevYear" :class="{'text-sky-300/20': inProcess || activeYear <= 2011}"
           class="select-none cursor-pointer text-sky-300 ml-4 pi pi-caret-left h-fit"></i>
        <div class="text-sky-300">{{ activeYear }} г</div>
        <i @click="nextYear" :class="{'text-sky-300/20': inProcess || activeYear >= 2021}"
           class="select-none cursor-pointer text-sky-300 ml-4 pi pi-caret-right h-fit"></i>
      </div>

      <div class="flex flex-col gap-y-2">
        <div
            v-for="rating of currentRating"
            class="py-1.5 px-4 lg:py-1.5 lg:px-2.5 bg-sky-950 gap-y-1 rounded-xl lg:rounded-full flex flex-col lg:flex-row lg:items-center lg:justify-end"
        >
          <div class="text-sm text-gray-300 font-medium text-center lg:text-right">{{ rating.title }}</div>
          <div class="relative ml-2 md:min-w-[240px] lg:max-w-[360px] bg-sky-900 rounded-md lg:rounded-full overflow-hidden">
            <div class="w-full h-fit bg-sky-700 border border-sky-800 shadow-lg rounded-md lg:rounded-full"
                 :style="{width: rating.value  + '%'}">
              <div class="opacity-0 text-xs">-1</div>
            </div>
            <div class="absolute right-0 top-0 mt-[2.36px] mr-3 text-xs text-sky-300 font-medium">
              {{ rating.value }} шт
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">Преимущества Everest Consulting</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">
      Наши специалисты успешно осуществили и завершили проекты для многих (более 50) компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400).
    </div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
    <div class="w-full max-w-[980px] min-h-[120px] bg-gray-900/15 px-6 py-4 rounde-lg">...</div>
  </div>
</template>

<script>
import {ratingConfig} from "~/configs/ratingConfig.ts"
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: "rating",

  head() {
    return {
      title: "Достижения / Рейтинг - компании",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "..........",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://evcons.ru/rating",
        },
      ],
    }
  },

  components: {
    Carousel, Slide, Pagination, Navigation
  },

  data() {
    return {
      number: 0,
      ratingConfig: ratingConfig,
      currentRating: [],
      activeYear: 2021,
      yearMax: null,
      yearMin: null,
      inProcess: false,
    }
  },

  mounted() {
    this.setYearMax();
    this.setRatingByYear();
  },

  methods: {

    setYearMax() {
      this.yearMax = this.ratingConfig.map(e => e.year).sort((a, b) => a < b ? 1 : -1)?.shift();
      this.yearMin = this.ratingConfig.map(e => e.year).sort((a, b) => a > b ? 1 : -1)?.shift();
    },

    setRatingByYear() {
      this.currentRating = this.ratingConfig
          ?.find(rElement => rElement.year === this.activeYear)?.infoByYear
          ?.map(e => ({title: e.title, value: e.value}));
      this.update();
    },

    update() {
      this.inProcess = true;
      this.currentRating.forEach((e, eI) => {
        this.outNum(
            e.value,
            eI,
            Math.floor(200 + Math.random() * 800)
        );
      });
    },

    outNum(num, index, time) {
      if (num > 0) {
        const step = 1;
        this.currentRating[index].value = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
          this.currentRating[index].value = this.currentRating[index].value + step;
          if (this.currentRating[index].value == num) {
            clearInterval(interval);
          }
        }, t);
      }
      this.updateStatus();
    },

    updateStatus() {
      let timeout = setTimeout(() => {
        this.inProcess = false;
        clearInterval(timeout);
      }, 1200)
    },

    prevYear() {
      if (!this.inProcess && this.activeYear > 2011) {
        this.activeYear -= 1;
        this.setRatingByYear();
      }
    },

    nextYear() {
      if (!this.inProcess && this.activeYear < 2021) {
        this.activeYear += 1;
        this.setRatingByYear();
      }
    },

  },
}
</script>

<style lang="scss" scoped>
.rating-container {
  @apply overflow-y-scroll;
  @apply flex flex-col items-center gap-y-4;
  @apply bg-cyan-900/60 gap-x-4 min-h-[100vh] max-h-[100vh];
  @apply px-2 lg:px-16;
  @apply pt-24 pb-12 sm:pt-28 lg:pt-32;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(8px);
    opacity: 0.15;
    background: top / cover no-repeat fixed url("/assets/background/everest-420.jpg");
  }

  &::-webkit-scrollbar {
    width: 0;
    visibility: hidden;
  }
}
</style>
