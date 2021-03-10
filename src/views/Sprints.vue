<template>
  <div>
    <v-data-table
      show-expand
      :headers="dessertHeaders"
      :items="sprints"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-btn color="primary" small>New</v-btn>
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
        <td :colspan="headers.length">More info about {{ item.name }}</td>
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

<script>
import TmFilter from "@/components/TmFilter.vue";
export default {
  components: {
    TmFilter,
  },
  data() {
    return {
      expanded: [],
      singleExpand: false,
      filterdrawer: null,
      dessertHeaders: [
        { text: "", value: "data-table-expand" },

        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
        { text: "State", value: "state" },
        { text: "Created By", value: "createdBy" },
        { text: "Created Date", value: "createdDate" },
        { text: "Stories", value: "stories" },
        { text: "Estimate", value: "estimate" },
      ],
      sprints: [
        {
          name: "Sprint 1",
          startDate: "11/30/2020",
          endDate: "12/11/2020",
          state: "Closed",
          createdBy: "System",
          createdDate: "",
          stories: "",
          estimate: "",
        },
        {
          name: "Sprint 2",
          startDate: "12/14/2020",
          endDate: "12/25/2020",
          state: "Closed",
          createdBy: "System",
          createdDate: "",
          stories: "",
          estimate: "",
        },
        {
          name: "Sprint 3",
          startDate: "12/28/2020",
          endDate: "01/08/2020",
          state: "Active",
          createdBy: "System",
          createdDate: "",
          stories: "",
          estimate: "",
        },
        {
          name: "Sprint 4",
          startDate: "01/11/2021",
          endDate: "01/22/2021",
          state: "Future",
          createdBy: "System",
          createdDate: "",
          stories: "",
          estimate: "",
        },
        {
          name: "Sprint 5",
          startDate: "01/25/2020",
          endDate: "02/05/2020",
          state: "Future",
          createdBy: "System",
          createdDate: "",
          stories: "",
          estimate: "",
        },
      ],
    };
  },
};
</script>

<style>
.v-data-table
  > .v-data-table__wrapper
  tbody
  tr.v-data-table__expanded__content {
  box-shadow: none;
}
</style>
