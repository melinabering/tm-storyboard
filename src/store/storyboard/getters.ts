import { GetterTree } from "vuex";
import {
  StoryboardCard,
  StoryboardColumn,
  StoryboardSwimlane,
  StoryboardState
} from "@/store/storyboard/state";
import { RootState } from "@/store/state";
import { isDarkColor, rgbColorCss } from "@/helpers/color";

const getters: GetterTree<StoryboardState, RootState> = {
  cardsForColumnSwimlaneOrdered: state => (
    columnId: number,
    swimlaneId: number
  ) => {
    return state.cards
      .filter(
        card => card.columnId === columnId && card.swimlaneId === swimlaneId
      )
      .reduce((accumulator: StoryboardCard[], currentValue) => {
        const { color } = currentValue;
        color.colorCss = rgbColorCss(color);
        color.lightText = isDarkColor(color);
        accumulator.push(currentValue);
        return accumulator;
      }, [])
      .sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
  },
  columnsOrdered(state): StoryboardColumn[] {
    return state.columns.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
  },
  swimlanesOrdered(state): StoryboardSwimlane[] {
    return state.swimlanes.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
  }
};

export type KanbanGetters = typeof getters;

export default getters;
