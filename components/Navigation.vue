<template>
  <nav class="flex flex-row justify-between lg:container lg:mx-auto">
    <div class="flex items-center">
      <div class="block lg:hidden px-3 py-2">
        <button class="px-3 py-2 focus:outline-none" aria-label="Toggle Menu" @click="$emit('toggle-drawer')">
          <icon class="h-6 w-6">
            {{ mdiMenu }}
          </icon>
        </button>
      </div>
      <Title />
    </div>
    <NavigationList class="hidden lg:flex lg:flex-row items-center" />
    <LanguageSelect />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiMenu } from '@mdi/js'

@Component
export default class Navigation extends Vue {
  mdiMenu = mdiMenu
}
</script>
