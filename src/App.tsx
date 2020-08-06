import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Challenge } from "./Challenge";
import "./App.css";

export const App = () => {
  return (
    <>
      <header className="App-header">
        <Link to="/">Stylerank</Link>
        <Link to="/challenge/001">001</Link>
        <Link to="/challenge/002">002</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/challenge/:id">
          <Challenge />
        </Route>
      </Switch>
    </>
  );
};
