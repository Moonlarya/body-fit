import Footer from "components/Footer";
import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import store from "../redux/store";

import {
  AddPlaylist,
  CreatePlayList,
  Meals,
  Tracking,
  MyWorkouts,
} from "../pages";

import "./styles.scss";

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <div className="main-class">
        <Router>
          <Switch>
            <Route exact path="/" component={AddPlaylist} />
            <Route path="/new-playlist" component={CreatePlayList} />
            <Route path="/my-workouts" component={MyWorkouts} />
            <Route path="/profile" />
            <Route path="/info" />
            <Route path="/meals" component={Meals} />
            <Route path="/tracker" component={Tracking} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
