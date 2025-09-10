import React from "react";
import Background from "./Background";
import sdg from "../assets/tracks/SDG.png";
import healthcare from "../assets/tracks/healthcare.png";
import hardware from "../assets/tracks/hardware.png";
import openinnovation from "../assets/tracks/openinnovation.png";
import edtech from "../assets/tracks/edtech.png";
import devtools from "../assets/tracks/devtools.png";
import "../style/tracks.css";

const cards = [
  { src: sdg, alt: "SDG", rotate: -25, translateY: 8, z: 10 },
  { src: healthcare, alt: "Healthcare", rotate: -15, translateY: 5, z: 20 },
  { src: hardware, alt: "Hardware", rotate: -8, translateY: 2, z: 30 },
  { src: openinnovation, alt: "Open Innovation", rotate: 0, translateY: 0, z: 40 },
  { src: edtech, alt: "Edtech", rotate: 8, translateY: 2, z: 30 },
  { src: devtools, alt: "Dev Tools", rotate: 15, translateY: 5, z: 20 },
  { src: devtools, alt: "Dev Tools", rotate: 25, translateY: 8, z: 10 },
];

const Tracks = () => {
  return (
    <Background>
      <section className="relative w-screen overflow-hidden text-white min-h-screen">
        <div className="relative z-10 pt-16 md:pt-24 pb-10 md:pb-20 px-6 md:px-8 flex flex-col items-center tracks-bg">
          <h2
            className="text-4xl md:text-6xl font-[Camood] glow text-center"
            style={{ textShadow: "0 0 20px #ffffff" }}
          >
            TRACKS
          </h2>

          {/* card fan */}
          <div className="mt-10 md:mt-16 w-full flex justify-center">
            <div className="relative w-[1000px] max-w-full h-[350px] md:h-[420px]">
              {/* subtle radial glow under cards */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[320px] md:h-[390px] rounded-full opacity-60 pointer-events-none"
                   style={{
                     background: "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)"
                   }}
              />
              {cards.map((c, idx) => (
                <img
                  key={idx}
                  src={c.src}
                  alt={c.alt}
                  className="absolute left-1/2 top-1/2 w-[180px] md:w-[200px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  style={{
                    transform: `translate(-50%, calc(-50% + ${c.translateY}px)) rotate(${c.rotate}deg)`,
                    zIndex: c.z,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default Tracks;


