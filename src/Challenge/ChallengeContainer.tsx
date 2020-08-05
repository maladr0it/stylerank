import React, { useState, useEffect } from "react";

import { getChallenge, ChallengeData } from "../services/challenges";

import { Challenge } from "./Challenge";
import { EditorContextProvider } from "../EditorContext";

const INITIAL_VALUES = { html: "lul", css: "wow" };

// set up monaco editor
// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_: string, label: string) {
    if (label === "css") {
      return "./css.worker.bundle.js";
    }
    if (label === "html") {
      return "./html.worker.bundle.js";
    }
    return "./editor.worker.bundle.js";
  },
};

export const ChallengeContainer = () => {
  const [challengeData, setChallengeData] = useState<ChallengeData | null>(
    null,
  );

  useEffect(() => {
    const load = async () => {
      const data = await getChallenge("123");
      setChallengeData(data);
    };

    load();
  }, []);

  return (
    <>
      {challengeData ? (
        <EditorContextProvider initialValues={challengeData.input}>
          <Challenge
            initialValues={challengeData.input}
            // target={challengeData.target}
          />
        </EditorContextProvider>
      ) : (
        <h1>LOADING...</h1>
      )}
    </>
  );
};
