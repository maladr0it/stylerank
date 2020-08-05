import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { usePreview } from "Output";

import "./App.css";
import { Editor } from "./Editor";
import { Output } from "./Output";
import { Home } from "./Home";

export const App = () => {
  const { handleHTMLChange, handleCSSChange, previewRef } = usePreview();

  return (
    <div className="App">
      <div className="App-header">
        <h1>rank</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/challenge">
            <Editor
              className="App-topEditor"
              language="html"
              onChange={handleHTMLChange}
            />
            <Editor
              className="App-bottomEditor"
              language="css"
              onChange={handleCSSChange}
            />
            <Output className="App-previewPane" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
