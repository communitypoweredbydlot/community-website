<template>
  <div class="text-sm">
    <nuxt-link
      v-for="(item, index) in mainMenuItems.filter(item => !item.hidden)"
      :key="index"
      :to="localePath(item.route)"
      class="font-sans text-base lg:text-xxs xl:text-xs text-gray-600 tracking-wide hover:text-dlot-teal uppercase"
      :class="isVertical ? 'mt-2 ml-4': 'mt-0 mr-2'"
      exact
    >
      {{ $t(item.text) }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class NavigationList extends Vue {
  @Prop({ default: false }) readonly isVertical!: boolean

  mainMenuItems = [
    {
      text: 'nav.top.mission_statement',
      route: '/'
    },
    {
      text: 'nav.top.our_story',
      route: '/ourstory/'
    },
    {
      text: 'nav.top.projects',
      route: '/projects/'
    },
    {
      text: 'nav.top.support_us',
      route: '/supportus/'
    },
    {
      text: 'nav.top.join_our_team',
      route: '/joinourteam/',
      // Hidden untill the recruitment process is no longer on hold, see https://github.com/communitypoweredbydlot/management/issues/44
      hidden: true
    }
  ]
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply border-b border-dlot-teal text-dlot-teal;
}
</style>
