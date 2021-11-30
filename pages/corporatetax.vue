<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="corporatetax.title" />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class CorporateTax extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_corporatetax.jpg',
      title: this.$t('corporatetax.title')
    })
  }
}
</script>
