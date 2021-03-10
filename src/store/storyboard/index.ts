import { Module } from "vuex";
import state, { StoryboardState } from "@/store/storyboard/state";
import getters from "@/store/storyboard/getters";
import mutations from "@/store/storyboard/mutations";
import actions from "@/store/storyboard/actions";
import { RootState } from "@/store/state";

const storyboard: Module<StoryboardState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default storyboard;
