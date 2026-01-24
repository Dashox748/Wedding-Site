import React from 'react';

import rozowyKwiat from '@/assets/rozowy_kwiat.png';
import roza from '@/assets/roza.png';

import LargeFernIcon from './LargeFernIcon';

interface ContactBoxProps {
  phone: string;
  name: string;
  img: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ phone, name, img }) => (
  <div className="border-cream-200/40 bg-wine-900/40 group hover:bg-wine-800/40 hover:border-cream-200/60 relative flex flex-col items-center justify-center space-y-6 border p-10 backdrop-blur-sm transition-all duration-500 lg:p-14">
    <div className="h-16 w-16 transition-transform duration-500 group-hover:scale-110 lg:h-20 lg:w-20">
      <img src={img} />
    </div>
    <div className="space-y-2 text-center">
      <h3 className="font-display text-cream-100 text-3xl tracking-wider lg:text-4xl">{name}</h3>
      <p className="text-cream-200/80 font-sans text-lg font-light tracking-widest lg:text-xl">{phone}</p>
    </div>
  </div>
);

const RSVPSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left Fern */}
        <LargeFernIcon className="text-cream-300 absolute bottom-0 left-0 h-[600px] w-[400px] -translate-x-1/3 translate-y-1/4 opacity-[0.07] lg:h-[800px] lg:w-[600px]" />
        {/* Right Fern (flipped) */}
        <LargeFernIcon className="text-cream-300 absolute top-0 right-0 h-[600px] w-[400px] translate-x-1/3 -translate-y-1/4 scale-x-[-1] rotate-180 opacity-[0.07] lg:h-[800px] lg:w-[600px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        {/* Header */}
        <div className="mb-12 space-y-6 text-center">
          <h2 className="font-display text-cream-100 text-5xl lg:text-7xl">RSVP</h2>
          <p className="font-display text-wine-200/80 border-wine-600/30 mx-auto max-w-lg border-t border-b py-4 text-sm leading-relaxed tracking-[0.2em] uppercase lg:text-base">
            Prosimy o potwierdzenie przybycia
            <br className="hidden md:block" /> do 30 kwietnia 2026
          </p>
        </div>

        {/* Decorative Triangle Element */}
        <div className="mb-16 opacity-60">
          <svg viewBox="0 0 40 40" height="40" fill="none" width="40">
            <path d="M20 40 L0 0 H40 L20 40Z" stroke="#f5e6d3" strokeWidth="1" fill="none" />
            <path d="M20 32 L8 8 H32 L20 32Z" fillOpacity="0.5" fill="#7E1D2E" />
          </svg>
        </div>

        {/* Contact Grid */}
        <div className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:gap-24 lg:px-0">
          <ContactBox phone="789 321 217" img={rozowyKwiat} name="ANGELA" />
          <ContactBox phone="795 061 273" name="KACPER" img={roza} />
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
