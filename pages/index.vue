<template>
  <div>
    <div class="scroll-hidden bg-gray-50 px-2 pt-2 md:px-4 md:pt-3.5 pb-2">
      <div class="banner-container bg-container">
        <div class="flex flex-col items-center lg:items-start">
          <div class="w-full flex flex-col items-center lg:items-center" v-motion-fade :delay="300">
            <div class="ev-b-title txt-shadow">Эверест Консалтинг</div>
            <div class="ev-bs-title txt-shadow">На рынке с 2010 года</div>
          </div>
        </div>
      </div>
    </div>
    <evFooter/>
  </div>
</template>

<script>

import evFooter from "../components/widgets/ev-footer";

export default {
  name: 'IndexPage',
  components: {
    evFooter,
  },
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
    @apply h-[98vh] relative w-full flex flex-col justify-center items-center rounded-lg shadow-gray-500;
    @apply px-[40px] sm:px-[8vw] md:px-[15vw] lg:px-[12vw];
    @apply pt-32 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
    @apply bg-gray-950/50 bg-blend-multiply bg-top bg-fixed bg-[url("/assets/background/everest-1920.jpg")];
  }
  .ev-b-title, .ev-bs-title {
    @apply text-center lg:text-left font-extrabold text-gray-100 duration-300;
  }
  .ev-b-title {
    @apply z-10 text-4xl sm:text-4xl md:text-5xl lg:text-6xl ;
  }
  .ev-bs-title {
    @apply z-0 text-base md:text-lg xl:text-xl mt-4 md:mt-6 rounded-sm px-6 py-1.5 bg-gray-900;
  }
</style>
