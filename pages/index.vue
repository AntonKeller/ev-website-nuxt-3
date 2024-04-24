<template>
  <div>
    <div class="scroll-hidden bg-gray-50">
      <div class="banner-container">
        <div class="flex flex-col items-center lg:items-start">
          <div class="w-full flex flex-col items-center lg:items-center" v-motion-fade :delay="300">
            <div class="ev-b-title txt-shadow">Эверест Консалтинг</div>

            <div class="w-full flex flex-col gap-y-2 text-center md:text-left mt-8">

              <div class="font-bold text-lg text-gray-300 px-2 py-0.5">
                  На рынке с 2010 года
              </div>

              <div class="text-lg text-gray-300 px-2 py-0.5">
                <i class="select-none mr-4 pi pi-phone h-fit">
                  8 495 717 01 01
                </i>
                <i class="select-none mr-4 pi pi-phone h-fit">
                  8 499 557 07 97
                </i>
                <i class="select-none pi pi-envelope h-fit">
                  info@evcons.ru
                </i>
              </div>

              <div class="text-lg text-gray-300 px-2 py-0.5">
                <i class="select-none mr-3 pi pi-map h-fit">
                  Москва, 3-я улица Ямского поля, д 2 к 7, офис 301
                </i>
              </div>

            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 p-1 text-gray-300 px-3 py-2">
          © 2024, ООО Эверест Консалтиг
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
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
  @apply h-[100vh] relative w-full flex flex-col justify-center items-center rounded-lg shadow-gray-500;
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
  @apply scale-100 duration-300 bg-gray-950/50 bg-blend-multiply bg-top bg-fixed bg-[url("/assets/background/everest-1920.jpg")];
}

.ev-b-title {
  @apply text-center lg:text-left font-extrabold text-gray-100 duration-300;
}

.ev-b-title {
  @apply z-10 text-4xl sm:text-4xl md:text-5xl lg:text-6xl;
}
</style>
