import React from 'react';

import kwiatFaq from '@/assets/kwiatFaq.png';

const FAQBox: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div
    className="border-cream-200/20  hover:bg-wine-800/40 group w-full border p-8 backdrop-blur-sm transition-all duration-500"
    style={{ boxShadow: '0 0 10px #eaddca82' }}
  >
    <h3 className="font-display text-dela-kolor-tekstu-kafelek-faq mb-4 text-xl tracking-wider uppercase transition-colors lg:text-2xl">
      {title}
    </h3>
    <p className="text-dela-kolor-tekstu-kafelek-faq/80 font-sans leading-relaxed font-light">{children}</p>
  </div>
);

const FAQSection: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-350 overflow-hidden px-4 py-20 lg:px-12">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        <div className="sticky top-24 flex w-full flex-col items-center space-y-8 text-center lg:w-5/12 lg:items-center">
          <div className="space-y-2">
            <h2 className="font-display text-5xl leading-tight lg:text-7xl">
              <span className="text-wine-400 mb-2 block text-3xl lg:text-4xl">Najczęściej</span>
              Zadawane
              <br />
              Pytania
            </h2>
            <div className="via-wine-600 mx-auto mt-6 h-1 w-32 bg-linear-to-r from-transparent to-transparent" />
          </div>

          <div className="animate-pulse-slow relative aspect-square w-full max-w-100 opacity-80">
            <div className="bg-wine-600/10 absolute inset-0 rounded-full blur-3xl" />
            <img
              style={{
                filter:
                  'drop-shadow(0 0 10px rgba(245, 211, 226, 0.35)) drop-shadow(0 0 20px rgba(245, 211, 226, 0.2)) blur(0.3px)',
                opacity: 0.7,
              }}
              src={kwiatFaq}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-7/12 lg:gap-8">
          <FAQBox title="Czy na miejscu jest parking?">
            Tak, na terenie kościoła jak i Żabiego Dworu znajdują się bezpłatne parkingi.
          </FAQBox>

          <FAQBox title="Strój">
            Nie mamy sztywnych wymagań, więc czujcie się swobodnie! Czarne, czerwone, kolorowe – wszystko mile widziane.
            <span className="text-dela-kolor-tekstu-kafelek-faq/70 border-wine-600 mt-2 block border-l-2 pl-3 italic">
              Jedynie biały prosimy zostawić dla Panny Młodej.
            </span>
          </FAQBox>

          <FAQBox title="Poprawiny">
            Poprawin nie planujemy, więc całą energię zostawcie na wesele i wspólną zabawę do samego końca!
          </FAQBox>

          <FAQBox title="Przejazd">
            Zapewniamy przejazd z kościoła do Żabiego Dworu po ceremonii, jak i powrót do Nowej soli po zakończeniu
            wesela.
          </FAQBox>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
