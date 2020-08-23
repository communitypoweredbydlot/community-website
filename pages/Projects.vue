<template>
  <article>
    <p
      v-for="(p, index) in $t('projects.paragraphs')"
      :key="index"
      v-html="p" />
  </article>
</template>
