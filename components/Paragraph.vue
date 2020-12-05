<template>
  <p
    class="paragraph-sm xl:paragraph"
    :class="{ 'mb-4': marginBottom }"
  >
    <slot name="before" />
    <template
      v-for="(l, index) in lines"
    >
      {{ l }} <br v-if="index < lines.length - 1" :key="index">
    </template>
    <slot />
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Paragraph extends Vue {
  @Prop() path!: string
  @Prop({ type: Boolean, default: true }) marginBottom!: Boolean
  @Prop({ type: Number, default: 0 }) from!: number
  @Prop({ type: Number }) to!: number

  get lines () {
    const val = this.path ? this.$t(this.path) : []
    const ls = !Array.isArray(val) ? [val] : val
    return ls.slice(this.from, this.to !== undefined ? (this.to + 1) : ls.length)
  }
}
</script>
