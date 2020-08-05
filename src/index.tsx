import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./index.css";
import { EditorContextProvider } from "EditorContext";

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

ReactDOM.render(
  <EditorContextProvider>
    <App />
  </EditorContextProvider>,
  document.getElementById("root"),
);
