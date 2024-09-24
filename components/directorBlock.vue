<template>
  <div class="directors-section">
    <div class="flex flex-col w-full sm:max-w-[920px]">

      <h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-2 md:mt-20 lg:mt-24">
        Руководство
      </h1>

      <h2 class="mt-2 text-base lg:text-lg font-light text-gray-200 duration-300 space-y-0.5">
        Безупречная репутация на рынке консультационных услуг в течение более 12 лет
      </h2>

      <div
          v-for="e of employees"
          :key="e.id"
          class="card-director duration-300 mt-1 sm:mt-4 lg:mt-6"
          v-motion
          :initial="{ opacity: 0, scale: 0.85}"
          :enter="{ opacity: 1, scale: 1}"
          :delay="e.id * 150"
      >
        <img class="card-image" :src="`/assets/avatars/${e.img}`" alt="no img"/>
        <p class="mt-0 text-gray-900 font-extrabold text-base lg:text-lg">{{ e.fullName }}</p>
        <p class="mt-0 text-gray-900/85 font-sans text-sm lg:text-base">{{ e.post }}</p>
        <p class="mt-0 md:mt-3 text-base text-gray-700">{{ e.text }}</p>
      </div>

      <h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-2 md:mt-20 lg:mt-24">
        Где мы находимся
      </h1>

      <h2 class="mt-2 text-base lg:text-lg font-light text-gray-200 duration-300 space-y-0.5">
        г. Москва, 3-я улица Ямского Поля, дом 2, корпус 7, подъезд 4
      </h2>

    </div>

    <iframe
        class="z-50 rounded-md md:rounded-sm w-full h-[350px] md:h-[600px] mb-2 md:mb-0 mt-2 md:mt-4 lg:mt-6"
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

  data: () => ({
    employees,
  })
}
</script>

<style scoped>

.directors-section {
  @apply bg-gray-900 min-h-[100vh] overflow-hidden;
  @apply flex flex-col justify-center items-center w-full;
  @apply px-2 sm:px-0 pt-2;
}

.directors-section::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  background: top / cover no-repeat fixed url("/assets/background/everest-420-blur.png");
}

.card-director {
  @apply bg-gray-50 border border-gray-600 rounded-sm py-2.5 px-3 lg:px-4 min-w-full max-w-[780px];
}

.card-image {
  @apply mb-2 xl:mb-0 sm:mr-2 float-left;
  @apply object-contain min-w-[90px] w-[70vw] max-w-[120px] min-h-[100px] h-[40vw] max-h-[120px];
}
</style>