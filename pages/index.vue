<template>
  <div>
    <div class="scroll-hidden bg-gray-50">
      <div class="banner-container">
        <div class="z-20 flex flex-col items-center lg:items-start">
          <div class="w-full flex flex-col items-center lg:items-center">

            <div class="ev-b-title txt-shadow" v-motion-fade :delay="400">Эверест Консалтинг</div>

            <div v-motion-fade :delay="650"
                 class="text-md bg-gradient-to-r from-transparent via-gray-950/45 to-transparent text-gray-50 px-2 py-0.5 text-center txt-shadow w-[540px] mt-2 md:mt-4">
              Наша цель - Оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового,
              управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
              значительным опытом выполнения подобных проектов как в России, так и за рубежом.
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-4 flex justify-center mt-6">

              <di
                  v-motion-fade :delay="650"
                  class="font-semibold duration-300 hover:cursor-pointer hover:bg-transparent hover:backdrop-blur-md hover:text-gray-100 border border-gray-50/30 text-gray-900 bg-gray-50 pl-4 pr-0.5 py-1 rounded-2xl w-fit"
              >
                <div class="flex items-center gap-x-3">
                  <NuxtLink to="/services">
                    К услугам
                  </NuxtLink>
                  <i class="select-none mr-3 pi pi-arrow-right h-fit"></i>
                </div>
              </di>

              <div
                  v-motion-fade :delay="750"
                  @click="gotoFooter('#target-footer')"
                  class="font-semibold duration-300 hover:cursor-pointer hover:text-gray-900 hover:bg-gray-100 bg-transparent backdrop-blur-sm text-gray-100 border border-gray-50/30 pl-4 pr-0.5 py-1 rounded-2xl w-fit"
              >
                <div class="flex items-center gap-x-3">
                  Контакты
                  <i class="select-none mr-3 pi pi-book h-fit"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ratingBlock id="target-rating"/>

    <directorBlock id="target-directors"/>

    <evFooter id="target-footer"/>

  </div>
</template>

<script>
import evFooter from "../components/widgets/ev-footer";
import directorBlock from "/components/directorBlock.vue";
import ratingBlock from "/components/ratingBlock.vue";

export default {
  name: 'IndexPage',

  components: {
    evFooter,
    ratingBlock,
    directorBlock,
  },

  methods: {
    gotoFooter(id) {
      const element = document.querySelector(id);
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  }

}

</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  width: 0;
}

.txt-shadow {
  text-shadow: 1px 1px 8px rgb(0, 0, 0, 0.95);
}

.banner-container {
  @apply overflow-hidden;
  @apply h-[100vh] relative w-full flex flex-col justify-center items-center shadow-gray-500;
  @apply px-[40px] sm:px-[8vw] md:px-[15vw] lg:px-[12vw];
  @apply pt-32 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
}

.banner-container::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  animation-duration: 1.15s;
  animation-name: showBanner;
  @apply z-10 duration-1000 bg-gray-950/50 bg-blend-multiply bg-top bg-fixed bg-[url("/assets/background/everest-1920.jpg")];
}

@keyframes showBanner {
  from {
    transform: scale(250%);
  }

  to {
    transform: scale(100%);
  }
}

.ev-b-title {
  @apply text-center lg:text-left font-extrabold text-gray-100 duration-300;
}

.ev-b-title {
  @apply z-10 text-4xl sm:text-4xl md:text-5xl lg:text-6xl;
}
</style>
