import React, { forwardRef } from "react";

import "./Preview.css";

interface Props {}

export const Preview = forwardRef<HTMLIFrameElement, Props>(({}, ref) => {
  return <iframe className="Preview-iframe" title="preview" ref={ref} />;
});
