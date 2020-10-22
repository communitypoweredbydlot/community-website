<template>
  <article>
    <h3 class="uppercase">
      {{ $t('projects.title') }}
    </h3>
    <p>{{ $t('projects.p1') }}</p>
    <p>{{ $t('projects.p2') }}</p>
    <p>{{ $t('projects.p3') }}</p>
    <h4>{{ $t('projects.tripandpick.title') }}</h4>
    <i18n path="projects.tripandpick.p1.content" tag="p">
      <template v-slot:tripandpick-hashtag>
        <a href="https://www.instagram.com/explore/tags/tripandpick">{{ $t('projects.tripandpick.p1.tripandpick-hashtag') }}</a>
      </template>
    </i18n>
    <p>{{ $t('projects.tripandpick.p2') }}</p>
    <p>{{ $t('projects.tripandpick.p3') }}</p>
    <i18n path="projects.tripandpick.p4.content" tag="p">
      <template v-slot:tripandpick-hashtag>
        <a href="mailto:tripandpick@asociatiacommunity.ro">{{ $t('projects.tripandpick.p4.tripandpick-email-link') }}</a>
      </template>
    </i18n>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Projects extends Vue {
}
</script>
