<template>
  <header class="flex justify-start items-start p-5 pl-8 pr-8 cursor-pointer select-none">
    <div class="w-6 h-6 flex items-center justify-center">
      <svg
        class="fill-current h-6 w-6"
        viewbox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="actionIcon" />
      </svg>
    </div>
    <span>
      <slot />
    </span>
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
