import { delay } from "../utils";

// FAKE API

export interface ChallengeData {
  input: {
    css: string;
    html: string;
  };
  target: {
    css: string;
    html: string;
  };
}

export const getChallenge = async (id: string) => {
  await delay(2000);

  const result: ChallengeData = {
    input: {
      html: `<h1>Initial ${id}</h1>`,
      css: `h1 { color: pink }`,
    },
    target: {
      html: `<h1>Wow ${id}</h1>`,
      css: `h1 { color: red };`,
    },
  };
  return result;
};
