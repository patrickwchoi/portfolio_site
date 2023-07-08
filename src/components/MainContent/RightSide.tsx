import React from "react";

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
    <div className="rightSide border rounded-sm flex flex-row gap-1 p-2 mb-2 md:flex-col md:w-1/6 md:mb-0">
      <div className="rightside-btn">
        <button onClick={handleNormalTheme}>normal theme</button>
        <img src={eevee} alt="" />
      </div>
      <div className="rightside-btn">
        <button onClick={handleDarkTheme}>dark theme</button>
        <img src={umbreon} alt="" />
      </div>
    </div>
  )
}
export default RightSide;