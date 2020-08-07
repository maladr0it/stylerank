import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { getChallenges, ChallengeData } from "../services/challenges";

import "./ChallengeList.css";

export const ChallengeList = () => {
  const [data, setData] = useState<ChallengeData[] | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getChallenges();
      setData(data);
    };

    load();
  }, []);

  if (data) {
    return (
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
                <span className="ChallengeList-name">{challenge.name}</span>
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
    );
  }

  return null;
};
