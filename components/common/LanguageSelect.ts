import { Component, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class LanguageSelect extends Vue {
  isOpen = false

  get availableLocales () {
    const locales = this.$i18n.locales || []
    return locales.filter((i: any) => i.code !== this.$i18n.locale)
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
