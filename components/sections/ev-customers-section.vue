<template>
  <div class="customers-container">
    <a name="out"></a>
    <div class="customers-sub-container">

      <div
          class="customer-title"
          v-motion
          :initial="{opacity: 0}"
          :enter="{opacity: 1}"
          :delay="250"
      >Опыт нашей команды</div>

      <div
          v-motion
          :initial="{opacity: 0}"
          :enter="{opacity: 1}"
          class="chips"
          :delay="450"
      >
        <div
            v-for="group of getGroups()"
            :key="group.id"
            @click="chipCLick(group.name)"
            :class="{'chip': !isSelected(group.name), 'chip-active': isSelected(group.name)}"
        >
          {{ group.name }}
          <i class="ml-1.5 text-xs pi pi-filter"></i>
        </div>
      </div>

      <div class="logotype-images-wrapper">
        <img
            v-for="companyLogo of getCompaniesLogo()"
            :key="companyLogo.id"
            :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
            class="logotype-img"
            alt="err"
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            :delay="30*companyLogo.id"
        />
      </div>

    </div>

    <carousel
        v-motion
        :initial="{opacity: 0}"
        :enter="{opacity: 1}"
        :delay="250"
        :items-to-show="1"
        class="slider sm:hidden min-h-[128px]"
        transition="100"
        autoplay="4000"
        wrapAround
        mouseDrag
        pauseAutoplayOnHover
    >
      <slide
          v-for="companyLogo of getCompaniesLogo()"
          :key="companyLogo.id"
          class="slide"
      >
        <img
            class="slide-img"
            :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
            alt="err"
        >
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>

    <carousel
        v-motion
        :initial="{opacity: 0}"
        :enter="{opacity: 1}"
        :delay="250"
        :items-to-show="3"
        class="slider hidden sm:block md:hidden min-h-[128px]"
        autoplay="4000"
        wrapAround
        mouseDrag
        pauseAutoplayOnHover
    >
      <slide
          v-for="companyLogo of getCompaniesLogo()"
          :key="companyLogo.id"
      >
        <img
            class="slide-img"
            :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
            alt="err"
        >
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </carousel>

  </div>
</template>

<script>

import {companies} from "../../configs/experience";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {

  name: "ev-customers-section",

  data: () => ({
    companies,
    selectedGroups: {
      // "Строительный аудит": null,
      // "Строительная экспертиза": null,
    },
  }),

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  methods: {

    isSelected(name) {
      return this.selectedGroups.hasOwnProperty(name) || false;
    },

    unselect(name) {

      let obj = {};

      Object.keys(this.selectedGroups).forEach(key => {
        if (name === key) return;
        obj[key] = null;
      });

      this.selectedGroups = obj;
    },

    chipCLick(name) {

      let status = this.isSelected(name);

      console.log("status:", status);
      console.log("arr size:", Object.keys(this.selectedGroups).length);

      if (!status) {
        this.selectedGroups[name] = null;
      } else {
        this.unselect(name);
      }

    },

    getGroups() {

      let groups = {};

      this.companies.forEach(company => {
        company.services.forEach(group => {
          groups[group.title] = group;
        });
      });

      return Object.keys(groups).map((groupTitle, i) => ({name: groupTitle, id: i + 1}));
    },

    getCompaniesLogo() {

      const logotypeImageNames = [];

      this.companies.forEach(company => {

        let isExclude = company.services.find(group => {
          return this.selectedGroups.hasOwnProperty(group.title);
        })

        if (isExclude) return;

        logotypeImageNames.push(company.img);
      });

      return logotypeImageNames.map((e, i) => ({id: i + 1, img: e}));
    },

    // getImageURL: (name) => new URL(`../../assets/experience_logotypes/${name}.png`, import.meta.url).href
  },
}

</script>

<style lang="scss" scoped>

.customers-container {
  @apply flex flex-col justify-center items-center rounded-xl sm:p-4 md:p-0;
  background: rgb(17 24 39) center / contain no-repeat fixed url("../../assets/background/bg-lines-color.png");
}

.customers-sub-container {
  @apply md:max-w-[7600px] lg:max-w-[960px] xl:max-w-[1100px];
  @apply pt-8 pb-4 sm:py-6 lg:py-14;
  @apply px-4 sm:px-10 lg:px-14;
}

.customer-title {
  @apply text-lg lg:text-2xl;
  @apply font-extrabold text-center sm:text-right md:text-center text-gray-50;
}

.chips {
  @apply flex flex-wrap justify-center sm:justify-end md:justify-center;
  @apply gap-1.5 mt-6 sm:mt-6 md:mb-4;
  // lg
  @apply lg:my-8 lg:gap-2;
}

.chip {
  @apply cursor-pointer;
  // common
  @apply inline rounded-md border-2 border-gray-700 text-gray-50 bg-transparent;
  // md
  @apply py-0.5 px-1 text-sm;
  // lg
  @apply lg:px-2.5 lg:text-base;
}

.chip-active {
  @apply cursor-pointer;
  // common
  @apply inline rounded-lg border-2 border-red-900 text-gray-50 bg-red-800;
  // md
  @apply py-0.5 px-1 text-sm;
  // lg
  @apply lg:px-2.5 lg:text-base;
}

.logotype-images-wrapper {
  @apply md:mt-12 lg:mt-16;
  @apply hidden md:flex flex-wrap justify-center;
  @apply md:gap-4 lg:gap-6;
}

.logotype-img {
  // all
  @apply opacity-100 max-h-[83px] max-w-[205px];
  // sm:
  @apply md:w-[19.64vw] md:h-[8vw];
  // lg:
  @apply lg:w-[14.73vw] lg:h-[6vw];
}

.slider {
  @apply py-2 sm:py-4 md:hidden w-full bg-transparent border-t border-t-gray-700/90;
}


.slide-img {
  @apply mx-auto w-full max-w-[16rem] md:max-w-[14rem];
}

</style>
