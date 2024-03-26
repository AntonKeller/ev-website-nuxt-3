<template>
  <div class="banner-container bg-container">

    <div class="flex flex-col items-center lg:items-start">

      <div class="w-full flex flex-col items-center lg:items-center">

        <div class="ev-b-title txt-shadow duration-100"
             v-motion
             :initial="{opacity: 0}"
             :enter="{opacity: 1}"
             :delay="300"
        >
          Эверест Консалтинг
        </div>

        <div
            class="ev-bs-title txt-shadow duration-100"
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            :delay="600"
        >На рынке с 2010 года</div>

      </div>

      <div class="w-full flex flex-col items-center sm:flex-row sm:justify-center mt-6 sm:mt-8 gap-y-1.5 sm:gap-y-2 sm:gap-2 flex-wrap">
        <NuxtLink
            v-for="btn of buttons"
            :key="btn.id"
            :to="btn.location"
            class="b-btn duration-200"
            v-motion
            :initial="{x: 30, opacity: 0}"
            :enter="{x: 0, opacity: 1}"
            :delay="800 + 250 * btn.id"
        >
          <i :class="btn.iconClass"></i>
          <i class="iMark ml-4 pi pi-arrow-right"></i>
          <div class="mt-1">{{ btn.title }}</div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: "ev-banner-section",

  data: () => ({
    buttons: [
      {
        id: 1,
        title: "Услуги",
        location: "/services",
        iconClass: "pi pi-briefcase"
      },
      {
        id: 2,
        title: "Достижения",
        location: "/rating",
        iconClass: "pi pi-briefcase"
      },
      // {
      //   id: 3,
      //   title: "Связаться с нами",
      //   location: "/rating",
      //   iconClass: "pi pi-chart-line"
      // }
    ],
  })
}
</script>

<style scoped>

.txt-shadow {
  text-shadow: 1px 1px 8px rgb(0, 0, 0, 0.95);
}

.banner-container {
  @apply relative w-full flex flex-col justify-center items-center h-auto lg:min-h-[calc(97.2vh)] rounded-lg shadow-gray-500;
  @apply px-[40px] sm:px-[8vw] md:px-[15vw] lg:px-[12vw];
  @apply pt-28 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
  @apply bg-blend-multiply bg-[url("/assets/background/everest-1920.jpg")];
}

/*.bg-container {*/
/*  background-blend-mode: multiply;*/
/*  background: rgba(103, 99, 99, 0.45) top / cover no-repeat fixed url("/assets/background/everest-1920.jpg");*/
/*}*/

.ev-b-title, .ev-bs-title {
  @apply text-center lg:text-left font-extrabold text-gray-100;
}

.ev-b-title {
  @apply z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans;
}

.ev-bs-title {
  @apply z-0 text-base md:text-base lg:text-lg xl:text-xl mt-6 rounded-sm px-6 py-1.5 font-sans bg-gray-900;
  @apply translate-y-3;
}

.b-btn {
  @apply select-none cursor-pointer;
  @apply w-full text-center lg:w-fit min-w-[200px] lg:min-w-[240px] max-w-full sm:max-w-[130px] md:max-w-[220px];
  @apply sm:block px-4 py-2 sm:py-3 lg:px-8 lg:py-4;
  @apply text-base lg:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply hover:bg-red-950/70;
  @apply bg-gray-900/25 border border border-gray-900/65;
  @apply text-gray-100 rounded-md backdrop-blur-sm;
}

.b-btn:hover .iMark {
  @apply duration-300 ml-6;
}

</style>
