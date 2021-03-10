<template>
  <v-row>
    <v-dialog v-model="dialog" persistent scrollable width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block
          text
          centered
          color="grey"
          class="ma-4"
          tile
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon> Add Story
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          S-800
          <v-text-field
            class="ml-4"
            dense
            outlined
            required
            placeholder="Verify Input Data"
            hide-details=""
          ></v-text-field>

          <v-btn icon @click="dialog = false" class="pl-8">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-container class="pt-8">
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-row>
                  <v-col cols="12">
                    <label for="">Link To</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label for="">Sprint</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Status</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label for="">Estimate</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Team</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Owners</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <h4>Description</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h4>Definition of Done</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <label for="">Priority</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <tm-storyboard-date dateLabel="Due Date" />
                  </v-col>
                  <v-col cols="12">
                    <label for="">Confidential</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label for="">Impact</label>
                    <v-text-field dense outlined hide-details></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="primary darken-1" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TmStoryboardDate from "./TmStoryboardDate.vue";
export default {
  components: { TmStoryboardDate },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style>
/* .v-dialog .v-card__title {
  background-color: white;
  border-bottom: 1px solid #d6d6d6;
} */
</style>
