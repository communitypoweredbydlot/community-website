<template>
  <article>
    <nuxt-content :document="page" class="prose max-w-none" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class TermsAndConditions extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('TermsAndConditions')(context)
  }
}
</script>
