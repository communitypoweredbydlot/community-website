<template>
  <article class="flex flex-col space-y-6">
    <div>
      <page-title path="regulation.title" />
      <section-title path="regulation.general.title" />
      <paragraph path="regulation.general.content" :margin-bottom="false" />
    </div>
    <div>
      <section-title path="regulation.purpose.title" />
      <paragraph path="regulation.purpose.p1" />
      <list path="regulation.purpose.activities" />
    </div>
    <div>
      <section-title path="regulation.governing.title" />
      <div>
        <subsection-title path="regulation.governing.assembly.title" />
        <paragraph path="regulation.governing.assembly.p1" :margin-bottom="false" />
        <list path="regulation.governing.assembly.powers" />
        <paragraph path="regulation.governing.assembly.p2" />
        <list path="regulation.governing.assembly.situations" />
        <paragraph
          v-for="i in $t('regulation.governing.assembly.paragraphs').length"
          :key="i"
          :path="`regulation.governing.assembly.paragraphs[${i - 1}]`"
          :margin-bottom="i < $t('regulation.governing.assembly.paragraphs').length"
        />
      </div>
      <div>
        <subsection-title path="regulation.governing.board.title" class="mt-6" />
        <paragraph path="regulation.governing.board.p1" :margin-bottom="false" />
        <list path="regulation.governing.board.components" />
        <list path="regulation.governing.board.attributions" />
        <paragraph
          v-for="i in $t('regulation.governing.board.paragraphs').length"
          :key="i"
          :path="`regulation.governing.board.paragraphs[${i - 1}]`"
          :margin-bottom="i < $t('regulation.governing.board.paragraphs').length "
        />
      </div>
    </div>
    <div>
      <section-title path="regulation.departments.title" />
      <list path="regulation.departments.all" subsection />
      <list path="regulation.departments.social" subsection />
      <list path="regulation.departments.pr" subsection />
      <list path="regulation.departments.fundraising" subsection />
      <list path="regulation.departments.hr" subsection />
      <list path="regulation.departments.it" subsection />
      <list path="regulation.departments.management" subsection />
      <list path="regulation.departments.coordinators" subsection />
    </div>
    <div>
      <section-title path="regulation.members.title" />

      <subsection-title path="regulation.members.categories.title" />
      <list path="regulation.members.categories.types" />

      <subsection-title path="regulation.members.acquisition.title" />
      <paragraph path="regulation.members.acquisition.p1" />
      <list path="regulation.members.acquisition.ways" subsection />
      <paragraph path="regulation.members.acquisition.p2" />
      <list path="regulation.members.acquisition.asociate_criteria" subsection />
      <list path="regulation.members.acquisition.honorary_criteria" subsection />
      <list path="regulation.members.acquisition.supporting_criteria" subsection />
      <paragraph path="regulation.members.acquisition.p3" />

      <subsection-title path="regulation.members.loss.title" />
      <list path="regulation.members.loss.loss_criteria" subsection />
      <paragraph path="regulation.members.loss.p1" />
      <paragraph path="regulation.members.loss.p2" />
      <paragraph path="regulation.members.loss.p3" />

      <subsection-title path="regulation.members.rights.title" />
      <list path="regulation.members.rights.full" subsection />
      <list path="regulation.members.rights.associate" subsection />
      <list path="regulation.members.rights.honorary" subsection />
      <list path="regulation.members.rights.supporting" subsection />

      <list path="regulation.members.obligations" subsection />
    </div>
    <div>
      <section-title path="regulation.volunteers.title" />
      <paragraph path="regulation.volunteers.p1" />
      <list path="regulation.volunteers.rights" subsection />
      <list path="regulation.volunteers.obligations" subsection />
    </div>
    <div>
      <section-title path="regulation.financial_contribution.title" />
      <paragraph
        v-for="i in $t('regulation.financial_contribution.paragraphs').length"
        :key="i"
        :path="`regulation.financial_contribution.paragraphs[${i - 1}]`"
        :margin-bottom="i < $t('regulation.financial_contribution.paragraphs').length"
      />
    </div>
    <div>
      <section-title path="regulation.sanctions.title" />

      <subsection-title path="regulation.sanctions.members.title" />
      <list path="regulation.sanctions.members.conditions" />
      <paragraph path="regulation.sanctions.members.p1" />

      <subsection-title path="regulation.sanctions.volunteers.title" />
      <paragraph path="regulation.sanctions.volunteers.p1" />
      <list path="regulation.sanctions.volunteers.p2" />
      <paragraph path="regulation.sanctions.volunteers.p3" />
      <paragraph path="regulation.sanctions.volunteers.p4" />
    </div>
    <div>
      <section-title path="regulation.final.title" />
      <paragraph path="regulation.final.p1" />
      <paragraph path="regulation.final.p2" />
      <paragraph path="regulation.final.p3" />
      <paragraph path="regulation.final.p4" />
      <paragraph path="regulation.final.p5" />
      <i18n path="regulation.final.p6.content" tag="p" class="paragraph-sm xl:paragraph mb-4">
        <template #juridic>
          <a :href="`mailto:${$t('regulation.final.p6.map.juridic')}`" class="text-link">
            {{ $t('regulation.final.p6.map.juridic') }}
          </a>
        </template>
      </i18n>
      <i18n path="regulation.final.p7.content" tag="p" class="paragraph-sm xl:paragraph">
        <template #policy>
          <a :href="$t('regulation.final.p7.map.policy.link')" class="text-link" target="_blank" rel="noopener noreferrer">
            {{ $t('regulation.final.p7.map.policy.value') }}
          </a>
        </template>
      </i18n>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class InternalRegulation extends Vue {
}
</script>
