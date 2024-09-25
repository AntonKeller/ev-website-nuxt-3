<template>
  <header class="ev-header">
    <NuxtLink v-if="backBtnIsShow" to="/" class="mr-auto font-extrabold text-gray-100 px-4">
      <i class="pi pi-arrow-left"></i>
    </NuxtLink>
    <NuxtLink
        :class="{'mr-auto':backBtnIsShow, 'pr-8':backBtnIsShow}"
        class="duration-150 text-gray-400 duration-300 flex items-center justify-center md:justify-start mr-3 sm:mr-0 gap-x-6 mt-1"
        to="/"
        @click="activeID = null"
    >
      <img
          class="select-none w-[44.4444px] h-[32px] md:w-[50px] md:h-[36px] opacity-90"
          src="/assets/logotypes/ev-logotype-4-gray-light.png"
          alt="no img"
      >
      <div class="text-base text-gray-100 font-bold tracking-wide">Everest</div>

    </NuxtLink>
    <!--   Menu -->
    <!--    <div class="hidden lg:flex flex-row gap-x-3.5" >-->
    <!--      <NuxtLink-->
    <!--          v-for="link of links"-->
    <!--          :key="link.id"-->
    <!--          :to="link.location"-->
    <!--          :class="{'active': link.id === activeID, 'text-gray-100': link.id !== activeID}"-->
    <!--          @click="activeID = link.id; menuVisible = false"-->
    <!--          class="active:scale-95 hovered rounded-md py-0.5 px-3 cursor-pointer hover:text-gray-400 duration-200"-->
    <!--      >-->
    <!--        {{ link.title }}-->
    <!--      </NuxtLink>-->
    <!--    </div>-->

    <!--   Drop Menu -->
    <!--    <div-->
    <!--        class="  lg:hidden relative ml-auto w-[50px] sm:w-[150px] text-right pl-4"-->
    <!--        @mouseleave="menuVisible=false"-->
    <!--    >-->
    <!--        <div-->
    <!--            @click="this.menuVisible = !this.menuVisible"-->
    <!--            :class="{'activeMenu': menuVisible}"-->
    <!--            class="min-w-[35px] max-w-[35px] z-50 ml-auto py-2 flex flex-col gap-y-2 select-none cursor-pointer"-->
    <!--        >-->
    <!--          <div class="w-full h-[2px] bg-gray-200"> </div>-->
    <!--          <div class="w-full h-[2px] bg-gray-200"> </div>-->
    <!--          <div class="w-full h-[2px] bg-gray-200"> </div>-->
    <!--        </div>-->

    <!--      <div-->
    <!--          :class="{'opacity-100': menuVisible, 'hidden opacity-0': !menuVisible}"-->
    <!--          class="overflow-hidden absolute right-0 p-6 w-[200px] sm:w-[200px] bg-gray-950/75 rounded flex flex-col gap-y-1.5 duration-300 text-left"-->
    <!--      >-->

    <!--        <NuxtLink-->
    <!--            v-motion-slide-visible-right-->
    <!--            v-for="link of links"-->
    <!--            :key="link.id"-->
    <!--            :to="link.location"-->
    <!--            :class="{'active': link.id === activeID}"-->
    <!--            @click="activeID = link.id; menuVisible = false"-->
    <!--            class="hovered cursor-pointer text-gray-300 rounded-sm py-0.5 px-1 duration-100"-->
    <!--        >-->
    <!--          {{ link.title }}-->
    <!--        </NuxtLink>-->
    <!--      </div>-->
    <!--    </div>-->

  </header>
</template>

<script>

export default {
  name: "ev-header",

  computed: {
    route() {
      return this.$route.name;
    }
  },

  mounted() {
    this.routeServicesTest();
  },

  watch: {
    route() {
      // console.log('this.route', this.route)
      // console.log('/\\/services/i.test(this.route)', /services/i.test(this.route));
      this.routeServicesTest();
    }
  },

  methods: {
    routeServicesTest() {
      if (/services/i.test(this.route)) {
        this.backBtnIsShow = true;
      } else {
        this.backBtnIsShow = false;
      }
    }
  },

  data: () => ({
    backBtnIsShow: false,
    menuVisible: false,
    hover: false,
    activeID: null,
    links: [
      // {
      //   id: 1,
      //   title: "Услуги",
      //   location: "/services",
      //   iconClass: "pi pi-briefcase"
      // },
      // {
      //   id: 2,
      //   title: "Достижения",
      //   location: "/rating",
      //   iconClass: "pi pi-briefcase"
      // },
      // {
      //   id: 3,
      //   title: "Опыт",
      //   location: "/experience",
      //   iconClass: "pi pi-briefcase"
      // },
    ],
  }),
}
</script>

<style scoped>

.hoverMenu > div {
  @apply bg-gray-400;
}

.activeMenu > div {
  @apply bg-gray-400;
}

.ev-header {
  @apply z-50 fixed bg-gray-800 md:bg-transparent border-b border-b-gray-600/90 md:border-b-transparent;
  @apply top-0 left-0 right-0 z-20 md:mt-2 md:mt-6;
  @apply md:mx-2 sm:m-0 py-5 sm:py-6 px-4 sm:px-12 md:px-14 lg:px-16 xl:px-16;
  @apply flex items-center justify-center md:justify-start;
  /*@apply sm:bg-transparent;*/
}

</style>


