<template>
  <article>
    <nuxt-content :document="page" class="prose max-w-none lg:prose-xl" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class JoinOurTeam extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('JoinOurTeam')(context)
  }
}
</script>
