<template>
  <div
    class="relative font-normal text-xxs xl:text-xs text-gray-600 mr-2"
    :class="[isOpen ? 'block' : 'inline-block']"
  >
    <button
      class="relative z-10 inline-flex items-center block focus:outline-none font-normal text-xxs xl:text-xs mt-2 py-2 px-2 rounded-md hover:text-dlot-teal"
      :class="{ 'shadow': isOpen }"
      @click.stop="isOpen = !isOpen"
    >
      <icon
        class="h-3 w-3"
      >
        {{ languageSelectionIcon }}
      </icon>
      <span class="ml-1 uppercase" style="line-height: 0.25;">
        {{ $i18n.locale }}
      </span>
    </button>
    <div
      v-click-outside="onClickOutside"
      class="absolute right-0 mt-2 py-2 w-14 bg-white rounded-md shadow z-20"
      :class="isOpen ? '' : 'hidden'"
    >
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        class="px-2 block whitespace-no-wrap bg-white hover:text-dlot-teal"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mdiWeb } from '@mdi/js'

import LSB from '@/components/common/LanguageSelect'

@Component
export default class CompactLanguageSelect extends LSB {
  languageSelectionIcon = mdiWeb
}
</script>
