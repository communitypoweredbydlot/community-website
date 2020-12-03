<template>
  <article class="flex flex-col">
    <page-title path="ourstory.title" />

    <paragraphs path="ourstory.paragraphs" :to="2" />

    <o-image :src="require('~/assets/img/private_property.jpg')" cls="rounded shadow mb-4" alt="Private property." />
    <o-image :src="require('~/assets/img/deforestation.jpg')" cls="rounded shadow mb-4" alt="Deforestation." />
    <o-image :src="require('~/assets/img/trash.jpg')" cls="rounded shadow mb-4" alt="Trash in water." />

    <paragraphs path="ourstory.paragraphs" :from="3" :to="4" />

    <video
      controls
      width="100%"
      height="auto"
      preload="none"
      :poster="require('~/assets/img/story_video_poster.jpg')"
      class="rounded shadow mb-4 focus:outline-none"
    >
      <source
        src="https://poweredbydlot.com/wp-content/uploads/2020/07/VID_20191027_133137.mp4?_=1"
        type="video/mp4"
      >
    </video>

    <o-image :src="require('~/assets/img/trip_and_pick.jpg')" cls="rounded shadow mb-4" alt="Man carying trash during a Trip and Pick trip." />
    <o-image :src="require('~/assets/img/trip_and_pick_challenge.jpg')" cls="rounded shadow mb-4" alt="Trash haul in trash bags after a Trip and Pick trip." />

    <paragraphs path="ourstory.paragraphs" :from="5" :to="5" />

    <o-image :src="require('~/assets/img/garbage_in_nature.jpg')" cls="rounded shadow mb-4" alt="Trash on the side of the road." />

    <paragraphs path="ourstory.paragraphs" :from="5" :to="7" />

    <o-image :src="require('~/assets/img/dog_picking_up_trash.jpg')" cls="rounded shadow" alt="Dog playing with tarsh." />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class OurStory extends Vue {
  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_ourstory.jpg',
      title: this.$t('ourstory.title')
    })
  }
}
</script>
