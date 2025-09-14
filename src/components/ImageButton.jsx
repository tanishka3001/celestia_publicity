import React, { useState } from 'react';

const ImageButton = ({ 
  normalSrc, 
  hoverSrc, 
  alt = "Button", 
  children, 
  className = "", 
  onClick,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative overflow-hidden transition-all duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={normalSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={hoverSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </button>
  );
};

export default ImageButton;
