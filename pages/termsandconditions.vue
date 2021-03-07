<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="terms.title" />
      <section-title path="terms.general.title" />
      <paragraph path="terms.general.content" :margin-bottom="false" />
    </div>
    <div>
      <section-title path="terms.purpose.title" />
      <paragraph path="terms.purpose.p1" />
      <list path="terms.purpose.activities" />
    </div>
    <div>
      <section-title path="terms.governing.title" />
      <div>
        <subsection-title path="terms.governing.assembly.title" />
        <paragraph path="terms.governing.assembly.p1" :margin-bottom="false" />
        <list path="terms.governing.assembly.powers" />
        <paragraph path="terms.governing.assembly.p2" />
        <list path="terms.governing.assembly.situations" />
        <paragraph
          v-for="i in $t('terms.governing.assembly.paragraphs').length"
          :key="i"
          :path="`terms.governing.assembly.paragraphs[${i - 1}]`"
          :margin-bottom="i < $t('terms.governing.assembly.paragraphs').length"
        />
      </div>
      <div>
        <subsection-title path="terms.governing.board.title" class="mt-6" />
        <paragraph path="terms.governing.board.p1" :margin-bottom="false" />
        <list path="terms.governing.board.components" />
        <list path="terms.governing.board.attributions" />
        <paragraph
          v-for="i in $t('terms.governing.board.paragraphs').length"
          :key="i"
          :path="`terms.governing.board.paragraphs[${i - 1}]`"
          :margin-bottom="i < $t('terms.governing.board.paragraphs').length "
        />
      </div>
    </div>
    <div>
      <section-title path="terms.departments.title" />
      <list path="terms.departments.all" subsection />
      <list path="terms.departments.social" subsection />
      <list path="terms.departments.pr" subsection />
      <list path="terms.departments.fundraising" subsection />
      <list path="terms.departments.hr" subsection />
      <list path="terms.departments.it" subsection />
      <list path="terms.departments.management" subsection />
      <list path="terms.departments.coordinators" subsection />
    </div>
    <div>
      <section-title path="terms.members.title" />

      <subsection-title path="terms.members.categories.title" />
      <list path="terms.members.categories.types" />

      <subsection-title path="terms.members.acquisition.title" />
      <paragraph path="terms.members.acquisition.p1" />
      <list path="terms.members.acquisition.ways" subsection />
      <paragraph path="terms.members.acquisition.p2" />
      <list path="terms.members.acquisition.asociate_criteria" subsection />
      <list path="terms.members.acquisition.honorary_criteria" subsection />
      <list path="terms.members.acquisition.supporting_criteria" subsection />
      <paragraph path="terms.members.acquisition.p3" />

      <subsection-title path="terms.members.loss.title" />
      <list path="terms.members.loss.loss_criteria" subsection />
      <paragraph path="terms.members.loss.p1" />
      <paragraph path="terms.members.loss.p2" />
      <paragraph path="terms.members.loss.p3" />

      <subsection-title path="terms.members.rights.title" />
      <list path="terms.members.rights.full" subsection />
      <list path="terms.members.rights.associate" subsection />
      <list path="terms.members.rights.honorary" subsection />
      <list path="terms.members.rights.supporting" subsection />

      <list path="terms.members.obligations" subsection />
    </div>
    <div>
      <section-title path="terms.volunteers.title" />
      <paragraph path="terms.volunteers.p1" />
      <list path="terms.volunteers.rights" subsection />
      <list path="terms.volunteers.obligations" subsection />
    </div>
    <div>
      <section-title path="terms.financial_contribution.title" />
      <paragraph
        v-for="i in $t('terms.financial_contribution.paragraphs').length"
        :key="i"
        :path="`terms.financial_contribution.paragraphs[${i - 1}]`"
        :margin-bottom="i < $t('terms.financial_contribution.paragraphs').length"
      />
    </div>
    <div>
      <section-title path="terms.sanctions.title" />

      <subsection-title path="terms.sanctions.members.title" />
      <list path="terms.sanctions.members.conditions" />
      <paragraph path="terms.sanctions.members.p1" />

      <subsection-title path="terms.sanctions.volunteers.title" />
      <paragraph path="terms.sanctions.volunteers.p1" />
      <list path="terms.sanctions.volunteers.p2" />
      <paragraph path="terms.sanctions.volunteers.p3" />
      <paragraph path="terms.sanctions.volunteers.p4" />
    </div>
    <div>
      <section-title path="terms.final.title" />
      <paragraph path="terms.final.p1" />
      <paragraph path="terms.final.p2" />
      <paragraph path="terms.final.p3" />
      <paragraph path="terms.final.p4" />
      <paragraph path="terms.final.p5" />
      <i18n path="terms.final.p6.content" tag="p" class="paragraph-sm xl:paragraph mb-4">
        <template #juridic>
          <a :href="`mailto:${$t('terms.final.p6.map.juridic')}`" class="text-link">
            {{ $t('terms.final.p6.map.juridic') }}
          </a>
        </template>
      </i18n>
      <i18n path="terms.final.p7.content" tag="p" class="paragraph-sm xl:paragraph">
        <template #policy>
          <a :href="$t('terms.final.p7.map.policy.link')" class="text-link" target="_blank" rel="noopener noreferrer">
            {{ $t('terms.final.p7.map.policy.value') }}
          </a>
        </template>
      </i18n>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SupportUs extends Vue {
}
</script>
