<template>
  <v-tabs
    dense
    background-color="grey lighten-4"
    hide-slider="true"
    color="primary"
  >
    <v-tab to="/Backlog">Backlog</v-tab>
    <v-tab to="/">Storyboard</v-tab>
    <v-tab to="/Sprints">Sprints</v-tab>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon dense color="primary darken-2" v-bind="attrs" v-on="on">
          mdi-cog
        </v-icon>
      </template>
      <v-card>
        <v-card-title>
          Configuration
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <label for="">Template <span color="danger">*</span></label>
                <v-select
                  :items="[
                    'Finance Audit',
                    'IT Audit',
                    'General Audit',
                    'Process Audit',
                  ]"
                  outlined
                  dense
                  hide-details="true"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" sm="12">
                <label for="">Sprint Length</label>
                <v-select
                  :items="['1 Week', '2 Weeks', '3 Weeks']"
                  outlined
                  dense
                  hide-details="true"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <small>*indicates required field</small>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn dark color="blue darken-1" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-icon dense color="primary darken-2" @click.stop="">
      mdi-floppy
    </v-icon>
    Last Saved: 2 mins ago
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<style></style>
