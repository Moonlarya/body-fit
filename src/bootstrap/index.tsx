import Footer from "components/Footer";
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
          <Route path="/my-workouts" />
          <Route path="/profile" />
          <Route path="/info" />
          <Route path="/meals" />
          <Route path="/tracker" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
