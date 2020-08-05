import React from "react";

import { Challenge } from "./Challenge";
import { EditorContextProvider } from "../EditorContext";

const INITIAL_VALUES = { html: "lul", css: "wow" };

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
  return (
    <EditorContextProvider initialValues={INITIAL_VALUES}>
      <Challenge initialValues={INITIAL_VALUES} />
    </EditorContextProvider>
  );
};
