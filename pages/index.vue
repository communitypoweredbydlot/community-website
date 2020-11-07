<template>
  <article class="flex flex-col space-y-6">
    <p class="text-center font-dlot-logo text-md lg:text-xl lg:leading-5 mb-4 sm:mb-6 lg:mb-8 font-bold text-gray-800">
      {{ $t('statement.summary') }}
    </p>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">
        {{ $t('statement.vision.title') }}
      </h4>
      <p class="paragraph">
        {{ $t('statement.vision.p1') }}
      </p>
    </div>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">
        {{ $t('statement.values.title') }}
      </h4>
      <div>
        <i18n path="statement.values.p1.content" tag="p" class="paragraph mb-2">
          <a class="text-link" :href="'https://www.poweredbydlot.com'">{{ $t("statement.values.p1.poweredBy_label") }}</a>
        </i18n>
        <ul>
          <li
            v-for="(value, index) in $t('statement.values.list')"
            :key="index"
          >
            {{ value }}
          </li>
        </ul>
        <p class="mt-2 paragraph">
          {{ $t('statement.values.p2') }}
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">{{ $t('statement.mission.title') }}</h4>
      <ul>
        <li
          v-for="(value, index) in $t('statement.mission.list')"
          :key="index"
        >
          {{ value }}
        </li>
      </ul>
    </div>
  </article>
</template>
