import React from 'react';

const BranchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    stroke="currentColor"
    className={className}
    strokeWidth="0.5"
    fill="none"
  >
    {/* Central Stem */}
    <path d="M50 90 Q 55 50 50 10" strokeLinecap="round" />

    {/* Leaves Left */}
    <path d="M50 80 Q 30 70 20 60 Q 35 65 50 75" fill="currentColor" fillOpacity="0.1" />
    <path d="M52 60 Q 30 50 15 45 Q 35 48 52 58" fill="currentColor" fillOpacity="0.1" />
    <path d="M50 40 Q 35 30 25 25 Q 40 32 50 38" fill="currentColor" fillOpacity="0.1" />

    {/* Leaves Right */}
    <path d="M50 70 Q 70 65 80 55 Q 65 60 50 68" fill="currentColor" fillOpacity="0.1" />
    <path d="M48 50 Q 70 45 85 35 Q 65 42 48 48" fill="currentColor" fillOpacity="0.1" />
    <path d="M50 30 Q 65 25 75 15 Q 60 22 50 28" fill="currentColor" fillOpacity="0.1" />

    {/* Veins */}
    <path d="M50 80 C 40 75 30 70 20 60" />
    <path d="M50 70 C 60 65 70 60 80 55" />
    <path d="M52 60 C 40 55 30 50 15 45" />
    <path d="M48 50 C 60 46 70 42 85 35" />
    <path d="M50 40 C 40 35 35 30 25 25" />
    <path d="M50 30 C 60 26 65 22 75 15" />
  </svg>
);

export default BranchIcon;
