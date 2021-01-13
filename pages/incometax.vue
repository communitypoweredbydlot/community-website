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
    <div>
      <section-title path="incometax.form.title" />
      <paragraph path="incometax.form.p1" :margin-bottom="false"/>
      <ul>
        <li
          v-for="(value, index) in $t('incometax.form.list')"
          :key="index"
          class="mb-1 paragraph-sm xl:paragraph"
        >
          {{ value }}
        </li>
      </ul>  
    </div>
    <div>
      <section-title path="incometax.procedure.title" />
       <paragraph :margin-bottom="false">
        <i18n path="incometax.procedure.download.content" tag="p" class="paragraph-sm xl:paragraph">
          <a
          class="italic text-link"
          :href="''"
          target="_blank"
          rel="noopener noreferrer"
          >
            {{ $t("incometax.procedure.download.form_label") }}
          </a>
        </i18n>
      </paragraph>
      <paragraph path="incometax.procedure.p1" :margin-bottom="false"/>
      <ul>
        <li class="mb-1 paragraph-sm xl:paragraph"> {{ $t("incometax.procedure.options.o1") }}</li>
        <li class="mb-1 paragraph-sm xl:paragraph">
          <i18n path="incometax.procedure.options.o2.content" tag="p" class="paragraph-sm xl:paragraph">
            <a
              class="italic text-link"
              :href="'https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm'"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t("incometax.procedure.options.o2.administrations_label") }}
            </a>
        </i18n>
        </li>
        <li class="mb-1 paragraph-sm xl:paragraph"> {{ $t("incometax.procedure.options.o3") }}</li>
        <li class="mb-1 paragraph-sm xl:paragraph"> {{ $t("incometax.procedure.options.o4") }}</li>
      </ul>
      <paragraph :margin-bottom="false">
        <i18n path="incometax.procedure.gdpr.content" tag="p" class="paragraph-sm xl:paragraph">
          <a
          class="italic text-link"
          :href="''"
          target="_blank"
          rel="noopener noreferrer"
          >
            {{ $t("incometax.procedure.gdpr.document_label") }}
          </a>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="incometax.deadline.title" />
      <paragraph :margin-bottom="false">
        <i18n path="incometax.deadline.p1.content" tag="p" class="paragraph-sm xl:paragraph">
          <a
          class="italic text-link"
          :href="'http://cdep.ro/pls/proiecte/upl_pck.proiect?idp=18123'"
          target="_blank"
          rel="noopener noreferrer"
          >
            {{ $t("incometax.deadline.p1.link_label") }}
          </a>
        </i18n>
      </paragraph>
      <paragraph path="incometax.deadline.p2" :margin-bottom="false"/>
    </div>
    <div>
      <section-title path="incometax.howto.title" />
      <paragraph path="incometax.howto.p1" :margin-bottom="false"/>
      <ul>
        <li
          v-for="(value, index) in $t('incometax.howto.list')"
          :key="index"
          class="mb-1 paragraph-sm xl:paragraph"
        >
          {{ value }}
        </li>
      </ul>
      <paragraph path="incometax.howto.p2" :margin-bottom="false"/>  
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