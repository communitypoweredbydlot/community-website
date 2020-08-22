<template>
  <v-toolbar-title>
    <nuxt-link :to="localePath('/')" class="community-text-title">
      Community
    </nuxt-link>
    <div class="text-caption">
      powered by DLOT™
    </div>
  </v-toolbar-title>
</template>

<style scoped>
.community-text-title {
  color:#16a99f;
  font-family: 'Comfortaa';
}

a {
  text-decoration: none;
}
</style>
