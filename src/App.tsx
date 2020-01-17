import React from "react";

import { usePreview } from "Output";

import "./App.css";
import { Editor } from "./Editor";
import { Output } from "./Output";

export const App = () => {
  const { handleHTMLChange, handleCSSChange, previewRef } = usePreview();

  return (
    <div className="App">
      <div className="App-header">
        <h1>rank</h1>
      </div>
      <Editor
        className="App-topEditor"
        language="html"
        onChange={handleHTMLChange}
      />
      <Editor
        className="App-bottomEditor"
        language="css"
        onChange={handleCSSChange}
      />
      <Output className="App-previewPane" />
    </div>
  );
};
