import React from "react";
import { Editor } from "Editor";
import { Output, usePreview } from "Output";
import "./Challenge.css";

export const Challenge = () => {
  const { handleHTMLChange, handleCSSChange, previewRef } = usePreview();

  return (
    <div className="Challenge">
      <Editor
        className="Challenge-topEditor"
        language="html"
        onChange={handleHTMLChange}
      />
      <Editor
        className="Challenge-bottomEditor"
        language="css"
        onChange={handleCSSChange}
      />
      <Output className="Challenge-previewPane" />
    </div>
  );
};
