<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class SupportUs extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('SupportUs')(context)
  }
}
</script>
