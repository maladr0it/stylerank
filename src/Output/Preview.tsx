import React, { forwardRef } from "react";

import "./Preview.css";
import { TargetSize } from "./Output";

interface Props extends TargetSize {}

export const Preview = forwardRef<HTMLIFrameElement, Props>(
  ({ width, height, scale }, ref) => {
    const style = {
      width,
      height,
      transform: `scale(${scale})`,
    };

    return (
      <iframe
        className="Preview-iframe"
        style={style}
        title="preview"
        ref={ref}
      />
    );
  },
);
