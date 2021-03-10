<template>
  <div class="tm-storyboard">
    <tm-storyboard-status-bar :columns="columns" />
    <draggable :list="swimlanes" group="swimlanes" @end="moveSwimlane">
      <tm-storyboard-swimlane
        v-for="(swimlane, swimlaneIndex) in swimlanes"
        :key="swimlane.id"
        :columns="columns.length"
        :lane="swimlaneIndex"
        :swimlane="swimlane"
      >
        <v-col v-for="column in columns" :key="column.id">
          <tm-storyboard-create-dialog />
          <draggable
            :list="cardsForColumnSwimlane(column.id, swimlane.id)"
            :data-col="column.id"
            :data-lane="swimlane.id"
            class="draggable fill-height"
            group="cards"
            @end="moveCard"
          >
            <tm-storyboard-card
              v-for="card in cardsForColumnSwimlane(column.id, swimlane.id)"
              :card="card"
              :key="card.id"
              @edit="editCard(card)"
            />
          </draggable>
        </v-col>
      </tm-storyboard-swimlane>
    </draggable>
    <v-dialog v-model="showEditingCard" max-width="600" scrollable>
      <tm-storyboard-card-edit
        :card="editingCard"
        @close="toggleShowEditingCard(false)"
        @change-color="changeCardColor"
        @revert-color="revertCardColor"
        @save="saveCard(editingCard)"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";
import TmStoryboardCard from "@/components/TmStoryboardCard.vue";
// import TmStoryboardDialog from "@/components/TmStoryboardDialog.vue";
import TmStoryboardCreateDialog from "@/components/TmStoryboardCreateDialog.vue";
import TmStoryboardCardEdit from "@/components/TmStoryboardCardEdit.vue";
import TmStoryboardStatusBar from "@/components/TmStoryboardStatusBar.vue";
import TmStoryboardSwimlane from "@/components/TmStoryboardSwimlane.vue";
import { StoryboardCard } from "@/store/storyboard/state";
import { RgbColor, rgbColorCss, isDarkColor } from "@/helpers/color";

export default Vue.extend({
  components: {
    draggable,
    TmStoryboardCard,
    // TmStoryboardDialog,
    TmStoryboardCreateDialog,
    TmStoryboardCardEdit,
    TmStoryboardStatusBar,
    TmStoryboardSwimlane,
  },
  props: {
    cardsForColumnSwimlane: {
      type: Function,
    },
    columns: {
      type: Array,
    },
    moveCard: {
      type: Function,
    },
    moveSwimlane: {
      type: Function,
    },
    saveCard: {
      type: Function,
    },
    swimlanes: {
      type: Array,
    },
  },
  data: () => ({
    currentCard: (null as unknown) as StoryboardCard,
    editingCard: (null as unknown) as StoryboardCard,
    showEditingCard: false,
  }),
  methods: {
    changeCardColor(color: RgbColor) {
      this.editingCard.color.colorCss = rgbColorCss(color);
      this.editingCard.color.lightText = isDarkColor(color);
    },
    editCard(card: StoryboardCard) {
      const editingCard = { ...card };
      editingCard.color = { ...card.color };
      this.editingCard = editingCard;
      this.currentCard = card;
      this.showEditingCard = true;
    },
    revertCardColor(): void {
      this.editingCard.color = { ...this.currentCard.color };
    },
    toggleShowEditingCard(showEditingCard: boolean) {
      this.showEditingCard = showEditingCard;
    },
  },
});
</script>
