<template>
  <v-tabs fixed-tabs dense>
    <v-tab>
      <v-icon left>
        mdi-filter
      </v-icon>
      Filter
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-view-column
      </v-icon>
      Columns
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
                dense
                class="rounded-0"
              ></v-text-field>
            </v-col>
          </v-row>
          <template>
            <v-expansion-panels accordion class="elevation-0">
              <v-expansion-panel
                class="elevation-0"
                v-for="(item, i) in 5"
                :key="i"
              >
                <v-expansion-panel-header
                  class="text-uppercase  v-expansion-panel-header"
                  >Filter Title</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-text-field
                    class="rounded-0 mb-2"
                    placeholder="Placeholder"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                  <v-select
                    :items="items"
                    dense
                    outlined
                    class="rounded-0"
                    hide-details
                  ></v-select>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <v-list dense>
            <v-list-item-group class="select-columns">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-drag-vertical</v-icon>
                </v-list-item-icon>
                <v-checkbox
                  label="primary"
                  color="primary"
                  value="Column 1"
                  hide-details
                ></v-checkbox>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-drag-vertical</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-checkbox
                      label="primary"
                      color="primary"
                      value="Column 2"
                      hide-details
                    ></v-checkbox>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-drag-vertical</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-checkbox
                      label="primary"
                      color="primary"
                      value="Column 3"
                      hide-details
                    ></v-checkbox>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      search: "",

      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
};
</script>

<style>
.v-expansion-panel-header {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  line-height: 1.125rem;
  color: #757575;
}

.v-expansion-panel:before {
  box-shadow: none;
}

.select-columns .v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}

.v-tab.v-tab--active {
  background-color: #fff;
  color: #353535;
}
</style>
