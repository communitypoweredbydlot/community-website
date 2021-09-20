
import { LocaleObject } from '@nuxtjs/i18n/types'
import { Component, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class LanguageSelectLogic extends Vue {
  isOpen = false

  get availableLocales () {
    const locales: Array<String | LocaleObject> = this.$i18n.locales || []
    return locales.filter((i: string | any) => {
      const code = i instanceof String ? i : i.code
      return code !== this.$i18n.locale
    })
  }

  onClickOutside () {
    if (this.isOpen) {
      this.isOpen = false
    }
  }

  @Watch('$route')
  afterRouteChanged () {
    this.isOpen = false
  }
}
