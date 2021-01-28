<template>
  <div>
    <p
      v-for="(l, index) in lines"
      :key="index"
      class="paragraph-sm xl:paragraph"
      :class="{ 'mb-4': marginBottom }"
    >
      {{ l }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Paragraphs extends Vue {
  @Prop() path!: string
  @Prop({ type: Boolean, default: true }) marginBottom!: Boolean
  @Prop({ type: Number, default: 0 }) from!: number
  @Prop({ type: Number }) to!: number
  @Prop() literal: string | Array<string> | undefined

  get lines () {
    const val = this.literal ? this.literal : this.$t(this.path)
    const ls = !Array.isArray(val) ? [val] : val
    return ls.slice(this.from, this.to !== undefined ? (this.to + 1) : ls.length)
  }
}
</script>
