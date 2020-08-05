import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

import "./Editor.css";

const OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  minimap: {
    enabled: false,
  },
};

interface Props {
  language: "html" | "css";
  initialValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Editor = ({
  language,
  initialValue,
  onChange,
  className,
}: Props) => {
  const editorEl = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    let onChangeListener: monaco.IDisposable;

    if (editorEl.current) {
      editorRef.current = monaco.editor.create(editorEl.current, OPTIONS);
      const model = monaco.editor.createModel(initialValue, language);
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
