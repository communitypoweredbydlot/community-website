<template>
  <header class="flex flex-row flex-wrap justify-start items-center">
    <svg
      class="fill-current h-6 w-6"
      viewbox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="actionIcon" />
    </svg>
    <div class="items-center">
      <slot />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiChevronDown } from '@mdi/js'

@Component
export default class ExpansionPanelHeader extends Vue {
  actionIcon = mdiChevronDown
}
</script>
