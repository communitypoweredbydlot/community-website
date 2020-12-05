<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="projects.title" />
      <paragraph path="projects.general.paragraphs" :margin-bottom="false" />
    </div>
    <div>
      <section-title path="projects.tripandpick.title" />
      <i18n path="projects.tripandpick.p1.content" tag="p" class="paragraph-sm xl:paragraph">
        <template v-slot:tripandpick-hashtag>
          <a class="text-link" href="https://www.instagram.com/explore/tags/tripandpick" target="_blank" rel="noopener noreferrer">{{ $t('projects.tripandpick.p1.tripandpick-hashtag') }}</a>
        </template>
      </i18n>
      <paragraph path="projects.tripandpick.p2" :margin-bottom="false" />
      <paragraph path="projects.tripandpick.p3" :margin-bottom="false" />

      <i18n path="projects.tripandpick.p4.content" tag="p" class="paragraph-sm xl:paragraph">
        <template v-slot:tripandpick-email-link>
          <a class="text-link" :href="`mailto:${$t('projects.tripandpick.p4.tripandpick-email-link.link')}`">{{ $t('projects.tripandpick.p4.tripandpick-email-link.value') }}</a>
        </template>
      </i18n>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class Projects extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_projects.jpg',
      title: this.$t('projects.title')
    })
  }
}
</script>
