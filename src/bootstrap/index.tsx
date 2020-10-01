import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AddPlaylist, CreatePlayList } from "../pages";

import "./styles.scss";

const App: FC<{}> = () => {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route exact path="/" component={AddPlaylist} />
          <Route path="/new-playlist" component={CreatePlayList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
