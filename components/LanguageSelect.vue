<template>
  <div
    class="relative font-medium text-gray-600"
    :class="[isOpen ? 'block' : 'inline-block']"
  >
    <button
      class="font-medium py-2 px-4 focus:outline-none inline-flex items-center hover:text-teal-500"
      @click.stop="isOpen = !isOpen"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path :d="languageSelectionIcon" />
      </svg>
      <span class="ml-1 uppercase">
        {{ $i18n.locale }}
      </span>
    </button>
    <ul
      v-click-outside="onClickOutside"
      class="absolute mt-1 border-gray-200 border-b border-l border-r"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
        class="bg-white hover:text-teal-500"
      >
        <nuxt-link
          class="py-2 px-4 block whitespace-no-wrap"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator'
import { mdiWeb } from '@mdi/js'

@Component
export default class LanguageSelect extends Vue {
  languageSelectionIcon = mdiWeb
  isOpen = false

  get availableLocales () {
    const locales = this.$i18n.locales || []
    return locales.filter((i: any) => i.code !== this.$i18n.locale)
  }

  onClickOutside () {
    if (this.isOpen) {
      this.isOpen = false
    }
  }

  @Watch('$route')
  afterRouteChanged () {
    this.isOpen = false
  }
}
</script>
