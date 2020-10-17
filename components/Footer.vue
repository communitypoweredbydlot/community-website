<template>
  <div class="font-sans border-gray-400 border-t">
    <div class="grid grid-cols-4 gap-4 text-xs mt-2 mb-4 font-light leading-4 text-gray-600">
      <div class="col-span-1 flex justify-start items-start">
        <span class="font-dlot-logo">© {{ new Date().getFullYear() }} powered by DLOT™</span>
      </div>
      <div class="col-span-1 flex flex-col justify-start items-end">
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
      <div class="col-span-1 flex flex-col justify-start items-start">
        <div class="text-center mb-2">
          {{ $t("email") }}
        </div>
        <div class="text-center">
          {{ $t("phone") }}
        </div>
      </div>
      <div class="col-span-1 flex justify-end items-start">
        <nuxt-link :to="localePath('/')">
          <img
            height="100"
            width="125"
            src="https://poweredbydlot.com/wp-content/uploads/2019/11/logo-powered-by-Dlot-1-e1572971187212-216x139.jpg"
            alt="Powered by DLOT"
            loading="lazy"
          >
        </nuxt-link>
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
      text: 'nav.bottom.activity_reports',
      route: '/activityreports'
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
