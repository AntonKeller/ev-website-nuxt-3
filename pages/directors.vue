<template>
  <div>
    <div class="directors-section">

      <div class="flex flex-col w-full lg:w-fit">
        <div class="manager-section-title">
          <h1 class="text-gray-100 text-lg lg:text-2xl font-bold duration-300">Руководство</h1>
          <h2 class="text-base lg:text-lg font-light text-gray-200 duration-300 space-y-0.5">
            Безупречная репутация на рынке консультационных услуг в течение более 12 лет
          </h2>
        </div>

        <div class="flex flex-col justify-center gap-1 lg:gap-1 duration-300">
          <div
              v-for="e of employees"
              :key="e.id"
              class="card-director duration-300"
              v-motion
              :initial="{ opacity: 0, scale: 0.85}"
              :enter="{ opacity: 1, scale: 1}"
              :delay="e.id * 150"
          >
            <img class="card-image" :src="`/assets/avatars/${e.img}`" alt="no img"/>
            <p class="text-gray-900 font-extrabold text-base lg:text-lg">{{ e.fullName }}</p>
            <p class="text-red-900/85 font-medium text-sm lg:text-base">{{ e.post }}</p>
            <p class="text-base text-gray-700">
              {{ e.text }}
            </p>
          </div>
        </div>
      </div>

      <div class="z-10 flex flex-col w-full lg:w-fit">
        <div class="manager-section-title">
          <h1 class="text-gray-100 text-lg lg:text-2xl font-bold duration-300">Наш офис</h1>
          <h2 class="text-base lg:text-lg font-light text-gray-200 duration-300 space-y-0.5">
            Наш офис находится по адресу:
            <span class="rounded-lg px-1.5 py-0.5 bg-gray-200/15">Москва, 3-я улица Ямского Поля, 2к7, подъезд 4</span>
          </h2>
        </div>

        <iframe
            class="rounded-md lg:max-w-[750px] h-[450px]"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafd8686d54c13c498b1a79c66c5a343453e1df041ce335aebf229ee1ed8e9fa2&amp;source=constructor"
            frameborder="0"
        />
      </div>

    </div>
    <evFooter/>
  </div>
</template>

<script>
import {employees} from "../configs/employees";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import evFooter from "~/components/widgets/ev-footer";

export default {

  name: "ev-managers",

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
  @apply bg-gray-900 min-h-[100vh] overflow-hidden flex;
  @apply flex flex-col lg:flex-row gap-y-2 sm:gap-y-8 lg:gap-x-8 xl:gap-x-16 items-center lg:items-start justify-center;
  @apply px-2 sm:px-4 sm:px-4 md:px-8 lg:px-16 pt-24 md:pt-28 pb-2;
}

.directors-section::before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  background: top / cover no-repeat fixed url("/assets/background/everest-420-blur.png");
}

.manager-section-title {
  @apply w-full text-center sm:text-left pb-4 lg:pb-10 space-y-1.5 lg:space-y-2.5;
}

.card-director {
  @apply bg-gray-300 border border-gray-600 rounded-lg py-2.5 px-3 lg:px-4;
  @apply min-w-full max-w-[780px];
}

.card-image {
  @apply mb-2 xl:mb-0 sm:mr-2 float-left;
  @apply object-contain min-w-[90px] w-[70vw] max-w-[120px] min-h-[100px] h-[40vw] max-h-[120px];
}
</style>
