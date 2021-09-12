<template>
  <div class="block">
    <label
      id="listbox-label"
      class="block text-sm font-medium text-gray-700"
    >
      {{ $t('language') }}
    </label>
    <div class="mt-1 relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="relative shadow w-full bg-white pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
        @click.stop="isOpen = !isOpen"
      >
        <span class="flex items-center">
          <span class="block">
            {{ $t('name') }}
          </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <icon class="h-5 w-5 text-gray-400">
            {{ languageSelectionIcon }}
          </icon>
        </span>
      </button>
      <div
        v-click-outside="onClickOutside"
        class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
        :class="isOpen ? '' : 'hidden'"
      >
        <div tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <div class="flex items-center">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              class="relative flex-grow py-2 px-3 bg-white hover:text-dlot-teal"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mdiUnfoldMoreHorizontal } from '@mdi/js'

import LSL from '@/components/common/LanguageSelectLogic'

@Component
export default class LanguageSelect extends LSL {
  languageSelectionIcon = mdiUnfoldMoreHorizontal
}
</script>
