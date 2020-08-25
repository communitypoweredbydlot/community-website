<template>
  <article>
    <nuxt-content :document="page" class="d-flex flex-column justify-space-between body-1 ourstory" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class PrivacyPolicy extends Vue {
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
