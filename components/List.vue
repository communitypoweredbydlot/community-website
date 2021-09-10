<template>
  <div>
    <paragraph
      v-if="$t(`${path}.title`) !== `${path}.title` && isParagraph"
      :path="`${path}.title`"
      :margin-bottom="false"
    />
    <h5
      v-if="$t(`${path}.title`) !== `${path}.title` && subsection"
      class="subsection-title-sm xl:subsection-title"
    >
      {{ $t(`${path}.title`) }}
    </h5>
    <h4
      v-if="$t(`${path}.title`) !== `${path}.title` && section"
      class="section-title-sm xl:section-title"
    >
      {{ $t(`${path}.title`) }}
    </h4>
    <ul class="list-disc list-inside" :class="{ 'mb-4': marginBottom }">
      <li
        v-for="(l, index) in $t(`${path}.list`)"
        :key="index"
        class="paragraph-sm xl:paragraph"
      >
        {{ l }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class List extends Vue {
  @Prop() path!: String
  @Prop({ type: Boolean, default: false }) subsection!: Boolean
  @Prop({ type: Boolean, default: true }) paragraph!: Boolean
  @Prop({ type: Boolean, default: true }) marginBottom!: Boolean
  @Prop({ type: Boolean, default: false }) section!: Boolean

  get isParagraph (): Boolean {
    return this.paragraph && !this.subsection && !this.section
  }
}
</script>
