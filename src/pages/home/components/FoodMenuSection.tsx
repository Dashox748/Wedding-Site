import React, { useState } from 'react';

import { CutleryIcon } from './FoodIcons';

interface WeddingMenu {
  coldAppetizers: MenuItemData[];
  lateNightDinner: MenuItemData;
  lateNightSoup: MenuItemData;
  mainCourses: MenuItemData[];
  countryTable: MenuItemData;
  sideDishes: MenuItemData[];
  starterSoup: MenuItemData;
}

interface MenuItemData {
  description: string;
  name: string;
  id: string;
}

const INITIAL_MENU: WeddingMenu = {
  coldAppetizers: [
    { name: 'Śledź w śmietanie z cebulą i koperkiem', description: '', id: '11' },
    { name: 'Półmisek pieczonych mięs: karkówka, boczek, schab z ćwikłą', description: '', id: '12' },
    { name: 'Pałki i skrzydełka z kurczaka w chilli i miodzie', description: '', id: '13' },
    { name: 'Krokiet panierowany z porem i serem cheddar', description: '', id: '14' },
    { name: 'Jajka w majonezie z łososiem i kawiorem', description: '', id: '15' },
    {
      name: 'Sałatka makaronowa z mozarellą, kiełkami słonecznika, pomidorkami cherry i olejem dyniowym',
      description: '',
      id: '16',
    },
  ],
  sideDishes: [
    { name: 'Ziemniaki gotowane z koperkiem na masełku', description: '', id: '5' },
    { name: 'Ziemniaki smażone z ziołami i odrobiną czosnku', description: '', id: '6' },
    { name: 'Kluski śląskie', description: '', id: '7' },
    { name: 'Buraczki klasyczne', description: '', id: '8' },
    { name: 'Tradycyjny colesław', description: '', id: '9' },
    { name: 'Sos pieczeniowy', description: '', id: '10' },
  ],
  mainCourses: [
    { name: 'Grillowany filet z kurczaka w chrupiącym bekonie z sosem serowym', description: '', id: '2' },
    { name: 'Drobiowy de volaille z serem mimolette i masełkiem ziołowym', description: '', id: '3' },
    { name: 'Gnocchi szpinakowe w sosie śmietanowym z pomidorkami cherry', description: '', id: '4' },
  ],
  countryTable: {
    name: 'Regionalne, naturalne wędliny, kiełbasy, salceson, pasztety, smalec z kiełbasą rzemieślniczą i skwarkami, ogórki kiszone',
    description: '',
    id: '19',
  },
  lateNightSoup: {
    name: 'Barszcz czerwony na naturalnym zakwasie z krokietem mięsnym lub kapustą i grzybami',
    description: '',
    id: '18',
  },
  starterSoup: {
    name: 'Tradycyjny rosół z wiejskiej kury z domowym makaronem i lubczykiem',
    description: '',
    id: '1',
  },
  lateNightDinner: {
    name: 'Żeberka BBQ',
    description: '',
    id: '17',
  },
};

const FoodMenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'supper' | 'cold'>('dinner');

  const TabButton: React.FC<{
    Icon: React.FC<{ className?: string }>;
    id: 'dinner' | 'supper' | 'cold';
    label: string;
  }> = ({ label, Icon, id }) => (
    <button
      className={`font-display flex items-center space-x-2 rounded-md border border-transparent px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 lg:text-base ${
        activeTab === id
          ? 'bg-wine-600 text-cream-100 border-wine-500 scale-105 shadow-lg'
          : 'text-wine-300 hover:text-cream-200 hover:bg-wine-800/30 hover:border-wine-700/50'
      } `}
      onClick={() => setActiveTab(id)}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <section className="relative mx-auto w-full max-w-350 overflow-hidden px-4 py-24 lg:px-12" id="menu">
      <div className="bg-wine-400/5 pointer-events-none absolute top-0 right-0 h-100 w-100 rounded-full blur-3xl" />
      <div className="bg-wine-400/5 pointer-events-none absolute bottom-0 left-0 h-100 w-100 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <div className="border-wine-600/30 mb-16 flex w-full flex-col items-center justify-between space-y-8 border-b pb-8 lg:mb-20 lg:flex-row lg:space-y-0">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-cream-100 mb-2 text-4xl tracking-wide lg:text-6xl">UCZTA WESELNA</h2>
            <p className="font-display text-wine-400 text-sm tracking-[0.3em] uppercase">Angela & Kacper</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <TabButton Icon={CutleryIcon} label="Obiad" id="dinner" />
            <TabButton label="Przekąski Zimne" Icon={CutleryIcon} id="cold" />
            <TabButton Icon={CutleryIcon} label="Kolacja" id="supper" />
          </div>
        </div>

        <div className="animate-fade-in-up min-h-100 w-full max-w-5xl">
          {activeTab === 'dinner' && (
            <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <CutleryIcon className="mx-auto h-10 w-10" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">DANIE GŁÓWNE</h3>
              </div>

              <div className="w-full space-y-12">
                <div className="space-y-6">
                  <h4 className="font-display text-wine-300 text-xl tracking-widest uppercase">Zupa</h4>
                  <MenuItem description={INITIAL_MENU.starterSoup.description} name={INITIAL_MENU.starterSoup.name} />
                </div>

                <div className="space-y-6">
                  <h4 className="font-display text-wine-300 text-xl tracking-widest uppercase">Dania Główne</h4>
                  <div className="grid w-full grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {INITIAL_MENU.mainCourses.map((item) => (
                      <MenuItem description={item.description} name={item.name} key={item.id} />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-display text-wine-300 text-xl tracking-widest uppercase">Dodatki</h4>
                  <div className="grid w-full grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {INITIAL_MENU.sideDishes.map((item) => (
                      <MenuItem description={item.description} name={item.name} key={item.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cold' && (
            <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <CutleryIcon className="mx-auto h-10 w-10" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">BUFET ZIMNY</h3>
              </div>

              <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {INITIAL_MENU.coldAppetizers.map((item) => (
                  <MenuItem description={item.description} name={item.name} key={item.id} />
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <h4 className="font-display text-wine-300 text-xl tracking-widest uppercase">Stół Wiejski</h4>
                <MenuItem
                  description={INITIAL_MENU.countryTable.description}
                  name={INITIAL_MENU.countryTable.name}
                  className="max-w-3xl"
                />
              </div>
            </div>
          )}

          {activeTab === 'supper' && (
            <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <div className="text-wine-400 mb-2 opacity-80">
                  <CutleryIcon className="mx-auto h-10 w-10" />
                </div>
                <h3 className="font-display text-cream-100 text-3xl tracking-wider">KOLACJA NA CIEPŁO</h3>
              </div>

              <div className="grid w-full max-w-2xl grid-cols-1 gap-y-12">
                <div className="space-y-4">
                  <h4 className="font-display text-wine-300 text-lg tracking-widest uppercase">Danie Wieczorne</h4>
                  <MenuItem
                    description={INITIAL_MENU.lateNightDinner.description}
                    name={INITIAL_MENU.lateNightDinner.name}
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-display text-wine-300 text-lg tracking-widest uppercase">Zupa Nocna</h4>
                  <MenuItem
                    description={INITIAL_MENU.lateNightSoup.description}
                    name={INITIAL_MENU.lateNightSoup.name}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const MenuItem: React.FC<{ description?: string; className?: string; name: string }> = ({
  description,
  className,
  name,
}) => (
  <div className={`group flex flex-col items-center space-y-2 ${className}`}>
    <h4 className="font-display text-cream-200 group-hover:text-cream-100 text-lg transition-colors lg:text-xl">
      {name}
    </h4>
    {description && <p className="text-wine-300 font-sans text-sm font-light">{description}</p>}
    <div className="bg-wine-800 group-hover:bg-wine-600 mt-2 h-px w-12 transition-colors" />
  </div>
);

export default FoodMenuSection;
