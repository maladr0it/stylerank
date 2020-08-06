import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./ChallengeList.css";
import { getChallenges, ChallengeData } from "../../services/challenges";

const challenges = [
  {
    name: "The Staircase",
    difficulty: "easy",
    id: 1,
    coverImage: {
      src: "/static/images/theStaircase.png",
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
    name: "Top Navigation",
    difficulty: "easy",
    id: 2,
    coverImage: {
      src: "/static/images/topNav.png",
      description: "",
    },
    images: [{ src: "/static/images/topNav.png", description: "" }],
  },
  {
    name: "Button Group",
    difficulty: "hard",
    id: 3,
    coverImage: {
      src: "/static/images/buttonGroupHover.png",
      description: "",
    },
    images: [
      {
        src: "/static/images/buttonGroupHover.png",
        description: "",
      },
      {
        src: "/static/images/buttonGroup.png",
        description: "",
      },
    ],
  },
  {
    name: "matrix",
    difficulty: "hard",
    id: 4,
    coverImage: { src: "/static/images/matrix.gif", description: "" },
    images: [
      {
        src: "/static/images/matrix.gif",
        description: "",
      },
    ],
  },
  {
    name: "Progress bar",
    difficulty: "medium",
    id: 5,
    coverImage: {
      src: "/static/images/progressBar.png",
      description: "",
    },
    images: [
      {
        src: "/static/images/progressBar.png",
        description: "",
      },
    ],
  },
];

export const ChallengeList = () => {
  const [data, setData] = useState<ChallengeData[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getChallenges();
      setData(data);
    };

    load();
  }, []);

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
      {data ? (
        <ul className="ChallengeList">
          {data.map((challenge) => (
            <li key={challenge.id}>
              <Link
                className="ChallengeList-item"
                to={`/challenge/${challenge.id}`}
              >
                <div className="ChallengeList-imageContainer">
                  <img
                    className="ChallengeList-image"
                    src={challenge.coverImage.src}
                  />
                </div>
                <div className="ChallengeList-description">
                  <div className="ChallengeList-name">{challenge.name}</div>
                  <span
                    className={classnames(
                      "ChallengeList-difficulty",
                      `ChallengeList-difficulty--${challenge.difficulty}`,
                    )}
                  >
                    {challenge.difficulty}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
