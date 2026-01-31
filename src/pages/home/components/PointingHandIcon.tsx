import React from 'react';

const PointingHandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylized hand shape pointing right */}
    <path
      d="M10 20 C 10 20, 15 15, 25 15 L 45 15 L 85 15 C 90 15, 95 18, 95 22 C 95 26, 90 29, 85 29 L 65 29"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Index finger extension */}
    <path d="M85 15 L 90 15" strokeLinecap="round" />

    {/* Thumb area */}
    <path d="M45 15 C 45 15, 40 25, 45 35" strokeLinecap="round" />

    {/* Middle finger curled under */}
    <path d="M65 29 C 65 29, 70 35, 60 40 L 50 40" strokeLinecap="round" />

    {/* Ring finger */}
    <path d="M58 40 C 58 40, 62 45, 55 48 L 48 48" strokeLinecap="round" />

    {/* Pinky */}
    <path d="M52 48 C 52 48, 55 52, 48 55 L 35 55 C 20 55, 10 40, 10 20" strokeLinecap="round" />

    {/* Decorative wrist lines */}
    <path d="M12 30 L 5 32" strokeWidth="1" opacity="0.6" />
    <path d="M14 40 L 7 42" strokeWidth="1" opacity="0.6" />
  </svg>
);

export default PointingHandIcon;
