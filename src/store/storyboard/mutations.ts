import { MutationTree } from "vuex";
import { StoryboardCard, StoryboardState } from "@/store/storyboard/state";

const mutations: MutationTree<StoryboardState> = {
  moveCard(state, request: MoveCardRequest): void {
    const { card, newColumnId, newSwimlaneId, newIndex } = request;
    const newSortOrder = (newIndex + 1) * 100;
    const sameList =
      card.columnId === newColumnId && card.swimlaneId === newSwimlaneId;
    const moveDown = !sameList || card.sortOrder < newSortOrder;
    const cards = state.cards
      .filter(
        card =>
          card.columnId === newColumnId && card.swimlaneId === newSwimlaneId
      )
      .sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
    cards.forEach(cardsCard => {
      if (cardsCard !== card) {
        if (sameList && moveDown) {
          cardsCard.sortOrder =
            cardsCard.sortOrder <= newSortOrder &&
            cardsCard.sortOrder > card.sortOrder
              ? cardsCard.sortOrder - 100
              : cardsCard.sortOrder;
        } else if (sameList && !moveDown) {
          cardsCard.sortOrder =
            cardsCard.sortOrder >= newSortOrder &&
            cardsCard.sortOrder < card.sortOrder
              ? cardsCard.sortOrder + 100
              : cardsCard.sortOrder;
        } else {
          cardsCard.sortOrder =
            cardsCard.sortOrder >= newSortOrder
              ? cardsCard.sortOrder + 100
              : cardsCard.sortOrder;
        }
      }
    });
    card.columnId = newColumnId;
    card.swimlaneId = newSwimlaneId;
    card.sortOrder = newSortOrder;
  },
  moveSwimlane(state, request: MoveSwimlaneRequest): void {
    const { newIndex, oldIndex } = request;
    const oldSortOrder = (oldIndex + 1) * 100;
    const newSortOrder = (newIndex + 1) * 100;
    const swimlanes = state.swimlanes.sort((a, b) =>
      a.sortOrder > b.sortOrder ? 1 : -1
    );
    const moveDown = newIndex > oldIndex;
    swimlanes.forEach(swimlane => {
      if (swimlane.sortOrder !== oldSortOrder) {
        if (moveDown) {
          swimlane.sortOrder =
            swimlane.sortOrder <= newSortOrder &&
            swimlane.sortOrder > oldSortOrder
              ? swimlane.sortOrder - 100
              : swimlane.sortOrder;
        } else {
          swimlane.sortOrder =
            swimlane.sortOrder >= newSortOrder &&
            swimlane.sortOrder < oldSortOrder
              ? swimlane.sortOrder + 100
              : swimlane.sortOrder;
        }
      } else {
        swimlane.sortOrder = newSortOrder;
      }
    });
  },
  saveCard(state, updatedCard: StoryboardCard): void {
    const card = state.cards.find(c => c.id === updatedCard.id);
    if (card) {
      card.color = updatedCard.color;
      card.columnId = updatedCard.columnId;
      card.sortOrder = updatedCard.sortOrder;
      card.swimlaneId = updatedCard.swimlaneId;
      card.title = updatedCard.title;
    }
  },
  syncCardsSortOrder(state, request: SyncSortOrderRequest): void {
    const { columnId, swimlaneId } = request;
    const cards = state.cards
      .filter(
        card => card.columnId === columnId && card.swimlaneId === swimlaneId
      )
      .sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
    cards.forEach((card, index) => {
      const sortOrder = (index + 1) * 100;
      card.sortOrder = sortOrder;
    });
  }
};

export const Mutations = {
  MOVE_CARD: "moveCard",
  MOVE_SWIMLANE: "moveSwimlane",
  SAVE_CARD: "saveCard",
  SYNC_CARDS_SORT_ORDER: "syncCardsSortOrder"
};

export interface MoveCardRequest {
  card: StoryboardCard;
  newColumnId: number;
  newIndex: number;
  newSwimlaneId: number;
}

export interface MoveSwimlaneRequest {
  newIndex: number;
  oldIndex: number;
}

export interface SyncSortOrderRequest {
  columnId: number;
  swimlaneId: number;
}

export default mutations;
