import React from 'react';

const RedRoseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="roseGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#A63446" />
        <stop offset="70%" stopColor="#7E1D2E" />
        <stop offset="100%" stopColor="#5C1523" />
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Outer Petals - Unfolding */}
    <g filter="url(#shadow)">
      <path
        d="M50 95 C 20 85, 5 50, 30 25 C 50 5, 80 15, 90 40 C 95 70, 75 95, 50 95 Z"
        fill="url(#roseGrad)"
        stroke="#3E0E18"
        strokeWidth="0.5"
      />
      <path
        d="M50 85 C 30 75, 20 50, 35 35 C 50 20, 70 25, 80 45 C 85 65, 70 85, 50 85 Z"
        fill="url(#roseGrad)"
        fillOpacity="0.9"
        transform="rotate(60 50 50)"
      />
      <path
        d="M50 85 C 30 75, 20 50, 35 35 C 50 20, 70 25, 80 45 C 85 65, 70 85, 50 85 Z"
        fill="url(#roseGrad)"
        fillOpacity="0.9"
        transform="rotate(-60 50 50)"
      />
    </g>

    {/* Inner Swirl - Classic Rose Shape */}
    <path
      d="M50 70 C 35 65, 30 45, 45 35 C 55 25, 70 35, 75 50 C 75 65, 60 75, 50 70 Z"
      fill="#9B2C3A"
      stroke="#5C1523"
      strokeWidth="0.5"
    />
    <path
      d="M50 60 C 42 58, 40 48, 48 42 C 52 38, 60 42, 62 50 C 62 58, 55 62, 50 60 Z"
      fill="#7E1D2E"
    />
    <path
      d="M50 55 C 46 54, 45 48, 49 46 C 51 44, 54 46, 55 50 C 55 54, 52 56, 50 55 Z"
      fill="#5C1523"
    />
  </svg>
);

export default RedRoseIcon;
