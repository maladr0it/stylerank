import React from "react";
import { Image } from "../services/challenges";
import "./Target.css";

interface Props {
  className?: string;
  image: Image;
}

export const Target = ({ image }: Props) => {
  return (
    <div className={"Target"}>
      <div className="Target-imageContainer">
        <img className="Target-image" src={image.src} />
      </div>
    </div>
  );
};
