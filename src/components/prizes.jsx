import React from "react";
import "../style/prizes.css";
import Background from "./Background";
import frameImg from "../assets/prizes/Frame 1000001492.png";

const Prizes = ({ selectedIdx }) => {

  return (
    <Background>
      <div className={`prizes-container ${selectedIdx !== null ? "blur-lg" : ""}`}>
        <h1 className="prizes-title">PRIZeS</h1>

        {/* Combined Podium + Orbit Section */}
        <div className="combined-section mb-24 md:mb-36">
          <img src={frameImg} alt="Podium" className="podium-image  " />
          {/* <img src={orbitImg} alt="Awards Orbit" className="orbit-image " /> */}
        </div>
      </div>
    </Background>
  );
};

export default Prizes;
