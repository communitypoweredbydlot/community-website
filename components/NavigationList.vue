<template>
  <div class="text-sm">
    <nuxt-link
      v-for="(item, index) in mainMenuItems"
      :key="index"
      :to="localePath(item.route)"
      class="font-sans font-medium mt-0 text-gray-600 hover:text-dlot-teal uppercase whitespace-no-wrap"
      :class="isVertical ? 'mt-4 ml-4': 'mt-0 mr-4'"
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
      route: '/ourstory'
    },
    {
      text: 'nav.top.projects',
      route: '/projects'
    },
    {
      text: 'nav.top.support_us',
      route: '/supportus'
    },
    {
      text: 'nav.top.join_our_team',
      route: '/joinourteam'
    }
  ]
}
</script>
