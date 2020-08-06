import React from "react";

import { EditorValues } from "../types";
import { Preview } from "../Preview";

interface Props {
  values: EditorValues;
  className?: string;
}

export const Output = ({ values, className }: Props) => {
  return (
    <Preview
      className={className}
      html={values.html || ""}
      css={values.css || ""}
    />
  );
};
