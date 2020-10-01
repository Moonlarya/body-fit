import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Food } from "../../assets/images/food.svg";
import { ReactComponent as Workout } from "../../assets/images/workout.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Tracker } from "../../assets/images/tracker.svg";
import { ReactComponent as Profile } from "../../assets/images/user.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";

import "./styles.scss";

const Footer: FC<{}> = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <Link to="/" className="footer-images">
          <Home className="image" />
        </Link>
        <Link to="/meals" className="footer-images">
          <Food className="image" />
        </Link>
        <Link to="/my-workouts" className="footer-images margin-right">
          <Workout className="image" />
        </Link>
        <Link to="/tracker" className="footer-images margin-left">
          <Tracker className="image" />
        </Link>
        <Link to="/profile" className="footer-images">
          <Profile className="image" />
        </Link>
        <Link to="/info" className="footer-images">
          <Info className="image" />
        </Link>
      </div>
      <Link to="/new-playlist" className="footer-button-wrapper">
        <div className="footer-button">+</div>
        <div className="footer-button-lining"></div>
      </Link>
    </div>
  );
};

export default Footer;