import { ActionTree } from "vuex";
import { RootState } from "@/store/state";
import { Mutations } from "@/store/mutations";

const actions: ActionTree<RootState, RootState> = {
  showSnackbar({ commit }, message: string): void {
    commit(Mutations.SHOW_SNACKBAR, message);
  }
};

export const Actions = {
  SHOW_SNACKBAR: "showSnackbar"
};

export default actions;
