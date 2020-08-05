import React from "react";

import { useEditorSetters, EditorValues } from "../EditorContext";
import { Editor } from "../Editor";

import { Output } from "./Output";
import { Target } from "./Target";
import "./Challenge.css";

interface Props {
  initialValues: EditorValues;
}

export const Challenge = ({ initialValues }: Props) => {
  const { setHtml, setCss } = useEditorSetters();

  return (
    <div className="Challenge">
      <Editor
        className="Challenge-topEditor"
        language="html"
        initialValue={initialValues.html}
        onChange={setHtml}
      />
      <Editor
        className="Challenge-bottomEditor"
        language="css"
        initialValue={initialValues.css}
        onChange={setCss}
      />
      <Output className="Challenge-output" />
      <Target className="Challenge-target" />
    </div>
  );
};
