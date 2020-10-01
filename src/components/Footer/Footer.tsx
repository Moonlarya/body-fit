import React, { FC } from "react";

import "./styles.scss";

const Footer: FC<{}> = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer"></div>
      <div className="footer-button-wrapper">
        <div className="footer-button">+</div>
        <div className="footer-button-lining"></div>
      </div>
    </div>
  );
};

export default Footer;
