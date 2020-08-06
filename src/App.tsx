import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Challenge } from "./Challenge";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-homeLink" to="/">
          <h1>Stylerank</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/challenge/:id">
          <Challenge />
        </Route>
      </Switch>
    </div>
  );
};
