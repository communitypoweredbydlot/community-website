<template>
  <picture>
    <source :srcSet="`${src}?webp`" type="image/webp" :class="cls">
    <source :srcSet="src" :type="type" :class="cls">
    <img :src="src" :class="cls">
  </picture>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class OImage extends Vue {
  @Prop() readonly src!: string
  @Prop({ default: 'image/jpeg' }) readonly type!: string
  @Prop() readonly cls!: string
}
</script>
