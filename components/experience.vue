<template>
  <div>
    <div class="customers-container">

      <div class="customers-sub-container">
       <div
           v-motion
           :initial="{ opacity: 0, scale: 0.85}"
           :enter="{ opacity: 1, scale: 1}"
           :delay="400"
       >
         <div class="customer-title">
           Опыт нашей команды
         </div>
         <div class="chips">
           <div
               v-for="group of getGroups()"
               :key="group.id"
               @click="chipCLick(group.name)"
               :class="{'chip': !isSelected(group.name), 'chip-active': isSelected(group.name)}"
               class="duration-100"
           >
             {{ group.name }}
             <i class="ml-1.5 text-xs pi pi-filter"></i>
           </div>
         </div>
       </div>

        <div class="logotype-images-wrapper duration-100"
             v-motion
             :initial="{ opacity: 0, scale: 0.85}"
             :enter="{ opacity: 1, scale: 1}"
             :delay="600"
        >
          <img
              v-for="companyLogo of getCompaniesLogo()"
              :key="companyLogo.id"
              :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
              class="logo"
              alt="err"
          />
        </div>

      </div>

      <carousel
          :items-to-show="3"
          class="slider hidden sm:block md:hidden min-h-[128px]"
          transition="400"
          autoplay="4000"
          wrapAround
          mouseDrag
          pauseAutoplayOnHover
      >
        <slide
            v-for="companyLogo of getCompaniesLogo()"
            :key="companyLogo.id"
        >
          <img
              class="slide-img"
              :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
              alt="err"
          >
        </slide>
        <template #addons>
          <Navigation/>
        </template>
      </carousel>

      <carousel
          :items-to-show="1"
          class="slider sm:hidden min-h-[128px]"
          transition="400"
          autoplay="4000"
          wrapAround
          mouseDrag
          pauseAutoplayOnHover
      >
        <slide
            v-for="companyLogo of getCompaniesLogo()"
            :key="companyLogo.id"
            class="slide"
        >
          <img
              class="slide-img"
              :src="`/assets/experience_logotypes/${companyLogo.img}.png`"
              alt="err"
          >
        </slide>
        <template #addons>
          <Navigation/>
        </template>
      </carousel>

    </div>

    <evFooter/>
  </div>
</template>

<script>
import {companies} from "../configs/experience";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import evFooter from "~/components/widgets/ev-footer";

export default {
  name: "experience",

  head() {
    return {
      title: "Опыт нашей команды",
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
          content: "https://evcons.ru/experience",
        },
      ],
    }
  },

  data: () => ({
    companies,
    selectedGroups: {},
  }),

  components: {
    evFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  methods: {

    isSelected(name) {
      return this.selectedGroups.hasOwnProperty(name) || false;
    },

    unselect(name) {

      let obj = {};

      Object.keys(this.selectedGroups).forEach(key => {
        if (name === key) return;
        obj[key] = null;
      });

      this.selectedGroups = obj;
    },

    chipCLick(name) {

      let status = this.isSelected(name);

      console.log("status:", status);
      console.log("arr size:", Object.keys(this.selectedGroups).length);

      if (!status) {
        this.selectedGroups[name] = null;
      } else {
        this.unselect(name);
      }

    },

    getGroups() {

      let groups = {};

      this.companies.forEach(company => {
        company.services.forEach(group => {
          groups[group.title] = group;
        });
      });

      return Object.keys(groups).map((groupTitle, i) => ({name: groupTitle, id: i + 1}));
    },

    getCompaniesLogo() {

      const logotypeImageNames = [];

      this.companies.forEach(company => {

        let isExclude = company.services.find(group => {
          return this.selectedGroups.hasOwnProperty(group.title);
        })

        if (isExclude) return;

        logotypeImageNames.push(company.img);
      });

      return logotypeImageNames.map((e, i) => ({id: i + 1, img: e}));
    },

    // getImageURL: (name) => new URL(`../../assets/experience_logotypes/${name}.png`, import.meta.url).href
  },
}
</script>

<style scoped lang="scss">

.customers-container {
  @apply flex flex-col h-[100vh] justify-center gap-y-8 items-center rounded-lg pt-24 md:pt-28;
  background: rgb(17 24 39) center / cover no-repeat fixed url("/assets/background/bg-lines-color.png");
}

.customers-sub-container {
  @apply md:max-w-[7600px] lg:max-w-[960px] xl:max-w-[1100px];
  @apply pt-8 pb-4 sm:py-6 lg:py-14;
  @apply px-4 sm:px-10 lg:px-14;
}

.customer-title {
  @apply text-lg lg:text-2xl;
  @apply font-extrabold text-center text-gray-50;
}

.chips {
  @apply flex flex-wrap justify-center justify-center;
  @apply gap-1.5 mt-6 sm:mt-6 md:mb-4;
  @apply lg:my-8 lg:gap-2;
}

.chip {
  @apply cursor-pointer hover:bg-gray-600/30;
  @apply inline rounded-md border-2 border-gray-700/85 text-gray-50 bg-transparent;
  @apply py-0.5 px-1 text-sm;
  @apply lg:px-2.5 lg:text-base;
}

.chip-active {
  @apply cursor-pointer;
  @apply inline rounded-lg border-2 border-red-900 text-gray-50 bg-red-800;
  @apply py-0.5 px-1 text-sm;
  @apply lg:px-2.5 lg:text-base;
}

.logotype-images-wrapper {
  @apply md:mt-12 lg:mt-16;
  @apply hidden md:flex flex-wrap justify-center;
  @apply md:gap-4 lg:gap-6;
}

.logo {
  @apply opacity-100 max-h-[83px] max-w-[205px];
  @apply md:w-[19.64vw] md:h-[8vw];
  @apply lg:w-[14.73vw] lg:h-[6vw];
}

.slider {
  @apply py-2 sm:py-4 md:hidden w-full bg-transparent border-t border-t-gray-700/90;
}


.slide-img {
  @apply mx-auto w-full max-w-[16rem] md:max-w-[14rem];
}

</style>