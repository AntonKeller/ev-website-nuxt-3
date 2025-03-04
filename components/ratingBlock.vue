<template>
  <div class="square relative w-full bg-gray-50 flex flex-col items-center py-2 md:py-6 lg:py-8 overflow-hidden">

<!--    <div class="bg-flashes"></div>-->

    <div class="z-10 text-gray-950 w-full rounded-sm py-4 pb-4 px-4 max-w-[920px]">
      <div
          v-motion
          :initial="{ opacity: 0, translateX: -30}"
          :visible="{ opacity: 1, translateX: 0}"
          :duration="600"
          :delay="400"
          class="flex items-center text-lg md:text-2xl lg:text-4xl font-bold rounded-sm text-gray-800/95 w-fit">
        Рейтинг нашей компании
      </div>

      <div class="mt-1 lg:mt-4 text-sm lg:text-base w-full">

        <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible="{ opacity: 1, scale: 1 }"
            :duration="500"
            :delay="900"
        >
          Наши специалисты успешно осуществили и завершили проекты для многих (более 50) компаний из рейтинга
          «Крупнейшие
          компании России» (рейтинг Эксперт-400).
          Наша компания включена в рейтинг организаций
          <a target="_blank" href="https://raex-rr.com/" class="ml-1 text-red-600 font-bold">группы RAEX</a>
        </div>

        <div>
          <div class="bg-gray-900/15 mt-2 md:mt-4 h-[1px]"></div>

          <div class="flex justify-between items-center w-full">
            <i class="select-none text-gray-800/70 pi pi-angle-left h-fit"></i>
            <carousel
                v-model="slide"
                class="w-full rounded-sm py-2 md:py-3.5"
                :transition="750"
                :items-to-show="1"
                :wrapAround="true"
            >
              <slide v-for="item of ratingConfig" :key="item.id" class="cursor-pointer">
                <div class="font-extrabold text-4xl text-blue-600">{{ item.year }}</div>
              </slide>
            </carousel>
            <i class="select-none text-gray-800/70 pi pi-angle-right h-fit"></i>
          </div>

          <div class="bg-gray-900/15 h-[1px]"></div>
        </div>

      </div>

      <div class="border-l border-r border-gray-300/15 mt-1 md:mt-2">

        <carousel
            v-model="slide"
            class="text-left rounded-sm bg-transparent pb-2 mt-1 md:mt-2 lg:mt-4"
            snapAlign="start"
            :transition="950"
            :items-to-show="1"
            :wrapAround="true"
        >
          <slide
              v-for="item of ratingConfig"
              :key="item.id"
              class="cursor-pointer w-full text-left py-10 border border-gray-200/75 bg-gray-100/75 backdrop-blur-md rounded"
          >
            <div class="flex items-center sm:items-start justify-start flex-col text-left">
              <div
                  v-for="e of item.infoByYear"
                  class="flex flex-col text-center sm:flex-row items-center sm:justify-start text-gray-900 text-sm mt-1.5"
              >
                <div class="font-extrabold text-2xl mr-2 sm:mr-6 text-blue-600 text-right sm:w-[40px]">
                  {{ e.value }}
                </div>
                <div>
                  {{ e.title }}
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <Pagination/>
          </template>
        </carousel>
      </div>

      <div class="flex flex-wrap justify-between items-start w-full bg-transparent mt-4 md:mt-8 lg:mt-12">
        <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :duration="400"
            :delay="400"
            v-for="e of titles"
            :key="e.id"
            class="text-center text-sm lg:text-base w-full sm:w-[30%] text-gray-950 px-2 py-1 rounded-lg"
        >
          <i class="underline text-3xl md:text-4xl mt-3 font-sans select-none cursor-pointer text-blue-600 mr-2 pi h-fit"
             :class="e.icon"></i>

          <div class="mt-3 sm:mt-4">{{ e.title }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import evFooter from "~/components/widgets/ev-footer";
import {ratingConfig} from "~/configs/ratingConfig";
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "ratingBlock",
  head() {
    return {
      title: "Рейтинги",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "специалисты Everest Consulting успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб. Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями. Специалисты Компании Everest Consulting являются членами таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО),  Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков (ASA)",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: "Крупнейшие компании Россиирейтинг Эксперт-400 Everest Consulting Артель старателей «Селигдар», Группа Магнезит, Группа МЕЧЕЛ, Объединённая металлургическая компания, РУСАЛ, Сибирская угольно-энергетическая компания (СУЭК) Альфа-Банк, Банк ВТБ Северо-Запад, Банк «Санкт-Петербург», Банк Сосьете Женераль Восток, Внешэкономбанк, ВТБ, ВТБ 24, Коммерцбанк, МДМ Банк, Райффайзенбанк, Россельхозбанк, Сбербанк России, ЮниКредит Банк, Брансвик Рейл Лизинг Glencairn, АльфаСтрахование, Ингосстрах, Росгосстрах, СОГАЗ, Страховая группа «Капитал» АПК «ОГО», Моссельпром, Группа компаний «НИДАН», Объединенные кондитеры, САХО Группа компаний «Виктория», Группа компаний «НЕЗАВИСИМОСТЬ», РОЛЬФ Холдинг, X5 Ритейл Груп, Холдинг Марта (торговая сеть Spar, Mosmart) Coalco, Mirax Group, Горки-8, ДОН-Строй, Инвестиционно-строительная компания «NBM – Стройсервис», Интеко, Рублёво-Архангельское, Система Галс, СУ-155 RRR («3Р»), ГК «Трансбункер», Дальневосточное морское пароходство, ИСТ ЛАЙН (Международный аэропорт Домодедово), Кавминводыавиа, Магистральнефтеоргсинтез, Международный аэропорт Шереметьево, Российские железные дороги Газпром, Интегра Golden Telecom, ВымпелКом, Мобильные ТелеСистемы, СМАРТС, Связьинвест Русские Фонды Дальневосточная энергетическая компания, Интер-РАО ЕЭС, ЛуТЭК, ОГК-1, Росэнергоатом, РусГидро, ТГК-5 Ангарский электролизный химический комбинат, Ефремовский завод синтетического каучука, Кирово-Чепецкий Химический комбинат, Минерально-Химическая компания «Еврохим», Производственное объединение Электрохимический завод, Сибирский химический комбинат, Уральский электрохимический комбинат",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://evcons.ru/rating",
        },
      ],
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    evFooter,
  },
  data: () => ({
    slide: 1,
    number: 0,
    ratingConfig,
    currentRating: [],
    activeYear: 2024,
    yearMax: null,
    yearMin: null,
    inProcess: false,
    titles: [
      // {
      //   id: 2,
      //   title: "Эффективное планирование задач в рамках проектов благодаря значительному опыту сотрудников команды.",
      //   icon: "pi-pencil"
      // },
      // {
      //   id: 1,
      //   title: "Детальное понимание требований к оценочным и консалтинговым продуктам со стороны аудиторских компаний,\n" +
      //       "коммерческих и инвестиционных банков, страховых компаний.",
      //   icon: "pi-info-circle",
      // },
      // {
      //   id: 3,
      //   title: "Выполнение проектов в сжатые сроки благодаря существующим наработкам и базе знаний.",
      //   icon: "pi-database"
      // },
      // {
      //   id: 4,
      //   title: "Оптимальное соотношение «цена-качество».",
      //   icon: "pi-check-circle"
      // },
      // {
      //   id: 5,
      //   title: "Возможность привлечения к выполнению проектов специалистов,\n" +
      //       "обладающих международными квалификациями и опытом в различных областях знаний.",
      //   icon: "pi-users"
      // },
    ],
  }),
}
</script>

<style>

.bg-flashes {
  position: absolute;
  background: url("/assets/background/office-building.png") center/contain no-repeat;
  @apply w-[300px] h-[400px] md:w-[450px] md:h-[550px]  lg:w-[500px] lg:h-[600px] lg:w-[600px] lg:h-[700px]  left-[-100px] bottom-[0];
  bottom: 0;
  /*background-blend-mode: multiply;*/
}

/*background around.webp*/

@keyframes ch-color-1 {
  from {
    fill: #1600dc;
    @apply text-cyan-700;
  }
  to {
    fill: #a422b2;
    @apply text-gray-700;
  }
}
</style>

<!--fill="#FF00FF"-->