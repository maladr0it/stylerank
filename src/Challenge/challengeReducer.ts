import { EditorValues } from "../types";
import { ChallengeData } from "../services/challenges";
import { SolutionData } from "../services/solutions";

export interface State {
  challenge: ChallengeData | null;
  solution: SolutionData | null;
  editorValues: EditorValues;
}

type Action =
  | {
      type: "challenge_loaded";
      payload: {
        challenge: ChallengeData;
        solution: SolutionData;
      };
    }
  | {
      type: "html_updated";
      payload: string;
    }
  | {
      type: "css_updated";
      payload: string;
    };

export const challengeReducer = (state: State, action: Action): State => {
  console.log(action, state);

  switch (action.type) {
    case "challenge_loaded": {
      const { challenge, solution } = action.payload;

      return {
        ...state,
        editorValues: solution.editorValues,
        challenge,
        solution,
      };
    }

    case "html_updated": {
      return {
        ...state,
        editorValues: {
          ...state.editorValues,
          html: action.payload,
        },
      };
    }

    case "css_updated": {
      return {
        ...state,
        editorValues: {
          ...state.editorValues,
          css: action.payload,
        },
      };
    }
  }
};
