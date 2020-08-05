import React, { createContext, useContext, useState, useMemo } from "react";

export interface EditorValues {
  html: string;
  css: string;
}
const EditorValuesContext = createContext<EditorValues | null>(null);

interface EditorSetters {
  setHtml: (value: string) => void;
  setCss: (value: string) => void;
}
const EditorSettersContext = createContext<EditorSetters | null>(null);

interface Props {
  initialValues: EditorValues;
  children: React.ReactNode;
}

export const EditorContextProvider = ({ initialValues, children }: Props) => {
  const [html, setHtml] = useState(initialValues.html);
  const [css, setCss] = useState(initialValues.css);

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
