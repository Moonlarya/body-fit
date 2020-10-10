import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Food } from "../../assets/images/food.svg";
import { ReactComponent as Workout } from "../../assets/images/workout.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Tracker } from "../../assets/images/tracker.svg";
import { ReactComponent as Favourite } from "../../assets/images/heart.svg";
// import { ReactComponent as Profile } from "../../assets/images/user.svg";

import "./styles.scss";

const Footer: FC<{}> = () => {
  return (
    <div
      className="footer-wrapper"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <div className="footer">
        <Link to="/" className="footer-images">
          <Home className="image" />
        </Link>
        <Link to="/meals" className="footer-images margin-right">
          <Food className="image" />
        </Link>
        <Link to="/my-workouts" className="footer-images margin-left">
          <Workout className="image" />
        </Link>
        <Link to="/tracker" className="footer-images ">
          <Tracker className="image" />
        </Link>
        <Link to="/favourite" className="footer-images">
          <Favourite className="image" />
        </Link>
        {/* <Link to="/profile" className="footer-images">
          <Profile className="image" />
        </Link>
        <Link to="/info" className="footer-images">
          <Info className="image" />
        </Link> */}
      </div>
      <Link to="/new-playlist" className="footer-button-wrapper">
        <span className="footer-button">+</span>
        <span className="footer-button-lining" />
      </Link>
    </div>
  );
};

export default Footer;
