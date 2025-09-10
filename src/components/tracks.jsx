import React, {useState,useRef}from "react";
import Background from "./Background";
import sdg from "../assets/tracks/SDG.png";
import healthcare from "../assets/tracks/healthcare.png";
import hardware from "../assets/tracks/hardware.png";
import openinnovation from "../assets/tracks/openinnovation.png";
import edtech from "../assets/tracks/edtech.png";
import devtools from "../assets/tracks/devtools.png";
import "../style/tracks.css";

const cards = [
  { src: sdg, alt: "SDG", rotate: -25, translateY: 20, z: 10, translateX: 20 },
  { src: healthcare, alt: "Healthcare", rotate: -15, translateY: 5, z: 20, translateX: 20},
  { src: hardware, alt: "Hardware", rotate: -8, translateY: 2, z: 30 , translateX: 20},
  { src: openinnovation, alt: "Open Innovation", rotate: 0, translateY: 0, z: 40, translateX: 20 },
  { src: edtech, alt: "Edtech", rotate: 8, translateY: 2, z: 30,  },
  { src: devtools, alt: "Dev Tools", rotate: 15, translateY: 5, z: 20 },
  { src: devtools, alt: "Dev Tools", rotate: 25, translateY: 20, z: 10 },
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

const  Tracks = () => {
   const [unwrap, setUnwrap] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // <-- open/close state
  const animRef = useRef(null);

  const toggleUnwrap = () => {
    let start = unwrap;
    let end = isOpen ? 0 : 5; // if open, close; if closed, open
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
      <section className="relative w-screen overflow-hidden text-white min-h-screen">
        <div
          className="relative z-10 pt-16 md:pt-24 pb-10 md:pb-20 px-6 md:px-8 flex flex-col items-center tracks-bg"
          style={{ paddingTop: "380px" }}
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
              {cards.map((c, idx) => (
                <img
                  key={idx}
                  src={c.src}
                  alt={c.alt}
                  className="absolute left-1/2 top-1/2 w-[180px] md:w-[200px] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  style={{
                    transform: `translate(calc(-50% + ${
                      c.rotate * unwrap
                    }px), calc(-50% + ${c.translateY}px)) rotate(${
                      c.rotate
                    }deg)`,
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
}


export default Tracks;


