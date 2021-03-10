<template>
  <v-app class="tm-app">
    <v-main>
      <tabs />
      <router-view />
    </v-main>
    <v-snackbar v-model="snackbar.show" app :timeout="snackbar.timeout" top>
      <span v-text="snackbar.message"></span>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Tabs from "./components/Tabs.vue";

export default Vue.extend({
  components: { Tabs },
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["snackbar"]),
  },
});
</script>

<style lang="scss">
$sans-serif: "Fira Sans", "Roboto", sans-serif;

html[lang] {
  overflow-y: auto;
}

.tm-app {
  &.v-application {
    font-family: $sans-serif;
    &.theme--light {
      background-color: whitesmoke;
    }
    .headline {
      font-family: $sans-serif !important;
    }
    .text-subtitle-1 {
      font-family: $sans-serif !important;
    }
    .title {
      font-family: $sans-serif !important;
    }
  }
}

.tm-storyboard {
  overflow: auto;
  height: 100vh;
  width: 100vw;
  &__statusbar {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;
    .col {
      background-color: #287cac;
      color: rgba(255, 255, 255, 0.9);
      line-height: 2.4rem;
      min-width: 192px;
      &:not(:last-child) {
        border-right: solid 1px rgba(192, 192, 192, 1);
      }
    }
  }
  &__swimlane {
    width: 100%;
    &__header {
      position: sticky;
      top: 38px;
      z-index: 1;
      .col {
        background-color: rgba(219, 239, 249, 1);
        border-bottom: solid 1px rgba(192, 192, 192, 1);
        border-top: solid 1px rgba(192, 192, 192, 1);
        line-height: 2rem;
        text-indent: 10px;
      }
    }
    &__content {
      min-height: 30px;
      .col {
        min-width: 192px;
        &:not(:last-child) {
          border-right: solid 1px rgba(192, 192, 192, 1);
        }
      }
      &__card {
        margin: 8px;
      }
    }
  }
}
</style>
