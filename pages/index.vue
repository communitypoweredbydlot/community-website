<template>
  <article class="flex flex-col space-y-6">
    <p class="text-center font-dlot-logo text-md lg:text-xl lg:leading-5 mb-4 sm:mb-6 lg:mb-8 font-bold">
      {{ $t('statement.summary') }}
    </p>
    <div class="flex flex-col">
      <h3>{{ $t('statement.vision.title') }}</h3>
      <p>
        {{ $t('statement.vision.p1') }}
      </p>
    </div>
    <div class="flex flex-col">
      <h3>{{ $t('statement.values.title') }}</h3>
      <div>
        <i18n path="statement.values.p1.content" tag="p" class="mb-4">
          <a class="text-link" :href="'https://www.poweredbydlot.com'">{{ $t("statement.values.p1.poweredBy_label") }}</a>
        </i18n>
        <p
          v-for="(value, index) in $t('statement.values.list')"
          :key="index"
          class="mb-1"
        >
          {{ value }}
        </p>
        <p class="mt-4">
          {{ $t('statement.values.p2') }}
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h3>{{ $t('statement.mission.title') }}</h3>
      <p
        v-for="(value, index) in $t('statement.mission.list')"
        :key="index"
        class="mb-1"
      >
        {{ value }}
      </p>
    </div>
  </article>
</template>
