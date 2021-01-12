<template>
  <div>
      <section-title :path="`${qanda}.question`" :margin-bottom="false" />
      <paragraphs :path="`${qanda}.answer`" :marginBottom="false" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Faq extends Vue {
  @Prop() qanda!: string
}
</script>