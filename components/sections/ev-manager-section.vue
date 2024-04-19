<template>
  <div class="directors-section">

    <div class="manager-section-title">
      <h2
          class="text-gray-100 text-lg lg:text-2xl font-bold duration-300"
          v-motion-fade-visible
      >
        Состав директоров
      </h2>
      <div
          class="text-base lg:text-lg font-light text-gray-700 duration-300 space-y-0.5 px-6 md:px-0"
          v-motion-fade-visible
      >
        <div class="text-gray-200">Безупречная репутация на рынке консультационных услуг в течение более 12 лет</div>
      </div>
    </div>

    <div v-motion-fade-visible class="justify-center flex flex-col gap-y-2 duration-300">
      <div v-for="e of employees" :key="e.id" class="card-director duration-150">
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
</template>

<script>
import {employees} from "../../configs/employees";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default {

  name: "ev-managers",

  components: {
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
  @apply bg-gradient-to-r from-red-900 to-red-800 border border-red-950;
  @apply flex flex-col items-center lg:flex-row lg:items-start justify-center gap-x-8 lg:gap-x-16 rounded-md mt-2 md:mt-4;
  @apply px-1 py-1 sm:p-4 lg:py-8;
}

.manager-section-title {
  @apply w-full lg:w-fit;
  @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
  @apply text-center md:text-left;
  @apply space-y-4;
}

.card-director {
  @apply bg-gray-200 border border-gray-400 rounded-lg py-4 px-3 lg:px-6;
  @apply min-w-fit md:min-w-[550px] max-w-[780px];
  @apply flex flex-col items-center justify-start;
}

.card-img-desc-wrapper {
  @apply flex flex-col items-center justify-center;
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
  @apply text-sm text-center border-t border-t-gray-300/75;
  @apply mt-3 sm:mt-0 pt-2 sm:pt-4 text-gray-700;
  @apply lg:text-base;
}

</style>
