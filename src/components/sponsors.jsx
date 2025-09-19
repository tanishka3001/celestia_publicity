import React, { useEffect, useState } from 'react';

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

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
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-20 top-0 left-0 bg-[#121012]">
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

const Sponsors = () => {
  return (
    <div className="relative h-auto py-20 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Twinkling Stars Background */}
      <TwinklingStars />
      
      {/* Sponsors PNG Image - Desktop */}
      <img 
        src="/Sponsors.png" 
        alt="Sponsors" 
        className="hidden md:block w-3/5 h-4/5 object-contain relative z-10 mt-16 scale-110"
      />
      
      {/* Sponsors PNG Image - Mobile */}
      <img 
        src="/sponsorsmv.png" 
        alt="Sponsors" 
        className="block md:hidden w-5/5 h-auto object-contain relative z-10 mx-auto mt-16 scale-110"
      />
      
      {/* SPONSORS Title with Glow Effect */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 mb-8">
        <h1 className="text-4xl leading-tight md:text-[64px] md:leading-[64px] font-[Camood] text-white tracking-wider glow">
          SPONSORS
        </h1>
      </div>
    </div>
  );
};

export default Sponsors;
