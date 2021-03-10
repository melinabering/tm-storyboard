<template>
  <v-row class="tm-storyboard__statusbar flex-nowrap" no-gutters>
    <v-col v-for="column in columns" class="text-center" :key="column.id">
      <span v-text="column.title"></span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    columns: {
      type: Array
    }
  },
  data: () => ({})
});
</script>
