import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./index.css";

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function(moduleId: string, label: string) {
    if (label === "css") {
      return "./css.worker.bundle.js";
    }
    if (label === "html") {
      return "./html.worker.bundle.js";
    }
    return "./editor.worker.bundle.js";
  },
};

ReactDOM.render(<App />, document.getElementById("root"));
