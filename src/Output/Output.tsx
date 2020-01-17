import React, { useState } from "react";
import classNames from "classnames";

import targetImg from "assets/target.png";

import "./Output.css";
import { Preview } from "./Preview";
import { Target } from "./Target";

export interface TargetSize {
  width: number;
  height: number;
  scale: number;
}

interface Props {
  className?: string;
}

export const Output: React.FC<Props> = ({ className }) => {
  const [targetSize, setTargetSize] = useState<TargetSize>();

  const handleTargetLoad = (width: number, height: number) => {
    setTargetSize({
      height,
      width,
      scale: 2,
    });
  };

  return (
    <div className={classNames("Output", className)}>
      {targetSize && <Preview {...targetSize} />}
      <Target src={targetImg} onLoad={handleTargetLoad} />
    </div>
  );
};
