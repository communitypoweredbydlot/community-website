<template>
  <div>
    <div class="hidden lg:block">
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
    </div>
    <div class="block lg:hidden">
      <label
        id="listbox-label"
        class="block text-sm font-medium text-gray-700"
      >
        {{ $t('language')}}
      </label>
      <div class="mt-1 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          class="relative shadow w-full bg-white pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
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
                class="relative py-2 pl-3 pr-9 bg-white hover:text-dlot-teal"
                :to="switchLocalePath(locale.code)"
              >
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
