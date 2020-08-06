import { delay } from "../utils";

const DB_URL = "/static/db";
const FAKE_DELAY = 500;

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
  initialEditorValues: {
    html: string;
    css: string;
  };
}

export const getChallenge = async (id: string) => {
  await delay(FAKE_DELAY);
  const resp = await fetch(`${DB_URL}/challenges.json`);
  const data = (await resp.json()) as ChallengeData[];

  const result = data.find((challenge) => challenge.id === id);
  if (!result) {
    throw new Error("challenge not found");
  }
  return result;
};
