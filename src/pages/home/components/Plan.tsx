interface TimelineItemProps {
  isLast?: boolean;
  event: string;
  time: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ isLast, event, time }) => (
  <div
    className={`mx-auto flex w-full max-w-2xl flex-col items-center py-8 text-center md:flex-row md:items-start md:text-left ${!isLast ? 'border-wine-600/30 border-b' : ''} group`}
  >
    <div className="text-dela-kolor-tekstu-kafelek-plan-dnia group-hover:text-cream-100 mb-3 w-full font-[Cinzel] text-3xl tabular-nums transition-colors duration-300 md:mb-0 md:w-48 md:text-4xl">
      {time}
    </div>
    <div className="text-dela-kolor-tekstu-kafelek-plan-dnia flex-1 font-[Cinzel] text-lg leading-relaxed tracking-widest uppercase md:text-xl">
      {event}
    </div>
  </div>
);

export const Plan = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className="bg-dela-kolor-tla-kafelek-plan-dnia border-wine-600/20 flex flex-col items-center rounded-t-[10rem] rounded-b-xl border px-6 py-16 shadow-2xl backdrop-blur-md md:rounded-t-[15rem] md:px-16 md:py-24"
          style={{ boxShadow: '0 0 10px #eaddca82' }}
        >
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-dela-kolor-tekstu-kafelek-plan-dnia font-[Cinzel] text-5xl tracking-wider md:text-7xl">
              PLAN DNIA
            </h2>
            <p className="text-dela-kolor-tekstu-kafelek-plan-dnia font-[Cinzel] text-xl font-light tracking-[0.3em] md:text-2xl">
              19.06.2026
            </p>
          </div>

          <div className="flex w-full flex-col">
            <TimelineItem event="Ceremonia Zaślubin w Nowej Soli" time="15:00" />
            <TimelineItem event="Przybycie do Żabiego Dworu" time="16:30" />
            <TimelineItem event="Obiad" time="17:00" />
            <TimelineItem event="Pierwszy Taniec i Rozpoczęcie Zabawy" time="18:00" isLast />
          </div>
        </div>
      </div>
    </section>
  );
};
