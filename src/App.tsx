import React from "react";

import "./App.css";
import { Editor } from "./Editor";
import { Output } from "./Output";
import { useEditorSetters } from "EditorContext";

export const App = () => {
  const { setHtml, setCss } = useEditorSetters();

  return (
    <div className="App">
      <div className="App-header">
        <h1>Stylerank</h1>
      </div>
      <Editor className="App-topEditor" language="html" onChange={setHtml} />
      <Editor className="App-bottomEditor" language="css" onChange={setCss} />
      <Output className="App-previewPane" />
    </div>
  );
};
