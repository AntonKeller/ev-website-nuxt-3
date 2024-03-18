<template>
  <div class="directors-section">

    <div class="manager-section-title">
      <h2 class="text-lg lg:text-2xl font-bold">
        Состав директоров
      </h2>
      <p class="text-base lg:text-lg font-light text-gray-700">
        Безупречная репутация на рынке консультационных услуг в течение более 12 лет
<!--        Эверест Консалтинг, лидер российского рынка оценки для целей МСФО.-->
<!--        Лидер по оценке для целей МСФО на протяжении 7 лет согласно данным рейтингового агентства Экперт РА.-->
<!--        Успешный многолетний опыт согласования результатов с ведущими аудиторскими компаниями, в том числе аудиторами большой четверки-->
      </p>
    </div>

    <div class="card-slider-wrapper">
      <carousel
          v-motion
          :initial="{opacity: 0}"
          :enter="{opacity: 1}"
          :delay="250"
          :items-to-show="1"
          class="card-slider"
          transition="100"
          autoplay="4000"
          wrapAround
          mouseDrag
          pauseAutoplayOnHover
      >
        <slide
            v-for="employee of employees"
            :key="employee.id"
            class="slide-card-director"
        >
          <div class="card-img-desc-wrapper">
            <img class="card-image" :src="`/assets/avatars/${employee.img}`" alt="no img"/>
            <div class="card-img-desc">
              <span class="text-red-800 inline-block font-bold">{{ employee.fullName }}</span>
              <div class="flex gap-x-1">
              <span
                  class="blue-mark text-gray-600 inline-block font-medium text-xs"
                  v-for="post of employee.posts"
              >{{post}}</span>
              </div>
              <span class="text-gray-600 inline-block font-medium">{{ employee.post }}</span>
              <span class="text-gray-400 inline-block font-light">{{ employee.area }}</span>
            </div>
          </div>
          <div class="card-description">{{employee.text}}</div>
        </slide>
        <template #addons>
          <Pagination/>
        </template>
      </carousel>
    </div>

    <div class="card-list">
      <div
          v-for="employee of employees"
          :key="employee.id"
          class="card-director"
      >
        <div class="card-img-desc-wrapper">
          <img class="card-image" :src="`/assets/avatars/${employee.img}`" alt="no img"/>
          <div class="card-img-desc">
            <span class="text-red-800 inline-block font-bold">{{ employee.fullName }}</span>
            <div class="flex gap-x-1">
              <span
                  class="blue-mark text-gray-600 inline-block font-medium text-xs"
                  v-for="post of employee.posts"
              >{{post}}</span>
            </div>
            <span class="text-gray-400 inline-block font-light">{{ employee.area }}</span>
          </div>
        </div>
        <div class="card-description">{{employee.text}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import {employees} from "~/configs/employees";
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

  data: () => ({
    employees,
  })

}
</script>

<style scoped>

.blue-mark,
.emerald-mark,
.cyan-mark,
.red-mark {
  @apply py-0.5 px-2 text-gray-50 rounded-md;
}

.blue-mark {
  @apply bg-blue-700;
}
.emerald-mark {
  @apply bg-emerald-700;
}
.cyan-mark {
  @apply bg-cyan-700;
}
.red-mark {
  @apply bg-violet-700;
}

.directors-section {
  @apply overflow-hidden rounded-tl-lg rounded-tr-lg;
  @apply px-2 sm:px-12 md:px-16 lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14;
  @apply mt-4 sm:mt-6 bg-gray-100 border border-gray-200;
}

.manager-section-title {
  @apply w-full border-b border-b-gray-200;
  @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
  @apply text-center md:text-left;
  @apply space-y-3;
}


.card-slider-wrapper {
  @apply md:hidden;
  @apply px-4 py-5 sm:p-8 lg:p-10;
  @apply bg-gray-50 rounded-lg;
}

.card-slider {
  @apply flex flex-col;
}

.slide-card-director {
  @apply w-full lg:w-fit mt-2;
  @apply flex flex-col items-center justify-start;
}

.card-list {
  @apply hidden md:flex flex-wrap justify-center gap-y-2 gap-x-4;
}

.card-director {
  @apply bg-gray-50 border border-gray-200 rounded-lg py-4 px-10 lg:px-8;
  @apply min-w-[100px] max-w-[640px] mt-2;
  @apply flex flex-col items-center justify-start;
}

.card-img-desc-wrapper {
  @apply flex flex-col items-center justify-center;
  @apply sm:flex-row;
}

.card-image {
  /*@apply blur-sm;*/
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
  @apply mt-2 pt-2 text-sm text-center border-t border-t-gray-300/75;
  @apply sm:mt-4 sm:pt-4 text-gray-700;
  @apply md:text-base;
}

</style>
