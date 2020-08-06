import React, { useState, useEffect, useCallback, useReducer } from "react";

import { getChallenge, ChallengeData } from "../services/challenges";
import { Editor } from "../Editor";

import { challengeReducer } from "./challengeReducer";
import { Output } from "./Output";
import { Target } from "./Target";
// import { Challenge } from "./Challenge";
// import { EditorContextProvider } from "../EditorContext";

const INITIAL_STATE = {
  data: null,
  editorValues: { html: "", css: "" },
};

// set up monaco editor
// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_: string, label: string) {
    if (label === "css") {
      return "./css.worker.bundle.js";
    }
    if (label === "html") {
      return "./html.worker.bundle.js";
    }
    return "./editor.worker.bundle.js";
  },
};

export const ChallengeContainer = () => {
  // const [challengeData, setChallengeData] = useState<ChallengeData | null>(
  //   null,
  // )

  const [state, dispatch] = useReducer(challengeReducer, INITIAL_STATE);

  const setHtml = useCallback((value: string) => {
    dispatch({ type: "html_updated", payload: value });
  }, []);

  const setCss = useCallback((value: string) => {
    dispatch({ type: "css_updated", payload: value });
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await getChallenge("challenge_001");
      dispatch({ type: "challenge_loaded", payload: data });
    };

    load();
  }, []);

  return (
    <>
      {state.data ? (
        <div className="Challenge">
          <Editor
            className="Challenge-topEditor"
            language="html"
            sourceId={state.data.id}
            initialValue={state.data.initialEditorValues.html}
            onChange={setHtml}
          />
          <Editor
            className="Challenge-bottomEditor"
            language="css"
            sourceId={state.data.id}
            initialValue={state.data.initialEditorValues.css}
            onChange={setCss}
          />
          <Output className="Challenge-output" />
          <Target className="Challenge-target" />
        </div>
      ) : (
        // <EditorContextProvider
        //   initialValues={challengeData.initialEditorValues}
        // >
        //   <Challenge
        //     initialValues={challengeData.input}
        //     // target={challengeData.target}
        //   />
        // </EditorContextProvider>
        <h1>LOADING...</h1>
      )}
    </>
  );
};
