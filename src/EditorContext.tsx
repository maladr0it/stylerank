import React, { createContext, useContext, useState, useMemo } from "react";

interface ContextValues {
  html: string;
  css: string;
}
const EditorValuesContext = createContext<ContextValues | null>(null);

interface ContextSetters {
  setHtml: (value: string) => void;
  setCss: (value: string) => void;
}
const EditorSettersContext = createContext<ContextSetters | null>(null);

interface Props {
  children: React.ReactNode;
}

export const EditorContextProvider = ({ children }: Props) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const setters = useMemo(() => ({ setHtml, setCss }), [setHtml, setCss]);

  return (
    <EditorSettersContext.Provider value={setters}>
      <EditorValuesContext.Provider value={{ html, css }}>
        {children}
      </EditorValuesContext.Provider>
    </EditorSettersContext.Provider>
  );
};

export const useEditorSetters = () => {
  const value = useContext(EditorSettersContext);

  if (value === null) {
    throw new Error(
      "useEditorSetters must be used in a child of EditorContextProvider",
    );
  }
  return value;
};

export const useEditorValues = () => {
  const value = useContext(EditorValuesContext);

  if (value === null) {
    throw new Error(
      "useEditorValues must be used in a child of EditorContextProvider",
    );
  }
  return value;
};