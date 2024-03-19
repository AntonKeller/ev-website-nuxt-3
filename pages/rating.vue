<template>
  <div class="main-container">

    <!--    <div>-->
    <!--      <div-->
    <!--          v-for="title of  getTitles()"-->
    <!--          :key="title.key"-->
    <!--      >-->
    <!--        {{ title.text }}-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    {{getTitles()}}-->

    <div class="z-10 flex flex-col gap-y-4">

      <div class="px-6 flex justify-center items-center gap-x-8">
        <i @click="prevYear" class="select-none cursor-pointer text-sky-300 ml-4 pi pi-caret-left h-fit"></i>
        <div class="text-sky-300">{{ activeYear }} г</div>
        <i @click="nextYear" class="select-none cursor-pointer text-sky-300 ml-4 pi pi-caret-right h-fit"></i>
      </div>

      <div class="flex flex-col gap-y-1">
        <div
            v-for="rating of  getCountByYear()"
            class="py-1.5 px-2.5 bg-sky-950 rounded-full flex items-center justify-end"
        >
          <div class="text-sm text-gray-300 font-medium">{{ rating.title }}</div>
          <div class="relative ml-2 min-w-[280px] max-w-[360px] bg-sky-900 rounded-full overflow-hidden">
            <div class="w-full h-fit bg-sky-700 border border-sky-800 shadow-lg rounded-full"
                 :style="{width: rating.value + '%'}">
              <div class="opacity-0 text-xs">-1</div>
            </div>
            <div class="absolute right-0 top-0 mt-[2.36px] mr-3 text-xs text-sky-300 font-medium">
              {{ rating.value }} шт
            </div>
          </div>
        </div>
      </div>

    </div>

    <!--      <div class="text-gray-300 flex flex-col gap-y-2 sm:gap-y-4 md:gap-y-6 border-b border-b-gray-200/10 pb-4 mb-4">-->
    <!--        <div v-for="title of titles"-->
    <!--             class="text-left bg-gray-100 p-4 text-gray-900  min-w-[280px] max-w-[420px]">-->
    <!--          {{ title.value }}-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="w-12/12 max-w-[920px]">-->
    <!--        <carousel-->
    <!--            :items-to-show="1"-->
    <!--            class="w-full"-->
    <!--            autoplay="6000"-->
    <!--            wrapAround="true"-->
    <!--            pauseAutoplayOnHover="true"-->
    <!--            dir="rtl"-->
    <!--        >-->
    <!--          <slide-->
    <!--              v-for="e of getRatingYears()"-->
    <!--              @click="setActiveYear(e.year)"-->
    <!--              :key="e.id"-->
    <!--              class="flex flex-col h-full"-->
    <!--          >-->
    <!--            <div class="text-lg text-gray-200 font-bold bg-red-800 w-full py-2">-->
    <!--              Рейтинг {{ e.year }}-->
    <!--            </div>-->
    <!--            <section class="w-full flex flex-wrap items-stretch justify-center gap-6 mt-8">-->
    <!--              <div-->
    <!--                  class="ratingElement"-->
    <!--                  v-for="description of getInfoByYear(e.year)"-->
    <!--              >-->
    <!--                <div-->
    <!--                    class="flex justify-center bg-red-800 text-gray-100 items-center text-center w-10 h-10 font-extrabold text-base rounded-t-sm rounded-b-3xl border-4 border-gray-200">-->
    <!--                  <p>{{ description.value }}</p>-->
    <!--                </div>-->
    <!--                <p>{{ description.title }}</p>-->
    <!--              </div>-->
    <!--            </section>-->
    <!--          </slide>-->
    <!--          <template #addons>-->
    <!--            &lt;!&ndash;          <Navigation />&ndash;&gt;-->
    <!--            <Pagination/>-->
    <!--          </template>-->
    <!--        </carousel>-->
    <!--      </div>-->

    <!--    <div class="preview-container">-->
    <!--      <h1 class="rating-preview&#45;&#45;title">Рейтинги и достижения</h1>-->
    <!--      <p-->
    <!--          class="rating-preview&#45;&#45;description"-->
    <!--          v-for="element of title.descriptions"-->
    <!--          :key="element.id"-->
    <!--      >{{ element.value }}</p>-->
    <!--    </div>-->

    <!--    <carousel-->
    <!--        :items-to-show="1"-->
    <!--        class="rating-button-slider"-->
    <!--        autoplay="6000"-->
    <!--        wrapAround="true"-->
    <!--        pauseAutoplayOnHover="true"-->
    <!--        dir="rtl"-->
    <!--    >-->
    <!--      <slide-->
    <!--          v-for="e of getRatingYears()"-->
    <!--          @click="setActiveYear(e.year)"-->
    <!--          :key="e.id"-->
    <!--          class="rating-button-slide"-->
    <!--      >-->
    <!--        <span class="block font-extralight text-gray-800"> < </span>-->
    <!--        <h3 class="block">{{ e.year }}</h3>-->
    <!--        <span class="block font-extralight text-gray-800"> > </span>-->
    <!--      </slide>-->
    <!--    </carousel>-->


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
      nums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      number: 0,
      ratingConfig: ratingConfig,
      activeYear: 2021,
    }
  },

  mounted() {
    this.nums.forEach((e, eI) => {
      const max = Math.floor(15 + Math.random() * 85);
      const time = Math.floor(200 + Math.random() * 1000);
      this.outNum(max, eI, time);
    });
  },

  methods: {

    getRatingByYear(year) {
      console.log("this.ratingConfig.find(e => e.year === year)?.infoByYear", this.ratingConfig.find(e => e.year === year)?.infoByYear)
      return this.ratingConfig.find(e => e.year === year)?.infoByYear;
    },

    getCountByYear() {
      return this.ratingConfig
          ?.find(rElement => rElement.year === this.activeYear)?.infoByYear
          ?.map(e => ({title: e.title, value: e.value}));

      // this.ratingConfig.forEach(rElement => {
      //   rElement.infoByYear.forEach(e => {
      //     console.log("e.title:", e.title);
      //     console.log("e.value:", e.value);
      //   })
      // });


      //
      // console.log("active year: ", year, "title text:", titleText);
      // console.log("this.ratingConfig", this.ratingConfig)
      //
      // let foundYear = this.ratingConfig.find(e => e.year === year);
      // if (foundYear) console.log("Найден год")
      //
      // let infoByYear = foundYear?.infoByYear.filter(e => e.title === titleText);
      //
      // if (infoByYear) console.log("Найдено описание", "infoByYear.length:", infoByYear.length);
      //
      // console.log("Значение:", infoByYear)

      // return Number(infoByYear.value) || 1;
    },

    outNum(num, index, time) {
      const step = 1;
      this.nums[index] = 0;
      let t = Math.round(time / (num / step));
      let interval = setInterval(() => {
        this.nums[index] = this.nums[index] + step;
        if (this.nums[index] == num) {
          clearInterval(interval);
        }
      }, t);
    },

    prevYear() {
      this.activeYear -= 1;
    },

    nextYear() {
      this.activeYear += 1;
    },

    getTitles() {

      let hashTitles = {}

      this.ratingConfig.forEach(rElement => {
        rElement.infoByYear.forEach(e => {
          if (!hashTitles.hasOwnProperty(e.title)) {
            console.log(e.value)
            console.log("e.title", e.title)
            hashTitles[e.title] = null;
          }

        })
      });

      return Object.keys(hashTitles).map((text, key) => ({text, key}));
    },

    getRatingYears() {
      return this.ratingConfig.map(el => {
        return {
          id: el.id,
          year: el.year,
        }
      })
    },

    getInfoByYear(year) {
      return this.ratingConfig.find(e => e.year === year)?.infoByYear || null;
    },

    getRatingElements() {
      return this.ratingConfig.find(e => e.year === this.activeYear)?.infoByYear || null;
    },

    setActiveYear(id) {
      this.activeYear = id;
    }
  },
}
</script>

<style lang="scss" scoped>

.main-container {
  @apply flex flex-col items-center gap-y-4;
  @apply bg-cyan-900/60 gap-x-4 min-h-[100vh];
  @apply pt-24 pb-12 sm:pt-28 lg:pt-32 px-16;

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

// Контейнер Preview контента
.preview-container {

  @apply backdrop-blur-lg border-2 border-gray-950/35 rounded-lg p-6;

  // Preview Заголовок
  .rating-preview--title {
    @apply bg-red-900 sm:bg-transparent py-1 sm:py-0 rounded-sm;
    @apply text-gray-200 sm:text-red-950 font-extrabold text-center sm:text-left;
    @apply text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl;
  }

  // Preview Описание к заголовку
  .rating-preview--description {
    @apply mt-2 sm:mt-4 p-[8vw] sm:p-0;
    @apply bg-gray-100 sm:bg-transparent rounded-sm;
    @apply text-gray-700 sm:text-gray-900;
    @apply text-center sm:text-left;
    @apply text-base md:text-lg;
  }
}

// Слайдер с кнопками (года)
.rating-button-slider {
  @apply w-full sm:max-w-[280px] h-fit mt-2 sm:mt-6;
  .rating-button-slide {
    @apply flex justify-evenly;
    @apply font-extrabold text-center text-gray-800 py-2 rounded-sm sm:rounded-md;
    @apply bg-gray-100 border-4 border-gray-200;
  }

}

.ratingElement {
  @apply w-[200px];
  @apply flex flex-col justify-start items-center gap-y-3;
  @apply text-center text-base text-gray-200;
}

.gradient-1 {
  @apply bg-gradient-to-r from-indigo-800/50 to-red-800/80;
}

.gradient-2 {
  @apply bg-gradient-to-r from-gray-100/50 to-red-800/80;
}

.animate-show-1 {
  animation: ani-show-from-right ease 0.65s;
}


@keyframes ani-show-from-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
}

@keyframes ani-show {
  from {
    opacity: 0;
  }
}

</style>
