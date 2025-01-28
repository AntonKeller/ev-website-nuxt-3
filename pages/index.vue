<template>
  <div>
    <div class="relative bg-gray-950 h-[80vh] md:h-[100vh] overflow-hidden">

      <div
          class="absolute left-0 bottom-0 right-0 top-0 bg-mountain"
          :style="`transform: scale(${backgroundScale});`"
      ></div>

      <div
          class="h-[100%] flex flex-col items-center lg:items-center justify-center text-gray-200">
        <div class="flex flex-col items-center" :style="`transform: scale(${titleScale})`">
          <div class="title px-4 py-3 rounded-md">
            Everest Consulting
          </div>
          <div class="show-sub-title subtitle">
            <div>Наша цель - Оказание полного комплекса консультационных услуг в области</div>
            <div>оценки и консалтинга (финансового, управленческого, налогового и</div>
            <div> строительного) специалистами, обладающими международными</div>
            <div> квалификациямии значительным опытом выполнения</div>
            <div>подобных проектов как в России,</div>
            <div>так и за рубежом.</div>
          </div>
          <div
              class="z-50 flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-3.5 flex justify-center mt-6">
            <div
                class="show-btn1 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-300 hover:backdrop-blur-md border border-gray-600/70 text-gray-900 bg-gray-50 py-1.5 rounded-lg w-fit"
            >
              <div class="flex items-center justify-center">
                <NuxtLink to="/services" class="pl-5 pr-2 md:text-lg">
                  К услугам
                </NuxtLink>
                <i class="select-none text-gray-800 mr-3.5 pi pi-angle-right h-fit"></i>
              </div>
            </div>

            <div
                @click="gotoFooter('#target-footer')"
                class="show-btn2 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-900 bg-gray-950 text-gray-300 border border-gray-600/55 pr-0.5 py-1.5 rounded-lg w-fit"
            >
              <i class="select-none text-gray-300 ml-4 pi pi-at h-fit"></i>
              <span class="pr-5 pl-3 md:text-lg">Контакты</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <news-block/>

    <directorBlock id="target-directors"/>

    <ratingBlock id="target-rating"/>

    <evFooter id="target-footer"/>

  </div>
</template>

<script>
import directorBlock from "/components/directorBlock.vue";
import evFooter from "../components/widgets/ev-footer";
import ratingBlock from "/components/ratingBlock.vue";

export default {
  name: 'IndexPage',

  components: {
    evFooter,
    ratingBlock,
    directorBlock,
  },

  mounted() {
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', this.handleScroll, {passive: true});

    this.handleScroll();
  },
  beforeDestroy() {
    // Убираем обработчик события перед удалением компонента
    window.removeEventListener('scroll', this.handleScroll);
  },

  data() {
    return {
      px: 12,
      previousScroll: 0,
      headerVisibility: false,
      scrollPercentage: 0,
      titleScale: 1,
      backgroundScale: 1,
    }
  },

  methods: {

    gotoFooter(id) {
      const element = document.querySelector(id);
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
      // console.log('topPosition', topPosition)
      window.scrollTo({
        top: topPosition - 72,
        behavior: 'smooth'
      });
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
      this.scrollPercentage = Math.min(Math.max(percentage, 0), 100);
      this.titleScale = Math.abs(1 - this.scrollPercentage / 55);
      this.backgroundScale = 1 + (1 - this.titleScale);
      // console.log('this.backgroundScale', this.backgroundScale)
      // console.log('this.titleScale:', this.titleScale);
    },

  },
}

</script>

<style scoped>

.bg-mountain {
  background: rgb(17 24 39 / 0.6) url("/assets/background/mauntain2.webp") center/cover;
  background-blend-mode: multiply;
}

.subtitle {
  @apply text-base text-sm md:text-base lg:text-lg font-extralight sm:text-nowrap;
  @apply px-2 py-0.5 text-center max-w-[760px] mt-2 md:mt-4;
  text-shadow: 1px 1px 26px rgb(0, 0, 0, 0.95);
}

.title {
  @apply text-center lg:text-left font-bold duration-300;
  @apply z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl sm:text-nowrap;
}

.show-sub-title {
  opacity: 0;
  transform: translateY(-40px);
  animation: 1.45s 0.35s show ease forwards;
}

.show-btn1 {
  opacity: 0;
  transform: translateX(-15px);
  animation: 1.45s 1s showBtn ease forwards;
}

.show-btn2 {
  opacity: 0;
  transform: translateX(-15px);
  animation: 1.15s 1.35s showBtn ease forwards;
}

@keyframes showBtn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes show {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
