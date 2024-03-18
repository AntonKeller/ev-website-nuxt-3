<template>
  <div class="main-container">

    <div class="text-gray-300 flex flex-col gap-y-2 sm:gap-y-4 md:gap-y-6 border-b border-b-gray-200/10 pb-4 mb-4">
      <div v-for="title of titles"
           class="text-left bg-gray-100 p-4 text-gray-900  min-w-[280px] max-w-[420px]">
        {{ title.value }}
      </div>
    </div>

    <div class="w-6/12">
      <carousel
          :items-to-show="1"
          class="w-full"
          autoplay="6000"
          wrapAround="true"
          pauseAutoplayOnHover="true"
          dir="rtl"
      >
        <slide
            v-for="e of getRatingYears()"
            @click="setActiveYear(e.year)"
            :key="e.id"
            class="flex flex-col h-full"
        >
          <div class="text-lg text-gray-200 font-bold bg-red-800 w-full py-2">
            Рейтинг {{ e.year }}
          </div>
          <section class="w-full flex flex-wrap items-stretch justify-center gap-6 mt-12">
            <div
                class="ratingElement"
                v-for="description of getInfoByYear(e.year)"
            >
              <div class="flex justify-center bg-red-800 text-gray-100 items-center text-center w-14 h-14 font-extrabold text-lg rounded-t-sm rounded-b-3xl border-4 border-gray-200">
                <p>{{ description.value }}</p>
              </div>
              <p>{{ description.title }}</p>
            </div>
          </section>
        </slide>
        <template #addons>
<!--          <Navigation />-->
          <Pagination />
        </template>
      </carousel>
    </div>

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
import {rating} from "~/configs/ratingConfig.ts"
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
      rating,
      activeYear: 2021,
      titles: [
        {
          id: 1,
          value: "Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие\n" +
              "компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб."
        },
        {
          id: 2,
          value: "Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а\n" +
              "также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием\n" +
              "результатов с крупнейшими международными аудиторскими компаниями."
        },
        {
          id: 3,
          value: "Специалисты Компании Everest Consulting являются членами таких профессиональных организаций,\n" +
              "как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов\n" +
              "(OSV), а также получили квалификации Американского общества оценщиков (ASA)."
        },
      ],
    }
  },

  mounted() {
    // this.activeYear = 2021;
  },

  methods: {

    getRatingYears() {
      return this.rating.map(el => {
        return {
          id: el.id,
          year: el.year,
        }
      })
    },

    getInfoByYear(year) {
      return this.rating.find(e => e.year === year)?.infoByYear || null;
    },

    getRatingElements() {
      return this.rating.find(e => e.year === this.activeYear)?.infoByYear || null;
    },

    setActiveYear(id) {
      this.activeYear = id;
    }
  },
}
</script>

<style lang="scss" scoped>

.main-container {
  @apply bg-sky-950 gap-x-4;
  @apply pt-24 pb-12 sm:pt-28 lg:pt-32 px-16 lg:flex;
  //@apply px-4 sm:pl-[5vw] sm:pr-[10vw] md:pr-[10vw] lg:pr-[15vw] xl:pr-[30vw];
  //@apply bg-blend-multiply bg-sky-950;
  //background: top / cover no-repeat fixed url("/assets/background/bg-rgb-three-lines-2.png");

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
