import {resolve} from "path";
import {fileURLToPath} from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({

  devtools: { enabled: true },

  target: 'static',

  router: {
    base: '/ev.nuxt.website.page/'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  alias: {
    '~/*': './'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Оценочная компания ООО "Эверест Консалтинг", работаем с 2010 года.',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: "Занимаемся оценкой нематериальных активов, оценка бизнеса, Оценка материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.). Для целей страхования,кредитования под залог, Переоценка основных средств для целей бухгалтерского учета и подготовки финансовой   отчетности в соответствии с требованиями РСБУ / ПБУ"
      },
      {name: 'format-detection', content: 'telephone=+79516962121'},
      {name: 'author', content: 'ООО "Эверест консалтинг" '}
    ],

    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon_16x16.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/sf-pro-display",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  transition: {
    name: "test",         //	Строка	"page"	Название перехода, применяется для всех маршрутов приложения.
    mode: "out-in",       //	Строка	"out-in"	Режим перехода, применяется для всех маршрутов приложения документация Vue.js.
    // css: "",              //	Булевское	true	Указывает, добавлять или нет CSS-класс для анимации перехода. По-умолчанию — true. Если установлен в false, то будет вызываеться только JavaScript-хуки, которые зарегистрированы через события компонентов.
    // type: "",             //	Строка	n/a	Тип события, которое вызывается при завершении анимации перехода. Доступные значения: "transition" и "animation". Если не указан, то автоматически будет выбран с дольшей продолжительностью.
    enterClass: "transition-start",       //	Строка	n/a	Название CSS-класса для начального состояния анимации перехода. См. документацию Vue.js
    enterToClass: "transition-end",     //	Строка	n/a	Название CSS-класса для конечного состояния анимации перехода. См. документацию Vue.js
    // enterActiveClass: "", //	Строка	n/a	Название CSS-класса, применяемого в течение анимации перехода. См. документацию Vue.js
    // leaveClass: "",       //	Строка	n/a	Название CSS-класса для начального состояния анимации перехода. См. документацию Vue.js
    // leaveToClass: "",     //	Строка	n/a	Название CSS-класса для конечного состояния анимации перехода. См. документацию Vue.js
    // leaveActiveClass: "", //	Строка	n/a	Название CSS-класса, применяемого в течение анимации перехода. См. документацию Vue.js
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }

})
