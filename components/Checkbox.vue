<template>
  <div class="flex flex-shrink-0 justify-center items-center bg-white border border-gray-100 rounded shadow-sm w-4 h-4">
    <input id="$ref.id" v-model="checked" type="checkbox" name="checkbox" class="absolute opacity-0">
    <icon
      v-show="checked"
      class="absolute w-4 h-4 text-blue-500 pointer-events-none"
    >
      {{ mdiCheckBold }}
    </icon>
  </div>
</template>

<script lang="ts">
import { Component, ModelSync, Vue } from 'nuxt-property-decorator'

import { mdiCheckBold } from '@mdi/js'

@Component
export default class Checkbox extends Vue {
  @ModelSync('value', 'change', Boolean) readonly checked!: boolean
  mdiCheckBold = mdiCheckBold
}
</script>

<style lang="postcss" scoped>
div:focus-within {
    @apply border-2 border-blue-500 border-opacity-75;
}
</style>
