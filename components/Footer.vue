<template>
  <div class="font-sans">
    <div class="border-t border-gray-500 border-opacity-25">
      <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 text-xs mt-2 mb-4 leading-4 text-gray-700">
        <copyright class="col-span-1 xs:col-span-2 sm:col-span-1 flex flex-col text-center sm:text-left justify-center sm:justify-start order-4 sm:order-1 font-dlot-logo" />
        <div class="col-span-1 flex flex-col justify-start sm:items-end order-1 md:order-2">
          <div class="flex flex-row xs:flex-col justify-between xs:justify-start items-start">
            <div
              v-for="(item, index) in transparencyAndGdprMenuItems"
              :key="index"
              class="text-start mb-3 lg:mb-2"
            >
              <nuxt-link
                class="hover:text-dlot-teal"
                :to="item.route ? localePath(item.route) : `${$nuxt.$route.path}?${item.query}`"
                exact
              >
                {{ $t(item.text) }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-span-1 flex flex-col justify-start items-center xs:items-end sm:items-start order-2 md:order-3">
          <div class="text-center mb-3 lg:mb-2">
            <a :href="`mailto:${$t('email')}`">{{ $t("email") }}</a>
          </div>
          <div class="text-center">
            <a :href="`tel:${$t('phone')}`">{{ $t("phone") }}</a>
          </div>
        </div>
        <div class="hidden sm:flex sm:justify-end items-start col-span-1 order-3 md:order-4">
          <a href="https://poweredbydlot.com/" target="_blank" rel="noopener noreferrer">
            <nuxt-image
              class="dlot-logo-sm md:dlot-logo"
              src="/logo_powered_by_dlot.jpg"
              responsive
              format="webp"
              alt="Powered by DLOT"
              width="125"
              height="79.99"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  transparencyAndGdprMenuItems = [
    {
      text: 'nav.bottom.privacy_policy',
      route: '/privacypolicy/'
    },
    {
      text: 'nav.bottom.terms_and_conditions',
      route: '/termsandconditions/'
    },
    {
      text: 'nav.bottom.cookie_preferences',
      query: 'cookiePreferences'
    }
  ]
}
</script>
