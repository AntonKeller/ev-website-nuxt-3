<template>
  <div class="experience-container">
    <div class="content-wrapper">

      <img
          class="panel-image"
          :src="getDocImg()"
          alt="no img"
          v-motion
          :initial="{opacity: 0, translateX: -50}"
          :visible="{opacity: 1, translateX: 0}"
          :delay="650"
      >

      <div class="text-container">
        <div
            class="px-2.5 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold"
            v-motion
            :initial="{ opacity: 0}"
            :visible="{opacity: 1}"
            :delay="250"
        >Our experience</div>

        <div
            class="pl-2.5 text-base lg:text-lg border-b-2 border-b-gray-700 pb-3.5 mt-3.5"
            v-motion
            :initial="{ opacity: 0}"
            :visible="{opacity: 1}"
            :delay="450"
        >We’re a dynamic group of individuals who are passionate about what we...</div>

        <div
            v-motion
            :initial="{ opacity: 0}"
            :visible="{opacity: 1}"
            :delay="650">
          <p class="px-2.5 mt-6">
            Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
            «Крупнейшие компании России» (рейтинг Эксперт-400),
            совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
          </p>
        </div>
        <div
            v-motion
            :initial="{ opacity: 0}"
            :visible="{opacity: 1}"
            :delay="850">
          <p class="border-4 border-gray-200 bg-gray-50 p-2.5 rounded-lg mt-4">
            Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт
            выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
            международными аудиторскими компаниями.
          </p>
        </div>
        <div
            v-motion
            :initial="{ opacity: 0}"
            :visible="{opacity: 1}"
            :delay="1050">
          <p class="px-2.5 mt-4">
            Специалисты Компании EverestConsulting являются членами
            таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков
            (СМАО), Восточно-Европейский союз экспертов (OSV), а также
            получили квалификации Американского общества оценщиков(ASA).
          </p>
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

    getDocImg() {
      return new URL(`../../assets/images/documents.png`, import.meta.url).href
    },

    getImageURL(name) {
      return new URL(`../../assets/experience_logotypes/${name}.png`, import.meta.url).href
    }

  },

  data() {
    return {
      experienceGroup,
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

.experience-container {

  @apply text-gray-700;
  @apply flex justify-center items-center;
  @apply border-x-8 border-gray-950;
  background: top / cover no-repeat fixed url("../../assets/background/bg-lines-color.png");

  .content-wrapper {
    @apply flex flex-col md:flex-row justify-center items-center;
    @apply w-[82vw];
    @apply py-6 sm:py-10 lg:py-14;
  }

  .chips {
    @apply gap-x-4 text-center md:text-left space-y-2;
  }

  .panel-image {
    @apply w-[170px] h-[145px];
    @apply sm:w-[212.5px] sm:h-[181.25px];
    @apply md:w-[212.5px] md:h-[181.25px];
    @apply lg:w-[340px] lg:h-[290px];
  }

  .text-container {
    @apply mt-4 sm:mt-6 text-center md:text-left md:ml-14;
    @apply w-full max-w-[760px];
    @apply lg:h-full;
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

  .slider {
    @apply md:hidden max-w-full text-center bg-gray-900 rounded-xl mt-6;
    @apply border-4 border-gray-300;
    @apply min-h-[170px] sm:min-h-[190px];
  }
}

</style>
