<template>
  <v-expansion-panel-header>
    <template v-slot:actions>
      <v-icon class="icon" color="#16a99f">
        {{ actionIcon }}
      </v-icon>
    </template>
    <div class="header">
      <slot />
    </div>
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

<style scoped>
.icon {
  order: 0;
}

.header {
  order: 1;
}
</style>
