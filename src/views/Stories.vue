<template>
  <div>
    <v-data-table
      show-expand
      :headers="objectHeaders"
      :items="objects"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-btn color="primary" small>New</v-btn>
          <v-tabs dense height="36px" class="mt-6 ml-6">
            <v-tab to="/Backlog">Object and Stories</v-tab>
            <v-tab to="/Stories">Stories</v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <v-icon
            dense
            color="primary darken-2"
            @click.stop="filterdrawer = !filterdrawer"
          >
            mdi-filter
          </v-icon>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.id }}</td>
      </template>
    </v-data-table>
    <v-navigation-drawer
      absolute
      right
      v-model="filterdrawer"
      temporary
      width="400"
    >
      <tm-filter></tm-filter>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import TmFilter from "@/components/TmFilter.vue";
export default {
  components: {
    TmFilter,
  },
  data() {
    return {
      expanded: [],
      singleExpand: true,
      filterdrawer: null,
      objectHeaders: [
        { text: "", value: "data-table-expand" },
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Title", value: "title" },
        { text: "Code", value: "code" },
        { text: "Owner", value: "owner" },
        { text: "Priority", value: "priority" },
        { text: "Sprint", value: "sprint" },
        { text: "Status", value: "status" },
        { text: "Team", value: "team" },
        { text: "Current Date", value: "currentDate" },
      ],
      objects: [
        {
          id: "Frozen Strawberries",
          title: 159,
          code: 6.0,
          owner: 24,
          priority: 4.0,
          sprint: "1%",
          status: "dropdown",
          team: "dropdown",
          currentDate: "MM/DD/YYYY",
        },
        {
          id: "Ice cream sandwich",
          title: 237,
          code: 9.0,
          owner: 37,
          priority: 4.3,
          sprint: "1%",
          status: "dropdown",
          team: "dropdown",
          currentDate: "MM/DD/YYYY",
        },
      ],
    };
  },
};
</script>

<style></style>
