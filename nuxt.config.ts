// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: {enabled: true},

  ssr: true,

  app: {
      head: {

          title: 'Консалтинговая компания ООО "Эверест Консалтинг", работаем с 2010 года.',

          htmlAttrs: {
              lang: 'ru'
          },

          meta: [
              {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1'
              },
              {
                  charset: 'utf-8'
              },
              {
                  hid: 'description',
                  name: 'description',
                  content: "Оценка, строительный консалтинг, финансовый консалтинг, налоговый и юридический due dilligence"
              },
              // Оценка нематериальных активов, оценка бизнеса, Оценка материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.). Для целей страхования,кредитования под залог, Переоценка основных средств для целей бухгалтерского учета и подготовки финансовой отчетности в соответствии с требованиями РСБУ / ПБУ
              {
                  name: 'format-detection',
                  content: 'telephone=+79516962121'
              },
              {
                  name: 'author',
                  content: 'ООО "Эверест консалтинг"'
              }
          ],

          link: [
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com',
              },
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com',
              },
              {
                //  Golos
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap'
              },
              {
                  // Robo
                  rel: 'stylesheet',
                  href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              },
              {
                  // Montserrat
                  rel: 'stylesheet',
                  href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
              },
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
                  href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
              },
          ]
      },
  },

  typescript: {
      typeCheck: true
  },

  css: [
      '/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxtjs/robots'],

  robots: {
      UserAgent: '*',
      Disallow: ''
  },

  tailwindcss: {
      exposeConfig: true,
      viewer: true,
  },

  runtimeConfig: {
      public: {
          motion: {
              directives: {
                  'pop-bottom': {
                      initial: {
                          scale: 0,
                          opacity: 0,
                          y: 100,
                      },
                      visible: {
                          scale: 1,
                          opacity: 1,
                          y: 0,
                      }
                  }
              }
          }
      }
  },

  compatibilityDate: '2025-01-22'
})