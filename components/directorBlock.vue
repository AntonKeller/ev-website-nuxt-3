<template>
  <div class="directors-section relative">

    <div class="z-10 flex flex-col w-full sm:max-w-[920px]">

      <h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-2 md:mt-20 lg:mt-24">
        Руководство
        <div class=" mt-0.5 sm:mt-3 h-0.5 sm:h-1 w-[150px] translate-x-[0] bg-red-600/95"></div>
      </h1>

      <h2 class="mb-1 mt-1 sm:mb-4 text-sm lg:text-lg text-gray-200 duration-300 space-y-0.5">
        Безупречная репутация на рынке консультационных услуг в течение
        <span class="text-lg ld:text-3xl text-blue-500/95 font-semibold md:ml-1 text-nowrap">27 лет</span>
      </h2>

      <div
          v-for="e of employees"
          :key="e.id"
          class="card-director z-10 duration-300 mt-2 sm:mt-4 lg:mt-6"
          v-motion
          :initial="{ opacity: 0, translateX: -30 }"
          :visible="{ opacity: 1, translateX: 0 }"
          :delay="e.id * 150"
      >
        <img class="card-image" :src="`/assets/avatars/${e.img}`" alt="no img"/>
        <p class="mt-0 text-gray-900 font-extrabold text-sm text-base lg:text-lg">{{ e.fullName }}</p>
        <p class="mt-0 text-gray-900/85 font-sans underline text-sm lg:text-base">{{ e.post }}</p>
        <p class="mt-2 md:mt-3 text-sm sm:text-base text-gray-700">{{ e.text }}</p>
      </div>

      <h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-4 md:mt-20 lg:mt-24">
        Где мы находимся
      </h1>

      <h2 class="mt-1 text-sm lg:text-lg text-gray-200 duration-300 space-y-0.5">
        г. Москва, 3-я улица Ямского Поля, дом 2, корпус 7, подъезд 4
      </h2>

    </div>

    <iframe
        class="z-10 rounded-sm md:rounded-sm w-full h-[350px] md:h-[600px] mb-2 md:mb-0 mt-2 md:mt-4 lg:mt-6"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafd8686d54c13c498b1a79c66c5a343453e1df041ce335aebf229ee1ed8e9fa2&amp;source=constructor"
    />

  </div>
</template>

<script>
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import {employees} from "../configs/employees";
import evFooter from "~/components/widgets/ev-footer";
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "directorBlock",

  head() {
    return {
      title: "О нас",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Алексей Журавлев. Генеральный директор. Роман Карпов. Директор.  Директор. РЖД, РОСАТОМ, АвтоВАЗ, РАО ЕЭС, Банк ВТБ, Объединенные кондитеры РЖД, КАМАЗ, АвтоВАЗ, РУСАЛ, Банк ВТБ, СОГАЗ, РАО ЕЭС, ВЭБ Правительство РФ",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://evcons.ru/directors",
        },
      ],
    }
  },

  components: {
    evFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      employees,
    }
  }
}
</script>

<style scoped>

.directors-section {
  @apply bg-gray-900 min-h-[100vh] overflow-hidden;
  @apply flex flex-col justify-center items-center w-full;
  @apply px-4 md:px-6 py-2;
}

.directors-section::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  animation-duration: 2s;
  animation-name: showBanner;
  @apply z-10  bg-violet-950/70 bg-blend-multiply bg-center bg-fixed bg-cover bg-[url("/assets/background/scale_650.png")];
}

.card-director {
  @apply bg-gray-50 rounded-md border-2 border-gray-950 py-6 px-3 lg:px-6 min-w-full max-w-[780px];
}

.card-image {
  @apply mb-2 xl:mb-0 sm:mr-2 float-left;
  @apply object-contain min-w-[90px] w-[70vw] max-w-[120px] min-h-[100px] h-[40vw] max-h-[120px];
}
</style>