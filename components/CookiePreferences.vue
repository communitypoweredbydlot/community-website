<template>
  <div v-if="isShowConsentDialog || isShowPreferences" class="fixed bottom-0 inset-x-0 flex flex-row justify-center">
    <div class="mb-4 bg-white border border-gray-100 rounded px-4 py-3 shadow lg:w-reading-small xl:w-reading-medium xxl:w-reading-large lg:mx-auto mx-6">
      <div
        class="text-sm"
        :class="!isShowPreferences ?'flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center':''"
      >
        <div
          class="lg:mr-4"
          :class="{ 'mb-2': isShowPreferences }"
        >
          <i18n path="cookieconsent.summary[0].content" class="mb-2 lg:mb-0 paragraph-xs lg:paragraph-sm xl:paragraph" tag="p">
            <template #optional>
              <span class="font-medium">{{ $t('cookieconsent.summary[0].optional') }}</span>
            </template>
            <template #learnmore>
              <nuxt-link v-show="!isShowPreferences" class="text-sm text-link-neutral" :to="`${$nuxt.$route.path}?cookiePreferences`">
                {{ $t('cookieconsent.summary[0].learnmore') }}
              </nuxt-link>
            </template>
          </i18n>
          <i18n v-if="isShowPreferences" path="cookieconsent.summary[1].content" class="paragraph-xs lg:paragraph-sm xl:paragraph" tag="p">
            <template #preferences>
              <span class="font-medium">{{ $t('cookieconsent.summary[1].preferences') }}</span>
            </template>
            <template #privacystatement>
              <nuxt-link
                class="text-link-neutral"
                :to="localePath('/privacypolicy')"
              >
                {{ $t('cookieconsent.summary[1].privacystatement') }}
              </nuxt-link>
            </template>
          </i18n>
        </div>
        <div v-show="!isShowPreferences" class="flex flex-row justify-center mt-2 lg:m-0">
          <button class="button-single mr-2 capitalize flex-1 lg:flex-0 font-medium" @click="onAccept">
            {{ $t('cookieconsent.accept') }}
          </button>
          <button class="button-single capitalize flex-1 lg:flex-0 font-medium" @click="onReject">
            {{ $t('cookieconsent.reject') }}
          </button>
        </div>
      </div>
      <div v-show="isShowPreferences">
        <div class="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center border-t border-gray-100 pt-2 lg:pt-4 pb-2 paragraph-xs">
          <div class="mr-2 mb-2 lg:mb-0">
            <h5 class="font-bold mb-1 lg:mb-0">
              {{ $t('cookieconsent.functional.title') }}
            </h5>
            <p class="leading-tight lg:leading-7">
              {{ $t('cookieconsent.functional.lang_cookie') }}
            </p>
          </div>
          <div class="flex flex-row justify-end lg:justify-venter font-medium lg:paragraph-sm">
            <p class="lg:mr-2 text-dlot-blue">
              {{ $t('cookieconsent.functional.always') }}
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center border-t border-gray-100 pt-2 lg:pt-4 pb-2 paragraph-xs">
          <div class="mr-2 mb-2 lg:mb-0">
            <h5 class="font-bold mb-1 lg:mb-0">
              {{ $t('cookieconsent.analytics.title') }}
            </h5>
            <i18n path="cookieconsent.analytics.ga.content" class="leading-tight lg:leading-7" tag="p">
              <template #learnmore>
                <nuxt-link class="text-link-neutral" :to="localePath('/')">
                  {{ $t('cookieconsent.analytics.ga.learnmore') }}
                </nuxt-link>
              </template>
            </i18n>
          </div>
          <div class="flex flex-row justify-end lg:justify-center lg:paragraph-sm">
            <div class="inline-flex button-group">
              <button
                class="py-1 px-2 focus:outline-none capitalize font-medium"
                :class="localConsent.analytics === true ? 'bg-dlot-blue text-white' : 'hover:bg-dlot-blue hover:text-white text-dlot-blue'"
                @click="onAnalyticsConsent(true)"
              >
                {{ $t('cookieconsent.accept') }}
              </button>
              <button
                class="py-1 px-2 focus:outline-none capitalize font-medium"
                :class="localConsent.analytics === false ? 'bg-dlot-blue text-white' : 'hover:bg-dlot-blue hover:text-white text-dlot-blue'"
                @click="onAnalyticsConsent(false)"
              >
                {{ $t('cookieconsent.reject') }}
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-end items-center border-t border-gray-100 pt-2 paragraph-xs lg:paragraph-sm">
          <button
            class="button-save"
            :class="{ 'disabled': !canSavePreferences }"
            :disabled="!canSavePreferences"
            @click="onSavePreferences"
          >
            {{ $t('cookieconsent.save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { bootstrap } from 'vue-gtag'

type CookieConsent = {
  analytics: boolean | null
}

@Component
export default class CookiePreferences extends Vue {
  storedConsent: CookieConsent | null = null
  localConsent: CookieConsent = {
    analytics: null
  }

  created () {
    this.storedConsent = this.getCookie('cookie-consent')
    if (this.storedConsent) {
      Object.assign(this.localConsent, this.storedConsent)
      this.toggleAnalyticsPlugin()
    }
  }

  onAccept () {
    this.localConsent.analytics = true
    this.updatePreferences()
  }

  onReject () {
    this.localConsent.analytics = false
    this.updatePreferences()
  }

  onSavePreferences () {
    this.updatePreferences()
    this.$nuxt.$router.push(this.$nuxt.$route.path)
  }

  onAnalyticsConsent (given) {
    this.localConsent.analytics = given
  }

  get isShowPreferences () {
    return this.$nuxt.$route.query.cookiePreferences === null
  }

  get isShowConsentDialog () {
    return (this.storedConsent === undefined || this.storedConsent === null) && !this.$nuxt.$route.name?.startsWith('privacypolicy')
  }

  get canSavePreferences () {
    if (this.storedConsent) {
      return this.storedConsent.analytics !== this.localConsent.analytics
    }
    return this.localConsent.analytics !== null
  }

  private updatePreferences () {
    this.updateCookie()
    this.toggleAnalyticsPlugin()
  }

  private toggleAnalyticsPlugin () {
    if (this.storedConsent && (this.storedConsent.analytics || this.storedConsent.analytics === false)) {
      bootstrap().then(() =>
        this.storedConsent && this.storedConsent.analytics ? this.$gtag.optIn() : this.$gtag.optOut()
      )
    }
  }

  private updateCookie () {
    this.setCookie('cookie-consent', this.localConsent)
    this.storedConsent = this.getCookie('cookie-consent')
  }

  private getCookie (name): CookieConsent | null {
    if (process.browser) {
      const prefix = `${name}=`
      const ck = decodeURIComponent(document.cookie).split(';').map(c => c.trim()).find(c => c.startsWith(prefix))
      if (ck) {
        return JSON.parse(ck.substring(prefix.length, ck.length))
      }
    }
    return null
  }

  private setCookie (name: String, value: CookieConsent) {
    if (process.browser) {
      document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};max-age=${60 * 60 * 24 * 180};path=/;'}`
    }
  }
}
</script>

<style lang="postcss" scoped>

.button-group > button {
   @apply border border-gray-100 rounded rounded-r-none rounded-l-none border-l-0 border-r-0 duration-200 ease-in-out transition shadow;
}

.button-group > :first-child {
   @apply border border-gray-100 rounded rounded-r-none shadow;
}

.button-group > :last-child {
   @apply border border-gray-100 rounded rounded-l-none border-l-0 shadow;
}

.button-single {
  @apply text-dlot-blue py-1 px-2 border border-gray-100 rounded shadow hover:bg-dlot-blue hover:text-white hover:border-transparent focus:outline-none;
}

.button-save {
  @apply text-dlot-teal py-1 px-2 border border-gray-100 rounded shadow hover:bg-dlot-teal hover:text-white hover:border-transparent focus:outline-none;
}

.disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
