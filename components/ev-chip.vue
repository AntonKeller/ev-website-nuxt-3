<template>
  <span :class="getClassesByTheme()" class="chip">{{ text }}</span>
</template>

<script>
export default {

  name: "ev-chip-dark",

  props: {
    text: String,
    theme: String,
  },

  methods: {
    getClassesByTheme() {
      return this.theme === "dark" ?
          "chip-dark" :
          "chip-light";
    }
  }

}
</script>

<style scoped>

.chip {
  @apply inline-block rounded-xl border-2 py-0.5 px-2.5 mr-1.5 text-base;
}


.chip-light {
  @apply text-gray-900 bg-gray-50 border-gray-800;
}

.chip-dark {
  @apply text-gray-50 bg-red-800/90 border-gray-800;
}

</style>
