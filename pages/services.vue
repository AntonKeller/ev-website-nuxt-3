<template>
  <div class="services-container">

    <ul class="services-list">
      <li
          class="services-list-e"
          v-for="tab of serviceTabs"
          @click="setActiveID(tab.id)"
      >
        <!--        :class="{'uppercase':tab.sub, 'md:pl-8':!tab.sub}"-->
        {{ tab.title }}
      </li>
    </ul>

    <div class="content-list">
      <div
          v-for="content of getActiveContent.content"
          :key="content.id"
          class="flex flex-col justify-start items-start md:max-w-full gap-y-5">

        <h4
            v-if="content.title.length"
            class="show-left font-bold text-4xl mb-4 bg-gray-300 px-4 py-2.5 text-gray-800 rounded-tl-lg rounded-br-lg border-b-2 border-b-red-800"
        >
          {{ content.title }}
        </h4>

        <p v-if="content.textContent.length" v-for="text of content.textContent" class="text-lg">{{ text }}</p>

        <ul v-if="content.enums.length">
          <li v-for="enumValue of content.enums" class="text-lg">
            <span class="inline-block w-4 h-2 rounded-sm red-line-heavy"></span>
            {{ enumValue }}
          </li>
        </ul>

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

  },

}


</script>

<style scoped>

.services-container {
  @apply w-full flex flex-row h-[calc(100vh-58px)] max-h-[calc(100vh-58px)] overflow-y-scroll;
  @apply md:px-14 md:pt-12 lg:px-28 lg:pt-12 lg:pt-24 xl:px-52 bg-gray-100;
}

.services-list {
  @apply w-full flex flex-col justify-start items-stretch min-w-fit max-w-fit gap-y-2.5;
}

.services-list-e {
  @apply bg-red-800 px-4 py-1.5 rounded-tr-xl rounded-bl-xl border-2 border-red-900/80;
  /*Hover*/
  @apply hover:bg-gray-200/50 hover:text-red-700;
  @apply cursor-pointer font-black text-gray-100 text-left w-full transition-colors duration-150;
}

.content-list {
  @apply ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16 flex flex-col justify-start items-start text-gray-900;
}

/**::-webkit-scrollbar {*/
/*  width: 0;*/
/*}*/


.red-line, .gray-line {
  min-height: 2px;
}

/*.red-line-heavy {*/
/*  background: linear-gradient(to right, rgba(99, 75, 91, 0.5), rgb(129, 99, 125), rgba(99, 75, 87, 0.5));*/
/*}*/

/*.gray-line {*/
/*  background: linear-gradient(to right, rgba(75, 85, 99, 0.1), rgba(75, 85, 99, 0.35), rgb(99, 112, 129), rgba(75, 85, 99, 0.35), rgba(75, 85, 99, 0.1));*/
/*}*/

/*.red-line {*/
/*  background: linear-gradient(to right, rgba(99, 75, 92, 0.1), rgba(99, 75, 91, 0.35), rgb(129, 99, 125), rgba(99, 75, 87, 0.93), rgba(75, 85, 99, 0.1));*/
/*}*/

/*h1, h2, h3, h4, h5, li, p {*/
/*  animation: showFast ease 0.7s;*/
/*  text-align: left;*/
/*}*/

/*@keyframes showFast {*/
/*  from {*/
/*    opacity: 0;*/
/*    transform: translateX(25px);*/
/*  }*/
/*}*/

</style>
