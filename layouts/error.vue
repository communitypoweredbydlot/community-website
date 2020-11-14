<template>
  <div>
    <h1 class="font-bold text-gray-800 font-mono text-center text-2xl lg:text-4xl">
      404 - <span class="uppercase">{{ $t('404.notfound') }}</span>
    </h1>
    <p class="text-center paragraph">
      {{ $t('404.sentences[0]') }} <br>
      <i18n path="404.sentences[1]">
        <template v-slot:timeout>
          {{ secondsUntilRedirect }} {{ $tc('time.s', secondsUntilRedirect) }}
        </template>
      </i18n>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class App extends Vue {
  secondsUntilRedirect = 5

  @Watch('secondsUntilRedirect', { immediate: true })
  redirectCountDown (value) {
    if (value > 0) {
      setTimeout(() => this.secondsUntilRedirect--, 1000)
    } else {
      this.$router.push(this.localePath('/'))
    }
  }
}
</script>
