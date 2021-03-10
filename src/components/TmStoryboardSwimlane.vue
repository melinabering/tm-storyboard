<template>
  <div class="tm-storyboard__swimlane">
    <v-row class="flex-nowrap tm-storyboard__swimlane__header" no-gutters>
      <v-col :style="colStyle">
        <span v-text="swimlane.title"></span>
      </v-col>
    </v-row>
    <v-row class="flex-nowrap tm-storyboard__swimlane__content" no-gutters>
      <slot />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { StoryboardSwimlane } from "@/store/storyboard/state";

export default Vue.extend({
  props: {
    columns: {
      type: Number
    },
    lane: {
      type: Number
    },
    swimlane: {
      type: Object as () => StoryboardSwimlane
    }
  },
  computed: {
    colStyle() {
      return {
        minWidth: `${+this.columns * 192}px`
      };
    }
  }
});
</script>
