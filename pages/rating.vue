<template>
  <div>
    <div class="rating-container">

      <div class="text-gray-300 w-full max-w-[980px] bg-sky-950/75 px-6 py-4 rounded-lg font-sans mt-6 lg:mt-12">
        <span class="font-bold text-sky-500">Наша цель</span> – оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового,
        управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
        значительным опытом выполнения подобных проектов как в России, так и за рубежом.
      </div>

      <div class="text-gray-300 w-full max-w-[980px] bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
        <span class="font-bold text-emerald-500">Наши специалисты</span>
        успешно осуществили и завершили проекты для многих (более 50) компаний из рейтинга «Крупнейшие
        компании России» (рейтинг Эксперт-400).
      </div>

      <div class="z-10 flex flex-col gap-y-4 rounded-xl mt-2">

        <div class="px-6 flex justify-center items-center gap-x-8">
          <i @click="prevYear" :class="{'text-sm text-sky-500/40': inProcess || activeYear <= 2011}"
             class="select-none cursor-pointer text-sky-500 ml-4 pi pi-caret-left h-fit"></i>
          <div class="text-sky-500 font-bold">{{ activeYear }} г</div>
          <i @click="nextYear" :class="{'text-sm text-sky-500/40': inProcess || activeYear >= 2021}"
             class="select-none cursor-pointer text-sky-500 ml-4 pi pi-caret-right h-fit"></i>
        </div>

        <div class="flex flex-col gap-y-2">
          <div
              v-for="rating of currentRating"
              class=" py-1.5 px-4 lg:py-1.5 lg:px-2.5 bg-sky-950/75 gap-y-1 rounded-xl lg:rounded-full flex flex-col lg:flex-row lg:items-center lg:justify-end"
          >
            <div class="text-sm text-gray-300 font-medium text-center lg:text-right font-sans">{{ rating.title }}</div>
            <div
                class="relative ml-2 md:min-w-[240px] lg:max-w-[360px] bg-sky-900 rounded-md lg:rounded-full overflow-hidden">
              <div class="w-full h-fit bg-gradient-to-r from-blue-800 to-sky-700 rounded-md lg:rounded-full"
                   :style="{width: rating.value * 2 + '%'}">
                <div class="opacity-0 text-xs">-1</div>
              </div>
              <div class="absolute right-0 top-0 mt-[1px] mr-3 text-xs text-sky-300 font-medium">
                {{ rating.value }}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
        <div class="w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
          <i class="text-xl select-none cursor-pointer text-sky-500 ml-8 mr-2 pi pi-info-circle h-fit"></i>
          Детальное понимание требований к оценочным и консалтинговым продуктам со стороны аудиторских компаний,
          коммерческих и инвестиционных банков, страховых компаний.
        </div>
        <div class="w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
          <i class="text-xl select-none cursor-pointer text-sky-500 ml-8 mr-2 pi pi-pencil h-fit"></i>
          Эффективное планирование задач в рамках проектов благодаря значительному опыту сотрудников команды.
        </div>
        <div class="w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
          <i class="text-xl select-none cursor-pointer text-sky-500 ml-8 mr-2 pi pi-database h-fit"></i>
          Возможность выполнения проектов в сжатые сроки благодаря существующим наработкам и базе знаний.
        </div>
        <div class="w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
          <i class="text-xl select-none cursor-pointer text-sky-500 ml-8 mr-2 pi pi-check-circle h-fit"></i>
          Оптимальное соотношение «цена-качество».
        </div>
        <div class="w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg font-sans">
          <i class="text-xl select-none cursor-pointer text-sky-500 ml-8 mr-2 pi pi-users h-fit"></i>
          Возможность привлечения к выполнению проектов специалистов, обладающих международными квалификациями и опытом в
          различных областях знаний.
        </div>
      </div>
    </div>
    <evFooter/>
  </div>
</template>

<script>
import {ratingConfig} from "~/configs/ratingConfig.ts"
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import evFooter from "../components/widgets/ev-footer";

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
    Carousel, Slide, Pagination, Navigation,
    evFooter,
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
            Math.floor(600 + Math.random() * 200)
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
  @apply flex flex-col items-center gap-y-2 md:gap-y-4;
  @apply bg-cyan-900/60 gap-x-4 min-h-[100vh];
  @apply px-3 lg:px-16;
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
