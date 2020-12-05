<template>
  <div
    class="relative font-medium lg:font-normal xl:font-medium text-base lg:text-sm xl:text-base text-gray-600"
    :class="[isOpen ? 'block' : 'inline-block']"
  >
    <button
      class="relative z-10 inline-flex items-center block focus:outline-none font-medium lg:font-normal xl:font-medium text-base lg:text-sm xl:text-base py-2 px-4 rounded-md hover:text-dlot-teal"
      :class="{ 'shadow': isOpen }"
      @click.stop="isOpen = !isOpen"
    >
      <icon
        class="h-4 w-4"
      >
        {{ languageSelectionIcon }}
      </icon>
      <span class="ml-1 uppercase">
        {{ $i18n.locale }}
      </span>
    </button>
    <div
      v-click-outside="onClickOutside"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow z-20"
      :class="isOpen ? '' : 'hidden'"
    >
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        class="py-2 px-4 block whitespace-no-wrap bg-white hover:text-dlot-teal"
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
