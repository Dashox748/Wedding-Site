import React from 'react';

import PointingHandIcon from './PointingHandIcon';

interface LocationBlockProps {
  className?: string;
  mapQuery: string;
  address: string;
  title: string;
}

const LocationBlock: React.FC<LocationBlockProps> = ({ className, mapQuery, address, title }) => {
  return (
    <div className={`flex flex-col space-y-8 ${className}`}>
      {/* Header Info */}
      <div className="group flex items-start space-x-6">
        <div className="text-cream-200 w-16 opacity-80 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100 lg:w-20">
          <PointingHandIcon className="w-full" />
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-display text-cream-100 text-2xl tracking-wider lg:text-3xl">{title}</h3>
          <p className="text-cream-300 border-wine-600/50 inline-block border-t pt-2 font-sans text-sm tracking-widest uppercase lg:text-base">
            {address}
          </p>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-wine-800 border-wine-600/30 group-hover:border-wine-500/50 relative aspect-video w-full overflow-hidden rounded-sm border shadow-2xl transition-colors lg:aspect-[16/7]">
        <iframe
          className="h-full w-full opacity-80 contrast-[1.1] grayscale-30 filter transition-all duration-700 hover:opacity-100 hover:grayscale-0"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          title={`Mapa do ${title}`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          height="100%"
          width="100%"
        />
        {/* Overlay for inactive state */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(45,10,18,0.8)]" />
      </div>
    </div>
  );
};

const LocationSection: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-350 px-4 py-24 lg:px-12">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32">
        <LocationBlock
          mapQuery="Kościół św. Józefa Rzemieślnika, Nowa Sól"
          address="ul. Wyszyńskiego 1, Nowa Sól"
          title="Kościół św. Józefa"
        />

        <LocationBlock
          mapQuery="Żabi Dwór, Radwanów 36"
          address="Radwanów 36, Kożuchów"
          className="lg:mt-0"
          title="Żabi Dwór"
        />
      </div>
    </section>
  );
};

export default LocationSection;
