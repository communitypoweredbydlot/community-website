<template>
  <div class="flex flex-row">
    <a
      class="h-6 w-6 icon-link"
      href="https://www.linkedin.com/showcase/community-powered-by-dlot/"
      alt="Linkedin"
      title="Linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon>{{ iconLinkedin }}</icon>
    </a>
    <a
      class="h-6 w-6 icon-link ml-1"
      href="https://www.facebook.com/asociatiacommunity/"
      alt="Facebook"
      title="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon>{{ iconFacebook }}</icon>
    </a>
    <a
      class="h-6 w-6 icon-link ml-1"
      href="https://www.instagram.com/asociatiacommunity/"
      alt="Instagram"
      title="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon>{{ iconInstagram }}</icon>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiContentCopy, mdiFacebook, mdiLinkedin, mdiInstagram } from '@mdi/js'

@Component
export default class App extends Vue {
  iconCopy = mdiContentCopy
  iconFacebook = mdiFacebook
  iconLinkedin = mdiLinkedin
  iconInstagram = mdiInstagram
}
</script>
