<template>
  <v-expansion-panel-header>
    <slot />
    <template v-slot:actions>
      <v-icon>
        {{ actionIcon }}
      </v-icon>
    </template>
  </v-expansion-panel-header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiChevronDown } from '@mdi/js'

@Component
export default class ExpansionPanelHeader extends Vue {
  actionIcon = mdiChevronDown
}
</script>
