import React, { useEffect, useCallback, useReducer } from "react";
import { useParams } from "react-router-dom";

import { getChallenge } from "../services/challenges";
import { Editor } from "../Editor";

import { challengeReducer } from "./challengeReducer";
import { Output } from "./Output";
import { Target } from "./Target";
import "./Challenge.css";

const INITIAL_STATE = {
  data: null,
  editorValues: { html: "", css: "" },
};

// set up monaco editor
// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_: string, label: string) {
    if (label === "css") {
      return "/css.worker.bundle.js";
    }
    if (label === "html") {
      return "/html.worker.bundle.js";
    }
    return "/editor.worker.bundle.js";
  },
};

export const Challenge = () => {
  const { id } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(challengeReducer, INITIAL_STATE);

  const setHtml = useCallback((value: string) => {
    dispatch({ type: "html_updated", payload: value });
  }, []);

  const setCss = useCallback((value: string) => {
    dispatch({ type: "css_updated", payload: value });
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await getChallenge(id);
      dispatch({ type: "challenge_loaded", payload: data });
    };

    load();
  }, [id]);

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
          <Output className="Challenge-output" values={state.editorValues} />
          <Target className="Challenge-target" />
        </div>
      ) : (
        <h1>LOADING...</h1>
      )}
    </>
  );
};
