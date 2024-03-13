<template>
  <div class="managers-section">
    <div class="manager-section-title">
      <h2 class="text-lg lg:text-2xl font-bold">
        Состав директоров
      </h2>
      <p class="text-lg font-light">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best
        results for our clients.
      </p>
    </div>
    <div class="cards">
      <div v-for="employee of employees" :key="employee.id" class="card">
        <img class="manager-ava blur" :src="`/assets/avatars/${employee.img}.png`" alt="no img"/>
        <div class="card-description">
          <span class="text-gray-700 inline-block font-bold">{{ employee.fullName }}</span>
          <span class="text-red-700 inline-block font-medium">{{ employee.post }}</span>
          <span class="text-gray-500 inline-block font-light">{{ employee.area }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {employees} from "../../configs/employees";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';


export default {

  name: "ev-managers",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      employees,
    }
  },

  methods: {
    getImageURL: (name) => new URL(`../../assets/avatars/${name}.png`, import.meta.url).href
  }

}
</script>

<style scoped>

.managers-section {
  @apply w-full text-gray-700 relative overflow-hidden;
  @apply rounded-lg;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14;
  @apply mt-4 sm:mt-6 bg-gray-100 border border-gray-200;
}

.manager-section-title {
  @apply w-full border-b border-b-gray-200 text-gray-700;
  @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
  @apply text-center md:text-left;
  @apply space-y-3;
}

.cards {
  @apply flex flex-wrap justify-center items-stretch;
  @apply gap-x-6 gap-y-6 sm:gap-y-8 lg:gap-y-14 lg:gap-y-16;
  @apply py-4 lg:py-12 md:py-8 lg:py-10 xl:py-12;
}

.card {
  @apply w-full sm:w-[47%] md:w-[47.5%] lg:w-[31%] xl:w-[28vw];
  @apply flex flex-col xl:flex-row items-center justify-center;
}

.manager-ava {
  @apply mb-2 xl:mb-0 sm:mr-2;
  @apply object-contain min-w-[140px] w-[70vw] max-w-[185px] min-h-[140px] h-[70vw] max-h-[185px];
}

.card-description {
  @apply min-w-fit;
  @apply flex flex-col;
  @apply text-left text-base;
  @apply space-y-0.5;
}

</style>
