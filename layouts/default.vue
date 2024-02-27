<template>
  <div>
    <evHeader/>
    <transition name="bounce">
      <slot/>
    </transition>
    <!--    <evFooter />-->
  </div>
</template>

<script>

import evHeader from "../components/widgets/ev-header.vue";
import evFooter from "../components/widgets/ev-footer";

export default {
  name: "default",
  components: {
    evFooter,
    evHeader,
  },
}
</script>

<style scoped>

</style>
