<template>
  <span class="chip-dark">{{ text }}</span>
</template>

<script>
export default {
  name: "ev-chip-dark",
  props: ["text"]
}
</script>

<style scoped>
.chip-dark {
  @apply text-center inline-block rounded-xl border-2 py-0.5 px-2;
  @apply text-sm sm:text-sm;
  @apply bg-gray-900 border-gray-500 text-gray-200;
}

</style>
