import { delay } from "../utils";

import challenge_data from "./db_challenges.json";

console.log(challenge_data);

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
  await delay(2000);
  const data = JSON.parse(challenge_data) as ChallengeData[];
  const result = data.find((challenge) => challenge.id === id);
  if (!result) {
    throw new Error("challenge not found");
  }
  return result;
};
