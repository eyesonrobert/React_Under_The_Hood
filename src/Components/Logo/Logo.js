import React from "react";
import burgerLogo from "../../Assets/images/burger-logo.png";
import "./Logo.css";

const logo = props => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="buger" />
  </div>
);

export default logo;
