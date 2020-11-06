<template>
  <article class="flex flex-col">
    <h3 class="page-title-sm sm:page-title capitalize">
      {{ $t('ourstory.title') }}
    </h3>

    <p
      v-for="n in 3"
      :key="n - 1"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n - 1}]`) }}
    </p>

    <o-image :src="require('~/assets/img/private_property.jpg')" cls="rounded shadow mb-4" />
    <o-image :src="require('~/assets/img/deforestation.jpg')" cls="rounded shadow mb-4" />
    <o-image :src="require('~/assets/img/trash.jpg')" cls="rounded shadow mb-4" />

    <p
      v-for="n in 2"
      :key="n + 2"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n + 2}]`) }}
    </p>

    <video controls width="100%" height="auto" preload="none" class="rounded shadow mb-4">
      <source
        src="https://poweredbydlot.com/wp-content/uploads/2020/07/VID_20191027_133137.mp4?_=1"
        type="video/mp4"
      >
    </video>

    <o-image :src="require('~/assets/img/trip_and_pick.jpg')" cls="rounded shadow mb-4" />
    <o-image :src="require('~/assets/img/trip_and_pick_challenge.jpg')" cls="rounded shadow mb-4" />

    <p class="paragraph mb-4">
      {{ $t(`ourstory.paragraphs[5]`) }}
    </p>

    <o-image :src="require('~/assets/img/garbage_in_nature.jpg')" cls="rounded shadow mb-4" />

    <p
      v-for="n in 3"
      :key="n + 5"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n + 5}]`) }}
    </p>

    <o-image :src="require('~/assets/img/dog_picking_up_trash.jpg')" cls="rounded shadow" />
  </article>
</template>
