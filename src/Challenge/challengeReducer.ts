import { EditorValues } from "../types";
import { ChallengeData } from "../services/challenges";

export interface State {
  data: ChallengeData | null;
  editorValues: EditorValues;
}

type Action =
  | {
      type: "challenge_loaded";
      payload: ChallengeData;
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
  console.log(action.type);

  switch (action.type) {
    case "challenge_loaded": {
      return {
        ...state,
        editorValues: action.payload.initialEditorValues,
        data: action.payload,
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
