import React, { useEffect, useRef, useCallback } from "react";
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

export const useEditor = () => {
  const ref = useRef<monaco.editor.IStandaloneCodeEditor>();
  const setValue = useCallback((value: string) => {
    ref.current?.setValue(value);
  }, []);

  return { ref, setValue };
};

interface Props {
  language: "html" | "css";
  onChange: (value: string) => void;
  editorRef: React.MutableRefObject<
    monaco.editor.IStandaloneCodeEditor | undefined
  >;
  className?: string;
}

export const Editor = React.memo(
  ({ language, editorRef, onChange, className }: Props) => {
    const editorEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let onChangeListener: monaco.IDisposable;

      editorRef.current = monaco.editor.create(editorEl.current!, OPTIONS);
      const model = monaco.editor.createModel("", language);
      editorRef.current.setModel(model);

      onChangeListener = model.onDidChangeContent(() => {
        onChange(model.getValue());
      });

      return () => {
        editorRef.current?.dispose();
        onChangeListener?.dispose();
      };
    }, [onChange]);

    return (
      <div className={className}>
        <div className="Editor" ref={editorEl}></div>
      </div>
    );
  },
);
