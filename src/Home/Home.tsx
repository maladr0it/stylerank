import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const challenges = [
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 1,
    image: "https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg",
  },
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 1,
    image: "assets/target.png",
  },
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 1,
    image: "https://assets.codepen.io/285131/adventure.jpg",
  },
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 1,
    image: "assets/target.png",
  },
  {
    name: "flex challenge 1",
    difficulty: 3,
    id: 1,
    image: "https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg",
  },
];

export const Home = () => {
  const challengeItems = challenges.map(({ name, difficulty, image, id }) => (
    <li>
      <Link className="challengeItem" to={`/challenge/${id}`}>
        <div className="challengeItem-imageContainer">
          <img className="challengeItem-image" src={image} />
        </div>
        <div className="challengeItem-description">
          {name}
          {difficulty}
        </div>
      </Link>
    </li>
  ));
  return <ul className="Home">{challengeItems}</ul>;
};
