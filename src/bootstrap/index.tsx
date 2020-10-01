import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AddPlaylist } from "../pages";

import "./styles.scss";

const App: FC<{}> = () => {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route path="/">
            <AddPlaylist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
