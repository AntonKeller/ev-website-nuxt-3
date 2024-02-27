<template>
  <header
      v-motion
      :initial="{opacity: 0.001}"
      :enter="{opacity: 1}"
      :delay="1000"
      class="ev-header"
      :class="{'bg-gray-50/10 backdrop-blur-2xl ml-4': menuIsOpen}"
  >

    <div class="w-full flex items-center justify-center sm:justify-between transition-all text-gray-700">

      <NuxtLink class="sm:ml-0 sm:mr-auto flex justify-center sm:space-x-3 items-center" to="/">
        <img
            @click="activePage=0"
            class="hidden sm:block select-none w-10 h-10 sm:w-12 sm:h-8 md:w-16 md:h-10 opacity-80"
            src="~assets/logotypes/ev-logotype-4-gray-light.png"
            alt="no img"
        >
        <h2 class="text-fuchsia-50/80 hover:text-red-300 transition-colors duration-300 font-sans font-medium text-base lg:text-lg">
          Everest consulting
        </h2>
      </NuxtLink>

      <nav class="hidden sm:block">
        <ul class="flex items-center justify-center space-x-3.5">
          <NuxtLink id="1" to="/services" class="text-fuchsia-50/80 rounded-xl hover:text-red-300 transition-colors duration-300 cursor-pointer">
            Услуги
          </NuxtLink>
          <NuxtLink id="2" to="/rating" class="text-fuchsia-50/80 rounded-xl hover:text-red-300 transition-colors duration-300 cursor-pointer">
            Достижения
          </NuxtLink>
        </ul>
      </nav>

      <div
          @click="menuIsOpen=!menuIsOpen"
          class="ml-auto block sm:hidden flex items-center"
      >
        <svg
            class=" cursor-pointer w-10 h-10 sm:ml-4 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>

    <div
        v-motion
        :initial="{opacity: 0.001}"
        :enter="{opacity: 1}"
        :delay="100"
        v-if="menuIsOpen"
        class="sm:hidden bg-transparent mt-4 pt-1 border-t border-t-gray-700/15"
    >
      <ul class="flex flex-col gap-y-4 mt-4 text-gray-700">
        <li
            @click="openPage(link.id)"
            class="cursor-pointer"
            v-for="link of navLinks"
        >
          <NuxtLink :to="link.url">
            <h5 class="text-sm font-sans font-medium">{{ link.title }}</h5>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>

import {navLinks} from '../../configs/headerConfig';

export default {
  name: "ev-header",

  props: {
    textColor: String
  },

  methods: {
    openPage(id) {
      this.activePage = id;
      this.menuIsOpen = false;
    }
  },

  data() {
    return {
      navLinks,
      activePage: 0,
      menuIsOpen: false
    }
  },

}
</script>

<style scoped>

.ev-header {
  @apply absolute;
  /*@apply  sm:static;*/
  @apply overflow-hidden top-0 left-0 right-0 z-20 rounded-3xl mt-2 md:mt-6;
  @apply mx-2 sm:m-0 py-6 sm:py-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-20;
  @apply flex flex-col items-stretch;
  @apply sm:bg-transparent;
}

</style>


