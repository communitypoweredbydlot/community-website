<template>
  <article class="flex flex-col space-y-6">
    <div>
      <h3 class="capitalize">
        {{ $t("joinourteam.joinus.title") }}
      </h3>
      <p>{{ $t("joinourteam.joinus.p1") }}</p>
      <p>{{ $t("joinourteam.joinus.p3") }}</p>
      <p class="mt-4">
        {{ $t("joinourteam.joinus.p4") }}
      </p>
    </div>
    <div>
      <h3>{{ $t("joinourteam.manyhands.title") }}</h3>
    </div>
    <div>
      <h4>{{ $t("joinourteam.whatsinit.title") }}</h4>
      <ul>
        <li
          v-for="(benefit, bi) in $t('joinourteam.whatsinit.list')"
          :key="bi"
        >
          {{ benefit }}
        </li>
      </ul>
      <p class="mt-4">
        {{ $t("joinourteam.whatsinit.p1") }}
      </p>
      <expansion-panels class="mt-6">
        <expansion-panel
          v-for="(job, ji) in $t('joinourteam.jobs')"
          :key="ji"
          class="pb-1 pt-1"
        >
          <template v-slot:header>
            <h4 class="mb-0">
              {{ job.title }}
            </h4>
          </template>
          <template v-slot:content>
            <h5 class="font-semibold mb-2">
              {{ job.attributions.label }}
            </h5>
            <ul>
              <li
                v-for="(attribution, ai) in job.attributions.list"
                :key="ai"
                class="leading-7 text-gray-700"
              >
                {{ attribution }}
              </li>
            </ul>
            <h5 class="font-semibold mt-4 mb-2">
              {{ job.requirements.label }}
            </h5>
            <ul class="dotted">
              <li
                v-for="(requirement, ri) in job.requirements.list"
                :key="ri"
                class="leading-7 text-gray-700"
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
