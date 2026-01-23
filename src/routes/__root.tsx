import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import FoodMenuOverlay from '@/pages/home/components/FoodMenuOverlay.tsx';
import { Navbar } from '@/components/navbar/Navbar.tsx';

import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Great+Vibes&family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap',
        rel: 'stylesheet',
      },
    ],
    meta: [
      { charSet: 'utf-8' },
      { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      { title: 'Angela i Kacper | Strona ślubna' },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div
          className={`text-cream-100 selection:bg-primary-700 selection:text-cream-50 relative min-h-screen overflow-x-hidden font-sans transition-opacity duration-700 ${fontsLoaded ? 'opacity-100' : 'opacity-0'}`}
        >

          <Navbar onToggle={setShowFoodMenu} showMenu={showFoodMenu} />

          <FoodMenuOverlay isVisible={showFoodMenu} />
          <main
            className={`relative z-10 mx-auto flex w-full max-w-350 flex-col items-center transition-opacity duration-500 ${showFoodMenu ? 'h-screen overflow-hidden opacity-0' : 'opacity-100'}`}
          >
            {children}
            <footer className="text-wine-600/50 font-display border-wine-800/30 mt-12 w-full border-t py-12 text-center text-sm tracking-widest uppercase">
              Angela & Kacper &bull; 2026
            </footer>
          </main>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
