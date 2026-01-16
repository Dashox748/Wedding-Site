import React from 'react';

const RoseBouquet: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    stroke="currentColor"
    className={className}
    strokeWidth="0.8"
    fill="none"
  >
    {/* Main Central Rose */}
    <g transform="translate(100, 100)">
      <path
        d="M0,0 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
        strokeOpacity="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M-10,-5 Q0,-15 10,-5 T0,15 T-10,-5" strokeOpacity="0.6" />
      <path d="M-15,0 Q0,-25 15,0 T-15,0" transform="rotate(45)" strokeOpacity="0.6" />
      <path d="M-20,0 Q0,-35 20,0 T-20,0" transform="rotate(90)" strokeOpacity="0.5" />
      <path d="M-18,5 Q0,30 18,5" strokeOpacity="0.5" />
    </g>

    {/* Top Right Rose */}
    <g transform="translate(140, 60) scale(0.7)">
      <path
        d="M0,0 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
        strokeOpacity="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M-10,-5 Q0,-15 10,-5 T0,15 T-10,-5" strokeOpacity="0.6" />
      <path d="M-15,0 Q0,-25 15,0 T-15,0" transform="rotate(120)" strokeOpacity="0.6" />
    </g>

    {/* Bottom Left Rose */}
    <g transform="translate(60, 140) scale(0.8)">
      <path
        d="M0,0 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
        strokeOpacity="0.8"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M-10,-5 Q0,-15 10,-5 T0,15 T-10,-5" strokeOpacity="0.6" />
      <path d="M-15,0 Q0,-25 15,0 T-15,0" transform="rotate(-45)" strokeOpacity="0.6" />
    </g>

    {/* Leaves & Stems */}
    <path d="M100,120 Q100,150 100,180" strokeOpacity="0.4" />
    <path d="M115,110 Q140,120 160,100" strokeOpacity="0.4" />
    <path d="M85,90 Q60,80 40,60" strokeOpacity="0.4" />

    {/* Leaf shapes */}
    <path d="M160,100 Q170,90 180,100 Q170,110 160,100" fill="currentColor" fillOpacity="0.1" />
    <path d="M40,60 Q30,50 40,40 Q50,50 40,60" fill="currentColor" fillOpacity="0.1" />
    <path d="M100,180 Q90,190 100,200 Q110,190 100,180" fill="currentColor" fillOpacity="0.1" />
    <path d="M140,150 Q130,160 150,170 Q160,150 140,150" fill="currentColor" fillOpacity="0.1" />

    {/* Decorative swirls */}
    <path d="M50,50 Q20,20 50,20" strokeOpacity="0.2" fill="none" />
    <path d="M150,150 Q180,180 150,180" strokeOpacity="0.2" fill="none" />
  </svg>
);

export default RoseBouquet;
