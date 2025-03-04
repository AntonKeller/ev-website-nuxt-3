<template>
  <div>

    <div class="bg-gray-100 flex flex-col items-center justify-start lg:py-6 text-gray-800/95  py-2 md:py-6 lg:py-8">
      <div
          class="w-full px-4 py-1 max-w-[920px]  text-lg md:text-2xl lg:text-4xl font-bold rounded-sm">
        Новости компании
      </div>

      <Carousel
          v-bind="carouselConfig"
          class="w-full max-w-[920px] mt-2 md:mt-4 cursor-pointer"
      >

        <Slide v-for="item in listNews" :key="item._id" :style="{height: 'fit-content'}">

          <div class="text-left px-4 py-2 pb-6">
            <div class="font-bold md:font-medium">{{ item.title }}</div>
            <div class="font-sans text-gray-500 mt-1.5  rounded-md">
              {{ item.date }}
            </div>
            <div v-if="item.p" class="font-sans mt-4">
              <div v-for="e of item.p" class="mt-2">
                <div v-if="e.title" class="font-bold md:font-medium">{{ e.title }}</div>
                <div v-if="e.content">{{ e.content }}</div>
                <ul v-if="e.enums" class="marker:text-gray-800/95 list-disc pl-10 mt-1 space-y-2">
                  <li v-for="enumItem of e.enums" class="mt-0.5 list-outside">
                    {{ enumItem }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </Slide>

        <template #addons>
          <Pagination/>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import {Carousel, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css';
import {listNews} from "../configs/news";

export default {
  name: "news-block",

  components: {
    Carousel, Pagination, Slide
  },

  data() {
    return {
      carouselConfig: {
        itemsToShow: 2.5,
        wrapAround: true,
        ['items-to-show']: 1,
        mouseDrag: true,
        pauseAutoplayOnHover: true,
      },

      listNews,
    }
  }
}
</script>

<style scoped>
.news-background {
  @apply w-[330px] bg-center bg-fixed bg-[url("/assets/background/Everest-mauntain-cut.png")];
}
</style>