<template>
  <div class="bg-container">
    <div class="rating-container">

      <div
          class="text-gray-300 w-full bg-sky-950/75 rounded-lg py-4 mt-6 max-w-[920px] shadow-lg duration-100"
          v-motion
          :initial="{ opacity: 0, scale: 0.85}"
          :enter="{ opacity: 1, scale: 1}"
          :delay="250"
      >
        <div class="px-2.5 py-2 bg-blue-500/20 rounded-sm text-gray-100 ml-6 w-fit">
          <i class="text-md select-none mr-2 pi pi-chart-line h-fit"></i>
          <span class="text-sm lg:text-base font-medium">Наша цель</span>
        </div>
        <div class="mt-2 px-6 text-sm lg:text-base">
          Оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового,
          управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
          значительным опытом выполнения подобных проектов как в России, так и за рубежом.
        </div>
      </div>
      <div
          class="text-gray-300 w-full bg-sky-950/75 rounded-lg py-4 pb-4 px-6 max-w-[920px] shadow-lg duration-100"
          v-motion
          :initial="{ opacity: 0, scale: 0.85}"
          :enter="{ opacity: 1, scale: 1}"
          :delay="500"
      >
        <div class="flex items-center px-2.5 py-2 bg-blue-500/20 rounded-sm text-gray-100 w-fit">
          <i class="text-md select-none text-sky-500 mr-2 pi pi-user h-fit"></i>
          <span class="text-sm lg:text-base font-medium">Наши специалисты</span>
        </div>
        <div class="mt-2 text-sm lg:text-base">
          Успешно осуществили и завершили проекты для многих (более 50) компаний из рейтинга «Крупнейшие
          компании России» (рейтинг Эксперт-400).
          Наша компания включена в рейтинг организаций
          <span class="text-sky-500">группы RAEX</span>
          <div class="w-fit">
            <a href="https://raex-rr.com/">
              <img class="mt-1.5" src="/assets/logotypes/logo_raex.png" alt="img">
            </a>
          </div>
        </div>

        <div class="border-t border-b border-gray-300/15 mt-8 py-6">
          <carousel :items-to-show="1"
                    class="min-h-[300px] w-full text-gray-100 rounded-sm">
            <slide v-for="item of ratingConfig" :key="item.id" class=" py-4">
              <div class="text-left">
                <div class="font-extrabold text-xl mb-4">
                  Год определение рейтинга <span class="font-extrabold text-2xl mr-2 text-blue-500 underline">{{ item.year }}</span>
                </div>
                <div v-for="e of item.infoByYear" class="text-sm mt-1.5">
                  <span class="font-extrabold text-2xl mr-6 text-blue-500 text-right">{{ e.value }}</span>
                  <span>{{ e.title }}</span>
                </div>
              </div>
            </slide>
            <template #addons>
              <Pagination/>
            </template>
          </carousel>
        </div>


      </div>
      <div class="flex flex-wrap justify-stretch gap-2 md:gap-6 max-w-[920px]">
        <div
            v-for="e of titles"
            :key="e.id"
            class="text-sm lg:text-base w-full sm:w-[30%] text-gray-300 w-full bg-sky-950/75 px-6 py-4 rounded-lg text-left shadow-lg duration-100"
            v-motion
            :initial="{opacity: 0}"
            :enter="{opacity: 1}"
            :delay="250 + 150 * e.id"
        >
          <i class="text-xl select-none cursor-pointer text-blue-500 ml-8 mr-2 pi h-fit" :class="e.icon"></i>
          {{ e.title }}
        </div>
      </div>
    </div>
    <evFooter/>
  </div>
</template>

<script>
import {ratingConfig} from "~/configs/ratingConfig";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import evFooter from "~/components/widgets/ev-footer";

export default {
  name: "rating",

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
    number: 0,
    ratingConfig,
    currentRating: [],
    activeYear: 2024,
    yearMax: null,
    yearMin: null,
    inProcess: false,
    titles: [
      {
        id: 1,
        title: "Детальное понимание требований к оценочным и консалтинговым продуктам со стороны аудиторских компаний,\n" +
            "коммерческих и инвестиционных банков, страховых компаний.",
        icon: "pi-info-circle",
      },
      {
        id: 2,
        title: "Эффективное планирование задач в рамках проектов благодаря значительному опыту сотрудников команды.",
        icon: "pi-pencil"
      },
      {
        id: 3,
        title: "Возможность выполнения проектов в сжатые сроки благодаря существующим наработкам и базе знаний.",
        icon: "pi-database"
      },
      {
        id: 4,
        title: "Оптимальное соотношение «цена-качество».",
        icon: "pi-check-circle"
      },
      {
        id: 5,
        title: "Возможность привлечения к выполнению проектов специалистов,\n" +
            "обладающих международными квалификациями и опытом в различных областях знаний.",
        icon: "pi-users"
      },
    ],
  }),

  mounted() {
    this.setYearMax();
    this.setRatingByYear();
  },

  methods: {

    setYearMax() {
      this.yearMax = this.ratingConfig.map(e => e.year).sort((a, b) => a < b ? 1 : -1)?.shift();
      this.yearMin = this.ratingConfig.map(e => e.year).sort((a, b) => a > b ? 1 : -1)?.shift();
    },

    setRatingByYear() {
      this.currentRating = this.ratingConfig
          ?.find(rElement => rElement.year === this.activeYear)?.infoByYear
          ?.map(e => ({title: e.title, value: e.value}));
      this.update();
    },

    update() {
      this.inProcess = true;
      this.currentRating.forEach((e, eI) => {
        this.outNum(
            e.value,
            eI,
            Math.floor(400 + Math.random() * 200)
        );
      });
    },

    outNum(num, index, time) {
      if (num > 0) {
        const step = 1;
        this.currentRating[index].value = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
          this.currentRating[index].value = this.currentRating[index].value + step;
          if (this.currentRating[index].value == num) clearInterval(interval);
        }, t);
      }
      this.updateStatus();
    },

    updateStatus() {
      let timeout = setTimeout(() => {
        this.inProcess = false;
        clearInterval(timeout);
      }, 500)
    },

    prevYear() {
      if (!this.inProcess && this.activeYear > 2011) {
        this.activeYear -= 1;
        this.setRatingByYear();
      }
    },

    nextYear() {
      if (!this.inProcess && this.activeYear < 2024) {
        this.activeYear += 1;
        this.setRatingByYear();
      }
    },

  },
}
</script>

<style lang="scss" scoped>

.bg-container {
  @apply z-10;
  background: top / cover no-repeat fixed url("/assets/background/everest-420-blur.png");
}

.ddd:hover a {
  transform: translateX(150px);
}

.rating-container {
  @apply z-10 flex flex-col items-center gap-y-2 md:gap-y-6;
  @apply bg-cyan-950/80 gap-x-4 min-h-[100vh];
  @apply px-3 lg:px-16;
  @apply pt-24 pb-4 md:pb-8 sm:pt-28 lg:pt-32;

  &::-webkit-scrollbar {
    width: 0;
    visibility: hidden;
  }
}

</style>
