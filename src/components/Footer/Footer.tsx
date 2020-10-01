import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Footer: FC<{}> = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer"></div>
      <Link to="/new-playlist" className="footer-button-wrapper">
        <div className="footer-button">+</div>
        <div className="footer-button-lining"></div>
      </Link>
    </div>
  );
};

export default Footer;
