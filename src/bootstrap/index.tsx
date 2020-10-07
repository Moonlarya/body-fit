import Footer from "components/Footer";
import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import initStore from "../redux/store";

import {
  AddPlaylist,
  CreatePlayList,
  Meals,
  Tracking,
  MyWorkouts,
} from "../pages";

import "./styles.scss";

const { store, persistor } = initStore();

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="main-class">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={AddPlaylist} />
              <Route exact path="/new-playlist" component={CreatePlayList} />
              <Route exact path="/my-workouts" component={MyWorkouts} />
              <Route exact path="/profile" />
              <Route exact path="/info" />
              <Route exact path="/meals" component={Meals} />
              <Route exact path="/tracker" component={Tracking} />
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
