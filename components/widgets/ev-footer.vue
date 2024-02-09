<template>
  <footer class="footer-container">
    <div class="elements">
      <div class="element" v-for="el of companyInfo.elements">
        <img class="w-[20px] h-[20px]" :src="getImageURL(el.img)" alt="no img">
        <div>{{ el.text }}</div>
      </div>
    </div>
    <div class="copyright">{{companyInfo.copyright}}</div>
  </footer>
</template>

<script>
export default {
  name: "ev-footer",
  methods: {

    getImageURL(name) {
      return new URL(`../../assets/icons/${name}`, import.meta.url).href
    }

  },
  data() {
    return {
      companyInfo: {
        copyright: "Copyright © 2023, ООО Эверест Консалтиг, все права защищены",
        elements: [
          {img: "phone-icon.png", text: "+7 495 717-01-01 +7 499 557-07-97"},
          {img: "email-icon.png", text: "info@evcons.ru"},
          {img: "address-icon.png", text: "125040, Россия, Москва, 3-я улица Ямского поля, д.2 корп.7, офис 301"},
        ],
      }
    }
  }
}
</script>

<style scoped>

.footer-container {
  @apply w-full flex flex-col text-gray-100 text-base text-center sm:text-left;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14;
  background: rgb(17 24 39) center / cover no-repeat fixed url("assets/background/bg-lines-color.png");

}

.elements {
  @apply w-full flex flex-col items-center space-y-6 sm:space-y-8 pb-4 sm:items-start;
}

.element {
  @apply flex flex-col sm:flex-row items-center space-y-2.5 sm:space-y-0 sm:space-x-3;
}

.copyright {
  @apply w-full mt-6 text-center sm:text-left pt-6 border-t border-t-gray-600/20;
}

</style>
