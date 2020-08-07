import { v4 as uuid } from "uuid";

import { EditorValues } from "../types";
import { delay } from "../utils";

const MOCK_DELAY = 250;

export interface SolutionData {
  id: string;
  challengeId: string;
  editorValues: EditorValues;
  status: "none" | "in_progress" | "completed";
}

const MOCK_SOLUTIONS: SolutionData[] = [
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

export const getSolutions = async () => {
  await delay(MOCK_DELAY);

  const data = MOCK_SOLUTIONS;
  return data;
};

export const createSolution = async (challengeId: string) => {
  await delay(MOCK_DELAY);

  const data: SolutionData = {
    id: uuid(),
    challengeId,
    editorValues: {
      html: null,
      css: null,
    },
    status: "none",
  };

  return data;
};

export const getSolution = async (challengeId: string) => {
  await delay(MOCK_DELAY);

  const data = MOCK_SOLUTIONS;
  const result = data.find((solution) => solution.challengeId === challengeId);

  if (!result) {
    return createSolution(challengeId);
  }
  return result;
};
