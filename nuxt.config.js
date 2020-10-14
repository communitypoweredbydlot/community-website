import tailwindTypography from '@tailwindcss/typography'

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
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  content: {},
  router: {
    linkExactActiveClass: 'text-teal-500'
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
        name: 'Romana'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        ro
      }
    }
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
      },
      theme: {
        extend: {
          fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            'dlot-logo': ['Comfortaa', 'sans-serif']
          },
          colors: {
            'dlot-teal': '#16a99f',
            gray: {
              '100': '#f5f5f5',
              '200': '#eeeeee',
              '300': '#e0e0e0',
              '400': '#bdbdbd',
              '500': '#9e9e9e',
              '600': '#757575',
              '700': '#616161',
              '800': '#424242',
              '900': '#212121'
            }
          }
        }
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: true
    },
    display: 'swap'
  },
  sitemap: {
    hostname: 'https://asociatiacommunity.ro',
    gzip: true,
    i18n: {
      locales: ['en', 'ro'],
      routesNameSeparator: '___'
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
