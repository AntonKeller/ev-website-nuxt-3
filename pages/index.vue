<template>
  <div>
    <div class="scroll-hidden bg-gray-50">
      <div class="banner-container">
        <div class="z-20 flex flex-col items-center lg:items-start">
          <div class="w-full flex flex-col items-center lg:items-center" v-motion-fade :delay="300">
            <div class="ev-b-title txt-shadow">Эверест Консалтинг</div>
            <div class="w-full flex flex-col gap-y-2 text-center md:text-left mt-8">
              <div class="font-bold text-lg text-gray-100 px-2 py-0.5 text-center txt-shadow">На рынке с 2010 года</div>
              <div class="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-4 flex justify-center mt-6">

                <div
                     class="font-semibold duration-300 hover:cursor-pointer hover:bg-transparent hover:backdrop-blur-md hover:text-gray-100 border border-gray-50/30 text-gray-900 bg-gray-50 pl-4 pr-0.5 py-1 rounded-2xl w-fit"
                >
                  <div class="flex items-center gap-x-3">
                    <NuxtLink to="/services">
                      К услугам
                    </NuxtLink>
                    <i class="select-none mr-3 pi pi-arrow-right h-fit"></i>
                  </div>
                </div>

                <div @click="gotoFooter('#target-footer')"
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
    </div>

    <directorBlock id="target-directors"/>

    <evFooter id="target-footer"/>

  </div>
</template>

<script>
import evFooter from "../components/widgets/ev-footer";
import directorBlock from "/components/directorBlock.vue";

export default {
  name: 'IndexPage',

  components: {
    evFooter,
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
  animation-duration: 1.35s;
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
