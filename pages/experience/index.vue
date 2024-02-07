<template>
  <div class="bg-main">
    <div class="h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] md:h-screen md:items-center px-4 border-b border-b-gray-700 md:border-b-0 md:pt-24 overflow-y-scroll md:overflow-auto">
      <div
        class="md:hidden w-full flex flex-col justify-start text-gray-300 text-lg text-center py-2">

        <div
          @click="dropMenuIsOpen=!dropMenuIsOpen"
          class="border border-gray-700 w-full rounded-lg flex flex-row justify-between p-2 px-4">
          <div>Выбрать категорию</div>
          <div :class="{'-rotate-90': dropMenuIsOpen}" class="duration-300"><</div>
        </div>

        <div
          v-if="dropMenuIsOpen"
          class="rounded-lg border-t border-t-gray-900 border-l border-r border-b border-l-gray-700 border-b-gray-700 border-r-gray-700 px-4">
          <ul class="w-full flex flex-col justify-center items-start pb-4">
            <li
              v-for="tab of experienceGroup"
              @click.left="setActiveTab(tab.id)"
              :class="{'bg-gray-600': tab.id === activeTab}"
              class="bg-gray-700 text-gray-300 py-2 px-4 rounded-lg uppercase cursor-pointer show-left font-extrabold text-base mt-2 sm:mt-3.5 text-gray-300 text-left w-full transition-colors">
              {{ tab.value }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="hidden md:flex flex-row items-stretch overflow-x-scroll font-extrabold text-gray-300">
        <div
          v-for="tab of experienceGroup"
          :key="tab.id"
          @click.left="setActiveTab(tab.id)"
          :class="{'opacity-50': activeTab === tab.id}"
          class="flex items-center border mx-2 rounded-lg border-gray-700 text-base lg:text-lg tab-transition duration-300 hover:opacity-40 cursor-pointer py-1.5 px-3 lg:py-3 lg:px-6 w-full">
          <p>{{ tab.value }}</p>
        </div>
      </div>


      <div
        class="flex flex-row items-stretch justify-center px-0 md:px-10 lg:px-15 xl:px-25 md:justify-evenly md:items-start flex-wrap md:flex-row">
        <img
          class="block rounded-2xl border border-gray-800 bg-gray-700 mt-2 opacity-70 hover:opacity-100 duration-300 w-[334px] h-[136] md:w-[434.2px] md:h-[176px] object-fill object-contain"
          v-for="logotype of getTabLogotypes()"
          :key="logotype.id"
          :style="{animationDuration: 0.55 + logotype.id / 10 + 's'}"
          :src="require(`./../../assets/experience_logotypes/${logotype.img}.png`)"
          alt="no image">
      </div>

    </div>
  </div>
</template>

<script>

import {experienceGroup} from "~configs/experience"

export default {
  name: "experience",

  head() {
    return {
      title: "Опыт оценки компаний",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России»",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/experience",
        },
      ],
    }
  },

  data() {
    return {
      experienceGroup,
      activeTab: 3,
      activeImg: 0,
      dropMenuIsOpen: false,
    }
  },

  methods: {
    getTabLogotypes() {
      return experienceGroup[this.activeTab-1].img;
    },

    setActiveTab(id) {
      this.activeTab = id;
      this.activeImg = 0;
      this.dropMenuIsOpen = false;
    },
  },
}
</script>

<style scoped>

.tab-transition {
  animation: show-tab ease;
}

@keyframes show-tab {
  from {
    opacity: 0;
    transform: translateY(-100vh);
  }
}
.bg-main{
  background: url("assets/background/f-10.png") no-repeat center / cover;
}
</style>
