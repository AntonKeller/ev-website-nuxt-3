<template>
  <div class="scroll-hidden w-full bg-gray-100">
    <!--   MAIN BANNER SECTION   -->
    <bannerSection/>
    <!--   CUSTOMERS SECTION   -->
    <experienceSection/>
    <!--   MANAGERS SECTION   -->
    <managersSection />
    <!--   FOOTER   -->
    <evFooter/>
  </div>
</template>

<script>

import bannerSection from "~/components/sections/ev-banner-section/ev-banner";
import experienceSection from "~/components/sections/ev-customer-section/ev-experience-section";
import managersSection from "~/components/sections/ev-manager-section/ev-managers";
import evFooter from "~/components/widgets/ev-footer";

export default {
  name: 'IndexPage',
  components: {
    bannerSection,
    experienceSection,
    managersSection,
    evFooter,
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
