import React from "react";
import "../stylesheets/FCCLogo.css";
import logo from "../images/fcc-logo.svg";

const FCCLogo = (props) => (
  <div className="logo-container">
    <img src={logo} className="fcc-logo" alt="FreeCodeCamp Logo" />
  </div>
);

export default FCCLogo;
