import { EditorValues } from "../types";
import { delay } from "../utils";

const DB_URL = "/static/db";
const MOCK_DELAY = 250;

interface Image {
  src: string;
  description: string;
}

export interface ChallengeData {
  id: string;
  name: string;
  difficulty: "easy" | "medium" | "hard";
  coverImage: Image;
  images: Image[];
  initialEditorValues: EditorValues;
}

export const getChallenges = async () => {
  await delay(MOCK_DELAY);

  const resp = await fetch(`${DB_URL}/challenges.json`);
  const data = (await resp.json()) as ChallengeData[];
  return data;
};

export const getChallenge = async (id: string) => {
  await delay(MOCK_DELAY);

  const resp = await fetch(`${DB_URL}/challenges.json`);
  const data = (await resp.json()) as ChallengeData[];
  const result = data.find((challenge) => challenge.id === id);

  if (!result) {
    throw new Error("Challenge not found");
  }
  return result;
};
