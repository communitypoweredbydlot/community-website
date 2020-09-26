<template>
  <article>
    <nuxt-content :document="page" class="dlot-content-style" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class Statement extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('Statement')(context)
  }
}
</script>
