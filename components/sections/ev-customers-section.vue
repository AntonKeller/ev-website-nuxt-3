<template>
  <div class="experience-section">

    <div class="title">
      <h2
          v-motion :initial="{ opacity: 0}" :visible="{opacity: 1}" :delay="250"
      >Большой опыт работы с крупными компаниями</h2>
      <div class="chips">
        <div class="chip" v-for="group of getGroups()">{{ group }}</div>
      </div>
    </div>

    <div class="customers-container">
      <img
          v-for="element of experienceGroup"
          :src="getImageURL(element.img)"
          class="image-logo"
          alt="err"
          v-motion
          :initial="{scale: 0,opacity: 0}"
          :visible="{scale: 1,opacity: 1,}"
          :delay="35*element.id"
      >
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
</template>

<script>

import evChip from "../../components/ev-chip";
import {experienceGroup} from "../../configs/experience";

export default {

  name: "ev-customers-section",

  components: {
    evChip,
  },

  data: () => ({
    experienceGroup,
  }),

  methods: {

    getGroups() {

      let arr = {};

      this.experienceGroup.forEach(e => {
        e.services.forEach(group => arr[group.title] = group);
      });

      return Object.keys(arr);
    },

    getImageURL(name) {
      return new URL(`../../assets/experience_logotypes/${name}.png`, import.meta.url).href
    }

  },

}

</script>

<style lang="scss" scoped>

.experience-section {
  @apply text-gray-300;
  @apply border-x-8 border-x-red-950;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-48;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14 mt-4 sm:mt-6;
  @apply space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8;
  background: rgb(17 24 39)  center / contain no-repeat fixed url("../../assets/background/bg-lines-color.png");

  & p, h2 {
    @apply text-center md:text-left;
  }

  & h2 {
    @apply text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold;
  }

  & p {
    @apply text-base lg:text-lg;
  }

  .title {
    @apply w-full border-b border-b-rose-950 flex-col items-center justify-center;
  }

  .chip {
    // common
    @apply inline rounded-lg border-2 border-red-900 text-red-950 bg-gray-100;
    // md
    @apply py-0.5 px-2 mr-0.5 text-sm;
    // lg
    @apply lg:px-2.5 mr-1 lg:text-base;
  }

  .chips {
    @apply flex flex-wrap justify-center md:justify-start gap-2 my-4 lg:my-8;
  }

  .customers-container {
    @apply w-full;
    @apply hidden md:flex flex-wrap justify-center items-center;
    @apply md:gap-4 lg:gap-6;
  }

  .image-logo {
    // all
    @apply opacity-100 max-h-[83px] max-w-[205px];
    // sm:
    @apply md:w-[19.64vw] md:h-[8vw];
    // lg:
    @apply lg:w-[14.73vw] lg:h-[6vw];
    //@apply w-[14vw] h-[5.7vw] opacity-70 hover:opacity-100;
  }

  .slider {
    @apply md:hidden max-w-full text-center bg-gray-900 rounded-xl mt-6;
    @apply border-4 border-gray-300;
    @apply min-h-[170px] sm:min-h-[190px];
  }
}

</style>
