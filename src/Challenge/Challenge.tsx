import React, { useEffect, useCallback, useReducer } from "react";
import { useParams } from "react-router-dom";

import { getChallenge } from "../services/challenges";
import { getSolution } from "../services/solutions";
import { Editor } from "../Editor";

import { challengeReducer } from "./challengeReducer";
import { Output } from "./Output";
import { Target } from "./Target";
import "./Challenge.css";

const INITIAL_STATE = {
  challenge: null,
  solution: null,
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
      const [challenge, solution] = await Promise.all([
        getChallenge(id),
        getSolution(id),
      ]);
      dispatch({
        type: "challenge_loaded",
        payload: { challenge, solution },
      });
    };

    load();
  }, [id]);

  if (state.challenge && state.solution) {
    return (
      <>
        <div className="Challenge-panes">
          <section className="Challenge-pane Challenge-htmlPane">
            <header className="Challenge-paneHeader">
              <h2>HTML</h2>
            </header>
            <Editor
              className="Challenge-paneContent"
              language="html"
              sourceId={state.challenge.id}
              initialValue={
                state.solution.editorValues.html ??
                state.challenge.initialEditorValues.html ??
                ""
              }
              onChange={setHtml}
            />
          </section>
          <section className="Challenge-pane Challenge-cssPane">
            <header className="Challenge-paneHeader">
              <h2>CSS</h2>
            </header>
            <Editor
              className="Challenge-paneContent"
              language="css"
              sourceId={state.challenge.id}
              initialValue={
                state.solution.editorValues.css ??
                state.challenge.initialEditorValues.css ??
                ""
              }
              onChange={setCss}
            />
          </section>
          <section className="Challenge-pane Challenge-outputPane">
            <header className="Challenge-paneHeader">
              <h2>Output</h2>
            </header>
            <Output
              className="Challenge-paneContent"
              values={state.editorValues}
            />
          </section>
          <section className="Challenge-pane Challenge-targetPane">
            <header className="Challenge-paneHeader">
              <h2>Target</h2>
            </header>
            <div className="Challenge-paneContent">
              <Target image={state.challenge.coverImage} />
            </div>
          </section>
        </div>
        <div style={{ overflow: "hidden" }}>Footer controls</div>
      </>
    );
  }

  return null;
};
