<template>
  <article>
    <p>{{ $t("statement.short_description") }}</p>
    <div>
      <h4>{{ $t("statement.section_vision.title") }}</h4>
      <p>{{ $t("statement.section_vision.content") }}</p>
    </div>
    <section>
      <h4>{{ $t("statement.section_values.title") }}</h4>
      <i18n path="statement.section_values.powered_by.content" tag="p">
        <a :href="'https://www.poweredbydlot.com'">{{ $t("statement.section_values.powered_by.hyperlink_label") }}</a>
      </i18n>
      <ul>
        <li
          v-for="(value, index) in $t('statement.section_values.values')"
          :key="index">
          {{ value }}
        </li>
      </ul>
      <br />
      <p>{{ $t("statement.section_values.commitment") }}</p>
    </section>
    <section>
      <h4>{{ $t("statement.section_mission.title") }}</h4>
      <br />
      <ul>
        <li
          v-for="(value, index) in $t('statement.section_mission.objectives')"
          :key="index"
        >
          {{ value }}
        </li>
      </ul>
    </section>
  </article>
</template>