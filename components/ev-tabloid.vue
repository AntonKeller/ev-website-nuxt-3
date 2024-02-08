<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores eaque, exercitationem incidunt magnam nam
    necessitatibus numquam quod, quos sapiente sint tempora unde. A architecto autem eos nesciunt officiis pariatur
    possimus quia velit? Animi, aperiam asperiores assumenda consequuntur cupiditate debitis earum hic nisi non quaerat
    quibusdam, reiciendis repudiandae sequi voluptatibus.
    <!--    <Hooper-->
    <!--      class="tabloid"-->
    <!--      :class="{hidden: !m1024}"-->
    <!--      :itemsToShow="3"-->
    <!--      autoPlay-->
    <!--    >-->
    <!--      <Slide-->
    <!--        class="w-fit"-->
    <!--        v-for="elem of tabloids"-->
    <!--        :key="elem.id"-->
    <!--      >-->
    <!--        <div class="slide-content w-fit">-->
    <!--          <div class="slide-content&#45;&#45;wrapper w-fit">-->
    <!--            <div class="slide-mark">everest</div>-->
    <!--            <div class="tabloid&#45;&#45;title">{{ elem.title }}</div>-->
    <!--            <div class="tabloid&#45;&#45;subtitle">{{ elem.subtitle }}</div>-->
    <!--            <div class="tabloid&#45;&#45;description">{{ elem.text }}</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </Slide>-->

    <!--      <hooper-pagination slot="hooper-addons"></hooper-pagination>-->
    <!--    </Hooper>-->

    <!--    <Hooper-->
    <!--      class="tabloid"-->
    <!--      :class="{hidden: !p1024}"-->
    <!--      :itemsToShow="2"-->
    <!--      autoPlay-->
    <!--    >-->
    <!--      <Slide-->
    <!--        class="w-fit"-->
    <!--        v-for="elem of tabloids"-->
    <!--        :key="elem.id"-->
    <!--      >-->
    <!--        <div class="slide-content w-fit">-->
    <!--          <div class="slide-content&#45;&#45;wrapper w-fit">-->
    <!--            <div class="slide-mark">everest</div>-->
    <!--            <div class="tabloid&#45;&#45;title">{{ elem.title }}</div>-->
    <!--            <div class="tabloid&#45;&#45;subtitle">{{ elem.subtitle }}</div>-->
    <!--            <div class="tabloid&#45;&#45;description">{{ elem.text }}</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </Slide>-->

    <!--      <hooper-pagination slot="hooper-addons"></hooper-pagination>-->
    <!--    </Hooper>-->

    <!--    <Hooper-->
    <!--      class="tabloid"-->
    <!--      :class="{hidden: !p640}"-->
    <!--      autoPlay-->
    <!--      :itemsToShow="1"-->
    <!--    >-->
    <!--      <Slide-->
    <!--        class="w-fit"-->
    <!--        v-for="elem of tabloids"-->
    <!--        :key="elem.id"-->
    <!--      >-->
    <!--        <div class="slide-content w-fit">-->
    <!--          <div class="slide-content&#45;&#45;wrapper w-fit">-->
    <!--            <div class="slide-mark">everest</div>-->
    <!--            <div class="tabloid&#45;&#45;title">{{ elem.title }}</div>-->
    <!--            <div class="tabloid&#45;&#45;subtitle">{{ elem.subtitle }}</div>-->
    <!--            <div class="tabloid&#45;&#45;description">{{ elem.text }}</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </Slide>-->

    <!--      <hooper-pagination slot="hooper-addons"></hooper-pagination>-->
    <!--    </Hooper>-->

  </div>
</template>

<script>

// import 'hooper/dist/hooper.css';
// import 'primeicons/primeicons.css';
// import {Hooper, Slide, Pagination as HooperPagination} from "hooper";

export default {

  name: "ev-tabloid",

  components: {
    // Hooper,
    // Slide,
    // HooperPagination,
  },

  data: () => ({
    // p640: true,
    // p1024: true,
    // m1024: true,
    // windowWidth: 0,
    // tabloids: [
    //   {
    //     id: 1,
    //     title: "80+",
    //     subtitle: "Lorem ipsum dolor",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    //   },
    //   {
    //     id: 2,
    //     title: "5",
    //     subtitle: "Lorem ipsum dolor",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    //   },
    //   {
    //     id: 3,
    //     title: "15",
    //     subtitle: "Lorem ipsum dolor",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    //   },
    //   {
    //     id: 4,
    //     title: "10",
    //     subtitle: "Lorem ipsum dolor",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    //   },
    //   {
    //     id: 5,
    //     title: "50",
    //     subtitle: "Lorem ipsum dolor",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    //   },
    // ]
  }),

  created() {

    // const onResize = () => {
    //   this.width = window.innerWidth;
    //   this.p640 = window.innerWidth <= 640;
    //   this.p1024 = window.innerWidth > 640 && window.innerWidth <= 1024;
    //   this.m1024 = window.innerWidth > 1024;
    //   console.log('this.p640:', this.p640);
    // };
    //
    // onResize();
    //
    // window.addEventListener('resize', onResize);
  },

}
</script>

<style scoped>

.tabloid {
  @apply h-fit max-w-full mt-4 sm:mt-6 md:mt-8 lg:mt-8 gap-4;
}

.slide-content {
  @apply px-2 py-6;
}

.slide-content--wrapper {
  @apply relative;
  @apply px-6 sm:px-8 md:px-10 lg:px-10 xl:px-12;
  @apply py-3 sm:py-4 md:py-4 lg:py-4 xl:py-6;
  @apply backdrop-blur-2xl border border-gray-900 rounded-lg;
}

.slide-mark {
  @apply absolute;
  @apply right-[15px] -top-[8px] px-8 py-1 rounded-md text-center;
  @apply font-light;
  @apply border border-gray-900/40;
  @apply text-sm xl:text-base text-gray-200 bg-red-800;
}

.tabloid--title {
  @apply font-extrabold text-gray-200 text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl;
}

.tabloid--subtitle {
  @apply mt-4 font-extrabold text-red-500/80 text-lg md:text-lg lg:text-lg xl:text-xl;
}

.tabloid--description {
  @apply mt-1.5 font-light text-gray-300 text-sm xl:text-base;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply mt-6 px-8 py-1;
  @apply flex items-center;
  @apply text-base md:text-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-300 border-2 border-gray-200/20 rounded-2xl backdrop-blur-sm;
  @apply hover:border-gray-900/70;
}
</style>
