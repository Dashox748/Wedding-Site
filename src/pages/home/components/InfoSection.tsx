import React from 'react';

import Branch from '@/assets/branch.png';

interface InfoItemProps {
  children: React.ReactNode;
  title: string;
  delay: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ children, title, delay }) => (
  <div
    className={`glass-panel hover:bg-wine-800/50 group flex flex-col items-center space-y-4 rounded-lg p-8 text-center transition-colors duration-500 ${delay}`}
  >
    <div className="text-cream-300 transform transition-transform duration-300 group-hover:-translate-y-1">
      <img className="size-12.5" src={Branch} />
    </div>
    <h3 className="font-display border-wine-600/30 text-cream-100 border-b pb-2 text-2xl tracking-widest uppercase">
      {title}
    </h3>
    <p className="text-cream-200/80 max-w-sm font-sans text-sm leading-relaxed font-light md:text-base">{children}</p>
  </div>
);

const InfoSection: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-12">
      <div className="mb-16 flex flex-col items-center space-y-4">
        <h2 className="font-display text-cream-100 text-center text-4xl tracking-wider lg:text-5xl">
          Ważne Informacje
        </h2>
        <div className="bg-wine-600/50 h-1 w-24 rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        <InfoItem delay="animate-fade-in-up" title="Obiad">
          Nie jesz mięsa, masz alergię albo inne potrzeby żywieniowe?
          <br />
          <span className="text-cream-100 font-medium">Daj nam znać wcześniej!</span>
        </InfoItem>

        <InfoItem delay="animate-fade-in-up [animation-delay:200ms]" title="Dzieci">
          Zdecydowaliśmy się na przyjęcie w gronie dorosłych, bez udziału dzieci, dlatego uprzejmie prosimy o obecność
          wyłącznie osób wymienionych na zaproszeniu.
          <br />
          <span className="mt-2 block italic opacity-80">Dziękujemy za zrozumienie.</span>
        </InfoItem>

        <InfoItem delay="animate-fade-in-up [animation-delay:400ms]" title="Podarki">
          Uprzejmie informujemy, że nie potrzebujemy kwiatów ani alkoholu — po weselu z pewnością nie zabraknie nam ani
          jednego ani drugiego.
        </InfoItem>

        <InfoItem delay="animate-fade-in-up [animation-delay:600ms]" title="Nocleg">
          Noclegi są dostępne, a ich koszt pokrywają goście. W celu rezerwacji najlepiej skontaktować się z Angelą,
          ponieważ gości weselnych obowiązuje inna cena.
        </InfoItem>
      </div>
    </section>
  );
};

export default InfoSection;
