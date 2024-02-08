<template>
  <div class="scroll-hidden w-full bg-gray-100">
    <!--   MAIN BANNER SECTION   -->
    <evBannerSection/>
    <!--   CUSTOMERS SECTION   -->
    <evExperienceSection/>
    <!--   MANAGERS SECTION   -->
    <evManagerSection/>
    <!--   FOOTER   -->
<!--    <evFooter/>-->
  </div>
</template>

<script>

import evBannerSection from "../components/sections/ev-banner-section.vue";
import evExperienceSection from "../components/sections/ev-experience-section.vue";
import evManagerSection from "../components/sections/ev-manager-section.vue";
// import evFooter from "@/components/widgets/ev-footer";

export default {
  name: 'IndexPage',
  components: {
    evBannerSection,
    evExperienceSection,
    evManagerSection,
    // evFooter,
  },
  data() {
    return ({})
  }
}

</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  width: 0;
}
</style>
