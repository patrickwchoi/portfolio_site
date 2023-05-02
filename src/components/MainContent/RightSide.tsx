import React, { useState } from "react";

const umbreon = require("../../assets/umbreon.png");
const eevee = require("../../assets/eevee.png");
const sylveon = require("../../assets/sylveon.png");
const leafeon = require("../../assets/leafeon.png");

const RightSide: React.FC = () => {

  const handleDarkTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--primaryBG", "var(--primaryBG-dark)");
    root.style.setProperty("--secondaryBG", "var(--secondaryBG-dark)");
  };
  const handleNormalTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--primaryBG", "var(--primaryBG-normal)");
    root.style.setProperty("--secondaryBG", "var(--secondaryBG-normal)");
  };
  return (
    <div className="rightSide">
      <div className="rightside-button">
        <button onClick={handleNormalTheme}>normal theme</button>
        <img src={eevee} alt="" />
      </div>
      <div className="rightside-button">
        <button onClick={handleDarkTheme}>dark theme</button>
        <img src={umbreon} alt="" />
      </div>
    </div>
  )
}
export default RightSide;