<template>
  <div class="scroll-hidden bg-gray-50 px-2 pt-2 md:px-4 md:pt-3.5 pb-2">
    <!--   MAIN BANNER SECTION   -->
    <evBannerSection/>
    <!--   Experience SECTION   -->
    <evExperienceSection/>
    <!--  CUSTOMERS SECTION  -->
    <evCustomersSection/>
    <!--   MANAGERS SECTION   -->
    <evManagerSection/>
    <!--   FOOTER   -->
    <evFooter/>
  </div>
</template>

<script>

import evBannerSection from "~/components/sections/ev-banner-section.vue";
import evExperienceSection from "~/components/sections/ev-experience-section.vue";
import evCustomersSection from "~/components/sections/ev-customers-section.vue";
import evManagerSection from "~/components/sections/ev-manager-section.vue";
import evFooter from "~/components/widgets/ev-footer";

export default {
  name: 'IndexPage',
  components: {
    evBannerSection,
    evExperienceSection,
    evCustomersSection,
    evManagerSection,
    evFooter,
  },
}

</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  width: 0;
}
</style>
