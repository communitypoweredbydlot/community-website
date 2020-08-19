<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text>
        <v-icon left>{{ languageSelectionIcon }}</v-icon> {{ selectedLanguage() }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in languageOptions"
        :key="index"
        @click="selectLanguage(item)"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mdiWeb } from '@mdi/js'
import SupportedLocales from '@/supported-locales'

@Component
export default class LanguageSelect extends Vue {
  languageSelectionIcon = mdiWeb

  get languageOptions() {
    return SupportedLocales
  }

  selectedLanguage(): string {
    const sl = SupportedLocales.find(sl => sl.locale === this.$i18n.locale)
    return sl ? sl.locale : ''
  }

  selectLanguage(language: { locale: string; text: string }) {
      if (this.$i18n.locale !== language.locale) {
        this.$i18n.locale = language.locale;
        const to = this.$router.resolve({ params: {locale: language.locale} })
        console.log(to.location)
        this.$router.push(to.location)
    }
  }
}
</script>