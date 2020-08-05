import React from "react";
import { Link } from "react-router-dom";
import "./ChallengeList.css";

const challenges = [
  {
    name: "flex challenge 1",
    difficulty: 4,
    id: 1,
    image: "https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg",
  },
  {
    name: "flex challenge 1",
    difficulty: 1,
    id: 2,
    image: "assets/target.png",
  },
  {
    name: "flex challenge 1",
    difficulty: 2,
    id: 3,
    image: "https://assets.codepen.io/285131/adventure.jpg",
  },
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 4,
    image: "assets/target.png",
  },
  {
    name: "flex challenge 1",
    difficulty: 4,
    id: 5,
    image: "https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg",
  },
];

export const ChallengeList = () => {
  const challengeItems = challenges.map(({ name, difficulty, image, id }) => (
    <li key={id}>
      <Link className="ChallengeList-item" to={`/challenge/${id}`}>
        <div className="ChallengeList-imageContainer">
          <img className="ChallengeList-image" src={image} />
        </div>
        <div className="ChallengeList-description">
          <div className="ChallengeList-name">{name}</div>
          <div className="ChallengeList-difficulty">
            {Array(difficulty).fill("★")}
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="ChallengeList-container">
      <div className="ChallengeList-difficultyKey">
        <div>★ = easy</div>
        <div> ★★★★★ = difficult</div>
      </div>
      <ul className="ChallengeList">{challengeItems}</ul>
    </div>
  );
};
