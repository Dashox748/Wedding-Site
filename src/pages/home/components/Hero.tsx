import Countdown from '@/pages/home/components/Countdown.tsx';
import Branch from '@/assets/branch.png';
import Heart from '@/assets/heart.png';

export const Hero = () => {
  return (
    <section className="flex w-full lg:h-200 lg:flex-row">
      <div className="bg-dela-kolor-baner border-primary-700 group relative hidden w-full items-center justify-center overflow-hidden p-12 lg:flex lg:w-5/12 lg:border-r">
        <div className="relative z-10 flex transform flex-col items-center justify-center transition-transform duration-700 hover:scale-105">
          <div
            className="font-display text-primary-700 relative z-10 mx-auto min-h-85 min-w-93 text-[12rem] leading-none font-thin mix-blend-overlay lg:text-[16rem]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <span className="absolute -top-20 left-0">A</span>
            <span className="absolute right-0 -bottom-20">K</span>
          </div>
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img className="h-full w-full scale-50 transform object-contain" src={Branch} />
        </div>
      </div>

      <div className="from-wine-900 to-wine-950 flex w-full flex-col items-center justify-center space-y-10 bg-linear-to-b p-8 pt-30 text-center lg:mt-20 lg:w-7/12 lg:space-y-12 lg:bg-none lg:p-16">
        <div className="animate-fade-in-up space-y-4">
          <p className="font-display text-cream-300 text-xs tracking-[0.3em] uppercase lg:text-sm">
            Zapraszamy na nasz ślub
          </p>
          <h2 className="text-cream-100 p-4 font-[Italianno] text-6xl drop-shadow-lg lg:text-8xl">
            Angela <span className="text-wine-400 align-middle text-4xl lg:text-6xl">&</span> Kacper
          </h2>
          <p className="font-display text-cream-200 border-wine-700/50 inline-block border-t border-b py-3 text-lg tracking-[0.2em] lg:text-xl">
            19 CZERWCA 2026
          </p>
        </div>

        <img className="size-15 animate-pulse" src={Heart} />
        <div className="w-full max-w-2xl">
          <Countdown targetDate="2026-06-19T14:00:00" />
        </div>
      </div>
    </section>
  );
};
