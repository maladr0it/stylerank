import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import nightOwlTheme from "./themes/NightOwl.json";
import "./Editor.css";

const OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  fontSize: 16,
  minimap: {
    enabled: false,
  },
};

monaco.editor.defineTheme(
  "NightOwl",
  nightOwlTheme as monaco.editor.IStandaloneThemeData,
);
monaco.editor.setTheme("NightOwl");

interface Props {
  language: "html" | "css";
  sourceId: string;
  initialValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Editor = React.memo(
  ({ language, sourceId, initialValue, onChange, className }: Props) => {
    const editorEl = useRef<HTMLDivElement>(null);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

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

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.setValue(initialValue);
      }
    }, [sourceId, initialValue]);

    return (
      <div className={className}>
        <div className="Editor" ref={editorEl}></div>
      </div>
    );
  },
);
