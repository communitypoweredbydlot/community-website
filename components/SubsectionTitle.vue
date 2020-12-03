<template>
  <h5 class="subsection-title-sm xl:subsection-title">
    {{ $t(path) }}
  </h5>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SubsectionTitle extends Vue {
  @Prop() path!: string
}
</script>
