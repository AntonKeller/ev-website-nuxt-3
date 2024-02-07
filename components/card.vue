<template>
  <div
    class="transition-all duration-700 mt-16 flex flex-col md:flex-row gap-2 md:gap-2.5 lg:gap-3.5 justify-between text-gray-300 text-center">

    <transition name="fade">
      <div
        v-if="servicesCard.id === activeServiceId"
        v-for="servicesCard of servicesCards"
        class="relative max-w-2xl flex flex-col justify-between bg-[#1f2937e9] rounded-md px-8 py-4 lg:px-12 lg:pt-6 lg:pb-8">

        <h4 class="font-extrabold text-lg rounded-xl bg-red-700 text-gray-300 px-0.5 py-1.5">
          {{ servicesCard.title }}</h4>

        <div class="text-sm lg:text-base mt-3 lg:mt-6 text-center">{{ servicesCard.description }}</div>

        <div class="flex flex-row justify-around gap-1 mt-6">
          <div
            class=" rounded-xl bg-gray-900 text-base text-gray-400 text-center px-2.5 py-1.5 select-none cursor-pointer">
            Подробнее
          </div>
          <div
            class=" rounded-xl bg-gray-900 text-base text-gray-400 text-center px-2.5 py-1.5 select-none cursor-pointer">
            Заказать
          </div>
        </div>

        <div @click="increment"
             class="select-none cursor-pointer text-gray-400 hover:text-gray-300 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl absolute top-[44.333%] left-0 ml-3.5">
          <
        </div>
        <div @click="decrement"
             class="select-none cursor-pointer text-gray-400 hover:text-gray-300 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl absolute top-[44.333%] right-0 mr-3.5">
          >
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import {servicesCards} from '@/configs/servicesCards'

export default {
  name: "cards",
  methods: {
    increment() {
      if (this.activeServiceId === this.servicesCards.length - 1)
        this.activeServiceId = 0
      else this.activeServiceId++;
    },
    decrement() {
      if (this.activeServiceId < 2)
        this.activeServiceId = this.servicesCards.length
      else this.activeServiceId--;
    }
  },
  data() {
    return {
      activeServiceId: 1,
      servicesCards,
    }
  }
}
</script>

<style scoped>

</style>
