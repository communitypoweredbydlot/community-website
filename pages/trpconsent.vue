<template>
  <article id="mc_embed_signup">
    <form
      id="mc-embedded-subscribe-form"
      action="https://asociatiacommunity.us1.list-manage.com/subscribe/post?u=c1fefb817314c9f4ae8b45644&amp;id=0ae7b1b8aa"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <div id="mc_embed_signup_scroll" class="flex flex-col justify-start items-start">
        <page-title path="trpconsent.title" />
        <div class="flex flex-col justify-start items-start w-full mt-4 lg:mt-6">
          <p class="paragraph-sm mb-2 asterisk">
            {{ $t('trpconsent.form.mandatory') }}
          </p>
          <div class="mc-field-group text-gray-700 font-semibold text-md mb-4 w-full sm:w-2/3 md:w-1/3">
            <label for="mce-FNAME" class="required mb-1">{{ $t('trpconsent.form.name') }}</label>
            <input
              id="mce-FNAME"
              v-model="fullName"
              type="text"
              name="FNAME"
              class="border rounded p-2 w-full"
              required
            >
          </div>
          <div class="mc-field-group text-gray-700 font-semibold text-md mb-4 w-full sm:w-2/3 md:w-1/3">
            <label for="mce-EMAIL" class="required mb-1">{{ $t('trpconsent.form.email') }}</label>
            <input
              id="mce-EMAIL"
              v-model="email"
              type="email"
              name="EMAIL"
              class="border rounded p-2 w-full"
              required
            >
          </div>
        </div>
        <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group mt-6">
          <div>
            <p class="text-gray-700 font-semibold text-md mb-1">
              {{ $t('trpconsent.form.safe') }}
            </p>
            <paragraph path="trpconsent.form.confirm" class="text-justify" />
            <fieldset class="mc-field-group paragraph-sm xl:paragraph font-medium" name="interestgroup_field">
              <label class="flex flex-row justify-start items-baseline text-gray-700 mb-2 text-justify" for="gdpr_42302">
                <input
                  id="gdpr_42302"
                  v-model="gdpr"
                  type="checkbox"
                  value="Y"
                  name="gdpr[42302]"
                >
                <span class="ml-2">
                  <i18n path="trpconsent.form.checkbox.collect.content">
                    <template #policy>
                      <nuxt-link class="text-link" :to="localePath=(`${$t('trpconsent.form.checkbox.collect.map.policy.link')}`)">{{ $t('trpconsent.form.checkbox.collect.map.policy.value') }}</nuxt-link>
                    </template>
                  </i18n>
                </span>
              </label>
              <label class="flex flex-row justify-start items-baseline text-gray-700 text-justify" for="gdpr_42342">
                <input id="gdpr_42342" type="checkbox" name="gdpr[42342]" value="Y">
                <span class="ml-2">
                  {{ $t('trpconsent.form.checkbox.media') }}
                </span>
              </label>
            </fieldset>
            <paragraph class="mt-4 text-justify">
              <i18n path="trpconsent.form.unsubscribe.content">
                <template #juridic>
                  <a :href="`mailto:${$t('trpconsent.form.unsubscribe.map.juridic')}`" class="text-link">{{ $t('trpconsent.form.unsubscribe.map.juridic') }}</a>
                </template>
              </i18n>
            </paragraph>
          </div>
          <div>
            <paragraph class="text-justify">
              <i18n path="trpconsent.form.mailchimp.content">
                <template #legal>
                  <a :href="$t('trpconsent.form.mailchimp.map.legal.link')" class="text-link" target="_blank" rel="noopener noreferrer">{{ $t('trpconsent.form.mailchimp.map.legal.value') }}</a>
                </template>
              </i18n>
            </paragraph>
          </div>
        </div>
        <div id="mce-responses">
          <div id="mce-error-response" style="display:none" />
          <div id="mce-success-response" style="display:none" />
        </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_c1fefb817314c9f4ae8b45644_0ae7b1b8aa" tabindex="-1" value="">
        </div>
        <div class="mt-2">
          <input
            id="mc-embedded-subscribe"
            type="submit"
            :value="$t('trpconsent.form.submit')"
            name="subscribe"
            class="bg-dlot-teal px-2 py-1 text-white rounded shadow font-medium cursor-pointer outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isInvalid"
          >
        </div>
      </div>
    </form>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ogMetaFor from '@/lib/HeaderMeta'

@Component
export default class TrpConsent extends Vue {
  gdpr: boolean = false
  email: string = ''
  fullName: string = ''

  get isInvalid (): boolean {
    return !this.gdpr || this.email === '' || this.fullName === ''
  }

  head () {
    return ogMetaFor({
      route: this.$nuxt.$route.path,
      img: '/og_home.jpg',
      title: this.$t('trpconsent.title')
    })
  }
}
</script>

<style lang="postcss" scoped>
.mc-field-group {
  @apply flex flex-col justify-start items-start;
}

.asterisk:before {
  content: "* ";
  color: red;
}

.required:after {
    content:" *";
    color: red;
}
</style>
