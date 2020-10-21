<template>
  <article class="flex flex-col gap-6">
    <h3 class="text-xl font-semibold uppercase leading-6">
      {{ $t('supportus.title') }}
    </h3>
    <div>
      <h4>
        {{ $t('supportus.tell.title') }}
      </h4>
      <p>
        {{ $t('supportus.tell.p1') }}
      </p>
      <p>
        {{ $t('supportus.tell.p2') }}
      </p>
      <a href="https://www.instagram.com/explore/tags/tripandpick/?hl=en">#TripAndPick</a>
      <a href="https://www.instagram.com/explore/tags/tripandpickchallenge/?hl=en">#TripandPickChallenge</a>
      <a href="https://www.instagram.com/explore/tags/asociatiacommunity/?hl=en">#AsociatiaCommunity</a>
      <a href="https://www.instagram.com/explore/tags/communitypoweredbydlot/?hl=en">#CommunityPoweredByDlot</a>
      <a href="https://www.instagram.com/explore/tags/poweredbydlot/?hl=en">#PoweredByDlot</a>
    </div>
    <div>
      <h4>{{ $t('supportus.donate.title') }}</h4>
      <div class="flex flex-col gap-4">
        <p>{{ $t('supportus.donate.p1') }}</p>
        <div>
          <div class="flex flex-row justify-start">
            <span class="text-gray-600 text-sm">Name</span>
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            ASOCIATIA COMMUNITY POWERED BY DLOT
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            Adress
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            Calea Floresti 60, 400522, Cluj-Napoca, Romania
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            Tax ID
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            42622580
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm uppercase">
            iban
          </div>
          <div class="flex flex-row justify-start">
            <span class="family-sans font-medium text-base text-gray-800">RO40BTRLRONCRT0543520201</span>
            <svg
              class="fill-current h-4 w-4 ml-2 hover:text-dlot-teal"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              @click="copyToClipboard('RO40BTRLRONCRT0543520201')"
            >
              <path :d="iconCopy" />
            </svg>
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            Bank
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            Banca Transilvania
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            Moneda
          </div>
          <div class="family-sans font-medium text-base text-gray-800 uppercase">
            ron
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            BIC/SWIFT
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            BTRLRO22
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4>{{ $t('supportus.beavolunteer.title') }}</h4>
      <i18n path="supportus.beavolunteer.p1.content" tag="p">
        <a :href="'https://asociatiacommunity.ro/ro/joinourteam'">{{ $t("supportus.beavolunteer.p1.joinUs_label") }}</a>
      </i18n>
    </div>
    <div>
      <h4>{{ $t('supportus.studies.title') }}</h4>
      <i18n path="supportus.studies.p1.content" tag="p">
        <a :href="'https://docs.google.com/forms/d/e/1FAIpQLScvUQDZPiALtKtzw9OITf2Wce78LhZYuzOYWR7KhFFDHnTvWg/viewform'">{{ $t("supportus.studies.p1.form_label") }}</a>
      </i18n>
    </div>
    <div>
      <h4>{{ $t('supportus.dumps.title') }}</h4>
    </div>
    <div>
      <h4>{{ $t('supportus.live.title') }}</h4>
      <ul>
        <li
          v-for="(value, index) in $t('supportus.live.list')"
          :key="index"
          class="mb-1"
        >
          {{ value }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col">
      <h4>{{ $t('supportus.followus.title') }}</h4>
      <div class="flex flex-row justify-start">
        <svg
          class="fill-current h-6 w-6 hover:text-dlot-teal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path :d="iconLinkedin" />
        </svg>
        <svg
          class="fill-current h-6 w-6 hover:text-dlot-teal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path :d="iconFacebook" />
        </svg>
        <svg
          class="fill-current h-6 w-6 hover:text-dlot-teal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path :d="iconInstagram" />
        </svg>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiContentCopy, mdiFacebook, mdiLinkedin, mdiInstagram } from '@mdi/js'

@Component
export default class SupportUs extends Vue {
  iconCopy = mdiContentCopy
  iconFacebook = mdiFacebook
  iconLinkedin = mdiLinkedin
  iconInstagram = mdiInstagram
  async copyToClipboard (v) {
    try {
      // @ts-ignore
      await this.$copyText(v)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="postcss" scoped>
h4 {
  @apply font-semibold leading-6 mb-2 mt-6;
}

p {
  @apply leading-7 mt-5 mb-5 text-gray-700;
}

li {
    @apply leading-7 text-gray-700;
}
</style>
