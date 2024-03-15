<template>
  <header
      v-motion
      :initial="{opacity: 0.001}"
      :enter="{opacity: 1}"
      :delay="800"
      class="ev-header"
  >
    <NuxtLink class="logoLink ml-auto md:mr-auto md:ml-0 flex items-center gap-x-3" to="/">
      <img
          class="select-none w-[44.4444px] h-[32px] md:w-[50px] md:h-[36px] opacity-90"
          src="/assets/logotypes/ev-logotype-4-gray-light.png"
          alt="no img"
      >
      <div class="logoTitle text-base text-gray-200 font-semibold">Everest home</div>
    </NuxtLink>
  </header>
</template>

<script>

export default {
  name: "ev-header",

  data: () => ({
    hover: false,
  })

}
</script>

<style scoped>

.logoLink:hover .logoTitle {
  @apply duration-150 text-gray-400;
}

.ev-header {
  @apply absolute;
  @apply overflow-hidden top-0 left-0 right-0 z-20 rounded-3xl mt-2 md:mt-6;
  @apply mx-2 sm:m-0 py-6 sm:py-10 px-8 sm:px-12 md:px-14 lg:px-16 xl:px-16;
  @apply flex flex-col items-stretch;
  @apply sm:bg-transparent;
}

</style>


