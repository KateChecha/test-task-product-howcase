// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      include: ['../types/**/*.d.ts']
    },
    sharedTsConfig: {
      include: ['../types/**/*.d.ts']
    }
  },
  components: true,
  
  css: [
    '~/assets/styles/main.scss'
  ],
  
  app: {
    head: {
      title: 'Product Showcase',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})
