<template>
  <article class="flex flex-col space-y-6">
    <div>
      <h3 class="page-title-sm xl:page-title capitalize">
        {{ $t("joinourteam.joinus.title") }}
      </h3>
      <p class="paragraph">
        {{ $t("joinourteam.joinus.p1") }}
      </p>
      <p class="paragraph">
        {{ $t("joinourteam.joinus.p3") }}
      </p>
      <p class="paragraph mt-4">
        {{ $t("joinourteam.joinus.p4") }}
      </p>
    </div>
    <div>
      <p class="paragraph italic">
        {{ $t("joinourteam.manyhands.title") }}
      </p>
    </div>
    <div>
      <h4 class="section-title-sm xl:section-title">
        {{ $t("joinourteam.whatsinit.title") }}
      </h4>
      <ul>
        <li
          v-for="(benefit, bi) in $t('joinourteam.whatsinit.list')"
          :key="bi"
        >
          {{ benefit }}
        </li>
      </ul>
      <p class="paragraph mt-4">
        {{ $t("joinourteam.whatsinit.p1") }}
      </p>
      <expansion-panels class="mt-2">
        <expansion-panel
          v-for="(job, ji) in $t('joinourteam.jobs')"
          :key="ji"
          :label-id="`bl-${ji}`"
          class="pb-1 pt-1"
        >
          <template v-slot:header>
            <h4 :id="`bl-${ji}`" class="paragraph">
              {{ job.title }}
            </h4>
          </template>
          <template v-slot:content>
            <h5 class="paragraph">
              {{ job.attributions.label }}
            </h5>
            <ul>
              <li
                v-for="(attribution, ai) in job.attributions.list"
                :key="ai"
              >
                {{ attribution }}
              </li>
            </ul>
            <h5 class="paragraph">
              {{ job.requirements.label }}
            </h5>
            <ul>
              <li
                v-for="(requirement, ri) in job.requirements.list"
                :key="ri"
              >
                {{ requirement }}
              </li>
            </ul>
          </template>
        </expansion-panel>
      </expansion-panels>
    </div>
  </article>
</template>
