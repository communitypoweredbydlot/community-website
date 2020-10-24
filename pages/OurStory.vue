<template>
  <article class="flex flex-col">
    <h3 class="page-title capitalize">
      {{ $t('ourstory.title') }}
    </h3>

    <p
      v-for="n in 3"
      :key="n"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n - 1}]`) }}
    </p>

    <img src="https://community.poweredbydlot.com/wp-content/uploads/2020/07/Community-powered-by-DLOT-Private-proprety.jpg" loading="lazy" class="rounded shadow mb-4">
    <img src="https://community.poweredbydlot.com/wp-content/uploads/2020/07/Community-powered-by-DLOT-deforestation.jpg" loading="lazy" class="rounded shadow mb-4">
    <img src="https://community.poweredbydlot.com/wp-content/uploads/2020/07/Community-powered-by-DLOT-Trash.jpg" loading="lazy" class="rounded shadow mb-4">

    <p
      v-for="n in 2"
      :key="n"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n + 2}]`) }}
    </p>

    <video controls width="100%" height="auto" class="rounded shadow mb-4">
      <source
        src="https://poweredbydlot.com/wp-content/uploads/2020/07/VID_20191027_133137.mp4?_=1"
        type="video/mp4"
      >
    </video>
    <img src="https://community.poweredbydlot.com/wp-content/uploads/2020/07/Community-powered-by-DLOT-Trip-and-pick-scaled.jpg" loading="lazy" class="rounded shadow mb-4">
    <img src="https://community.poweredbydlot.com/wp-content/uploads/2020/07/Community-powered-by-DLOT-Trip-and-pick-challenge-scaled.jpg" loading="lazy" class="rounded shadow mb-4">

    <p class="paragraph mb-4">
      {{ $t(`ourstory.paragraphs[5]`) }}
    </p>

    <img src="https://poweredbydlot.com/wp-content/uploads/2020/07/Garbage-in-nature-Community-powered-by-DLOT.jpg" loading="lazy" class="rounded shadow mb-4">

    <p
      v-for="n in 3"
      :key="n"
      class="paragraph mb-4"
    >
      {{ $t(`ourstory.paragraphs[${n + 5}]`) }}
    </p>

    <img src="https://poweredbydlot.com/wp-content/uploads/2020/07/Dog-picking-up-trash-Community-powered-by-DLOT-scaled.jpg" loading="lazy" class="rounded shadow">
  </article>
</template>
