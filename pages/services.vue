<template>
  <div>
    <div class="services-content-wrapper">
      <ul class="hidden md:block min-w-[280px]">
        <li v-for="item of serviceTabs" :key="item.id">
          <div
              class="tab up-tab"
              :class="{'text-gray-50 bg-gray-300/10': activeTabId===item.id, 'bg-gray-400/5 opacity-60': activeTabId!==item.id}"
              @click="setActiveID(item.id)"
          >
            {{ item.title }}
          </div>
          <ul class="" v-if="item.children">
            <li
                v-for="e of item.children"
                :key="e.id"
                class="tab sub-tab"
                :class="{'text-gray-50 bg-gray-300/10': activeTabId===e.id, 'bg-gray-400/5 opacity-60': activeTabId!==e.id}"
                @click="setActiveID(e.id)"
            >
              {{ e.title }}
            </li>
          </ul>
        </li>
      </ul>

      <div class="relative md:hidden w-full text-right">
        <div
            @click="showMenu=!showMenu"
            class="bg-gray-200 py-1.5 text-center px-4 w-full rounded-sm w-fit text-base font-semibold"
            :class="{'bg-red-800/85 text-gray-200':showMenu}"
        >
          Услуги
        </div>
        <ul v-if="showMenu" class="mt-1 bg-gray-200 z-10 absolute max-w-full flex flex-wrap gap-1.5 left-0 right-0 text-left rounded-md pl-3 py-3 ">
          <li v-for="item of serviceTabs" :key="item.id">
            <div
                class="up-tab px-2.5 py-0.5 rounded-md text-sm text-gray-900 h-fit w-fit"
                :class="{'text-gray-50 bg-gray-300/10': activeTabId===item.id, 'bg-gray-400/5 opacity-60': activeTabId!==item.id}"
                @click="setActiveID(item.id)"
            >
              {{ item.title }}
            </div>
            <ul class="" v-if="item.children">
              <li
                  v-for="e of item.children"
                  :key="e.id"
                  class="sub-tab px-2.5 py-0.5 bg-gray-300 rounded-md text-sm text-gray-900 h-fit w-fit"
                  :class="{'text-gray-50 bg-gray-300/10': activeTabId===e.id, 'bg-gray-400/5 opacity-60': activeTabId!==e.id}"
                  @click="setActiveID(e.id)"
              >
                {{ e.title }}
              </li>
            </ul>
          </li>
        </ul>

<!--        <ul-->
<!--            v-motion-->
<!--            :initial="{opacity: 0}"-->
<!--            :enter="{opacity: 1}"-->
<!--            v-if="showMenu"-->
<!--            class="mt-1 bg-gray-100 z-10 absolute max-w-full flex flex-wrap gap-1.5 left-0 right-0 text-left rounded-md pl-3 py-3"-->
<!--        >-->
<!--          <li-->
<!--              v-motion-->
<!--              :initial="{x: -15, opacity: 0}"-->
<!--              :enter="{-->
<!--              x: 0,-->
<!--              opacity: 1,-->
<!--            }"-->
<!--              class="px-2.5 py-0.5 bg-gray-300/90 rounded-md text-sm text-gray-900 h-fit w-fit"-->
<!--              :delay="tab.id * 35"-->
<!--              v-for="tab of serviceTabs"-->
<!--              @click="setActiveID(tab.id); showMenu=!showMenu"-->
<!--          >-->
<!--            {{ tab.title }}-->
<!--          </li>-->
<!--        </ul>-->
      </div>

      <div class="list-content">
        <div
            v-for="content of getActiveContent.content"
            :key="content.id"
            class="flex flex-col justify-start items-start md:max-w-full">

          <h4
              v-if="content.title.length"
              class="font-bold text-base md:text-lg text-gray-200 mt-4"
          >
            {{ content.title }}
          </h4>

          <p
              v-if="content.textContent.length"
              v-for="text of content.textContent"
              class="text-sm md:text-base text-gray-300 font-sans mt-5"
          >
            {{ text }}
          </p>

          <ul
              v-if="content.enums.length"
              class="flex gap-x-3.5 gap-y-2 justify-start items-stretch text-left flex-wrap py-1.5 mt-4"
          >
            <li
                v-for="enumValue of content.enums"
                class="text-sm md:text-base text-gray-300 rounded-sm border-l-2 border-l-red-900 bg-blue-800/10 px-2.5 py-1"
            >
              {{ enumValue }}
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {serviceTabContent, serviceTabs} from "../configs/servicesConfig"
import evFooter from "../components/widgets/ev-footer"

export default {
  name: "services",

  head() {
    return {
      title: "Услуги",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Оценка нематериальных активов, бизнеса, материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.)",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://evcons.ru/services",
        },
      ],
    }
  },

  components: {
    evFooter: evFooter,
  },

  data: () => ({
    serviceTabs,
    serviceTabContent,
    showMenu: false,
    dropMenuIsOpen: false,
    hoverTab: 0,
    activeTabId: 1,
  }),

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

.services-content-wrapper {
  @apply h-[100vh] max-h-[100vh];
  @apply w-full flex flex-col items-start md:flex-row pb-6;
  @apply px-6 pt-32 sm:px-8 md:px-14 lg:px-20 lg:pt-36 xl:px-48;
  @apply bg-gray-950;
}

.services-content-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  background: top / cover no-repeat fixed url("/assets/background/everest-420-blur.png");
}

.services-list {
  /*@apply hidden md:flex w-full flex-col gap-y-0 justify-start items-stretch min-w-fit max-w-fit self-start;*/
}

.tab {
  @apply text-xs sm:text-sm md:text-base text-gray-50 rounded-sm;
  @apply cursor-pointer hover:underline font-sans w-full backdrop-blur-sm px-2 py-0.5;
}

.up-tab {
  @apply mb-3 uppercase;
}

.sub-tab {
  @apply ml-3 mb-1.5;
}

.sub-tab:last-child {
  @apply mb-3;
}

.list-content {
  @apply w-full h-[70vh] overflow-y-scroll overflow-x-hidden;
  @apply ml-0 mt-3 md:mt-0 md:ml-8 lg:ml-12 xl:ml-16 overflow-y-scroll pr-3;
  @apply relative flex flex-col justify-start items-start text-gray-900;
}

</style>
