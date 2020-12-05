<template>
  <article class="flex flex-col gap-6">
    <div>
      <page-title path="supportus.title" />
      <section-title path="supportus.tell.title" :margin-bottom="false" />
      <paragraph>
        {{ $t('supportus.tell.p1') }}
        <br>
        {{ $t('supportus.tell.p2') }}
        <br>
        <a class="text-link" href="https://www.instagram.com/explore/tags/tripandpick/?hl=en" target="_blank" rel="noopener noreferrer">#TripAndPick</a>
        <a class="text-link" href="https://www.instagram.com/explore/tags/tripandpickchallenge/?hl=en" target="_blank" rel="noopener noreferrer">#TripandPickChallenge</a>
        <a class="text-link" href="https://www.instagram.com/explore/tags/asociatiacommunity/?hl=en" target="_blank" rel="noopener noreferrer">#AsociatiaCommunity</a>
        <a class="text-link" href="https://www.instagram.com/explore/tags/communitypoweredbydlot/?hl=en" target="_blank" rel="noopener noreferrer">#CommunityPoweredByDlot</a>
        <a class="text-link" href="https://www.instagram.com/explore/tags/poweredbydlot/?hl=en" target="_blank" rel="noopener noreferrer">#PoweredByDlot</a>
      </paragraph>
    </div>
    <div>
      <section-title path="supportus.donate.title" />
      <div class="flex flex-col gap-4">
        <paragraph path="supportus.donate.p1" :margin-bottom="false" />
        <div>
          <div class="flex flex-row justify-start">
            <span class="text-gray-600 text-xs xl:text-sm">{{ $t('supportus.donate.name.label') }}</span>
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800">
            {{ $t('supportus.donate.name.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm">
            {{ $t('supportus.donate.address.label') }}
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800">
            {{ $t('supportus.donate.address.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm">
            {{ $t('supportus.donate.taxid.label') }}
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800">
            {{ $t('supportus.donate.taxid.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm uppercase">
            {{ $t('supportus.donate.iban.label') }}
          </div>
          <div class="flex flex-row justify-start">
            <span class="family-sans font-medium text-sm xl:text-base text-gray-800">{{ $t('supportus.donate.iban.value') }}</span>
            <button
              class="focus:outline-none icon-link ml-2 h-4 w-4"
              :title="$t('supportus.donate.iban.copyTooltip')"
              @click="copyToClipboard($t('supportus.donate.iban.value'))"
            >
              <icon>{{ iconCopy }}</icon>
            </button>
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm">
            {{ $t('supportus.donate.bank.label') }}
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800">
            {{ $t('supportus.donate.bank.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm">
            {{ $t('supportus.donate.currency.label') }}
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800 uppercase">
            {{ $t('supportus.donate.currency.value') }}
          </div>
        </div>
        <div>
          <div class="text-gray-600 text-xs xl:text-sm">
            {{ $t('supportus.donate.bicswift.label') }}
          </div>
          <div class="family-sans font-medium text-sm xl:text-base text-gray-800">
            {{ $t('supportus.donate.bicswift.value') }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <section-title path="supportus.beavolunteer.title" />
      <i18n path="supportus.beavolunteer.p1.content" tag="p" class="paragraph-sm xl:paragraph">
        <nuxt-link class="text-link" :to="localePath('/joinourteam/')">
          {{ $t("supportus.beavolunteer.p1.joinUs_label") }}
        </nuxt-link>
      </i18n>
    </div>
    <div>
      <section-title path="supportus.studies.title" />
      <i18n path="supportus.studies.p1.content" tag="p" class="paragraph-sm xl:paragraph">
        <a
          class="italic text-link"
          :href="'https://docs.google.com/forms/d/e/1FAIpQLScvUQDZPiALtKtzw9OITf2Wce78LhZYuzOYWR7KhFFDHnTvWg/viewform'"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("supportus.studies.p1.form_label") }}
        </a>
      </i18n>
    </div>
    <div>
      <section-title path="supportus.dumps.title" />
      <i18n path="supportus.dumps.p1.content" tag="p" class="paragraph-sm xl:paragraph">
        <template v-slot:messenger-link>
          <a class="text-link" href="https://www.messenger.com/t/asociatiacommunity" target="_blank" rel="noopener noreferrer">{{ $t("supportus.dumps.p1.messenger-link.label") }}</a>
        </template>
        <template v-slot:email-link>
          <a class="text-link" :href="`mailto:${$t('supportus.dumps.p1.email-link.link')}`">{{ $t("supportus.dumps.p1.email-link.value") }}</a>
        </template>
      </i18n>
    </div>
    <div>
      <section-title path="supportus.live.title" />
      <ul>
        <li
          v-for="(value, index) in $t('supportus.live.list')"
          :key="index"
          class="mb-1 paragraph-sm xl:paragraph"
        >
          {{ value }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col">
      <section-title path="supportus.followus.title" />
      <social-icons class="justify-start" />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiContentCopy } from '@mdi/js'

import ogMetaFor from '@/lib/HeaderMeta'


@Component
export default class SupportUs extends Vue {
  iconCopy = mdiContentCopy

  async copyToClipboard (v) {
    // @ts-ignore
    await this.$copyText(v)
  }

  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_supportus.jpg',
      title: this.$t('supportus.title')
    })
  }
}
</script>
