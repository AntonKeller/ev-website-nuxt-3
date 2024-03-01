<template>
  <div class="experience-container">
    <div class="content-wrapper">

      <div class="text-container">
        <div
            class="text-gray-100 px-2.5 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold py-2 px-4 bg-gray-800 rounded-2xl max-w-fit"
            v-motion
            :initial="{ opacity: 0}"
            :enter="{opacity: 1}"
            :delay="250"
        >О компании
        </div>

        <div
            class="ml-2.5 text-base lg:text-lg border-b-2 border-b-gray-800/10 pb-3.5 mt-3.5 font-bold font-sans"
            v-motion
            :initial="{ opacity: 0}"
            :enter="{opacity: 1}"
            :delay="450"
        >We’re a dynamic group of individuals who are passionate about what we...
        </div>

        <div
            v-motion
            :initial="{ opacity: 0}"
            :enter="{opacity: 1}"
            :delay="450">
          <p class="ml-2.5 mt-6 font-sans">
            Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
            «Крупнейшие компании России» (рейтинг Эксперт-400),
            совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
          </p>
        </div>

        <div
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            :delay="650">
          <p class="text-gray-50 bg-red-950/80 rounded ml-2 p-3  mt-6 font-sans">
            Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт
            выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
            международными аудиторскими компаниями.
          </p>
        </div>
        <div
            v-motion
            :initial="{ opacity: 0}"
            :enter="{opacity: 1}"
            :delay="850">
          <p class="ml-2.5 mt-4">
            Специалисты Компании EverestConsulting являются членами
            таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков
            (СМАО), Восточно-Европейский союз экспертов (OSV), а также
            получили квалификации Американского общества оценщиков(ASA).
          </p>
        </div>
      </div>

      <div
          class="md:hidden text-gray-600 px-2 text-lg font-bold py-1 px-4 bg-gray-300 rounded-3xl max-w-full"
          v-motion
          :initial="{ opacity: 0}"
          :enter="{opacity: 1}"
          :delay="250"
      >О компании
      </div>

      <div class="md:hidden bg-gray-200/75 rounded-2xl p-4 mt-3.5">
        <carousel
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            :delay="250"
            :items-to-show="1"
            autoplay="4000"
            wrapAround="true"
            mouseDrag="true"
            pauseAutoplayOnHover="true"
        >
          <slide v-for="card of cards" :key="card.id">
            <p class="text-gray-600">{{card.text}}</p>
          </slide>
          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>

    </div>
  </div>
</template>

<script>

import {companies} from "../../configs/experience";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {

  name: "ev-experience-section",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
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
      companies,
      chips: [
        {text: "Международный опыт", theme: ""},
        {text: "Оценка", theme: "dark"},
        {text: "Оценка бизнеса", theme: ""},
        {text: "Оценка имущественных активов", theme: "dark"},
        {text: "Финансово-тухнический надзор", theme: "dark"},
        {text: "Технологическая экспертиза", theme: ""},
        {text: "Строительная экспертиза", theme: ""}
      ],
      cards: [
        {
          id: 1,
          text: "Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.",
        },
        {
          id: 2,
          text: "Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями."
        },
        {
          id: 2,
          text: "Специалисты Компании EverestConsulting являются членами таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков(ASA)."
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.experience-container {
  @apply bg-gradient-to-t from-gray-50;
  @apply relative text-gray-700 md:h-auto lg:min-h-[80vh];
  @apply flex justify-center items-center;
}


.content-wrapper {
  @apply flex flex-col md:flex-row justify-center items-center py-16;
  @apply w-[82vw];
  @apply py-6 sm:py-10 lg:py-14;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(8px);
    opacity: 0.15;
    background: rgba(103, 99, 99, 0.4) top / cover no-repeat fixed url("../../assets/background/everest-420.jpg");
  }
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
  @apply mt-4 sm:mt-6 text-center md:text-left hidden md:block;
  @apply w-full max-w-[760px] xl:max-w-[960px];
  @apply lg:h-full;
}

.experience-box {
  @apply w-full overflow-y-scroll;
  @apply h-[40vh] lg:h-full;
  @apply hidden md:flex flex-wrap justify-around lg:justify-evenly items-stretch;
  @apply md:gap-3 lg:gap-2;
}

.experience-element {
  @apply flex flex-col justify-around border-4 border-gray-300;
  @apply bg-gray-900 rounded-xl;
  @apply min-h-[215px];
  @apply md:w-[34vw] lg:w-[23.5vw] xl:w-[17.5vw] xl:max-w-[280px];
}

.experience-element:hover {
  @apply scale-95 duration-100;
}

.experience-element--services {
  @apply flex flex-wrap justify-center gap-1;
}

.service {
  @apply rounded-xl bg-gray-50 py-0.5 px-1.5;
  @apply text-gray-900 text-xs md:text-sm;
}

.slider {
  @apply md:hidden max-w-full text-center bg-gray-900 rounded-xl mt-6;
  @apply border-4 border-gray-300;
  @apply min-h-[170px] sm:min-h-[190px];
}

</style>
