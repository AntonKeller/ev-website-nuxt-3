<template>
  <header class="ev-header">

    <div class="mr-auto md:ml-0 min-w-fit" v-motion-fade :delay="500">
      <NuxtLink
          class="logoLink flex items-center gap-x-3"
          to="/"
          @click="activeID = null"
      >
        <img
            class="select-none w-[44.4444px] h-[32px] md:w-[50px] md:h-[36px] opacity-90"
            src="/assets/logotypes/ev-logotype-4-gray-light.png"
            alt="no img"
        >
        <div class="logoTitle text-base text-gray-100 font-semibold">Everest home</div>
      </NuxtLink>
    </div>

    <!--   Menu -->
    <div class="hidden lg:flex flex-row gap-x-6" v-motion-fade>
      <NuxtLink
          v-for="link of links"
          :key="link.id"
          :to="link.location"
          :class="{'active': link.id === activeID, 'text-gray-100': link.id !== activeID}"
          @click="activeID = link.id; menuVisible = false"
          class="active:scale-95 hovered rounded-md py-0.5 px-3 cursor-pointer hover:text-gray-400 duration-200"
      >
        {{ link.title }}
      </NuxtLink>
    </div>

    <!--   Drop Menu -->
    <div
        class="lg:hidden relative ml-auto w-[50px] sm:w-[150px] text-right pl-4"
        @mouseleave="menuVisible=false"
    >
      <i
          :class="{'text-gray-400': menuVisible}"
          class="text-3xl select-none cursor-pointer text-gray-100 duration-200 hover:text-gray-400 pi pi-list"
          @click="this.menuVisible = !this.menuVisible"
      />
      <div
          :class="{'opacity-100': menuVisible, 'hidden opacity-0': !menuVisible}"
          class="overflow-hidden absolute right-0 p-6 w-[200px] sm:w-[200px] bg-gray-950/75 rounded flex flex-col gap-y-1.5 duration-300 text-left"
      >

        <NuxtLink
            v-motion-slide-visible-right
            v-for="link of links"
            :key="link.id"
            :to="link.location"
            :class="{'active': link.id === activeID}"
            @click="activeID = link.id; menuVisible = false"
            class="hovered cursor-pointer text-gray-300 rounded-sm py-0.5 px-1 duration-100"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>

  </header>
</template>

<script>

export default {
  name: "ev-header",

  data: () => ({
    menuVisible: false,
    hover: false,
    activeID: null,
    links: [
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
      {
        id: 3,
        title: "Опыт",
        location: "/experience",
        iconClass: "pi pi-briefcase"
      },
      {
        id: 4,
        title: "Руководство",
        location: "/directors",
        iconClass: "pi pi-briefcase"
      },
    ],
  }),
}
</script>

<style scoped>

.hovered {
  @apply hover:text-gray-200 hover:bg-gray-200/10;
}

.active {
  @apply text-gray-200 bg-gray-200/20;
}

.logoLink:hover .logoTitle {
  @apply duration-150 text-gray-400;
}

.ev-header {
  @apply absolute;
  @apply top-0 left-0 right-0 z-20 mt-2 md:mt-6;
  @apply mx-2 sm:m-0 py-6 sm:py-10 px-8 sm:px-12 md:px-14 lg:px-16 xl:px-16;
  @apply flex items-center gap-x-12;
  @apply sm:bg-transparent;
}

</style>


