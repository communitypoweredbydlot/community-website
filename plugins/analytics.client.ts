import Vue from 'vue'
import VueGtag from 'vue-gtag'

import { Plugin } from '@nuxt/types'

const analytics: Plugin = (context) => {
  const config = context.$config.analytics || {}
  Vue.use(VueGtag, config, context.app.router)
}

export default analytics
