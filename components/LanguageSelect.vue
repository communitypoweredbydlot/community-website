<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="#807f81" v-bind="attrs" v-on="on">
        <v-icon left>
          {{ languageSelectionIcon }}
        </v-icon>  {{ $i18n.locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        nuxt
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiWeb } from '@mdi/js'

@Component
export default class LanguageSelect extends Vue {
  languageSelectionIcon = mdiWeb

  get availableLocales () {
    const locales = this.$i18n.locales || []
    return locales.filter((i: any) => i.code !== this.$i18n.locale)
  }
}
</script>
