import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import i18n from '@/i18n'
import SupportedLocales from '@/supported-locales'
import Root from '@/components/Root.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
    if (SupportedLocales.find(l => l.locale === to.params.locale)) {
      if (i18n.locale !== to.params.locale) {
        i18n.locale = to.params.locale
      }
      return next()
    }
    return next(process.env.VUE_APP_I18N_LOCALE)
  }
)


export default router
