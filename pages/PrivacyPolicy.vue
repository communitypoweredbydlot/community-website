<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PrivacyPolicy extends Vue {
  async asyncData (context: any) {
    const { $content, app } = context
    const page = await $content(`${app.i18n.locale}/PrivacyPolicy`)
      .fetch()
      .catch((_err: any) => {
        return $content(`${app.i18n.defaultLocale}/PrivacyPolicy`).fetch()
      })
    return {
      page
    }
  }
}
</script>
