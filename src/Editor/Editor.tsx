import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

const OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  minimap: {
    enabled: false,
  },
};

interface Props {
  className: string;
  language: "html" | "css";
  onChange: (value: string) => void;
}

export const Editor: React.FC<Props> = ({ language, onChange, className }) => {
  const editorEl = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  console.log("re-rendered editor");

  useEffect(() => {
    let onChangeListener: monaco.IDisposable;

    if (editorEl.current) {
      editorRef.current = monaco.editor.create(editorEl.current, OPTIONS);
      const model = monaco.editor.createModel("", language);
      editorRef.current.setModel(model);

      onChangeListener = model.onDidChangeContent(() => {
        onChange(model.getValue());
      });
    }

    return () => {
      editorRef.current?.dispose();
      onChangeListener?.dispose();
    };
  }, [onChange]);

  return <div className={`Editor ${className}`} ref={editorEl}></div>;
};
