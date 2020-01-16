import React from "react";

interface Props {
  src: string;
}

export const TargetImage: React.FC<Props> = ({ src }) => {
  return <img className="TargetImage" src={src} />;
};
