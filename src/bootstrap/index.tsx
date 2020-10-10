import Footer from "components/Footer";
import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./translations";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import initStore from "../redux/store";

import {
  AddPlaylist,
  CreatePlayList,
  Meals,
  Tracking,
  MyWorkouts,
  MainPage,
} from "../pages";

import "./styles.scss";

const { store, persistor } = initStore();

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="main-class">
          <Router>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/new-playlist" component={CreatePlayList} />
              <Route exact path="/my-workouts" component={MyWorkouts} />
              <Route exact path="/profile" />
              <Route exact path="/info" />
              <Route exact path="/meals" component={Meals} />
              <Route exact path="/tracker" component={Tracking} />
              <Route exact path="/favourite" component={AddPlaylist} />
              <Route component={() => <div>404 Not found </div>} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
