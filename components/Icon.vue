<template>
  <svg
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <title v-if="tooltip">{{ tooltip }}</title>
    <path :d="$slots.default[0].text.trim()" />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop() tooltip!: string
}
</script>
