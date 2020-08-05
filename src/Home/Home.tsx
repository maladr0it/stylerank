import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

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

export const Home = () => {
  const challengeItems = challenges.map(({ name, difficulty, image, id }) => (
    <li key={id}>
      <Link className="challengeItem" to={`/challenge/${id}`}>
        <div className="challengeItem-imageContainer">
          <img className="challengeItem-image" src={image} />
        </div>
        <div className="challengeItem-description">
          <div className="challengeItem-name">{name}</div>
          <div className="challengeItem-difficulty">
            {Array(difficulty).fill("★")}
          </div>
        </div>
      </Link>
    </li>
  ));
  return (
    <div className="Home">
      <div className="difficulty-key">
        <div>★ = easy</div>
        <div> ★★★★★ = difficult</div>
      </div>
      <ul className="challenges">{challengeItems}</ul>
    </div>
  );
};
