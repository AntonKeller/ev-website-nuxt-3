<template>
  <div class="experience-container">
    <div class="content-wrapper">

      <div class="text-container">
        <div class="text-container-title">

          <div
              class="text-gray-100 px-2.5 text-lg lg:text-2xl font-bold py-1.5 px-8 bg-gray-800 rounded-lg max-w-fit duration-100"
              v-motion
              :initial="{x: 30, opacity: 0}"
              :visibleOnce="{x: 0, opacity: 1}"
              :delay="250"
          >О компании</div>

          <div
              class="text-center sm:text-left ml-1 text-base lg:text-lg border-b-2 border-b-gray-800/10 pb-3.5 mt-3.5 font-bold font-sans duration-100"
              v-motion
              :initial="{x: 30, opacity: 0}"
              :visibleOnce="{x: 0, opacity: 1}"
              :delay="500"
          >Компания, объединяющая специалистов c большим опытом многолетней деловой репутацией</div>

        </div>

        <div class="flex flex-col lg:flex-row items-start gap-y-8 lg:gap-x-12 text-center pt-8 lg:pt-12">
          <div
              v-for="card of cards"
              :key="card.id"
              class="flex flex-col items-center duration-100"
          >
            <div
                v-motion
                :initial="{x: 30, opacity: 0}"
                :visibleOnce="{x: 0, opacity: 1}"
                :delay="600 + 150 * card.id"
            >
              <i :class="card.iconClass" class="text-5xl text-gray-600"></i>
              <p class="mt-4 lg:mt-8 text-gray-800 font-sans text-sm lg:text-base">{{ card.text }}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "ev-experience-section",

  data: () => ({
    cards: [
      {
        id: 1,
        iconClass: "pi pi-share-alt",
        text: "Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга\n" +
            "«Крупнейшие компании России» (рейтинг Эксперт-400),\n" +
            "совокупная выручка которых за 2008 год превысила 9.3 трлн. руб",
      },
      {
        id: 2,
        iconClass: "pi pi-users",
        text: "Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт\n" +
            "выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими\n" +
            "международными аудиторскими компаниями.",
      },
      {
        id: 3,
        iconClass: "pi pi-star",
        text: "Специалисты Everest являются членами\n" +
            "таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков\n" +
            "(СМАО), Восточно-Европейский союз экспертов (OSV), а также\n" +
            "получили квалификации Американского общества оценщиков(ASA)."
      }
    ]
  })
}

</script>

<style lang="scss" scoped>

.experience-container {
  @apply bg-gradient-to-t from-gray-50;
  @apply relative text-gray-700 md:h-auto lg:min-h-[80vh];
  @apply flex justify-center items-center;
}

.content-wrapper {
  @apply flex flex-col md:flex-row justify-center items-center py-16;
  @apply w-[82vw];
  @apply py-6 sm:py-10 lg:py-14;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(8px);
    opacity: 0.15;
    background: rgba(103, 99, 99, 0.4) top / cover no-repeat fixed url("/assets/background/everest-420.jpg");
  }
}

.chips {
  @apply gap-x-4 text-center md:text-left space-y-2;
}

.panel-image {
  @apply w-[170px] h-[145px];
  @apply sm:w-[212.5px] sm:h-[181.25px];
  @apply md:w-[212.5px] md:h-[181.25px];
  @apply lg:w-[340px] lg:h-[290px];
}

.text-container {
  @apply mt-4 sm:mt-6 text-center sm:text-left md:block;
  @apply w-full max-w-[760px] lg:max-w-[1024px];
  @apply lg:h-full;
}

.text-container-title {
  @apply flex flex-col items-center sm:items-start;
}

.experience-box {
  @apply w-full overflow-y-scroll;
  @apply h-[40vh] lg:h-full;
  @apply hidden md:flex flex-wrap justify-around lg:justify-evenly items-stretch;
  @apply md:gap-3 lg:gap-2;
}

.experience-element {
  @apply flex flex-col justify-around border-4 border-gray-300;
  @apply bg-gray-900 rounded-xl;
  @apply min-h-[215px];
  @apply md:w-[34vw] lg:w-[23.5vw] xl:w-[17.5vw] xl:max-w-[280px];
}

.experience-element:hover {
  @apply scale-95 duration-100;
}

.experience-element--services {
  @apply flex flex-wrap justify-center gap-1;
}

.service {
  @apply rounded-xl bg-gray-50 py-0.5 px-1.5;
  @apply text-gray-900 text-xs md:text-sm;
}

.slider {
  @apply md:hidden max-w-full text-center bg-gray-900 rounded-xl mt-6;
  @apply border-4 border-gray-300;
  @apply min-h-[170px] sm:min-h-[190px];
}

</style>
