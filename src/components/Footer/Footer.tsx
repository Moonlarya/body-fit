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
        <Home className="footer-images" />
        <Food className="footer-images" />
        <Workout className="footer-images margin-right" />
        <Tracker className="footer-images margin-left" />
        <Profile className="footer-images" />
        <Info className="footer-images" />
      </div>
      <Link to="/new-playlist" className="footer-button-wrapper">
        <div className="footer-button">+</div>
        <div className="footer-button-lining"></div>
      </Link>
    </div>
  );
};

export default Footer;
