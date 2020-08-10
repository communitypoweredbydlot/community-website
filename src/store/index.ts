import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/i18n'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage
})

class XStore<S> extends Vuex.Store<S> {
  vm!: Promise<S>

  replaceState (state: S): void {
    super.replaceState(state)
    this.vm = Promise.resolve(state)
  }

  get restoredState (): Promise<S> {
    return this.vm
  }
}

Vue.use(Vuex)

export default new XStore({
  state: {
    locale: i18n.locale
  },
  mutations: {
    locale(state: any, locale: any) {
      state.locale = locale
    }
  },
  actions: {
    setLocale({ commit }, locale) {
      i18n.locale = locale
      commit('locale', locale)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
