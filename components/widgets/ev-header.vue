<template>
  <header class="ev-header">

    <NuxtLink
        class="duration-150 text-gray-400 duration-300 flex items-center justify-center md:justify-start mr-3 sm:mr-0 gap-x-5 mt-1"
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

    <div class="text-sm sm:text-base text-gray-200 flex items-center">
      <i class="pi pi-phone text-gray-200"></i>
      <span class="ml-3">8 (495) 717-01-01</span>
    </div>

    <NuxtLink v-if="backBtnIsShow" to="/"
              class="font-extrabold text-gray-200 px-5 py-2 hover:bg-gray-950 duration-300 flex items-center bg-transparent border border-gray-900/25 rounded-lg">
      <i class="pi pi-arrow-left text-gray-100"></i>
    </NuxtLink>
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
  @apply z-50 fixed bg-gray-900 md:bg-transparent border-b border-b-gray-950 md:border-b-transparent;
  @apply top-0 left-0 right-0 z-20 md:mt-2 md:mt-6;
  @apply md:mx-2 sm:m-0 py-5 sm:py-6 px-6 sm:px-12 md:px-14 lg:px-16 xl:px-16;
  @apply flex items-center justify-between;
  /*@apply sm:bg-transparent;*/
}

</style>


