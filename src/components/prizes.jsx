import React from "react";
import "../style/prizes.css";
import Background from "./Background";
import orbitImg from "../assets/prizes/Planet.png";
import podiumImg from "../assets/prizes/Podium.png";

const Prizes = () => {
  return (
    <Background>
      <div className="prizes-container">
        <h1 className="prizes-title">PRIZES</h1>

        {/* Combined Podium + Orbit Section */}
        <div className="combined-section">
          <img src={podiumImg} alt="Podium" className="podium-image" />
          <img src={orbitImg} alt="Awards Orbit" className="orbit-image" />
        </div>
      </div>
    </Background>
  );
};

export default Prizes;
