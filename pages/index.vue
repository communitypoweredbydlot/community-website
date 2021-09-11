<template>
  <article class="flex flex-col space-y-6">
    <p class="text-center font-dlot-logo text-md lg:text-xl lg:leading-5 mb-4 sm:mb-6 xl:mb-8 font-bold text-gray-800">
      {{ $t('statement.summary') }}
    </p>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">
        {{ $t('statement.vision.title') }}
      </h4>
      <paragraph path="statement.vision.p1" :margin-bottom="false" />
    </div>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">
        {{ $t('statement.values.title') }}
      </h4>
      <div>
        <i18n path="statement.values.p1.content" tag="p" class="mb-2 paragraph-sm xl:paragraph">
          <a class="text-link" :href="'https://www.poweredbydlot.com'" target="_blank" rel="noopener noreferrer">{{ $t("statement.values.p1.poweredBy_label") }}</a>
        </i18n>
        <ul class="ulist">
          <li
            v-for="(value, index) in $t('statement.values.list')"
            :key="index"
            class="paragraph-sm xl:paragraph"
          >
            {{ value }}
          </li>
        </ul>
        <paragraph path="statement.values.p2" :margin-bottom="false" class="mt-2" />
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="section-title-sm xl:section-title">
        {{ $t('statement.mission.title') }}
      </h4>
      <ul class="ulist">
        <li
          v-for="(value, index) in $t('statement.mission.list')"
          :key="index"
          class="paragraph-sm xl:paragraph"
        >
          {{ value }}
        </li>
      </ul>
    </div>
  </article>
</template>
