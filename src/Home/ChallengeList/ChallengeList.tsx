import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./ChallengeList.css";

const challenges = [
  {
    name: "The Staircase",
    difficulty: "easy",
    id: 1,
    coverImage: {
      src: "/theStaircase.png",
      description: "",
    },
    images: [
      {
        src:
          "https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg",
        description: "",
      },
    ],
  },
  {
    name: "flex challenge 1",
    difficulty: "easy",
    id: 2,
    coverImage: { src: "assets/target.png", description: "" },
    images: [{ src: "assets/target.png", description: "" }],
  },
  {
    name: "flex challenge 1",
    difficulty: "medium",
    id: 3,
    coverImage: {
      src: "https://assets.codepen.io/285131/adventure.jpg",
      description: "",
    },
    images: [
      {
        src: "https://assets.codepen.io/285131/adventure.jpg",
        description: "",
      },
    ],
  },
  {
    name: "flex challenge 1",
    difficulty: "hard",
    id: 4,
    coverImage: { src: "assets/target.png", description: "" },
    images: [
      {
        src: "https://assets.codepen.io/285131/adventure.jpg",
        description: "",
      },
    ],
  },
  {
    name: "flex challenge 1",
    difficulty: "hard",
    id: 5,
    coverImage: {
      src: "https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg",
      description: "",
    },
    images: [
      {
        src: "https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg",
        description: "",
      },
    ],
  },
];

export const ChallengeList = () => {
  const challengeItems = challenges.map(
    ({ name, difficulty, coverImage, id }) => (
      <li key={id}>
        <Link className="ChallengeList-item" to={`/challenge/${id}`}>
          <div className="ChallengeList-imageContainer">
            <img className="ChallengeList-image" src={coverImage.src} />
          </div>
          <div className="ChallengeList-description">
            <div className="ChallengeList-name">{name}</div>
            <span
              className={classnames(
                "ChallengeList-difficulty",
                `ChallengeList-difficulty--${difficulty}`,
              )}
            >
              {difficulty}
            </span>
          </div>
        </Link>
      </li>
    ),
  );

  return (
    <div className={"ChallengeList-container"}>
      <ul className="ChallengeList">{challengeItems}</ul>
    </div>
  );
};
