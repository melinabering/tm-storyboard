<template>
  <v-dialog v-model="dialog" persistent scrollable class="TmStoryboardDialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon small v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card color="grey lighten-3">
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

        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
              style="background:white;"
              class="elevation-2 pa-8 "
            >
              <v-row>
                <v-col cols="12">
                  <label for="">Link To</label>
                  <v-text-field dense outlined hide-details></v-text-field>
                </v-col>
                <v-col cols="6">
                  <label for="">Team</label>
                  <v-select
                    :items="[
                      'Finance',
                      'Cyber Security',
                      'Operations',
                      'Fraud',
                    ]"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <label for="">Status</label>
                  <v-select
                    :items="['To Do', 'Doing', 'Blocked', 'Done']"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>

                <v-col cols="4">
                  <label for="">Sprint</label>
                  <v-select
                    :items="['Sprint 1', 'Sprint 2', 'Sprint 3']"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <label for="">Owners</label>
                  <v-autocomplete
                    :items="[
                      'Carl Artz',
                      'Mike McGowan',
                      'Kate Leonardo',
                      'Mike DeSiante',
                      'Milenka Claure',
                    ]"
                    multiple
                    dense
                    outlined
                    hide-details
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <label for="">Estimate</label>
                  <v-text-field dense outlined hide-details></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h5 class="my-2">Description</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h5 class="my-2">Definition of Done</h5>
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
                <v-col cols="4">
                  <label for="">Priority</label>
                  <v-select
                    :items="['To Do', 'Doing', 'Blocked', 'Done']"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <tm-storyboard-date dateLabel="Due Date" />
                </v-col>
                <v-col cols="4">
                  <label for="">Confidential</label>
                  <v-text-field dense outlined hide-details></v-text-field>
                </v-col>

                <v-col cols="4">
                  <label for="">Impact</label>
                  <v-select
                    :items="['Low', 'Medium', 'High']"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <label for="">Created By</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="Cutty Supaul"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <tm-storyboard-date dateLabel="Created Date" />
                </v-col>
                <v-col cols="4">
                  <label for="">Changed By</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="Carl Artz"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <tm-storyboard-date dateLabel="Changed Date" />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="6" class="pa-8 disabled-area">
              <v-row>
                <v-col>
                  <h3>
                    <v-icon color="primary">mdi-cog-outline</v-icon> Scope &
                    Objectives
                  </h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h5 class="my-2">Objective</h5>
                  <p>
                    Consulting Activity - internal audit should only be limited
                    by the ability of the internal auditor to carry out an
                    effective appraisal. Improve the effectiveness - it is the
                    responsibility of internal auditing to make a contribution
                    to the organisation.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h5 class="my-2">Control Description</h5>
                  <p>
                    The Institute of Internal Auditors approved the following
                    definition of Internal Auditing in 2002: "Internal auditing
                    is an independent objective assurance and consulting
                    activity designed to add value and improve an organisation's
                    operations. It helps an organisation accomplish its
                    objectives by bringing a systematic, disciplined approach to
                    evaluate and improve the effectiveness of risk management,
                    control, and governance processes." There are a number of
                    key words in this definition: Internal - makes it clear that
                    employees of the organisation undertake the work. External
                    auditors, who audit the annual accounts, are independent of
                    the organisation.. Therefore attitudes and organisational
                    knowledge are going to be very different. Auditing -
                    internal audit goes beyond the examination of accounts which
                    is the role of external audit, and covers other activities
                    as well. Independent - Internal auditors should be
                    independent of the activities they audit and should report
                    to Board or Trustee level.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row justify="center">
                    <v-expansion-panels accordion flat>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          ><a>Show Empty Fields</a></v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <label for="">State</label>
                  <v-autocomplete
                    dense
                    outlined
                    hide-details
                    :items="[
                      'Not Started',
                      'In Progress',
                      'Prepared',
                      'Reviewed',
                      'Complete',
                    ]"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-list two-line>
                    <v-list-item-group
                      v-model="selected"
                      active-class="primary--text"
                      multiple
                    >
                      <template v-for="(item, index) in items">
                        <v-list-item :key="item.state">
                          <template>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item.state"
                              ></v-list-item-title>

                              <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.user"
                              ></v-list-item-subtitle>

                              <v-list-item-subtitle
                                v-text="item.comment"
                              ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                              <v-list-item-action-text
                                v-text="item.date"
                              ></v-list-item-action-text>
                            </v-list-item-action>
                          </template>
                        </v-list-item>

                        <v-divider
                          v-if="index < items.length - 1"
                          :key="index"
                        ></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>

                  <v-expansion-panels accordion flat>
                    <v-expansion-panel v-for="(item, i) in 1" :key="i">
                      <v-expansion-panel-header
                        ><a>View More</a></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-list two-line>
                          <v-list-item-group
                            v-model="selected"
                            active-class="primary--text"
                            multiple
                          >
                            <template v-for="(item, index) in items">
                              <v-list-item :key="item.state">
                                <template>
                                  <v-list-item-content>
                                    <v-list-item-title
                                      v-text="item.state"
                                    ></v-list-item-title>

                                    <v-list-item-subtitle
                                      class="text--primary"
                                      v-text="item.user"
                                    ></v-list-item-subtitle>

                                    <v-list-item-subtitle
                                      v-text="item.comment"
                                    ></v-list-item-subtitle>
                                  </v-list-item-content>

                                  <v-list-item-action>
                                    <v-list-item-action-text
                                      v-text="item.date"
                                    ></v-list-item-action-text>
                                  </v-list-item-action>
                                </template>
                              </v-list-item>

                              <v-divider
                                v-if="index < items.length - 1"
                                :key="index"
                              ></v-divider>
                            </template>
                          </v-list-item-group>
                        </v-list>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <label for="">Due Date</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="10/20/2020"
                    :append-icon="marker ? 'mdi-calendar' : 'mdi-calendar'"
                  ></v-text-field>
                </v-col>

                <v-col cols="4">
                  <label for="">Review Due Date</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="10/20/2020"
                    :append-icon="marker ? 'mdi-calendar' : 'mdi-calendar'"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <label for="">Review Due Date</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="10/20/2020"
                    :append-icon="marker ? 'mdi-calendar' : 'mdi-calendar'"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h5>Assignments</h5>
                  <v-autocomplete
                    class="mt-4"
                    dense
                    outlined
                    hide-details
                    append-outer-icon="mdi-magnify"
                    :items="[
                      'Lina Herrera',
                      'Carl Artz',
                      'Cutty Supaul',
                      'Brian Horvath',
                      'Melina Bering',
                    ]"
                  ></v-autocomplete>
                  <v-list two-line>
                    <v-list-item-group
                      v-model="selected"
                      active-class="primary--text"
                      multiple
                    >
                      <template v-for="(item, index) in items">
                        <v-list-item :key="item.state">
                          <template>
                            <v-list-item-content>
                              <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.user"
                              ></v-list-item-subtitle>

                              <v-list-item-subtitle
                                v-text="item.position"
                              ></v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-list-item>

                        <v-divider
                          v-if="index < items.length - 1"
                          :key="index"
                        ></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>

                  <v-expansion-panels accordion flat>
                    <v-expansion-panel v-for="(item, i) in 1" :key="i">
                      <v-expansion-panel-header
                        ><a>View More</a></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-list two-line>
                          <v-list-item-group
                            v-model="selected"
                            active-class="primary--text"
                            multiple
                          >
                            <template v-for="(item, index) in items">
                              <v-list-item :key="item.state">
                                <template>
                                  <v-list-item-content>
                                    <v-list-item-subtitle
                                      class="text--primary"
                                      v-text="item.user"
                                    ></v-list-item-subtitle>

                                    <v-list-item-subtitle
                                      v-text="item.position"
                                    ></v-list-item-subtitle>
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-divider
                                v-if="index < items.length - 1"
                                :key="index"
                              ></v-divider>
                            </template>
                          </v-list-item-group>
                        </v-list>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h5>Properties</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <label for="">Priority</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="High"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <label for="">Impact</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="Low"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <label for="">Area</label>
                  <v-text-field
                    disabled
                    dense
                    outlined
                    hide-details
                    placeholder="Financial"
                  ></v-text-field>
                </v-col>
                <v-expansion-panels accordion flat>
                  <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header
                      ><a>View More</a></v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      something here
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary darken-1" @click="dialog = false">
              Save
            </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TmStoryboardDate from "./TmStoryboardDate.vue";
export default {
  components: { TmStoryboardDate },
  data: () => ({
    dialog: false,
    selected: [2],
    items: [
      {
        date: "10/05/2020",
        user: "Cutty Supaul",
        comment: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        state: "In Progress",
        position: "Preparer",
      },
      {
        date: "10/15/2020",
        user: "Cutty Supaul",
        comment: `Wish I could come, but I'm out of town this weekend.`,
        state: "Not Started",
        position: "Preparer",
      },
    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.multipane.foo.layout-v .multipane-resizer {
  margin: 0;
  left: 0; /* reset default styling */
  width: 15px;
  background: blue;
}

.multipane.foo.layout-h .multipane-resizer {
  margin: 0;
  top: 0; /* reset default styling */
  height: 15px;
  background: blue;
}
/* .splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

em.specs {
  font-size: 0.2em;
  line-height: 1;
  position: absolute;
  color: #bbb;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
} */

h5 {
  border-bottom: 1px solid #d6d6d6;
}

.disabled-area {
  .theme--light.v-expansion-panels .v-expansion-panel,
  .theme--light.v-list {
    background-color: transparent;
  }
}

.TmStoryboardDialog {
  overflow-y: hidden !important;
}
</style>
