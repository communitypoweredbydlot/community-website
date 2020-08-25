<template>
  <article>
    <nuxt-content :document="page" class="d-flex flex-column justify-space-between body-1" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class PrivacyPolicy extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('SupportUs')(context)
  }
}
</script>
