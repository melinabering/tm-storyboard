import { ActionTree } from "vuex";
import { StoryboardCard, StoryboardState } from "@/store/storyboard/state";
import { RootState } from "@/store/state";
import { Mutations } from "@/store/storyboard/mutations";
import { Actions } from "@/store/actions";
import { MoveEvent } from "vuedraggable";

type CustomMoveEvent<T> = {
  from: HTMLElement;
  newIndex: number;
  oldIndex: number;
  to: HTMLElement;
};

const actions: ActionTree<StoryboardState, RootState> = {
  moveCard(context, event: CustomMoveEvent<MoveEvent<CustomEvent>>): void {
    const { commit, dispatch, getters } = context;
    const { from, to, oldIndex, newIndex } = event;
    const oldColumnId = +(from.dataset.col || 0);
    const oldSwimlaneId = +(from.dataset.lane || 0);
    const newColumnId = +(to.dataset.col || 0);
    const newSwimlaneId = +(to.dataset.lane || 0);

    if (
      oldColumnId === newColumnId &&
      oldSwimlaneId === newSwimlaneId &&
      oldIndex === newIndex
    ) {
      return;
    }

    const oldList = getters["cardsForColumnSwimlaneOrdered"](
      oldColumnId,
      oldSwimlaneId
    ) as StoryboardCard[];
    const card = oldList[oldIndex];

    commit(Mutations.MOVE_CARD, {
      card,
      newColumnId,
      newSwimlaneId,
      newIndex
    });

    if (oldColumnId !== newColumnId || oldSwimlaneId !== newSwimlaneId) {
      commit(Mutations.SYNC_CARDS_SORT_ORDER, {
        columnId: oldColumnId,
        swimlaneId: oldSwimlaneId
      });
    }

    dispatch(Actions.SHOW_SNACKBAR, "Saved", { root: true });
  },
  moveSwimlane(context, event: CustomMoveEvent<MoveEvent<CustomEvent>>): void {
    const { commit, dispatch } = context;
    const { oldIndex, newIndex } = event;

    if (oldIndex === newIndex) {
      return;
    }

    commit(Mutations.MOVE_SWIMLANE, {
      oldIndex,
      newIndex
    });

    dispatch(Actions.SHOW_SNACKBAR, "Saved", { root: true });
  },
  saveCard(context, card: StoryboardCard): void {
    const { commit, dispatch } = context;
    commit(Mutations.SAVE_CARD, card);
    dispatch(Actions.SHOW_SNACKBAR, "Saved", { root: true });
  }
};

export default actions;
