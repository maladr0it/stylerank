import React, { useEffect, useCallback, useReducer } from "react";
import { useParams } from "react-router-dom";

import { getChallenge } from "../services/challenges";
import { getSolution } from "../services/solutions";
import { Editor, useEditor } from "../Editor";

import { challengeReducer, State } from "./challengeReducer";
import { Output } from "./Output";
import { Target } from "./Target";
import "./Challenge.css";

const INITIAL_STATE: State = {
  data: null,
  status: "none",
  editorValues: { html: null, css: null },
  initialEditorValues: { html: null, css: null },
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
  const htmlEditor = useEditor();
  const cssEditor = useEditor();

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

      const initialEditorValues = {
        html: solution.editorValues.html ?? challenge.initialEditorValues.html,
        css: solution.editorValues.css ?? challenge.initialEditorValues.css,
      };

      dispatch({
        type: "challenge_loaded",
        payload: {
          data: { challenge, solution },
          initialEditorValues,
        },
      });
    };

    load();
  }, [id]);

  // update the editor's values if the initial values change
  useEffect(() => {
    htmlEditor.setValue(state.initialEditorValues.html ?? "");
    cssEditor.setValue(state.initialEditorValues.css ?? "");
  }, [state.initialEditorValues]);

  if (state.data) {
    const { challenge, solution } = state.data;

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
              editorRef={htmlEditor.ref}
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
              editorRef={cssEditor.ref}
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
              <Target image={challenge.coverImage} />
            </div>
          </section>
        </div>
        <div style={{ overflow: "hidden" }}>Status: {state.status}</div>
      </>
    );
  }

  return null;
};
