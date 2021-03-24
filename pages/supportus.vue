<template>
  <article>
    <div class="flex flex-col gap-6">
      <div>
        <page-title path="supportus.title" />
        <section-title path="supportus.tell.title" :margin-bottom="false" />
        <paragraph>
          {{ $t("supportus.tell.p1") }}
          <br>
          {{ $t("supportus.tell.p2") }}
          <br>
          <a
            class="text-link"
            href="https://www.instagram.com/explore/tags/tripandpick/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >#TripAndPick</a>
          <a
            class="text-link"
            href="https://www.instagram.com/explore/tags/tripandpickchallenge/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >#TripandPickChallenge</a>
          <a
            class="text-link"
            href="https://www.instagram.com/explore/tags/asociatiacommunity/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >#AsociatiaCommunity</a>
          <a
            class="text-link"
            href="https://www.instagram.com/explore/tags/communitypoweredbydlot/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >#CommunityPoweredByDlot</a>
          <a
            class="text-link"
            href="https://www.instagram.com/explore/tags/poweredbydlot/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >#PoweredByDlot</a>
        </paragraph>
      </div>
      <div>
        <section-title path="supportus.donate.title" />
        <div class="flex flex-col gap-4">
          <paragraph path="supportus.donate.p1" :margin-bottom="false" />
          <div>
            <button
              class="inline-flex items-center rounded shadow border border-gray-100 border-opacity-25 px-2 py-1"
              :class="isAcceptedTermsAndPrivacyPolicy ? 'animate-bounce cursor-pointer hover:bg-gray-100 hover:bg-opacity-25': 'cursor-not-allowed opacity-50'"
              :disabled="!isAcceptedTermsAndPrivacyPolicy"
              @click="donate"
            >
              <icon class="w-4 h-4 mr-2 text-red-500 hover:text-red-600">
                {{ iconHeart }}
              </icon>
              <span class="paragraph hover:text-gray-900 font-medium">
                {{ $t("supportus.donate.button.label") }}
              </span>
            </button>
            <div class="flex flex-row items-baseline justify-start space-x-2 mt-2">
              <input v-model="isAcceptedTermsAndPrivacyPolicy" type="checkbox">
              <paragraph path="supportus.donate.legalNotice" :from="1" :margin-bottom="false">
                <template #before>
                  <i18n path="supportus.donate.legalNotice[0].content">
                    <template #terms>
                      <nuxt-link class="text-link" :to="localePath(`${$t('supportus.donate.legalNotice[0].map.terms.link')}`)">
                        {{ $t("supportus.donate.legalNotice[0].map.terms.label") }}<!--
                  --></nuxt-link>
                    </template>
                    <template #policy>
                      <nuxt-link class="text-link" :to="localePath(`${$t('supportus.donate.legalNotice[0].map.policy.link')}`)">
                        {{ $t("supportus.donate.legalNotice[0].map.policy.label") }}<!--
                  --></nuxt-link>
                    </template>
                  </i18n>
                </template>
              </paragraph>
            </div>
          </div>
          <paragraph path="supportus.donate.p2" :margin-bottom="false" />
          <div>
            <div class="flex flex-row justify-start">
              <span class="text-gray-600 text-xs xl:text-sm">{{
                $t("supportus.donate.name.label")
              }}</span>
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800"
            >
              {{ $t("supportus.donate.name.value") }}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm">
              {{ $t("supportus.donate.address.label") }}
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800"
            >
              {{ $t("supportus.donate.address.value") }}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm">
              {{ $t("supportus.donate.taxid.label") }}
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800"
            >
              {{ $t("supportus.donate.taxid.value") }}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm uppercase">
              {{ $t("supportus.donate.iban.label") }}
            </div>
            <div class="flex flex-row justify-start items-center overflow-y-hidden">
              <span
                class="family-sans font-medium text-sm xl:text-base text-gray-800"
              >{{ $t("supportus.donate.iban.value") }}</span>
              <button
                class="focus:outline-none icon-link ml-2"
                :class="{ 'text-dlot-teal': isCopySuccesss }"
                :title="$t('supportus.donate.iban.copyTooltip')"
                @click="copyToClipboard($t('supportus.donate.iban.value'))"
              >
                <icon class="h-6 w-6 lg:h-4 lg:w-4">
                  {{ iconCopy }}
                </icon>
              </button>
              <span
                class="ml-2 text-xs text-dlot-teal transition duration-500 ease-in-out transform"
                :class="
                  isCopySuccesss
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-3 opacity-0'
                "
              >
                {{ $t("supportus.donate.iban.copySuccess") }}
              </span>
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm">
              {{ $t("supportus.donate.bank.label") }}
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800"
            >
              {{ $t("supportus.donate.bank.value") }}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm">
              {{ $t("supportus.donate.currency.label") }}
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800 uppercase"
            >
              {{ $t("supportus.donate.currency.value") }}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-xs xl:text-sm">
              {{ $t("supportus.donate.bicswift.label") }}
            </div>
            <div
              class="family-sans font-medium text-sm xl:text-base text-gray-800"
            >
              {{ $t("supportus.donate.bicswift.value") }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <section-title path="supportus.incometax.title" />
        <paragraph path="supportus.incometax.p1" :margin-bottom="false" />
        <i18n
          path="supportus.incometax.p2.content"
          tag="p"
          class="paragraph-sm xl:paragraph"
        >
          <nuxt-link class="text-link" :to="localePath('/incometax')">
            {{ $t("supportus.incometax.p2.redirect_label") }}
          </nuxt-link>
        </i18n>
      </div>
      <div>
        <section-title path="supportus.beavolunteer.title" />
        <i18n
          path="supportus.beavolunteer.p1.content"
          tag="p"
          class="paragraph-sm xl:paragraph"
        >
          <nuxt-link class="text-link" :to="localePath('/joinourteam/')">
            {{ $t("supportus.beavolunteer.p1.joinUs_label") }}
          </nuxt-link>
        </i18n>
      </div>
      <div>
        <section-title path="supportus.studies.title" />
        <i18n
          path="supportus.studies.p1.content"
          tag="p"
          class="paragraph-sm xl:paragraph"
        >
          <a
            class="italic text-link"
            :href="
              'https://docs.google.com/forms/d/e/1FAIpQLScvUQDZPiALtKtzw9OITf2Wce78LhZYuzOYWR7KhFFDHnTvWg/viewform'
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t("supportus.studies.p1.form_label") }}
          </a>
        </i18n>
      </div>
      <div>
        <section-title path="supportus.dumps.title" />
        <i18n
          path="supportus.dumps.p1.content"
          tag="p"
          class="paragraph-sm xl:paragraph"
        >
          <template #messenger-link>
            <a
              class="text-link"
              href="https://www.messenger.com/t/asociatiacommunity"
              target="_blank"
              rel="noopener noreferrer"
            >{{ $t("supportus.dumps.p1.messenger-link.label") }}</a>
          </template>
          <template #email-link>
            <a
              class="text-link"
              :href="`mailto:${$t('supportus.dumps.p1.email-link.link')}`"
            >{{ $t("supportus.dumps.p1.email-link.value") }}</a>
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
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mdiContentCopy, mdiCardsHeart } from '@mdi/js'

import ogMetaFor from '@/lib/HeaderMeta'

declare let Paylike: any

@Component
export default class SupportUs extends Vue {
  sizes: string = '300:300,360:360,425:425,768:768,896,896:1080,1280'
  iconCopy = mdiContentCopy
  iconHeart = mdiCardsHeart
  isCopySuccesss = false
  isPaylikeLoaded = false
  paylike!: any
  isAcceptedTermsAndPrivacyPolicy = false

  async copyToClipboard (v) {
    // @ts-ignore
    await this.$copyText(v)
    this.isCopySuccesss = true
    setTimeout(() => {
      this.isCopySuccesss = false
    }, 3000)
  }

  mounted () {
    this.paylike = Paylike(this.$config.paylike.publicKey)
  }

  donate () {
    this.paylike.popup(
      {
        title: this.$t('supportus.donate.popup.title'),
        description: this.$t('supportus.donate.popup.description'),
        currency: 'RON',
        locale: this.$i18n.locale,
        fields: [
          {
            name: 'name',
            placeholder: this.$t('supportus.donate.popup.placeholder.name')
          },
          {
            name: 'amount',
            required: true
          }
        ],
        custom: {
          AcceptedTermsAndPrivacyPolicy: this.isAcceptedTermsAndPrivacyPolicy
        }
      },
      () => {
        this.isAcceptedTermsAndPrivacyPolicy = false
      }
    )
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
