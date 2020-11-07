<template>
  <div class="flex flex-col h-screen justify-between">
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="drawer"
        class="z-10 fixed inset-0 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="drawer = false"
        />
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="drawer ? 'translate-x-0' : '-translate-x-full'"
    >
      <Title class="mt-4 ml-4 mb-4" />
      <NavigationList class="flex flex-col flex-grow justify-between" is-vertical="true" />
    </aside>
    <Navigation class="mt-4" @toggle-drawer="drawer = !drawer" />
    <div class="w-full lg:w-2/3 xxxl:w-1/2 lg:mx-auto mt-12 md:mt-16 mb-auto px-6">
      <nuxt />
    </div>
    <Footer class="w-full lg:w-2/3  xxxl:w-1/2 lg:mx-auto mt-6 px-6" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class App extends Vue {
  tab!: any
  drawer = false

  mounted () {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      this.drawer = e.keyCode === 27 && this.drawer
    })
  }

  @Watch('$route')
  afterRouteChanged () {
    this.drawer = false
  }
}
</script>
