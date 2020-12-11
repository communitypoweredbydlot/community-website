<template>
  <div>
    <slot />
    <span class="mb-4">© {{ new Date().getFullYear() }} Asociația Community<br>powered by DLOT™</span>
    <i18n path="license.content">
      <template #name>
        <a :href="$t('license.map.name.link')" class="text-link" target="_blank" rel="noopener noreferrer">
          {{ $t('license.map.name.value') }}<!--
    --></a>
      </template>
    </i18n>
  </div>
</template>
