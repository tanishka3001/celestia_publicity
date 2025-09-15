import React, { useEffect, useState } from "react";

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);
// const [glowColor, setGlowColor] = useState("#9b5de5");

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 1,
        size: Math.random() * 8 + 5,
        rotation: Math.random() * 360,
      });
    }
    setStars(newStars);
//      const handleScroll = () => {
//       const scrollTop = window.scrollY;

// if(scrollTop<200)
//   setGlowColor("#9b5de5"); 
// else if (scrollTop >= 200 && scrollTop < 250) {
//   setGlowColor("#c084fc"); 
// }
// else if (scrollTop < 400) {
//   setGlowColor("#eab308"); 
// } 
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);


  }, []);


   return (
    <div>
      <div
        className="absolute inset-0 top-0 left-0 w-full h-full -z-20
                   bg-[#121012]"
      >
        {stars.map((star) => (
          <img
            src="/star2.png"
            alt="star"
            key={star.id}
            className="absolute"
            style={{
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              transform: `rotate(${star.rotation}deg)`,
              animation: `twinkling ${star.duration}s linear infinite`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-40 -z-10 blur-3xl opacity-80 transition-colors duration-200"
        style={{
          background: `linear-gradient(to top, #eab308, transparent)`,
        }}
      ></div>

      <style>{`
        @keyframes twinkling {
          0% { opacity: 0; }
          20% { opacity: 0.2; }
          40% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TwinklingStars;
