<template>
  <header class="flex flex-row flex-wrap justify-start items-center">
    <icon
      class="h-6 w-6"
    >
      {{ actionIcon }}
    </icon>
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
