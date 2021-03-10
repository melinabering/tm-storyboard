<template>
  <v-card
    class="tm-storyboard__swimlane__content__card"
    :class="cardCss"
    elevation="1"
    tile
    border-top
  >
    <v-card-title>
      <span class="text-subtitle-1" v-bind="attrs" v-on="on">
        ID:
        {{ card.id }}
      </span>
      <v-spacer />
      <tm-storyboard-dialog />
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon small v-bind="attrs" v-on="on" :class="cardCss">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu> -->
    </v-card-title>
    <v-card-text :class="cardCss">
      <span v-text="card.title"></span>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { StoryboardCard } from "@/store/storyboard/state";
import TmStoryboardDialog from "@/components/TmStoryboardDialog.vue";

export default Vue.extend({
  components: {
    TmStoryboardDialog,
  },
  props: {
    card: {
      type: Object as () => StoryboardCard,
    },
  },
  computed: {
    // cardColor() {
    //   const { color } = this.card;
    //   return color.colorCss;
    // },
    // cardCss() {
    //   const { color } = this.card;
    //   return {
    //     "black--text": !color.lightText,
    //     "white--text": color.lightText,
    //   };
    // },
  },
});
</script>

<style lang="scss">
.v-card.tm-storyboard__swimlane__content__card {
  border-left: 4px solid red;
}
</style>
