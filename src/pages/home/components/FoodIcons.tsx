import React from 'react';

export const DinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg stroke="currentColor" className={className} viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
    <path d="M6 13c0 1-1 2-1 3v4" />
    <path d="M18 13c0 1 1 2 1 3v4" />
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z" />
    <path d="M12 12V3" />
    <path d="M8 6h8" />
  </svg>
);

export const WineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg stroke="currentColor" className={className} viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
    <path d="M8 22h8" />
    <path d="M12 15v7" />
    <path d="M6 3h12" />
    <path d="M5.5 3a.5.5 0 0 0-.5.5V9a6 6 0 1 0 12 0V3.5a.5.5 0 0 0-.5-.5h-11z" />
    <path d="M3 3l1.5 13" opacity="0.2" />
    <path d="M21 3l-1.5 13" opacity="0.2" />
  </svg>
);

export const CutleryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg stroke="currentColor" className={className} viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
    <path d="M8 22v-8" />
    <path d="M16 22v-5" />
    <path d="M4 3v7a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3" />
    <path d="M16 3v14a2 2 0 0 0 4 0V3" />
  </svg>
);
