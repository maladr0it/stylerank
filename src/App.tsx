import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { ChallengeContainer } from "./Challenge";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Stylerank</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/challenge">
          <ChallengeContainer />
        </Route>
      </Switch>
    </div>
  );
};
