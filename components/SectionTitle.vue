<template>
  <h4 class="section-title-sm xl:section-title">
    {{ $t(path) }}
  </h4>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SectionTitle extends Vue {
  @Prop() path!: string
}
</script>
