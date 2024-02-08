<template>
  <span :class="getClassesByTheme()">{{ text }}</span>
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
      return this.theme === "dark" ? "chip-dark" : "chip-light";
    }
  }

}
</script>

<style scoped>

.chip-light {
  @apply inline-block bg-gray-50 rounded-xl border-2 border-gray-300 py-0.5 px-2;
  @apply text-gray-700 text-sm sm:text-sm;
}

.chip-dark {
  @apply text-center inline-block rounded-xl border-2 py-0.5 px-2;
  @apply text-sm sm:text-sm;
  @apply bg-gray-900 border-gray-500 text-gray-200;
}

</style>
