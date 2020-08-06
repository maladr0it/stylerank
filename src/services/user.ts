import { EditorValues } from "../types";
import { delay } from "../utils";

const FAKE_DELAY = 250;

export interface SolutionData {
  id: string;
  challengeId: string;
  editorValues: EditorValues;
  status: "none" | "in_progress" | "completed";
}

export const getSolutions = async () => {
  await delay(FAKE_DELAY);

  const data: SolutionData[] = [
    {
      id: "solution_001",
      challengeId: "001",
      editorValues: {
        html: "challenge1 solution html",
        css: "challenge1 solution css",
      },
      status: "in_progress",
    },
    {
      id: "solution_002",
      challengeId: "002",
      editorValues: {
        html: null,
        css: null,
      },
      status: "none",
    },
  ];

  return data;
};
