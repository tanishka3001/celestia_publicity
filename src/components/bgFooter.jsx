import React, { useEffect, useState } from "react";

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);
const [glowColor, setGlowColor] = useState("#9b5de5");

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
     const handleScroll = () => {
      const scrollTop = window.scrollY;

if(scrollTop<200)
  setGlowColor("#9b5de5"); 
else if (scrollTop >= 200 && scrollTop < 250) {
  setGlowColor("#c084fc"); 
}
else if (scrollTop < 400) {
  setGlowColor("#eab308"); 
} 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  }, []);


   return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-20
                   bg-[linear-gradient(to_bottom,black,black,#0d0d0d,#0d0d0d,#171616,#171616,#171616,#1f1f1f,#1f1f1f)]"
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
        className="fixed bottom-0 left-0 w-full h-20 -z-10 blur-3xl opacity-80 transition-colors duration-200"
        style={{
          background: `linear-gradient(to top, ${glowColor}, transparent)`,
            height: glowColor === "#eab308" ? "160px" : "80px"
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
