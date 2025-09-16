import React, { useState, useRef, useEffect } from "react";
import Background from "./Background";
import sdg from "../assets/tracks/SDG.png";
import healthcare from "../assets/tracks/healthcare.png";
import hardware from "../assets/tracks/hardware.png";
import openinnovation from "../assets/tracks/openinnovation.png";
import edtech from "../assets/tracks/edtech.png";
import devtools from "../assets/tracks/devtools.png";
import "../style/tracks.css";
import BG from './dialogBg'

const cards = [
  {
    src: sdg,
    alt: "SDG",
    rotate: -18,
    translateY: 45,
    z: 10,
    desc: "Use your skills to address global challenges like poverty, climate action, clean water, and education equity. Create solutions that have a long-term positive impact on society and the environment.",
  },
  {
    src: healthcare,
    alt: "Healthcare",
    rotate: -13,
    translateY: 20,
    z: 20,
    desc: "Build technology solutions that improve health outcomes, patient care, and access to healthcare. Whether it's apps for telemedicine, wearable devices, or AI-driven diagnostics, this track encourages solutions that make healthcare more efficient, affordable, personalized and help doctors and patients manage care better.",
  },
  {
    src: hardware,
    alt: "Hardware",
    rotate: -7,
    translateY: 3,
    z: 30,
    desc: "Combine engineering and creativity to build physical devices that solve real-world problems. From IoT systems to robotics and sensors, this track encourages solutions that integrate hardware and software to bring new capabilities to industries and everyday life.",
  },
  {
    src: openinnovation,
    alt: "Open Innovation",
    rotate: 0,
    translateY: 0,
    z: 40,
    desc: "Explore bold ideas without boundaries. This track encourages experimentation, blending technologies, and tackling challenges that don’t fit into predefined categories. Push limits and create future-facing, interdisciplinary solutions.",
  },
  {
    src: edtech,
    alt: "Edtech",
    rotate: 8,
    translateY: 16,
    z: 45,
    desc: "Transform education through technology by designing tools that enhance learning experiences, improve access, and support students and teachers. Build platforms or apps that foster skill-building, interactive learning, or adaptive educational solutions.",
  },
  {
    src: devtools,
    alt: "Dev Tools",
    rotate: 15,
    translateY: 20,
    z: 50,
    desc: "This track invites developers to create solutions that enhance coding environments, streamline workflows, automate testing, and foster collaboration. Build tools, plugins, or platforms that help developers code smarter, faster, and more efficiently",
  },
];

// const Tracks = () => {
//   const unwrap = 5;
//   return (
//     <Background>
//       <section className="relative w-screen overflow-hidden text-white min-h-screen">
//         <div className="relative z-10 pt-16 md:pt-24 pb-10 md:pb-20 px-6 md:px-8 flex flex-col items-center tracks-bg" style={{paddingTop: "380px"}}>
//           <h2
//             className="text-4xl md:text-6xl font-[Camood] glow text-center"
//             style={{ textShadow: "0 0 20px #ffffff" }}
//           >
//             TRACKS
//           </h2>

//           {/* card fan */}
//           <div className="mt-10 md:mt-16 w-full flex justify-center">
//             <div className="relative w-[1000px] max-w-full h-[350px] md:h-[420px]">
//               {/* subtle radial glow under cards */}
//               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[320px] md:h-[390px] rounded-full opacity-60 pointer-events-none"
//                    style={{
//                      background: "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)"
//                    }}
//               />
//               {cards.map((c, idx) => (
//                 <img
//                   key={idx}
//                   src={c.src}
//                   alt={c.alt}
//                   className="absolute left-1/2 top-1/2 w-[180px] md:w-[200px] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
//                   style={{
//                     transform: `translate(calc(-50% + ${c.rotate*unwrap}px), calc(-50% + ${c.translateY}px)) rotate(${c.rotate}deg)`,
//                     zIndex: c.z,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </Background>
//   );
// };

const Tracks = ({ selectedIdx, setSelectedIdx }) => {
  const [unwrap, setUnwrap] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // <-- open/close state
  const animRef = useRef(null);
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  const toggleUnwrap = () => {
    let start = unwrap;
    let end = isOpen ? 0 : 5;
    let duration = 500; // ms
    let startTime = null;

    cancelAnimationFrame(animRef.current);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + (end - start) * progress;

      setUnwrap(value);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setIsOpen(!isOpen); // flip state once animation finishes
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  return (
    <Background>
      <section className="relative w-screen overflow-hidden text-white ">
        {/* Mountains at the top */}
        {/* <img 
            src={tmountains} 
            alt="mountains" 
            className="absolute top-0 left-0 w-full h-auto z-20 mountain-glow-tracks" 
          /> */}
        <div
          className="relative z-10 mt-4 pb-10 md:pb-20 px-6 md:px-8 flex flex-col items-center tracks-bg"
          style={{ paddingTop: "10px" }}
        >
          <h2
            className="text-4xl md:text-6xl font-[Camood] glow text-center"
            style={{ textShadow: "0 0 20px #ffffff" }}
          >
            TRACKS
          </h2>

          {/* card fan */}
          <div
            className="mt-10 md:mt-16 w-full flex justify-center cursor-pointer"
            onClick={toggleUnwrap} // <--- click toggles open/close
          >
            <div className="relative w-[1000px] max-w-full h-[350px] md:h-[420px]">
              {/* subtle radial glow under cards */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[320px] md:h-[390px] rounded-full opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 70%)",
                }}
              />
              { cards.map((c, idx) => {
                const isDesktop = window.innerWidth >= 1024;
                const spreadFactor = isDesktop ? 3.0 : 1;

                let rotate = c.rotate;
                let translateY = c.translateY;
                if (c.alt === "Dev Tools") {
                  rotate = unwrap === 0 ? -7 : 15;
                  translateY = unwrap === 0 ? 20 : 50;
                }
                const handleCardClick = () => {
                  if (isDesktop && unwrap > 0) {
                    setSelectedIdx(idx);
                  }
                };

                return (
                  <img
                    key={idx}
                    src={c.src}
                    alt={c.alt}
                    className="absolute left-1/2 top-1/2 w-[180px] md:w-[200px] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    style={{
                      transform: `translate(calc(-50% + ${
                        c.rotate * unwrap * spreadFactor
                      }px), 
                              calc(-50% + ${translateY}px)) 
                    rotate(${rotate}deg)`,
                      zIndex: c.z,
                      cursor: isDesktop && unwrap > 0 ? "pointer" : "default",
                    }}
                    onClick={handleCardClick}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {window.innerWidth >= 1024 && selectedIdx !== null && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[8px] shadow-black overflow-hidden"
            onClick={() => setSelectedIdx(null)}
          >
             
            <div
        className="relative flex flex-col py-10 px-6 items-center border-2 border-[#cbaa64] rounded-3xl shadow-2xl w-[900px]  text-[#fffae5] overflow-hidden "
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 0 20px 6px rgba(203,170,100,0.8)", 
        }}
      >
          <BG />
           
              <button
                className="absolute top-3 right-5 text-xl text-[#cbaa64] font-semibold hover:text-[#ffe1a2] transition-colors"
                onClick={() => setSelectedIdx(null)}
                title="Close"
                tabIndex={0}
                aria-label="Close"
              >
                ✕
              </button>
              <h3 className="text-3xl mb-4 py-2 text-center font-serif font-bold tracking-wide text-[#cbaa64] drop-shadow-[0_0_10px_rgba(203,170,100,0.3)]">
                {cards[selectedIdx].alt}
              </h3>
              <p className="mb-3 text-lg text-center font-serif leading-relaxed text-[#fffae5] drop-shadow-[0_1px_10px_#120f17]">
                {cards[selectedIdx].desc}
              </p>
           
            </div>
          
          </div>
        )}
      </section>
  </Background>
  );
};

export default Tracks;
