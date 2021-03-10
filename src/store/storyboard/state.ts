import { RgbColor } from "@/helpers/color";
import cards from "./cards.json";

const state: StoryboardState = {
  cards: cards,
  columns: [
    {
      id: 0,
      sortOrder: 100,
      title: "Not Started"
    },
    {
      id: 1,
      sortOrder: 200,
      title: "In Progress"
    },
    {
      id: 2,
      sortOrder: 300,
      title: "In Review"
    },
    {
      id: 3,
      sortOrder: 400,
      title: "Completed"
    },
    {
      id: 4,
      sortOrder: 500,
      title: "Accepted"
    }
  ],
  swimlanes: [
    {
      id: 0,
      sortOrder: 100,
      title: "Defects"
    },
    {
      id: 1,
      sortOrder: 200,
      title: "Features"
    },
    {
      id: 2,
      sortOrder: 300,
      title: "Miscellaneous"
    }
  ]
};

export interface StoryboardCard {
  color: StoryboardCardColor;
  columnId: number;
  id: number;
  sortOrder: number;
  swimlaneId: number;
  title: string;
}

export interface StoryboardCardColor extends RgbColor {
  colorCss?: string;
  lightText?: boolean;
}

export interface StoryboardColumn {
  id: number;
  sortOrder: number;
  title: string;
}

export interface StoryboardSwimlane {
  id: number;
  sortOrder: number;
  title: string;
}

export interface StoryboardState {
  cards: StoryboardCard[];
  columns: StoryboardColumn[];
  swimlanes: StoryboardSwimlane[];
}

export default state;
