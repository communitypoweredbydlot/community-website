import en from './locales/en.json'
import ro from './locales/ro.json'

export default {
  target: 'static',
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [
    '@/plugins/global-components.ts',
    '@/plugins/on-click-outside.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@aceforth/nuxt-optimized-images'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-clipboard2'
  ],
  content: {},
  router: {
    linkExactActiveClass: 'text-dlot-teal'
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'ro',
        iso: 'ro',
        name: 'Română'
      }
    ],
    defaultLocale: 'ro',
    vueI18n: {
      fallbackLocale: 'ro',
      messages: {
        en,
        ro
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: [200, 300, 400, 500, 600, 700],
      Comfortaa: [300, 400, 500, 600, 700]
    },
    display: 'swap',
    download: true,
    overwriting: true
  },
  sitemap: {
    hostname: 'https://asociatiacommunity.ro',
    gzip: true,
    i18n: {
      locales: ['ro', 'en'],
      routesNameSeparator: '___'
    }
  },
  googleAnalytics: {
    id: 'UA-179251811-1',
    autoTracking: {
      screenview: true
    }
  },
  build: {
    babel: {
      presets ({ _isServer }) {
        return [
          [
            '@nuxt/babel-preset-app', { loose: true }
          ]
        ]
      }
    }
  }
}
