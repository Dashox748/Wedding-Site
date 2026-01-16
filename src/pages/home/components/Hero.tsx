import BranchIcon from '@/pages/home/components/BranchIcon.tsx';
import Countdown from '@/pages/home/components/Countdown.tsx';

export const Hero = () => {
  return (
    <section className="flex w-full lg:h-200 lg:flex-row">
      <div className="bg-wine-800/30 border-wine-700/30 group relative hidden w-full items-center justify-center overflow-hidden p-12 lg:flex lg:w-5/12 lg:border-r">
        <div className="border-wine-600/20 absolute aspect-square w-[80%] scale-90 rounded-full border opacity-0 transition-opacity duration-1000 ease-out group-hover:scale-100 group-hover:opacity-100" />

        <div className="relative z-10 flex transform flex-col items-center justify-center transition-transform duration-700 hover:scale-105">
          <div className="relative flex h-80 w-64 items-center justify-center lg:h-125 lg:w-96">
            <div className="text-wine-600/40 lg:text-wine-600/30 absolute inset-0 flex items-center justify-center">
              <BranchIcon className="h-full w-full scale-125 rotate-12 transform object-contain" />
            </div>

            <h1
              className="font-display text-cream-200/90 relative text-[12rem] leading-none font-thin mix-blend-overlay lg:text-[16rem]"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <span className="absolute top-0 left-4 -translate-x-1/2 translate-y-8 transform lg:left-0 lg:translate-y-0">
                A
              </span>
              <span className="absolute right-4 bottom-0 translate-x-1/2 -translate-y-8 transform lg:right-0 lg:translate-y-0">
                K
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="from-wine-900 to-wine-950 lg:mt-20 flex w-full flex-col items-center justify-center space-y-10 bg-linear-to-b p-8 text-center lg:w-7/12 lg:space-y-16 lg:bg-none lg:p-16 pt-30">
        <div className="animate-fade-in-up space-y-4">
          <p className="font-display text-cream-300 text-xs tracking-[0.3em] uppercase lg:text-sm">
            Zapraszamy na nasz ślub
          </p>
          <h2 className="font-script text-cream-100 p-4 text-6xl drop-shadow-lg lg:text-8xl">
            Angela <span className="text-wine-400 align-middle text-4xl lg:text-6xl">&</span> Kacper
          </h2>
          <p className="font-display text-cream-200 border-wine-700/50 inline-block border-t border-b py-3 text-lg tracking-[0.2em] lg:text-xl">
            19 CZERWCA 2026
          </p>
        </div>

        <div className="text-cream-200/80 animate-pulse">
          <svg
            strokeLinejoin="round"
            stroke="currentColor"
            strokeLinecap="round"
            viewBox="0 0 24 24"
            strokeWidth="1"
            height="40"
            fill="none"
            width="40"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />

            <path d="M12 5a9 9 0 0 1 2 2" className="opacity-50" />
            <path className="opacity-50" d="M12 19l-2-2" />
          </svg>
        </div>
        <div className="w-full max-w-2xl">
          <Countdown targetDate="2026-06-19T14:00:00" />
        </div>
      </div>
    </section>
  );
};
