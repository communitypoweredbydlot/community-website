<template>
  <h4 class="section-title-sm xl:section-title">
    {{ title }}
  </h4>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SectionTitle extends Vue {
  @Prop() path!: string
  @Prop() literal: string | undefined

  get title () {
    return this.literal ? this.literal : this.$t(this.path)
  }
}
</script>
