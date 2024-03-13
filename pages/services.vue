<template>
  <div class="services-container">
    <div class="services-content-wrapper">

      <ul class="services-list">
        <li
            v-motion
            :initial="{x: -15, opacity: 0}"
            :enter="{
              x: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
            :delay="tab.id * 15"
            class="services-list-e"
            v-for="tab of serviceTabs"
            @click="setActiveID(tab.id)"
        >
          {{ tab.title }}
        </li>
      </ul>

      <div class="relative md:hidden w-full text-gray-950 text-right">
        <div
            @click="showMenu=!showMenu"
            class="bg-gray-100 py-1.5 px-20 rounded-md w-fit text-sm font-semibold"
            :class="{'bg-red-600 text-gray-200':showMenu}"
        >
          Услуги
        </div>
        <ul
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            v-if="showMenu"
            class="mt-1 bg-gray-100 space-y-1.5 z-10 absolute left-0 right-0 flex-col text-left rounded-md pl-3 py-3"
        >
          <li
              v-motion
              :initial="{x: -15, opacity: 0}"
              :enter="{
              x: 0,
              opacity: 1,
              transition: {
                mass: 0.5,
              }
            }"
              class="px-3 pr-4 py-0.5 bg-gray-300/90 rounded-md w-fit text-sm text-gray-900"
              :delay="tab.id * 20"
              v-for="tab of serviceTabs"
              @click="setActiveID(tab.id); showMenu=!showMenu"
          >
            {{ tab.title }}
          </li>
        </ul>
      </div>

      <div class="content-list">
        <div
            v-for="content of getActiveContent.content"
            :key="content.id"
            class="flex flex-col justify-start items-start md:max-w-full">

          <h4
              v-if="content.title.length"
              class="font-bold text-lg text-red-500 rounded-md mt-4 mb-1"
          >{{ content.title }}</h4>

          <p
              v-if="content.textContent.length"
              v-for="text of content.textContent"
              class="text-base text-gray-300"
          >{{ text }}</p>

          <ul v-if="content.enums.length" class="mt-4">
            <li v-for="enumValue of content.enums" class="text-base text-gray-400">
              {{ enumValue }}
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import {serviceTabContent, serviceTabs} from "@/configs/servicesConfig"
import evFooter from "@/components/widgets/ev-footer"


export default {
  name: "services",

  head() {
    return {
      title: "Наши услуги",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Оценка нематериальных активов, бизнеса, материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.)",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/services",
        },
      ],
    }
  },

  components: {
    evFooter: evFooter,
  },

  data() {
    return {
      showMenu: false,
      dropMenuIsOpen: false,
      hoverTab: 0,
      activeTabId: 2,
      serviceTabContent,
      serviceTabs,
    }
  },

  computed: {

    getActiveContent() {
      return serviceTabContent.find(e => e.id === this.activeTabId);
    }

  },

  methods: {

    setActiveID(id) {
      this.activeTabId = id;
      this.dropMenuIsOpen = false;
      console.log("id:", this.activeTabId);
    },

  }

}


</script>

<style scoped>

.services-container {

}

.services-content-wrapper {
  @apply w-full flex flex-col items-center md:flex-row overflow-y-scroll pb-6;
  @apply px-6 pt-32 sm:px-8 md:px-14 lg:px-28 lg:pt-12 lg:pt-32 xl:px-52;
  @apply bg-gray-900;
}

.services-list {
  @apply hidden md:block w-full flex flex-col justify-start items-stretch min-w-fit max-w-fit gap-y-2.5 self-start;
}

.services-list-e {
  @apply px-4 py-1.5 border-2 border-red-900/80 rounded-md;
  /*Hover*/
  @apply hover:bg-red-600/50 hover:text-gray-100 md:mt-1.5 lg:mt-2.5;
  @apply cursor-pointer text-sm lg:text-base text-gray-100 text-left w-full transition-colors duration-150;
}

.content-list {
  @apply w-full;
  @apply border-y border-gray-700;
  @apply ml-0 mt-3 md:mt-0 md:ml-8 lg:ml-12 xl:ml-16 overflow-y-scroll pr-3;
  @apply relative flex flex-col justify-start items-start text-gray-300;
}

</style>
