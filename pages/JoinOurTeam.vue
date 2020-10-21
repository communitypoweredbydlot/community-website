<template>
  <article>
    <nuxt-content :document="page" class="prose max-w-none" />
    <expansion-panels class="mt-6">
      <expansion-panel
        v-for="(job, ji) in $t('joinourteam.jobs')"
        :key="ji"
        class="pb-1 pt-1"
      >
        <template v-slot:header>
          <h4 class="font-semibold leading-6">
            {{ job.title }}
          </h4>
        </template>
        <template v-slot:content>
          <h5 class="font-semibold mb-2">
            {{ job.attributions.label }}
          </h5>
          <ul>
            <li
              v-for="(attribution, ai) in job.attributions.list"
              :key="ai"
              class="leading-7 text-gray-700"
            >
              {{ attribution }}
            </li>
          </ul>
          <h5 class="font-semibold mt-4 mb-2">
            {{ job.requirements.label }}
          </h5>
          <ul class="dotted">
            <li
              v-for="(requirement, ri) in job.requirements.list"
              :key="ri"
              class="leading-7 text-gray-700"
            >
              {{ requirement }}
            </li>
          </ul>
        </template>
      </expansion-panel>
    </expansion-panels>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import mdFetchWithDefault from '@/lib/MdFetchWithDefault'

@Component
export default class JoinOurTeam extends Vue {
  async asyncData (context: any) {
    return await mdFetchWithDefault('JoinOurTeam')(context)
  }
}
</script>
