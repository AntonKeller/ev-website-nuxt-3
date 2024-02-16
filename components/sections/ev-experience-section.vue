<template>
  <div class="experience-section">

    <div class="title">
      <div>
        <h2
            v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="250"
        >{{ customerTitle }}</h2>
      </div>
      <div>
        <p
            v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="500"
        >{{ customerDescription }}</p></div>
      <div class="chips">
        <ev-chip
            v-for="chip of chips"
            :text="chip.text"
            :theme="chip.theme"
            v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="750"
        />
      </div>
    </div>

    <div class="customer-section--content">
      <div class="info-block-wrapper">
        <div v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="1000">
          <p class="px-2">
            Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
            «Крупнейшие компании России» (рейтинг Эксперт-400),
            совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
          </p>
        </div>
        <div v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="1150">
          <p class="border-4 border-gray-200 bg-gray-50 p-2.5 rounded-xl">
            Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт
            выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
            международными аудиторскими компаниями.
          </p>
        </div>
        <div v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="1250">
          <p class="px-2">
            Специалисты Компании EverestConsulting являются членами
            таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков
            (СМАО), Восточно-Европейский союз экспертов (OSV), а также
            получили квалификации Американского общества оценщиков(ASA).
          </p>
        </div>
      </div>
    </div>

    <!--    https://vuejsexamples.com/a-customizable-carousel-slider-optimized-for-vue/    -->
    <!--    <Hooper class="slider" autoPlay playSpeed=4000 itemsToShow=1>-->
    <!--      <Slide v-for="element of experienceGroup" :key="element.id" class="flex flex-col justify-evenly">-->
    <!--        <img class="mx-auto w-full max-w-[14rem]"-->
    <!--             :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">-->
    <!--        <div class="flex flex-wrap justify-center gap-1 text-xs">-->
    <!--              <span-->
    <!--                class="px-2 py-0.5 rounded-xl font-medium border border-gray-700/60 bg-gray-100 backdrop-blur-sm text-gray-800"-->
    <!--                v-for="currService of element.services"-->
    <!--                :key="currService.id"-->
    <!--              >{{ currService.title }}</span>-->
    <!--        </div>-->
    <!--      </Slide>-->
    <!--    </Hooper>-->

  </div>
</template>

<script>

import evChip from "../../components/ev-chip";
import {experienceGroup} from "../../configs/experience";

export default {

  name: "ev-experience-section",

  components: {
    evChip,
  },

  methods: {

    getImageURL(name) {
      return new URL(`../../assets/experience_logotypes/${name}.png`, import.meta.url).href
    }

  },

  data() {
    return {
      experienceGroup,
      customerTitle: "Our experience",
      customerDescription: "We’re a dynamic group of individuals who are passionate about what we...",
      chips: [
        {text: "Международный опыт", theme: ""},
        {text: "Оценка", theme: "dark"},
        {text: "Оценка бизнеса", theme: ""},
        {text: "Оценка имущественных активов", theme: "dark"},
        {text: "Финансово-тухнический надзор", theme: "dark"},
        {text: "Технологическая экспертиза", theme: ""},
        {text: "Строительная экспертиза", theme: ""}
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.experience-section {
  @apply text-gray-700;
  @apply border-x-8 border-gray-100;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14 mt-4 sm:mt-6;
  @apply space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8;
  background: top / cover no-repeat fixed url("../../assets/background/bg-lines-color.png");

  & p, h2 {
    @apply text-center md:text-left;
  }

  & h2 {
    @apply text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold;
  }

  & p {
    @apply text-base lg:text-lg;
  }

  .title {
    @apply w-6/12 border-b border-b-gray-400/80;
    @apply pb-4 sm:pb-8 md:pb-8;
    @apply space-y-3 lg:space-y-5;
  }

  .chips {
    @apply gap-x-4 text-center md:text-left space-y-2;
  }

  .customer-section--content {
    @apply w-full flex justify-center items-center;
    @apply md:space-y-8 lg:space-y-0 lg:space-x-4;

    .info-block-wrapper {
      @apply space-y-[calc(3vw+8px)] sm:space-y-6 md:space-y-8 lg:space-y-10;
      @apply lg:w-[56vw] xl:w-[48vw] lg:max-w-[700px];
      @apply lg:h-full lg:pr-4;
    }

    .experience-box {
      @apply w-full overflow-y-scroll;
      @apply h-[40vh] lg:h-full;
      @apply hidden md:flex flex-wrap justify-around lg:justify-evenly items-stretch;
      @apply md:gap-3 lg:gap-2;

      .experience-element {
        @apply flex flex-col justify-around border-4 border-gray-300;
        @apply bg-gray-900 rounded-xl;
        @apply min-h-[215px];
        @apply md:w-[34vw] lg:w-[23.5vw] xl:w-[17.5vw] xl:max-w-[280px];

        &:hover {
          @apply scale-95 duration-100;
        }

        .experience-element--services {
          @apply flex flex-wrap justify-center gap-1;

          .service {
            @apply rounded-xl bg-gray-50 py-0.5 px-1.5;
            @apply text-gray-900 text-xs md:text-sm;
          }
        }
      }
    }
  }

  .slider {
    @apply md:hidden max-w-full text-center bg-gray-900 rounded-xl mt-6;
    @apply border-4 border-gray-300;
    @apply min-h-[170px] sm:min-h-[190px];
  }
}

</style>
