<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text>
        <v-icon left>{{ languageSelectionIcon }}</v-icon> {{ selectedLanguage }}
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

@Component
export default class LanguageSelect extends Vue {
  languageSelectionIcon = mdiWeb

  supportedLanguages = [
    {
      locale: "en",
      text: "English"
    },
    {
      locale: "ro",
      text: "Romana"
    }
  ]

  get languageOptions() {
    return this.supportedLanguages.filter(sl => sl.locale !== this.$store.state.locale)
  }

  get selectedLanguage(): string {
    const sl = this.supportedLanguages.find(sl => sl.locale === this.$store.state.locale)
    return sl ? sl.locale : ""
  }

  selectLanguage(language: { locale: string; text: string }) {
    this.$store.dispatch('setLocale', language.locale)
  }
}
</script>