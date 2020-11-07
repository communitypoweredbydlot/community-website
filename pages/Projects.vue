<template>
  <article class="flex flex-col space-y-6">
    <div>
      <h3 class="page-title-sm xl:page-title capitalize">
        {{ $t('projects.title') }}
      </h3>
      <p class="paragraph">
        {{ $t('projects.p1') }}
      </p>
      <p class="paragraph">
        {{ $t('projects.p2') }}
      </p>
      <p class="paragraph">
        {{ $t('projects.p3') }}
      </p>
    </div>
    <div>
      <h4 class="section-title-sm xl:section-title">
        {{ $t('projects.tripandpick.title') }}
      </h4>
      <i18n path="projects.tripandpick.p1.content" tag="p" class="paragraph">
        <template v-slot:tripandpick-hashtag>
          <a class="text-link" href="https://www.instagram.com/explore/tags/tripandpick">{{ $t('projects.tripandpick.p1.tripandpick-hashtag') }}</a>
        </template>
      </i18n>
      <p class="paragraph">
        {{ $t('projects.tripandpick.p2') }}
      </p>
      <p class="paragraph">
        {{ $t('projects.tripandpick.p3') }}
      </p>
      <i18n path="projects.tripandpick.p4.content" tag="p" class="paragraph">
        <template v-slot:tripandpick-email-link>
          <a class="text-link" href="mailto:tripandpick@asociatiacommunity.ro">{{ $t('projects.tripandpick.p4.tripandpick-email-link') }}</a>
        </template>
      </i18n>
    </div>
  </article>
</template>
