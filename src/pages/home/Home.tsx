import LocationSection from '@/pages/home/components/LocationSection.tsx';
import ScrollReveal from '@/components/scrollReveal/ScrollReveal.tsx';
import InfoSection from '@/pages/home/components/InfoSection.tsx';
import RSVPSection from '@/pages/home/components/RSVPSection.tsx';
import FaqSection from '@/pages/home/components/FaqSection.tsx';
import { Hero } from '@/pages/home/components/Hero.tsx';

export const Home = () => {
  return (
    <div className="w-full">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal>
        <LocationSection />
      </ScrollReveal>
      <ScrollReveal>
        <RSVPSection />
      </ScrollReveal>
    </div>
  );
};
