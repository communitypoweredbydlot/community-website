<template>
  <v-app>
    <v-app-bar app fixed dense class="white" elevate-on-scroll min-height="58px" height="64px">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <Title class="hidden-md-and-up" />
      <v-container class="hidden-sm-and-down pb-6">
        <v-row align="center" justify="space-between" no-gutters>
          <v-col cols="auto">
            <Title />
          </v-col>
          <v-col cols="auto">
            <v-row no-gutters align="center">
              <v-col
                v-for="(item, index) in mainMenuItems"
                :key="index"
              >
                <v-btn
                  :to="localePath(item.route)"
                  exact
                  text
                  small
                  bottom
                  nuxt
                >
                  {{ $t(item.text) }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto">
            <LanguageSelect />
          </v-col>
        </v-row>
      </v-container>
      <v-spacer class="hidden-md-and-up"/>
      <v-toolbar-items class="hidden-md-and-up">
        <LanguageSelect />
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="(item, index) in mainMenuItems"
          :key="index"
          :to="localePath(item.route)"
          exact
          nuxt
        >
          <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="mt-8">
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
import Title from '@/components/Title.vue'

@Component({
  components: {
    Footer,
    LanguageSelect,
    Title
  }
})
export default class App extends Vue {

  tab!: any
  drawer = false

  mainMenuItems = [
    {
      text: "nav.top.mission_statement",
      route: '/'
    },
    {
      text: "nav.top.our_story",
      route: '/ourstory'
    },
    {
      text: "nav.top.projects",
      route: '/projects'
    },
    {
      text: "nav.top.news",
      route: '/news'
    },
    {
      text: "nav.top.support_us",
      route: '/supportus'
    },
    {
      text: "nav.top.join_our_team",
      route: '/joinourteam'
    }
  ]
}
</script>

<style scoped>
.theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
    opacity: 0.0;
}

.theme--light.v-btn--active {
    color: rgba(0,0,0,0.5);
}

.theme-light.v-btn > a:hover {
  opacity: 0.0;
}
</style>

