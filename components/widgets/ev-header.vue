<template>
  <header class="ev-header" :class="`${headerVisible ? 'visibleHeader' : 'hiddenHeader'}`">

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

  data() {
    return {
      backBtnIsShow: false,
      menuVisible: false,
      hover: false,
      activeID: null,
      headerVisible: false,
    }
  },

  computed: {
    route() {
      return this.$route.name;
    }
  },

  mounted() {
    this.routeServicesTest();

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },

  beforeDestroy() {
    // Убираем обработчик события перед удалением компонента
    window.removeEventListener('scroll', this.handleScroll);
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
    },

    handleScroll() {
      // Код для header
      // this.headerVisibility = window.pageYOffset >= 400;

      const scrollTop = window.scrollY; // Текущая прокрученная позиция сверху
      const documentHeight = document.documentElement.scrollHeight; // Общая высота документа
      const windowHeight = window.innerHeight; // Высота окна браузера

      // Вычисляем процент прокрутки
      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Обновляем значение процента прокрутки
      this.headerVisible = Math.min(Math.max(percentage, 0), 100) > 25
    },
  },
}
</script>

<style scoped>

.hoverMenu > div {
  @apply bg-gray-400;
}

.activeMenu > div {
  @apply bg-gray-400;
}

.visibleHeader{
  @apply bg-gray-950 duration-500 ease-out;
}

.hiddenHeader{
  @apply bg-gray-900 md:bg-transparent duration-500 ease-out;
}

.ev-header {
  @apply z-50 fixed md:border-b-transparent;
  @apply top-0 left-0 right-0 z-20;
  @apply py-5 sm:py-6 px-6 sm:px-12 md:px-14 lg:px-16 xl:px-16;
  @apply flex items-center justify-between;
  /*@apply sm:bg-transparent;*/
}

</style>


