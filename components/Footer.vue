<template>
  <v-footer app absolute class="white">
    <v-container>
      <v-divider />

      <v-row align="start" justify="start" justify-sm="center" class="text-caption" no-gutters>
        <v-col cols="auto">
          <v-list dense nav flat tile>
            <v-list-item dense flat>
              <v-list-item-content>
                <v-list-item-title class="copyright">
                  © {{ new Date().getFullYear() }} powered by DLOT™
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="auto">
          <v-list dense nav flat tile>
            <v-list-item
              v-for="(item, index) in transparencyAndGdprMenuItems"
              :key="index"
              :to="localePath(item.route)"
              exact
              link
              dense
              flat
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="auto">
          <v-list dense nav flat tile>
            <v-list-item dense flat>
              <v-list-item-content>
                <v-list-item-title>{{ $t("email") }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dense flat>
              <v-list-item-content>
                <v-list-item-title>{{ $t("phone") }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="auto">
          <v-img src="https://poweredbydlot.com/wp-content/uploads/2019/11/logo-powered-by-Dlot-1-e1572971187212-216x139.jpg" height="100" width="125" contain />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  transparencyAndGdprMenuItems = [
    {
      text: 'nav.bottom.privacy_policy',
      route: '/privacypolicy'
    },
    {
      text: 'nav.bottom.activity_reports',
      route: '/activityreports'
    },
    {
      text: 'nav.bottom.terms_and_conditions',
      route: '/termsandconditions'
    }
  ]
}
</script>

<style scoped>
.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
}

.copyright {
  font-family: 'Comfortaa';
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: rgba(0, 0, 0, 0.65) !important;
  font-size: 12px;
}

.v-list .v-list-item--active {
  color: rgba(0, 0, 0, 1);
}

.v-list-item--dense .v-list-item__title,
.v-list-item--dense .v-list-item__subtitle,
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
}
</style>
