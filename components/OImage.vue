<template>
  <img :src="src.src" :srcSet="src.srcSet" :sizes="src.sizes" :class="cls" :alt="alt">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class OImage extends Vue {
  @Prop() readonly src!: any
  @Prop() readonly cls!: string
  @Prop() readonly alt!: string
}
</script>
