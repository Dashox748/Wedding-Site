import React, { useEffect, useState } from 'react';

interface TimeLeft {
  minutes: number;
  seconds: number;
  hours: number;
  days: number;
}

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { minutes: 0, seconds: 0, hours: 0, days: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="mx-2 flex min-w-[70px] flex-col items-center lg:mx-6 lg:min-w-[100px]">
      <div className="relative">
        <span className="font-display text-cream-100 block text-3xl font-light tabular-nums lg:text-5xl">
          {value < 10 ? `0${value}` : value}
        </span>
        {/* Subtle glow effect behind numbers */}
        <div className="bg-cream-100 absolute inset-0 rounded-full opacity-10 blur-xl" />
      </div>
      <span className="text-cream-300 border-wine-600 mt-2 w-full border-t pt-1 text-center font-sans text-xs tracking-widest uppercase lg:text-sm">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <h3 className="text-wine-400 mb-2 text-xs font-semibold tracking-[0.2em] uppercase">Do ślubu pozostało</h3>
      <div className="border-wine-800 bg-wine-900/40 flex flex-row items-start justify-center rounded-xl border-y px-4 py-6 shadow-2xl backdrop-blur-sm lg:px-12">
        <TimeUnit value={timeLeft.days} label="Dni" />
        <div className="bg-wine-700/50 mx-1 h-12 w-px self-center" />
        <TimeUnit value={timeLeft.hours} label="Godz" />
        <div className="bg-wine-700/50 mx-1 h-12 w-px self-center" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <div className="bg-wine-700/50 mx-1 h-12 w-px self-center" />
        <TimeUnit value={timeLeft.seconds} label="Sek" />
      </div>
    </div>
  );
};

export default Countdown;
