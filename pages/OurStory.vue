<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class OurStory extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('OurStory')(context)
  }
}
</script>

<style>
.ourstory .v-image {
  margin-bottom: 10px;
}
</style>
