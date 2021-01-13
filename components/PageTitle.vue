<template>
  <h3 class="page-title-sm xl:page-title">
    {{ capitalizeFirst($t(path)) }}
  </h3>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class PageTitle extends Vue {
  @Prop() path!: string

  capitalizeFirst (sentence: string): string {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }
}
</script>
