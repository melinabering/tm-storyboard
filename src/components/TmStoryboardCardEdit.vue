<template>
  <v-card>
    <v-card-title>
      ID:
      {{ card.id }}
      <v-spacer />
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="card.title"
        label="Title"
        required
        @blur="$emit('save')"
      ></v-text-field>
      <span class="text-caption">Color</span>
      <v-btn
        v-if="card.color"
        v-text="card.color.colorCss"
        block
        :class="{ 'white--text': card.color.lightText }"
        :color="card.color.colorCss"
        @click="toggleColorPicker(true)"
      />
      <v-dialog v-model="colorPicker" max-width="360" persistent>
        <v-card>
          <v-card-title>Pick Color</v-card-title>
          <v-card-text>
            <v-color-picker
              v-model="card.color"
              hide-mode-switch
              mode="rgba"
              show-swatches
              @input="changeColor"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="saveColor">OK</v-btn>
            <v-btn text @click="revertColor">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { StoryboardCard } from "@/store/storyboard/state";
import { RgbColor } from "@/helpers/color";

export default Vue.extend({
  props: {
    card: {
      type: Object as () => StoryboardCard,
    },
  },
  data: () => ({
    colorPicker: false,
  }),
  methods: {
    changeColor(color: RgbColor) {
      this.$emit("change-color", color);
    },
    revertColor() {
      this.$emit("revert-color");
      this.colorPicker = false;
    },
    saveColor() {
      this.$emit("save");
      this.colorPicker = false;
    },
    toggleColorPicker(colorPicker: boolean) {
      this.colorPicker = colorPicker;
    },
  },
});
</script>

<style lang="scss" scoped></style>
