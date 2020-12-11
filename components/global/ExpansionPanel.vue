<template>
  <article>
    <header
      class="flex flex-row flex-wrap justify-start items-center cursor-pointer"
      @click="onClick"
    >
      <button
        class="focus:outline-none"
        :aria-expanded="!isHidden"
        :aria-labelledby="labelId"
      >
        <icon
          class="h-6 w-6 hover:text-dlot-teal"
          :class="{ 'text-dlot-teal': !isHidden }"
        >
          {{ actionIcon }}
        </icon>
      </button>
      <div class="items-center ml-2">
        <slot name="header" />
      </div>
    </header>
    <div
      class="pl-6 pr-6 pt-4 pb-4"
      :class="{ hidden: isHidden }"
    >
      <slot name="content" />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mdiChevronDown } from '@mdi/js'

@Component
export default class ExpansionPanel extends Vue {
  actionIcon = mdiChevronDown
  isHidden = true
  @Prop() labelId!: String

  onClick (_header: any) {
    this.isHidden = !this.isHidden
  }
}
</script>
