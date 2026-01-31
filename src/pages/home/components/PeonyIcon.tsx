import React from 'react';

const PeonyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="peonyGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#FCE7E9" />
        <stop offset="60%" stopColor="#E5B8C9" />
        <stop offset="100%" stopColor="#C98CA7" />
      </radialGradient>
    </defs>

    {/* Base Petals - Softer, more layered look */}
    <g opacity="0.9">
      <path
        d="M50 95 C 20 85, 10 55, 30 30 C 50 10, 80 10, 90 40 C 95 70, 70 95, 50 95 Z"
        fill="url(#peonyGrad)"
        stroke="#D499B1"
        strokeWidth="0.5"
      />
      <path
        d="M50 90 C 25 80, 15 50, 35 35 C 50 20, 75 20, 85 45 C 90 70, 70 90, 50 90 Z"
        fill="url(#peonyGrad)"
        fillOpacity="0.8"
        transform="rotate(45 50 50)"
      />
      <path
        d="M50 90 C 25 80, 15 50, 35 35 C 50 20, 75 20, 85 45 C 90 70, 70 90, 50 90 Z"
        fill="url(#peonyGrad)"
        fillOpacity="0.8"
        transform="rotate(-45 50 50)"
      />
    </g>

    {/* Inner Ruffles - More detailed and organic */}
    <g opacity="0.95">
      <path
        d="M50 75 C 35 70, 30 50, 40 40 C 50 30, 60 30, 70 45 C 75 60, 65 75, 50 75 Z"
        fill="#E5B8C9"
        stroke="#C98CA7"
        strokeWidth="0.3"
      />
      <path
        d="M50 65 C 40 62, 38 50, 45 45 C 50 40, 55 40, 60 50 C 62 60, 58 65, 50 65 Z"
        fill="#FCE7E9"
        stroke="#D499B1"
        strokeWidth="0.3"
        transform="rotate(90 50 50)"
      />
      <path
        d="M50 60 C 45 58, 44 52, 48 48 C 50 46, 52 46, 55 52 C 56 58, 54 60, 50 60 Z"
        fill="#FFF0F3"
      />
    </g>
  </svg>
);

export default PeonyIcon;
