<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="joinourteam.joinus.title" />
      <paragraph path="joinourteam.joinus.p1" />
      <paragraph path="joinourteam.joinus.p2" :from="1">
        <template #before>
          <i18n path="joinourteam.joinus.p2[0].content">
            <template #values>
              <nuxt-link
                :to="localePath(`${$t('joinourteam.joinus.p2[0].map.values.link')}`)"
                class="text-link"
              >
                {{ $t('joinourteam.joinus.p2[0].map.values.value') }}<!--
              --></nuxt-link>
            </template>
          </i18n> <br>
        </template>
      </paragraph>
      <paragraph path="joinourteam.joinus.p3" />
      <paragraph path="joinourteam.joinus.p4" />

      <paragraph path="joinourteam.manyhands.title" class="italic" />
      <paragraph path="joinourteam.manyhands.p1" :to="0">
        <br>
        <i18n path="joinourteam.manyhands.p1[1].content">
          <template #team>
            <a :href="`mailto:${$t('joinourteam.manyhands.p1[1].map.team.link')}`" class="text-link">{{ $t('joinourteam.manyhands.p1[1].map.team.value') }}</a>
          </template>
        </i18n>
      </paragraph>
      <paragraph>
        <i18n path="joinourteam.manyhands.p2.content">
          <template #tripandpick>
            <a :href="$t('joinourteam.manyhands.p2.map.tripandpick.link')" class="text-link" target="_blank" rel="noopener noreferrer">{{ $t('joinourteam.manyhands.p2.map.tripandpick.value') }}</a>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="joinourteam.manyhands.p3" />
    </div>
    <div>
      <list path="joinourteam.whatsinit" section :margin-bottom="false" />
      <paragraph path="joinourteam.whatsinit.p1" class="mt-4" :margin-bottom="false" />
      <expansion-panels class="mt-2">
        <expansion-panel
          v-for="(job, ji) in $t('joinourteam.jobs')"
          :key="ji"
          :label-id="`bl-${ji}`"
          class="pb-1 pt-1"
        >
          <template v-slot:header>
            <p :id="`bl-${ji}`" class="paragraph-sm xl:paragraph">
              {{ job.title }}
            </p>
          </template>
          <template v-slot:content>
            <p class="paragraph-sm xl:paragraph">
              {{ job.attributions.label }}
            </p>
            <ul class="ulist">
              <li
                v-for="(attribution, ai) in job.attributions.list"
                :key="ai"
                class="paragraph-sm xl:paragraph"
              >
                {{ attribution }}
              </li>
            </ul>
            <p class="paragraph-sm xl:paragraph">
              {{ job.requirements.label }}
            </p>
            <ul class="ulist">
              <li
                v-for="(requirement, ri) in job.requirements.list"
                :key="ri"
                class="paragraph-sm xl:paragraph"
              >
                {{ requirement }}
              </li>
            </ul>
          </template>
        </expansion-panel>
      </expansion-panels>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class JoinOurTeam extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_joinourteam.jpg',
      title: this.$t('joinourteam.joinus.title')
    })
  }
}
</script>
