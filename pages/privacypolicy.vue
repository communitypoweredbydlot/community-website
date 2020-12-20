<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="privacypolicy.title" />
      <paragraph class="italic">
        <i18n path="privacypolicy.summary.content">
          <template #juridic>
            <a :href="`mailto:${$t('privacypolicy.summary.map.juridic.link')}`" class="text-link">{{ $t('privacypolicy.summary.map.juridic.value') }}</a>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="privacypolicy.p1" />
      <paragraph path="privacypolicy.p2" />
      <paragraph>
        <i18n path="privacypolicy.p3.content">
          <template #personal>
            <span class="font-bold">{{ $t('privacypolicy.p3.map.personal') }}</span>
          </template>
        </i18n>
      </paragraph>
      <paragraph>
        <i18n path="privacypolicy.p4.content">
          <template #consent>
            <span class="font-bold">{{ $t('privacypolicy.p4.map.consent') }}</span>
          </template>
        </i18n>
      </paragraph>
    </div>

    <div>
      <subsection-title path="privacypolicy.identity.title" />
      <paragraph path="privacypolicy.identity.p" />
    </div>

    <div>
      <section-title path="privacypolicy.type.title" class="mb-4" />
      <subsection-title path="privacypolicy.type.contact.title" />
      <paragraphs path="privacypolicy.type.contact.what_when" />

      <subsection-title path="privacypolicy.type.donation.title" />
      <paragraph>
        <i18n path="privacypolicy.type.donation.what_when.transfer.general.content">
          <template #transfer>
            <span class="font-bold">{{ $t('privacypolicy.type.donation.what_when.transfer.general.map.transfer') }}</span>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="privacypolicy.type.donation.what_when.transfer.for" />
      <paragraph>
        <i18n path="privacypolicy.type.donation.what_when.credit.general.content">
          <template #credit>
            <span class="font-bold">{{ $t('privacypolicy.type.donation.what_when.credit.general.map.credit') }}</span>
          </template>
        </i18n>
      </paragraph>
      <paragraph path="privacypolicy.type.donation.what_when.credit.for" />

      <subsection-title path="privacypolicy.type.volunteer.title" />
      <paragraphs path="privacypolicy.type.volunteer.what_when" />

      <subsection-title path="privacypolicy.type.passive.title" />
      <paragraphs path="privacypolicy.type.passive.what_when" />
    </div>

    <div>
      <section-title path="privacypolicy.cookies.title" />
      <paragraph path="privacypolicy.cookies.general" />

      <subsection-title path="privacypolicy.cookies.classification.title" />
      <paragraph path="privacypolicy.cookies.classification.functional.title" :margin-bottom="false" class="mt-4 font-semibold" />
      <paragraph path="privacypolicy.cookies.classification.functional.content" />

      <paragraph path="privacypolicy.cookies.classification.statistic.title" :margin-bottom="false" class="font-semibold" />
      <paragraph path="privacypolicy.cookies.classification.statistic.content" :to="1" />
      <paragraph>
        <i18n path="privacypolicy.cookies.classification.statistic.content[2].content">
          <template #ga>
            <a :href="$t('privacypolicy.cookies.classification.statistic.content[2].map.ga.link')" class="text-link" target="_blank" rel="noopener noreferrer">{{ $t('privacypolicy.cookies.classification.statistic.content[2].map.ga.value') }}</a>
          </template>
        </i18n>
      </paragraph>

      <div class="flex flex-row justify-center paragraph-xs lg:paragraph-sm mb-4">
        <table class="table-auto">
          <thead class="text-left border-b">
            <tr>
              <th class="py-2 pl-2">
                {{ $t('cookies.headers.service') }}
              </th>
              <th class="py-2">
                {{ $t('cookies.headers.name') }}
              </th>
              <th class="py-2">
                {{ $t('cookies.headers.description') }}
              </th>
              <th class="py-2">
                {{ $t('cookies.headers.expiration') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(cookie, index) in cookies"
              :key="cookie.name"
              :class="{ 'bg-blue-100' : index % 2 === 0 }"
            >
              <td class="py-2 pr-4 pl-2">
                {{ cookie.service }}
              </td>
              <td class="py-2 pr-4">
                <span class="rounded bg-gray-100 bg-opacity-25 p-1">{{ cookie.name }}</span>
              </td>
              <td class="py-2 pr-4">
                {{ $t(`cookies.${cookie.name}.description`) }}
              </td>
              <td class="py-2">
                {{ $t(`cookies.${cookie.name}.expiration`) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <section-title path="privacypolicy.sharing.title" />
      <paragraph path="privacypolicy.sharing.content" />
    </div>

    <div>
      <section-title path="privacypolicy.links.title" />
      <paragraph path="privacypolicy.links.content" />
    </div>

    <div>
      <section-title path="privacypolicy.transfer.title" />
      <paragraph path="privacypolicy.transfer.content" />
    </div>

    <div>
      <section-title path="privacypolicy.security.title" />
      <paragraph path="privacypolicy.security.content" />
    </div>

    <div>
      <section-title path="privacypolicy.expiration.title" />
      <paragraph path="privacypolicy.expiration.content" />
    </div>

    <div>
      <section-title path="privacypolicy.rights.title" />
      <paragraph path="privacypolicy.rights.general" :from="1">
        <template #before>
          <i18n path="privacypolicy.rights.general[0].content">
            <template #juridic>
              <a :href="`mailto:${$t('privacypolicy.rights.general[0].map.juridic.link')}`" class="text-link">{{ $t('privacypolicy.rights.general[0].map.juridic.value') }}</a>
            </template>
          </i18n>
        </template>
      </paragraph>

      <list path="privacypolicy.rights.all" />
    </div>

    <div>
      <section-title path="privacypolicy.update.title" />
      <paragraph path="privacypolicy.update.content" />
    </div>

    <div>
      <section-title path="privacypolicy.contact.title" />
      <paragraph path="privacypolicy.contact.content" :from="1">
        <template #before>
          <i18n path="privacypolicy.contact.content[0].content">
            <template #juridic>
              <a :href="`mailto:${$t('privacypolicy.contact.content[0].map.juridic.link')}`" class="text-link">{{ $t('privacypolicy.contact.content[0].map.juridic.value') }}</a>
            </template>
          </i18n><br>
        </template>
      </paragraph>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PrivacyPolicy extends Vue {
  cookies = [
    {
      service: 'Asociația Community powered by DLOT',
      name: 'i18n_redirect'
    },
    {
      service: 'Asociația Community powered by DLOT',
      name: 'cookie_consent'
    },
    {
      service: 'Google Analytics',
      name: '_ga'
    },
    {
      service: 'Google Analytics',
      name: '_gid'
    },
    {
      service: 'Google Analytics',
      name: '_gat_gtag'
    }
  ]
}
</script>
