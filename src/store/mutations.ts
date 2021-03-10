import { MutationTree } from "vuex";
import { RootState } from "@/store/state";

const mutations: MutationTree<RootState> = {
  showSnackbar(state, message: string): void {
    state.snackbar.message = message;
    state.snackbar.show = true;
  }
};

export const Mutations = {
  SHOW_SNACKBAR: "showSnackbar"
};

export default mutations;
