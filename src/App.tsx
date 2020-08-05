import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Challenge } from "./Challenge";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Stylerank</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/challenge">
            <Challenge />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
