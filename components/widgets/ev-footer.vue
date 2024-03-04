<template>
  <footer class="footer-container">
    <div class="elements">
      <div class="element" v-for="e of data">
        <img v-if="!!e.img" class="w-[17px] h-[17px]" :src="getImageURL(e.img || '')" alt="no img">
        <div style="font-family: 'SF Pro Display'">{{ e.content }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ev-footer",

  methods: {
    getImageURL: (name) => new URL(`../../assets/icons/${name}`, import.meta.url).href
  },

  data() {
    return {
      data: [
        {img: "phone-icon.png", content: "8 (495) 717-01-01"},
        {img: "email-icon.png", content: "info@evcons.ru"},
        {img: "address-icon.png", content: "Москва, 3-я улица Ямского поля, д 2 к 7, офис 301"},
        {content: "Copyright © 2023, ООО Эверест Консалтиг"},
      ],
    }
  }
}
</script>

<style scoped>

.footer-container {
  @apply w-full flex flex-col text-gray-100 text-sm text-center sm:text-left;
  @apply px-[calc(16vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14;
  background: rgb(17 24 39) center / cover no-repeat fixed url("assets/background/bg-lines-color.png");
}

.elements {
  @apply w-full flex flex-col items-center md:items-start space-y-5 sm:space-y-4 sm:items-start;
}

.element {
  @apply flex items-center text-xs md:text-sm text-left space-x-2.5 sm:space-y-0 sm:space-x-3 text-gray-300;
}

.element:last-child {
  @apply border-t border-t-gray-300/20 pt-2.5 font-semibold;
}

</style>
