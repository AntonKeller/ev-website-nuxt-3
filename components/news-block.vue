<template>
  <div class="bg-gray-950">

    <div class="bg-gray-100 flex flex-col items-center justify-start lg:py-6 text-gray-800/95">
      <div
          class="w-full px-4 py-1 max-w-[920px]  text-lg md:text-2xl lg:text-4xl font-bold rounded-sm">
        Новости компании
      </div>

      <Carousel v-bind="carouselConfig" class="w-full max-w-[920px] mt-2 md:mt-4 cursor-pointer">
        <Slide v-for="item in news" :key="item._id" :style="{height: 'fit-content'}">

          <div class="text-left px-4 py-2 pb-6">
            <div class="font-bold md:font-medium">{{ item.title }}</div>
            <div class="font-sans text-gray-500 mt-1.5  rounded-md">
              {{ item.date }}
            </div>
            <div v-if="item.p" class="font-sans mt-4">
              <div v-for="e of item.p" class="mt-2">
                <div v-if="e.title" class="font-bold md:font-medium">{{ e.title }}</div>
                <div v-if="e.content">{{ e.content }}</div>
                <ul v-if="e.enums" class="marker:text-gray-800/95 list-disc pl-12 mt-1 space-y-3">
                  <li v-for="enumItem of e.enums" class="mt-0.5 list-outside">
                    {{ enumItem }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </Slide>

        <template #addons>
          <Pagination/>
        </template>
      </Carousel>
    </div>

    <!--    <div class="news-background"></div>-->

<!--    -->
  </div>
</template>

<script>
import 'vue3-carousel/carousel.css';
import {Carousel, Pagination, Slide} from "vue3-carousel";

export default {
  name: "news-block",

  components: {
    Carousel, Pagination, Slide
  },

  data() {
    return {

      carouselConfig: {
        itemsToShow: 2.5,
        wrapAround: true,
        ['items-to-show']: 1,
        mouseDrag: true,
        pauseAutoplayOnHover: true,
      },

      news: [
        {
          _id: 1,
          title: 'В декабре завершено более 20 проектов по различным направлениям деятельности компании. ',
          date: '10:00, 01.01.2025',
          p: [
            {
              title: null,
              content: 'Департаментом строительного консалтинга были закрыты очередные этапы финансово-технического надзора за строительством объектов в рамках мониторинга целевого использования кредитных средств для одного из крупнейших российских банков, входящих в тройку лидеров банковского сектора.\nЗаказчиками выступают строительные холдинги - застройщики федерального уровня.',
              enums: []
            },
            {
              title: 'Департаментом оценки были выполнены проекты по оценке:',
              content: null,
              enums: [
                'нематериальных активов дистрибьютора российского и зарубежного медицинского оборудования;',
                'бизнеса ряда компаний (автомобильный бизнес, оптовая торговля специализированным оборудованием и пр.)  для целей предоставления результатов в Правительственную комиссию по иностранным инвестициям;',
                'бизнеса и активов ряда компаний - лидеров строительной отрасли для различных целей, в том числе для формирования бухгалтерской отчетности по российским и международным стандартам, формирования отчетности инвестиционных фондов, находящихся под доверительным управлением;',
                'бизнеса европейской компании(отрасль грузоперевозок',
                'имущества ГОК для целей страхования;',
                'имущества и бизнеса ТЭЦ для одного из энергетических холдингов РФ;',
                'других активов и бизнеса.'
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

.news-background {
  @apply w-[330px] bg-center bg-fixed bg-[url("/assets/background/Everest-mauntain-cut.png")];
}

/*section.carousel {*/
/*  height: fit-content !important;*/
/*}*/

/*div.carousel__viewport {*/
/*  height: fit-content !important;*/
/*}*/

/*.carousel {*/
/*  height: fit-content !important;*/
/*}*/

/*.carousel__viewport {*/
/*  height: fit-content !important;*/
/*}*/

/*ol.carousel__track {*/
/*  height: fit-content !important;*/
/*}*/

/*li.carousel__slide {*/
/*  height: fit-content !important;*/
/*}*/
</style>