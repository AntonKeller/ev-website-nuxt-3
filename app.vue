<template>
  <div>
    <ev-header/>
    <NuxtPage/>
<!--    <NuxtLayout>-->
<!--      <NuxtPage/>-->
<!--    </NuxtLayout>-->
  </div>
</template>
<script>

import EvHeader from "./components/widgets/ev-header.vue";

export default {
  components: {EvHeader}
}

</script>