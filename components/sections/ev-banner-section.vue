<template>
  <div class="banner-container">

    <div class="flex flex-col items-center lg:items-start">

      <div class="w-full flex flex-col items-center lg:items-center">

        <div class="ev-b-title txt-shadow"
             v-motion
             :initial="{y: -30, opacity: 0}"
             :enter="{y: 0, opacity: 1}"
             :delay="300"
        >
          Эверест Консалтинг
        </div>

        <div
            class="ev-bs-title txt-shadow"
            v-motion
            :initial="{opacity: 0.001}"
            :enter="{opacity: 1}"
            :delay="700"
        >
          На рынке с 2010 года
        </div>

      </div>

      <div class="flex flex-col items-center lg:flex-row lg:justify-start mt-6 sm:mt-8 gap-y-1.5 sm:gap-y-2 sm:gap-2 flex-wrap">
        <NuxtLink
            v-for="btn of buttons"
            :key="btn.id"
            :to="btn.location"
            class="b-btn"
            v-motion
            :initial="{y: -10, opacity: 0.001}"
            :enter="{y: 0, opacity: 1}"
            :delay="900 + btn.id * 150"
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
        title: "Подробнее об услугах",
        location: "/services",
        iconClass: "pi pi-briefcase"
      },
      {
        id: 2,
        title: "О достижениях",
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
  @apply relative w-full flex flex-col justify-center items-center h-auto lg:min-h-[calc(97.2vh)] rounded-2xl shadow-gray-500 shadow-md;
  @apply px-[40px] sm:px-[8vw] md:px-[15vw] lg:px-[12vw];
  @apply pt-28 pb-10 py-[20vw] md:py-[16vw] lg:py-[9vw];
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.45) top / cover no-repeat fixed url("/assets/background/everest-1920.jpg");
}

.ev-b-title, .ev-bs-title {
  @apply text-center lg:text-left font-extrabold text-gray-100;
}

.ev-b-title {
  @apply z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans;
}

.ev-bs-title {
  @apply z-0 text-base md:text-lg lg:text-xl xl:text-2xl mt-6 rounded-lg px-6 py-2 font-sans bg-red-950;
  @apply translate-y-3;
}

.b-btn {
  @apply select-none cursor-pointer;
  @apply w-full text-center lg:w-fit min-w-[200px] lg:min-w-[240px] max-w-[330px];
  @apply sm:block px-4 py-2 sm:py-3 lg:px-8 lg:py-4;
  @apply text-base lg:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply hover:bg-red-900/15;
  @apply bg-gray-50/10 border md:border border-gray-50/25;
  @apply text-gray-100 rounded-lg backdrop-blur-md;
}

.b-btn:hover .iMark {
  @apply duration-300 ml-6;
}

</style>
