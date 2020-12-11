<template>
  <div class="flex flex-row">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      class="h-6 w-6 icon-link ml-1"
      :href="link.address"
      :alt="link.alt"
      :title="link.alt"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon>{{ link.icon }}</icon>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiFacebook, mdiLinkedin, mdiInstagram, mdiTwitter } from '@mdi/js'

@Component
export default class App extends Vue {
  socialLinks = [
    {
      address: 'https://www.linkedin.com/showcase/community-powered-by-dlot/',
      alt: 'Linkedin',
      icon: mdiLinkedin
    },
    {
      address: 'https://www.facebook.com/asociatiacommunity/',
      alt: 'Facebook',
      icon: mdiFacebook
    },
    {
      address: 'https://www.instagram.com/asociatiacommunity/',
      alt: 'Instagram',
      icon: mdiInstagram
    },
    {
      address: 'https://twitter.com/Community_pbd/',
      alt: 'Twitter',
      icon: mdiTwitter
    }
  ]
}
</script>
