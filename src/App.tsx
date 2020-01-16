import React from "react";

import { usePreview } from "Preview";

import "./App.css";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

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
      <div className="App-previewPane">
        <Preview />
      </div>
    </div>
  );
};
