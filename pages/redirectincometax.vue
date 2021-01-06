<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="redirectincometax.title" />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class RedirectIncomeTax extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_supportus.jpg',
      title: this.$t('redirectincometax.title')
    })
  }
}
</script>