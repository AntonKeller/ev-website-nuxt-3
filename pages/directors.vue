<template>
  <div>
    <div class="directors-section">

      <div class="manager-section-title">
        <h2 class="text-gray-100 text-lg lg:text-2xl font-bold duration-300">
          Состав директоров
        </h2>
        <div class="text-base lg:text-lg font-light text-gray-700 duration-300 space-y-0.5 px-6 md:px-0">
          <div class="text-gray-200">Безупречная репутация на рынке консультационных услуг в течение более 12 лет</div>
        </div>
      </div>

      <div class="flex flex-col justify-center gap-1 lg:gap-1 duration-300">
        <div
            v-for="e of employees"
            :key="e.id"
            class="card-director duration-300"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :hovered="{ scale: 1.2 }"
            :delay="(1 + e.id) * 200"
            :duration="(1 + e.id) * 1200"
        >
          <div class="card-img-desc-wrapper">
            <img class="card-image" :src="`/assets/avatars/${e.img}`" alt="no img"/>
            <div class="card-img-desc">
              <div class="text-gray-900 font-extrabold">{{ e.fullName }}</div>
              <div class="text-gray-800 font-medium text-xs">{{ e.post }}</div>
            </div>
          </div>
          <div class="card-description">{{ e.text }}</div>
        </div>
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
      title: "Руководство",
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
  @apply bg-gradient-to-r from-red-950 to-red-900 border border-red-950 min-h-[100vh];
  @apply flex flex-col items-center justify-center;
  @apply px-1 pt-24 md:pt-28 pb-2;
}

.directors-section::before {
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

.manager-section-title {
  @apply w-full lg:w-fit;
  @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
  @apply text-center md:text-left;
  @apply space-y-4;
}

.card-director {
  @apply bg-gray-100 border border-gray-950 rounded-lg py-2.5 px-3 lg:px-4;
  @apply min-w-fit md:min-w-[550px] max-w-[780px];
  @apply flex flex-col items-center justify-start;
}

.card-img-desc-wrapper {
  @apply w-full flex flex-col items-center justify-start;
  @apply sm:flex-row;
}

.card-image {
  @apply mb-2 xl:mb-0 sm:mr-2;
  @apply object-contain min-w-[90px] w-[70vw] max-w-[120px] min-h-[100px] h-[40vw] max-h-[120px];
}

.card-img-desc {
  @apply min-w-fit;
  @apply flex flex-col ml-2 md:ml-6;
  @apply text-center sm:text-left text-base;
  @apply space-y-0.5;
}

.card-description {
  @apply text-sm text-left border-t border-t-gray-300/75;
  @apply mt-3 sm:mt-0 pt-2 text-gray-700;
  @apply lg:text-base;
}

</style>
