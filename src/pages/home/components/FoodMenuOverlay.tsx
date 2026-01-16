import React, { useState } from 'react';

import { CutleryIcon, DinnerIcon, WineIcon } from './FoodIcons';
import RoseBouquet from './RoseBouquet';

interface MenuProps {
  isVisible: boolean;
}

const FoodMenuOverlay: React.FC<MenuProps> = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'supper' | 'cold'>('cold');

  if (!isVisible) return null;

  const TabButton: React.FC<{
    Icon: React.FC<{ className?: string }>;
    id: 'dinner' | 'supper' | 'cold';
    label: string;
  }> = ({ label, Icon, id }) => (
    <button
      className={`font-display flex items-center space-x-2 rounded-md px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 lg:text-base ${
        activeTab === id
          ? 'bg-wine-600 text-cream-100 scale-105 shadow-lg'
          : 'text-wine-400 hover:text-cream-200 hover:bg-wine-800/30'
      } `}
      onClick={() => setActiveTab(id)}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="from-wine-950 via-wine-900 to-wine-800 animate-fade-in fixed inset-0 z-40 flex flex-col items-center overflow-y-auto bg-linear-to-br">
      <div className="from-wine-800/20 via-wine-950 to-wine-950 pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]" />
      <RoseBouquet className="text-wine-900/30 pointer-events-none fixed top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />
      <RoseBouquet className="text-wine-900/30 pointer-events-none fixed right-0 bottom-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rotate-180" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 lg:py-32">
        <div className="border-wine-800/50 mb-16 flex w-full flex-col items-center justify-between space-y-8 border-b pb-8 lg:mb-24 lg:flex-row lg:space-y-0">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-cream-100 mb-2 text-4xl tracking-wide lg:text-6xl">UCZTA WESELNA</h2>
            <p className="font-display text-wine-400 text-sm tracking-[0.3em] uppercase">Angela & Kacper</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <TabButton Icon={DinnerIcon} label="Obiad" id="dinner" />
            <TabButton label="Przekąski Zimne" Icon={WineIcon} id="cold" />
            <TabButton Icon={CutleryIcon} label="Kolacja" id="supper" />
          </div>
        </div>

        <div className="animate-fade-in-up min-h-[400px] w-full max-w-5xl">
          {activeTab === 'cold' && (
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <WineIcon className="mx-auto h-8 w-8" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">BUFET ZIMNY</h3>
                <p className="font-script text-wine-300 text-3xl">Selekcja Przekąsek</p>
              </div>

              <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <MenuItem name="Tatar z łososia z kaparami" />
                <MenuItem name="Deska serów rzemieślniczych" />
                <MenuItem name="Carpaccio wołowe z parmezanem" />

                <MenuItem name="Ruloniki z bakłażana z ricottą" />
                <MenuItem name="Śledź w trzech odsłonach" />
                <MenuItem name="Terrina z królika z pistacjami" />
              </div>
            </div>
          )}

          {activeTab === 'dinner' && (
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <DinnerIcon className="mx-auto h-8 w-8" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">DANIE GŁÓWNE</h3>
                <p className="font-script text-wine-300 text-3xl">Tradycyjne i Nowoczesne</p>
              </div>

              <div className="grid w-full max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                <MenuItem description="Podawany z lubczykiem i marchewką" name="Rosół Królewski z domowym makaronem" />
                <MenuItem description="Z grzankami i bazylią" name="Krem z Pomidorów" />

                <MenuItem description="Z żurawiną i modrą kapustą" name="Kaczka pieczona w jabłkach" />
                <MenuItem description="W sosie kurkowym z gnocchi" name="Polędwiczki wieprzowe" />
              </div>
            </div>
          )}

          {activeTab === 'supper' && (
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <CutleryIcon className="mx-auto h-8 w-8" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">KOLACJA NA CIEPŁO</h3>
                <p className="font-script text-wine-300 text-3xl">Dania Gorące</p>
              </div>

              <div className="grid w-full max-w-2xl grid-cols-1 gap-y-8">
                <MenuItem name="Barszcz Czerwony z Pasztecikiem" />
                <MenuItem description="Serwowana przez Szefa Kuchni o północy" name="Płonąca Szynka" />
                <MenuItem name="Boeuf Strogonow" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<{ description?: string; name: string }> = ({ description, name }) => (
  <div className="group flex flex-col items-center space-y-2">
    <h4 className="font-display text-cream-200 group-hover:text-cream-100 text-lg transition-colors lg:text-xl">
      {name}
    </h4>
    {description && <p className="text-wine-300 font-sans text-sm font-light">{description}</p>}
    <div className="bg-wine-800 group-hover:bg-wine-600 mt-2 h-px w-12 transition-colors" />
  </div>
);

export default FoodMenuOverlay;
