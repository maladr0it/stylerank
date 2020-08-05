import React from "react";

import { useEditorSetters } from "../EditorContext";
import { Editor } from "../Editor";
import { Output } from "../Output";
import "./Challenge.css";

export const Challenge = () => {
  const { setHtml, setCss } = useEditorSetters();

  return (
    <div className="Challenge">
      <Editor
        className="Challenge-topEditor"
        language="html"
        onChange={setHtml}
      />
      <Editor
        className="Challenge-bottomEditor"
        language="css"
        onChange={setCss}
      />
      <Output className="Challenge-previewPane" />
    </div>
  );
};
