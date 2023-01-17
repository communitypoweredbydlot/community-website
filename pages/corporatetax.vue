<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="corporatetax.title" />
      <section-title path="corporatetax.categories.entities.title" :margin-bottom="false" />
      <paragraph path="corporatetax.categories.entities.p1" :margin-bottom="false" />
      <paragraph path="corporatetax.categories.entities.p2" />
      <section-title path="corporatetax.categories.micro.title" :margin-bottom="false" />
      <paragraph path="corporatetax.categories.micro.p1" :margin-bottom="false" />
      <paragraph path="corporatetax.categories.micro.p2" />
      <section-title path="corporatetax.categories.independent.title" :margin-bottom="false" />
      <paragraph path="corporatetax.categories.independent.p1" />
      <section-title path="corporatetax.aspects.title" :margin-bottom="false" />
      <paragraph path="corporatetax.aspects.p1" :margin-bottom="false" />
      <paragraph path="corporatetax.aspects.p2" />
      <section-title path="corporatetax.details.title" />
      <i18n path="corporatetax.details.guide.content" tag="p" class="paragraph-sm xl:paragraph">
        <template #guide>
          <a class="text-link" :href="$t('corporatetax.details.guide.map.guide.link')" target="_blank" rel="noopener noreferrer">{{ $t('corporatetax.details.guide.map.guide.label') }}</a>
        </template>
      </i18n>
      <i18n path="corporatetax.details.contract.content" tag="p" class="paragraph-sm xl:paragraph">
        <template #contract>
          <a class="text-link" :href="$t('corporatetax.details.contract.map.contract.link')" target="_blank" rel="noopener noreferrer">{{ $t('corporatetax.details.contract.map.contract.label') }}</a>
        </template>
      </i18n>
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
