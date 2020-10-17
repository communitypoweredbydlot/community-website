<template>
  <article class="flex flex-col space-y-6">
    <div class="text-center font-dlot-logo text-xl text-gray-700 leading-5 mb-8 font-bold">
      {{ $t('statement.summary') }}
    </div>
    <div class="flex flex-col">
      <div class="font-dlot-logo text-gray-500 leading-5 mb-2 font-medium">
        {{ $t('statement.vision.title') }}
      </div>
      <div class="text-gray-700 leading-7">
        {{ $t('statement.vision.p1') }}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="font-dlot-logo text-gray-500 leading-5 mb-2 font-medium">
        {{ $t('statement.values.title') }}
      </div>
      <div class="text-gray-700 leading-7">
        <i18n path="statement.values.p1.content" tag="div">
          <a :href="'https://www.poweredbydlot.com'">{{ $t("statement.values.p1.poweredBy_label") }}</a>
        </i18n>
        <div>
          <div
            v-for="(value, index) in $t('statement.values.list')"
            :key="index"
            class="mb-1"
          >
            {{ value }}
          </div>
        </div>
        <div>{{ $t('statement.values.p2') }}</div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="font-dlot-logo text-gray-500 leading-5 mb-2 font-medium">
        {{ $t('statement.mission.title') }}
      </div>
      <div class="text-gray-700 leading-7">
        <div
          v-for="(value, index) in $t('statement.mission.list')"
          :key="index"
          class="mb-1"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Statement extends Vue {
}
</script>
