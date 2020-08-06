import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Challenge } from "./Challenge";
import "./App.css";

export const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>Stylerank</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/challenge">
          <Challenge />
        </Route>
      </Switch>
    </>
  );
};
