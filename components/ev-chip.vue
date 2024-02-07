<template>
  <span class="chip">{{ text }}</span>
</template>

<script>
export default {
  name: "ev-chip",
  props: ["text"]
}
</script>

<style scoped>

.chip {
  @apply inline-block bg-gray-50 rounded-xl border-2 border-gray-300 py-0.5 px-2;
  @apply text-gray-700 text-sm sm:text-sm;
}

</style>
