import React from "react";

import { useEditorValues } from "../EditorContext";
import { Preview } from "../Preview";

interface Props {
  className?: string;
}

export const Output = ({ className }: Props) => {
  const values = useEditorValues();

  return <Preview className={className} {...values} />;
};
