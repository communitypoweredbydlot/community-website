<template>
  <v-img :src="src" class="mb-3" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class MdImage extends Vue {
  @Prop() src!: string
}
</script>
