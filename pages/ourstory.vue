<template>
  <article class="flex flex-col">
    <page-title path="ourstory.title" />

    <paragraphs path="ourstory.paragraphs" :to="2" />

    <nuxt-image
      src="/private_property.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Private property."
      width="1080"
      height="810"
    />

    <nuxt-image
      src="/deforestation.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Deforestation."
      width="1080"
      height="810"
    />
    <nuxt-image
      src="/trash.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Trash in water."
      width="1080"
      height="810"
    />

    <paragraphs path="ourstory.paragraphs" :from="3" :to="3" />

    <i18n path="ourstory.tripandpick.content" tag="p" class="paragraph-sm xl:paragraph">
      <template #tripandpick>
        <a class="text-link" :href="$t('ourstory.tripandpick.map.tripandpick.link')" target="_blank" rel="noopener noreferrer">{{ $t('ourstory.tripandpick.map.tripandpick.value') }}</a>
      </template>
    </i18n>

    <video
      controls
      width="100%"
      height="auto"
      preload="none"
      :poster="require('~/assets/img/story_video_poster.jpg')"
      class="rounded shadow mb-4 focus:outline-none"
    >
      <source
        src="https://poweredbydlot.ro/wp-content/uploads/community/Asociatia_Community_TripAndPick_video.mp4?_=1"
        type="video/mp4"
      >
    </video>

    <nuxt-image
      src="trip_and_pick.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Man carying trash during a Trip and Pick trip."
      width="1080"
      height="810"
    />
    <nuxt-image
      src="trip_and_pick_challenge.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Trash haul in trash bags after a Trip and Pick trip."
      width="1080"
      height="810"
    />

    <paragraphs path="ourstory.paragraphs" :from="5" :to="5" />

    <nuxt-image
      src="/garbage_in_nature.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow mb-4"
      alt="Trash on the side of the road."
      width="1080"
      height="810"
    />

    <paragraphs path="ourstory.paragraphs" :from="6" :to="8" />

    <nuxt-image
      src="/dog_picking_up_trash.jpg"
      :sizes="sizes"
      responsive
      format="webp"
      class="rounded shadow"
      alt="Dog playing with tarsh."
      width="1080"
      height="810"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class OurStory extends Vue {
  sizes: string = '300:300,360:360,425:425,768:768,896,896:1080,1280'

  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_ourstory.jpg',
      title: this.$t('ourstory.title')
    })
  }
}
</script>
