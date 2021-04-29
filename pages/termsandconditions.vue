<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="terms.title" />
      <section-title path="terms.general.title" />
      <paragraphs path="terms.general.content" />
    </div>
    <div>
      <section-title path="terms.donations.title" />
      <paragraph path="terms.donations.p1" />
      <paragraph>
        <i18n path="terms.donations.p2.content">
          <template #email>
            <a :href="`mailto:${$t('terms.donations.p2.map.email')}`" class="text-link">
              {{ $t('terms.donations.p2.map.email') }}<!--
         --></a>
          </template>
        </i18n>
      </paragraph>
      <list path="terms.donations.p3" />
      <paragraph path="terms.donations.p4" />
      <paragraph path="terms.donations.p5" />
      <paragraph path="terms.donations.p6" />
    </div>
    <div>
      <section-title path="terms.copyright.title" />
      <paragraph path="terms.copyright.p1" />
      <paragraph>
        <i18n path="license.content">
          <template #name>
            <a :href="$t('license.map.name.link')" class="text-link" target="_blank" rel="noopener noreferrer">
              {{ $t('license.map.name.value') }}<!--
        --></a>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="terms.data_protection.title" />
      <paragraph path="terms.data_protection.p1" />
      <paragraph>
        <i18n path="terms.data_protection.p2.content">
          <template #privacy>
            <nuxt-link
              :to="localePath(`${$t('terms.data_protection.p2.map.privacy.link')}`)"
              class="text-link"
            >
              {{ $t('terms.data_protection.p2.map.privacy.value') }}<!--
         --></nuxt-link>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="terms.cookie_policy.title" />
      <paragraph path="terms.cookie_policy.p1" />
      <paragraph>
        <i18n path="terms.cookie_policy.p2.content">
          <template #cookie>
            <nuxt-link
              :to="localePath(`${$t('terms.cookie_policy.p2.map.cookie.link')}`)"
              class="text-link"
            >
              {{ $t('terms.cookie_policy.p2.map.cookie.value') }}<!--
         --></nuxt-link>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="terms.internal_regulations.title" />
      <paragraph>
        <i18n path="terms.internal_regulations.p1.content">
          <template #regulation>
            <nuxt-link
              :to="localePath(`${$t('terms.internal_regulations.p1.map.regulation.link')}`)"
              class="text-link"
            >
              {{ $t('terms.internal_regulations.p1.map.regulation.value') }}<!--
         --></nuxt-link>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="terms.applicable_law.title" />
      <paragraphs path="terms.applicable_law.paragraphs" />
    </div>
    <div>
      <section-title path="terms.final_clauses.title" />
      <paragraph path="terms.final_clauses.p1" />
      <paragraph path="terms.final_clauses.p2" />
      <paragraph>
        <i18n path="terms.final_clauses.p3.content">
          <template #privacy>
            <nuxt-link
              :to="localePath(`${$t('terms.final_clauses.p3.map.privacy.link')}`)"
              class="text-link"
            >
              {{ $t('terms.final_clauses.p3.map.privacy.value') }}
            </nuxt-link>
          </template>
          <template #cookie>
            <nuxt-link
              :to="localePath(`${$t('terms.final_clauses.p3.map.cookie.link')}`)"
              class="text-link"
            >
              {{ $t('terms.final_clauses.p3.map.cookie.value') }}
            </nuxt-link>
          </template>
        </i18n>
      </paragraph>
      <paragraph>
        <i18n path="terms.final_clauses.p4.content">
          <template #email>
            <a :href="`mailto:${$t('terms.final_clauses.p4.map.email')}`" class="text-link">
              {{ $t('terms.final_clauses.p4.map.email') }}<!--
         --></a>
          </template>
        </i18n>
      </paragraph>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class TermsAndConditions extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_home.jpg',
      title: this.$t('terms.title')
    })
  }
}
</script>
