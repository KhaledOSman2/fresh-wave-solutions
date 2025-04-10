
import React from 'react';

interface WaveAnimationProps {
  className?: string;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-x-0 bottom-0 overflow-hidden ${className}`}>
      <div className="relative h-16 w-[200%] animate-wave">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E1F5FE"
            fillOpacity="0.8"
            d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,100 L0,100 Z"
          ></path>
        </svg>
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B3E5FC"
            fillOpacity="0.5"
            d="M0,60 C240,20 480,80 720,40 C960,0 1200,100 1440,40 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveAnimation;
