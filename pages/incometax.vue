<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="incometax.title" />
      <paragraph>
        <i18n path="incometax.p1.content" tag="p" class="paragraph-sm xl:paragraph">
          <template #document>
            <a class="text-link" :href="$t('incometax.p1.map.document.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.p1.map.document.label') }}</a>
          </template>
        </i18n>
        {{ $t("incometax.p2") }}
      </paragraph>
    </div>
    <div>
      <section-title path="incometax.form.title" />
      <paragraph path="incometax.form.p1" :margin-bottom="false" />
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
          <template #form>
            <a class="text-link" :href="$t('incometax.procedure.download.map.form.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.procedure.download.map.form.label') }}</a>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="incometax.procedure.p1" :margin-bottom="false" />
      <ul>
        <li class="mb-1 paragraph-sm xl:paragraph">
          {{ $t("incometax.procedure.options.o1") }}
        </li>
        <li class="mb-1 paragraph-sm xl:paragraph">
          <i18n path="incometax.procedure.options.o2.content" tag="p" class="paragraph-sm xl:paragraph">
            <template #administrations>
              <a class="text-link" :href="$t('incometax.procedure.options.o2.map.administrations.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.procedure.options.o2.map.administrations.label') }}</a>
            </template>
          </i18n>
        </li>
        <li class="mb-1 paragraph-sm xl:paragraph">
          {{ $t("incometax.procedure.options.o3") }}
        </li>
        <li class="mb-1 paragraph-sm xl:paragraph">
          {{ $t("incometax.procedure.options.o4") }}
        </li>
      </ul>
      <paragraph :margin-bottom="false">
        <i18n path="incometax.procedure.gdpr.content" tag="p" class="paragraph-sm xl:paragraph">
          <template #document>
            <a class="text-link" :href="$t('incometax.procedure.gdpr.map.document.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.procedure.gdpr.map.document.label') }}</a>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div>
      <section-title path="incometax.deadline.title" />
      <paragraph :margin-bottom="false">
        <i18n path="incometax.deadline.p1.content" tag="p" class="paragraph-sm xl:paragraph">
          <template #law>
            <a class="text-link" :href="$t('incometax.deadline.p1.map.law.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.deadline.p1.map.law.value') }}</a>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="incometax.deadline.p2" :margin-bottom="false" />
    </div>
    <div>
      <section-title path="incometax.howto.title" />
      <paragraph path="incometax.howto.p1" :margin-bottom="false" />
      <ul>
        <li class="mb-1 paragraph-sm xl:paragraph">
          <i18n path="incometax.howto.options.o1.content" tag="p" class="paragraph-sm xl:paragraph">
            <template #video>
              <a class="text-link" :href="$t('incometax.howto.options.o1.map.video.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.howto.options.o1.map.video.value') }}</a>
            </template>
          </i18n>
        </li>
        <li class="mb-1 paragraph-sm xl:paragraph">
          {{ $t('incometax.howto.options.o2') }}
        </li>
      </ul>
      <paragraph :margin-bottom="false">
        <i18n path="incometax.howto.p2.content" tag="p" class="paragraph-sm xl:paragraph">
          <template #here>
            <a class="text-link" :href="($t('incometax.howto.p2.map.here.link'))" target="_blank" rel="noopener noreferrer">{{ $t('incometax.howto.p2.map.here.value') }}</a>
          </template>
          <template #filled_form>
            <a class="text-link" :href="$t('incometax.howto.p2.map.filled_form.link')" target="_blank" rel="noopener noreferrer">{{ $t('incometax.howto.p2.map.filled_form.value') }}</a>
          </template>
        </i18n>
      </paragraph>
    </div>
    <div
      v-for="(qanda,i) in $t('incometax.faq')"
      :key="i"
    >
      <section-title :literal="qanda.question" :margin-bottom="false" />
      <paragraphs :literal="qanda.answer" :margin-bottom="false" />
    </div>
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
      img: '/og_incometax.jpg',
      title: this.$t('incometax.title')
    })
  }
}
</script>
