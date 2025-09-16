import React, { useEffect, useState } from "react";

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
                rotation: Math.random() * 360
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-[#121012] top-0 left-0 ">
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
          20% {opacity: 0.2;}
          40% {opaciry: 0.3;}
          50% { opacity: 0.60; }
          100% { opacity: 0; }
        }
      `}</style>
        </div>
    );
};


export default TwinklingStars;