<template>
  <div>
    <evHeader/>
    <transition name="bounce">
      <Nuxt/>
    </transition>
  </div>
</template>

<script>

import evHeader from "@/components/widgets/ev-header.vue"

export default {
  name: "default",
  components: {
    'evHeader': evHeader,
  },
}
</script>

<style scoped>

</style>
