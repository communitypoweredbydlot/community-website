<template>
  <div class="font-sans border-gray-400">
    <div class="border-t">
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 md:gap-4 text-xs mt-2 mb-4 leading-4 text-gray-700">
        <div class="col-span-1 flex justify-start items-start order-4 sm:order-1">
          <span class="font-dlot-logo">© {{ new Date().getFullYear() }} powered by DLOT™</span>
        </div>
        <div class="col-span-1 flex flex-col justify-start sm:items-end order-1 md:order-2">
          <div class="flex flex-col justify-start items-start">
            <div
              v-for="(item, index) in transparencyAndGdprMenuItems"
              :key="index"
              class="text-start mb-2"
            >
              <nuxt-link
                class="hover:text-dlot-teal"
                :to="localePath(item.route)"
              >
                {{ $t(item.text) }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-span-1 flex flex-col justify-start items-start order-2 md:order-3">
          <div class="text-center mb-2">
            {{ $t("email") }}
          </div>
          <div class="text-center">
            {{ $t("phone") }}
          </div>
        </div>
        <div class="col-span-1 flex justify-start sm:justify-end items-start order-3 md:order-4">
          <nuxt-link :to="localePath('/')">
            <o-image
              cls="dlot-logo-sm md:dlot-logo"
              :src="require('~/assets/img/logo_powered_by_dlot.jpg')"
              alt="Powered by DLOT"
            />
          </nuxt-link>
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
      route: '/privacypolicy'
    },
    {
      text: 'nav.bottom.terms_and_conditions',
      route: '/termsandconditions'
    }
  ]
}
</script>

<style scoped>
a {
  color:inherit;
}
</style>
