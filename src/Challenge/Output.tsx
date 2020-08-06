import React from "react";

import { Preview } from "../Preview";

interface Props {
  values: { html: string; css: string };
  className?: string;
}

export const Output = ({ values, className }: Props) => {
  return <Preview className={className} {...values} />;
};
