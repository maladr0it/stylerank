import { EditorValues, SolutionStatus } from "../types";
import { ChallengeData } from "../services/challenges";
import { SolutionData } from "../services/solutions";

export interface State {
  data: {
    challenge: ChallengeData;
    solution: SolutionData;
  } | null;
  initialEditorValues: EditorValues;
  editorValues: EditorValues;
  status: SolutionStatus;
}

type Action =
  | {
      type: "challenge_loaded";
      payload: {
        data: {
          challenge: ChallengeData;
          solution: SolutionData;
        };
        initialEditorValues: EditorValues;
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
      const { data, initialEditorValues } = action.payload;

      return {
        ...state,
        editorValues: initialEditorValues,
        initialEditorValues,
        data,
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
