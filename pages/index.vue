<template>
  <div>
    <div class="scroll-hidden bg-gray-50">
      <div class="banner-container">
        <div class="z-10 flex flex-col items-center lg:items-start">
          <div class="w-full flex flex-col items-center lg:items-center text-gray-50">

            <div class="show-title title txt-shadow">
              <div>Эверест Консалтинг</div>
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
                class=" flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-3.5 flex justify-center mt-6">
              <div
                  class="show-btn1 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-300 hover:backdrop-blur-md border border-gray-600/70 text-gray-900 bg-gray-50 py-1.5 rounded-2xl w-fit"
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
                  class="show-btn2 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-900 bg-gray-950 text-gray-300 border border-gray-600/55 pr-0.5 py-1.5 rounded-2xl w-fit"
              >
                <i class="select-none text-gray-300 ml-4 pi pi-at h-fit"></i>
                <span class="pr-5 pl-3 md:text-lg">Контакты</span>
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

  data() {
    return {
      px: 12,
    }
  },

  methods: {
    gotoFooter(id) {
      const element = document.querySelector(id);
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    },

  },
}

</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  width: 0;
}

.txt-shadow {
  text-shadow: 1px 1px 26px rgb(0, 0, 0, 0.95);
}

.banner-container {
  @apply overflow-hidden;
  @apply h-[100vh] relative w-full flex flex-col justify-center items-center shadow-gray-500;
  @apply px-[20px] sm:px-[8vw] md:px-[15vw] lg:px-[11vw];
  @apply pt-32 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
}

.banner-container::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  /*animation: 3s showBanner ease forwards;*/
  @apply z-10 bg-gray-950/75 bg-blend-multiply bg-center bg-fixed bg-cover bg-[url("/assets/background/everest-1024.jpg")];
}
/*@keyframes showBanner {*/
/*  to {*/
/*    transform: scale(100%);*/
/*    @apply  bg-fixed;*/
/*  }*/
/*}*/

.subtitle {
  @apply text-base text-sm md:text-base lg:text-lg font-extralight sm:text-nowrap;
  @apply px-2 py-0.5 text-center txt-shadow max-w-[760px] mt-2 md:mt-4;
}

.title {
  @apply text-center lg:text-left font-bold duration-300;
  @apply z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl sm:text-nowrap;
}

.show-title {
  opacity: 0;
  transform: translateY(-40px);
  animation: 1.45s show ease forwards;
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
