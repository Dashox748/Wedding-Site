import React from 'react';

const LargeFernIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 200 400" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main central stem curving */}
    <path d="M0 400 Q 100 300 150 150 Q 180 50 200 0" strokeOpacity="0.5" />

    {/* Leaves growing off the stem */}
    <path d="M20 380 Q 50 360 80 370" strokeOpacity="0.3" />
    <path d="M40 340 Q 80 320 120 330" strokeOpacity="0.3" />
    <path d="M60 300 Q 100 280 140 290" strokeOpacity="0.3" />
    
    {/* Upper leaves */}
    <path d="M100 250 Q 140 230 180 240" strokeOpacity="0.3" />
    <path d="M120 200 Q 160 180 190 190" strokeOpacity="0.3" />
    <path d="M140 150 Q 170 130 195 140" strokeOpacity="0.3" />
    <path d="M150 100 Q 175 80 190 90" strokeOpacity="0.3" />

    {/* Leaf shapes filling (implied) */}
    <path d="M20 380 C 30 360 70 360 80 370" fill="currentColor" fillOpacity="0.05" stroke="none" />
    <path d="M60 300 C 70 280 130 280 140 290" fill="currentColor" fillOpacity="0.05" stroke="none" />
    <path d="M120 200 C 130 180 180 180 190 190" fill="currentColor" fillOpacity="0.05" stroke="none" />
  </svg>
);

export default LargeFernIcon;