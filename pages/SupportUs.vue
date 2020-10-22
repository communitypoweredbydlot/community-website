<template>
  <article class="flex flex-col gap-6">
    <h3>{{ $t('supportus.title') }}</h3>
    <div>
      <h4>
        {{ $t('supportus.tell.title') }}
      </h4>
      <p>
        {{ $t('supportus.tell.p1') }}
        <br>
        {{ $t('supportus.tell.p2') }}
        <br>
        <a href="https://www.instagram.com/explore/tags/tripandpick/?hl=en">#TripAndPick</a>
        <a href="https://www.instagram.com/explore/tags/tripandpickchallenge/?hl=en">#TripandPickChallenge</a>
        <a href="https://www.instagram.com/explore/tags/asociatiacommunity/?hl=en">#AsociatiaCommunity</a>
        <a href="https://www.instagram.com/explore/tags/communitypoweredbydlot/?hl=en">#CommunityPoweredByDlot</a>
        <a href="https://www.instagram.com/explore/tags/poweredbydlot/?hl=en">#PoweredByDlot</a>
      </p>
    </div>
    <div>
      <h4>{{ $t('supportus.donate.title') }}</h4>
      <div class="flex flex-col gap-4">
        <p>{{ $t('supportus.donate.p1') }}</p>
        <div>
          <div class="flex flex-row justify-start">
            <span class="text-gray-600 text-sm">{{ $t('supportus.donate.name.label') }}</span>
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            {{ $t('supportus.donate.name.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            {{ $t('supportus.donate.address.label') }}
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            {{ $t('supportus.donate.address.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            {{ $t('supportus.donate.taxid.label') }}
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            {{ $t('supportus.donate.taxid.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm uppercase">
            {{ $t('supportus.donate.iban.label') }}
          </div>
          <div class="flex flex-row justify-start">
            <span class="family-sans font-medium text-base text-gray-800">{{ $t('supportus.donate.iban.value') }}</span>
            <icon
              class="h-4 w-4 ml-2 hover:text-dlot-teal cursor-pointer"
              :tooltip="$t('supportus.donate.iban.copyTooltip')"
              @click="copyToClipboard($t('supportus.donate.iban.value'))"
            >
              {{ iconCopy }}
            </icon>
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            {{ $t('supportus.donate.bank.label') }}
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            {{ $t('supportus.donate.bank.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            {{ $t('supportus.donate.currency.label') }}
          </div>
          <div class="family-sans font-medium text-base text-gray-800 uppercase">
            {{ $t('supportus.donate.currency.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-sm">
            {{ $t('supportus.donate.bicswift.label') }}
          </div>
          <div class="family-sans font-medium text-base text-gray-800">
            {{ $t('supportus.donate.bicswift.value') }}
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
        <a :href="'https://docs.google.com/forms/d/e/1FAIpQLScvUQDZPiALtKtzw9OITf2Wce78LhZYuzOYWR7KhFFDHnTvWg/viewform'" class="italic">{{ $t("supportus.studies.p1.form_label") }}</a>
      </i18n>
    </div>
    <div>
      <h4>{{ $t('supportus.dumps.title') }}</h4>
      <i18n path="supportus.dumps.p1.content" tag="p">
        <template v-slot:messenger-link>
          <a :href="'https://www.messenger.com/t/poweredbydlot'">{{ $t("supportus.dumps.p1.messenger-link.label") }}</a>
        </template>
        <template v-slot:email-link>
          <a href="mailto:tripandpick@asociatiacommunity.ro">{{ $t("supportus.dumps.p1.email-link.label") }}</a>
        </template>
      </i18n>
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
    // @ts-ignore
    await this.$copyText(v)
  }
}
</script>
