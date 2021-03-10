<template>
  <tm-storyboard
    :cards-for-column-swimlane="cardsForColumnSwimlaneOrdered"
    :columns="columnsOrdered"
    :move-card="moveCard"
    :move-swimlane="moveSwimlane"
    :save-card="saveCard"
    :swimlanes="swimlanesOrdered"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import TmStoryboard from "@/components/TmStoryboard.vue";

export default Vue.extend({
  name: "Home",
  components: {
    TmStoryboard,
  },
  computed: {
    ...mapGetters("Storyboard", [
      "cardsForColumnSwimlaneOrdered",
      "columnsOrdered",
      "swimlanesOrdered",
    ]),
  },
  methods: {
    ...mapActions("Storyboard", ["moveCard", "moveSwimlane", "saveCard"]),
  },
});
</script>
