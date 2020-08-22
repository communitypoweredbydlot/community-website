<template>
  <article>
    <v-container class="d-flex flex-column justify-space-between body-1">
      <h1>{{ $t("our_story.title") }}</h1>
      <p>&nbsp;</p>
      <p>{{ $t("our_story.intro") }}</p>
      <p>{{ $t("our_story.trash") }}</p>
      <v-img
        src="../assets/ourstory/Community-powered-by-DLOT-Private-proprety.jpg"
      />
      <v-img
        src="../assets/ourstory/Community-powered-by-DLOT-deforestation.jpg"
      />
      <v-img src="../assets/ourstory/Community-powered-by-DLOT-Trash.jpg" />
      <p>{{ $t("our_story.section1.desc") }}</p>
      <p>{{ $t("our_story.section1.cityfans") }}</p>
      <p>{{ $t("our_story.section1.unaware") }}</p>
      <p>{{ $t("our_story.section1.ignorants") }}</p>
      <p>{{ $t("our_story.section1.rational") }}</p>
      <p>{{ $t("our_story.section1.trailblazers") }}</p>
      <p>{{ $t("our_story.section1.newtype") }}</p>
      <p>{{ $t("our_story.section1.tourists") }}</p>
      <p>{{ $t("our_story.section1.observations") }}</p>
      <p>{{ $t("our_story.section1.tripandpick") }}</p>
      <video controls>
        <source
          src="../assets/ourstory/VID_20191027_133137.mp4"
          type="video/mp4"
        />
      </video>
      <v-img
        src="../assets/ourstory/Community-powered-by-DLOT-Trip-and-pick-scaled.jpg"
      />
      <v-img
        src="../assets/ourstory/Community-powered-by-DLOT-Trip-and-pick-challenge-scaled.jpg"
      />
      <p>{{ $t("our_story.section2.desc") }}</p>
      <p>{{ $t("our_story.section2.garbage") }}</p>
      <v-img
        src="../assets/ourstory/Garbage-in-nature-Community-powered-by-DLOT.jpg"
      />
      <p>{{ $t("our_story.section3.desc") }}</p>
      <p>{{ $t("our_story.section3.community") }}</p>
      <v-img
        src="../assets/ourstory/Dog-picking-up-trash-Community-powered-by-DLOT-scaled.jpg"
      />
    </v-container>
  </article>
</template>

<style scoped>
.v-image{
  margin-bottom: 10px;
}
video {
  width: 100%;
  height: auto;
}
</style>
