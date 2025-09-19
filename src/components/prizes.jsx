import React from "react";
import "../style/prizes.css";
import Background from "./Background";
import frameImg from "../assets/prizes/Frame 1000001492.png";

const Prizes = ({ selectedIdx }) => {

  return (
    <Background>
      <div className={`prizes-container ${selectedIdx !== null ? "blur-lg" : ""}`}>
        <h1 className="mt-12 prizes-title">PRIZeS</h1>
        <div className="combined-section mb-12 md:mb-28">
          <img src={frameImg} alt="Podium" className="podium-image  " />
        </div>
      </div>
    </Background>
  );
};


export default Prizes;
