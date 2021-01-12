<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="incometax.title" />
      <paragraph>
        <i18n path="incometax.p1.content" tag="p" class="paragraph-sm xl:paragraph">
          <a
          class="italic text-link"
          :href="'http://static.anaf.ro/static/10/Anaf/legislatie/L_227_2015.htm'"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("incometax.p1.law_label") }}
        </a>
        </i18n>
        {{ $t("incometax.p2") }}
      </paragraph>
    </div>
    <faq qanda="incometax.faq.q1" />
    <faq qanda="incometax.faq.q2" />
    <faq qanda="incometax.faq.q3" />
    <faq qanda="incometax.faq.q4" />
    <faq qanda="incometax.faq.q5" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class IncomeTax extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_supportus.jpg',
      title: this.$t('incometax.title')
    })
  }
}
</script>