<template>
  <div class="relative w-full bg-gray-50 flex flex-col items-center py-2 md:py-6 lg:py-8">

    <div class="z-10 absolute bottom-[-25vw] md:bottom-[-50vw] blur-sm opacity-20 sm:opacity-10 w-[100vw] md:w-[90vw]">
      <svg viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M416 425.6l78.4 44.8c9.6 6.4 16 16 16 27.2v91.2c0 11.2-6.4 22.4-16 27.2L416 662.4c-9.6 6.4-22.4 6.4-32 0l-78.4-44.8c-9.6-6.4-16-16-16-27.2v-91.2c0-11.2 6.4-22.4 16-27.2l78.4-44.8c9.6-8 22.4-8 32-1.6z" fill="#2F4BFF" /><path d="M643.2 267.2c-3.2-1.6-4.8-1.6-8 0l-67.2 38.4c-3.2 1.6-3.2 4.8-3.2 6.4v76.8c0 3.2 1.6 4.8 3.2 6.4l67.2 38.4c3.2 1.6 4.8 1.6 8 0l67.2-38.4c3.2-1.6 3.2-4.8 3.2-6.4v-76.8c0-3.2-1.6-4.8-3.2-6.4l-67.2-38.4z m9.6-12.8l67.2 38.4c8 4.8 12.8 12.8 12.8 20.8v76.8c0 8-4.8 16-12.8 20.8l-67.2 38.4c-8 4.8-16 4.8-24 0l-67.2-38.4c-8-4.8-12.8-12.8-12.8-20.8v-76.8c0-8 4.8-16 12.8-20.8l67.2-38.4c6.4-4.8 16-4.8 24 0zM688 691.2l-67.2 38.4v76.8l67.2 38.4 67.2-38.4v-76.8L688 691.2z m83.2 9.6c9.6 6.4 16 16 16 27.2v76.8c0 11.2-6.4 22.4-16 27.2L704 873.6c-9.6 6.4-22.4 6.4-32 0l-67.2-38.4c-9.6-6.4-16-16-16-27.2v-76.8c0-11.2 6.4-22.4 16-27.2l67.2-38.4c9.6-6.4 22.4-6.4 32 0l67.2 35.2zM176 169.6v44.8l40 22.4 40-22.4v-44.8l-40-22.4-40 22.4zM275.2 144c8 4.8 12.8 12.8 12.8 20.8v54.4c0 8-4.8 16-12.8 20.8l-48 27.2c-8 4.8-16 4.8-24 0l-48-27.2c-6.4-4.8-11.2-12.8-11.2-20.8v-54.4c0-8 4.8-16 12.8-20.8l48-27.2c8-4.8 16-4.8 24 0L275.2 144zM192 777.6l-48 27.2v54.4l48 27.2 48-27.2v-54.4l-48-27.2z m8-14.4l48 27.2c4.8 3.2 8 8 8 14.4v54.4c0 6.4-3.2 11.2-8 14.4l-48 27.2c-4.8 3.2-11.2 3.2-16 0l-48-27.2c-4.8-3.2-8-8-8-14.4v-54.4c0-6.4 3.2-11.2 8-14.4l48-27.2c4.8-3.2 11.2-3.2 16 0z" fill="#050D42" /><path d="M403.2 776l-62.4 62.4c-1.6 1.6-3.2 1.6-6.4 1.6h-88c-4.8 0-8-3.2-8-8s3.2-8 8-8h84.8l59.2-59.2v-68.8c0-4.8 3.2-8 8-8s8 3.2 8 8v64H576c4.8 0 8 3.2 8 8s-3.2 8-8 8H403.2z m-11.2-436.8l-108.8-94.4c-3.2-3.2-3.2-8-1.6-11.2 3.2-3.2 8-3.2 11.2-1.6l110.4 94.4H528c4.8 0 8 3.2 8 8s-3.2 8-8 8h-120V400c0 4.8-3.2 8-8 8s-8-3.2-8-8v-60.8zM800 728c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8H800z m-49.6-435.2c-3.2 3.2-8 3.2-11.2 1.6-3.2-3.2-3.2-8-1.6-11.2l96-112c3.2-3.2 8-3.2 11.2-1.6 3.2 3.2 3.2 8 1.6 11.2l-96 112zM160 504c-4.8 0-8-3.2-8-8s3.2-8 8-8h112c4.8 0 8 3.2 8 8s-3.2 8-8 8h-112z m536 144c0 4.8-3.2 8-8 8s-8-3.2-8-8V544c0-4.8 3.2-8 8-8s8 3.2 8 8v104z" fill="#050D42" /></svg>
    </div>

    <div class="z-10 text-gray-950 w-full rounded-sm py-4 pb-4 px-4 max-w-[920px]">
      <!--          v-motion-->
      <!--          :initial="{ opacity: 0, scale: 0.85}"-->
      <!--          :enter="{opacity: 1, scale: 1}"-->
      <div
          v-motion
          :initial="{ opacity: 0, scale: 0.85 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="200"
          class="flex items-center text-lg md:text-2xl lg:text-4xl font-bold rounded-sm text-gray-800/95 w-fit">
        Рейтинг нашей компании
      </div>

      <div class="mt-1 lg:mt-4 text-sm lg:text-base w-full">

        <div
            v-motion
            :initial="{ opacity: 0, scale: 0.85 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
        >
          Наши специалисты успешно осуществили и завершили проекты для многих (более 50) компаний из рейтинга «Крупнейшие
          компании России» (рейтинг Эксперт-400).
          Наша компания включена в рейтинг организаций
          <a target="_blank" href="https://raex-rr.com/" class="ml-1 text-blue-600 font-bold">группы RAEX</a>
        </div>

        <div>
          <div class="bg-gray-900/15 mt-2 md:mt-4 h-[1px]"></div>
          <carousel
              v-model="slide"
              class="w-full text-gray-100 rounded-sm mt-2 md:mt-4"
              :transition="750"
              :items-to-show="1"
              :wrapAround="true"
          >
            <slide
                v-for="item of ratingConfig"
                :key="item.id"
                class="cursor-pointer"
            >
              <div class="font-extrabold text-4xl text-blue-600">{{ item.year }}</div>
            </slide>
          </carousel>
          <div class="bg-gray-900/15 mt-2 md:mt-4 h-[1px]"></div>
        </div>
      </div>

      <div class="border-t border-b border-gray-300/15 mt-1 md:mt-2">

        <carousel
            v-model="slide"
            class="text-left rounded-sm bg-gray-200/80 pb-2 mt-1 md:mt-2 lg:mt-4"
            snapAlign="start"
            :transition="950"
            :items-to-show="1"
            :wrapAround="true"
        >
          <slide
              v-for="item of ratingConfig"
              :key="item.id"
              class="cursor-pointer w-full text-left py-4 bg-gray-100 rounded-sm"
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

      <div class="flex flex-wrap justify-between items-start w-full bg-gray-100/50 mt-4 md:mt-8 lg:mt-12">
        <div
            v-motion
            :initial="{ opacity: 0, scale: 0.85 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
            v-for="e of titles"
            :key="e.id"
            class="text-center text-sm lg:text-base w-full sm:w-[30%] text-gray-950 px-2 py-1 rounded-lg"
        >
            <i class="underline text-3xl md:text-4xl mt-3 font-sans select-none cursor-pointer text-blue-600 mr-2 pi h-fit" :class="e.icon"></i>
          <div class="mt-3 sm:mt-4">{{ e.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ratingConfig} from "~/configs/ratingConfig";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import evFooter from "~/components/widgets/ev-footer";

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
      {
        id: 2,
        title: "Эффективное планирование задач в рамках проектов благодаря значительному опыту сотрудников команды.",
        icon: "pi-pencil"
      },
      {
        id: 1,
        title: "Детальное понимание требований к оценочным и консалтинговым продуктам со стороны аудиторских компаний,\n" +
            "коммерческих и инвестиционных банков, страховых компаний.",
        icon: "pi-info-circle",
      },
      {
        id: 3,
        title: "Выполнение проектов в сжатые сроки благодаря существующим наработкам и базе знаний.",
        icon: "pi-database"
      },
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

<style scoped>

</style>