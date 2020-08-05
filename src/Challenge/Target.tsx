import React from "react";

import { Preview } from "../Preview";

const INITIAL_VALUES = {
  html: `<h1>Hello</h1>`,
  css: `h1 { color: pink };`,
};

interface Props {
  className?: string;
}

export const Target = ({ className }: Props) => {
  return <Preview className={className} {...INITIAL_VALUES} />;
};
