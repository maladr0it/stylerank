import React from "react";

import "./Target.css";

interface Props {
  src: string;
  onLoad: (width: number, height: number) => void;
}

export const Target: React.FC<Props> = ({ src, onLoad }) => {
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    let image = event.target as HTMLImageElement;
    const height = image.naturalHeight;
    const width = image.naturalWidth;
    onLoad(width, height);
  };

  return <img className="Target-image" src={src} onLoad={handleLoad} />;
};
