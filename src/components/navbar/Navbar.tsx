interface NavbarProps {
  onToggle: (show: boolean) => void;
  showMenu: boolean;
}

export const Navbar = ({ showMenu, onToggle }: NavbarProps) => {
  return (
    <nav className="fixed top-0 right-0 z-50 flex items-center justify-end p-5">
      <div className="bg-wine-950/80 border-wine-700/30 flex items-center space-x-4 rounded-full border px-6 py-3 shadow-2xl backdrop-blur-md">
        <button
          className={`font-display rounded-md px-4 py-2 text-sm tracking-[0.2em] transition-all duration-300 ${
            !showMenu
              ? 'text-cream-100 bg-wine-700 shadow-inner'
              : 'text-wine-300 hover:text-cream-100 hover:bg-wine-800/50'
          } `}
          onClick={() => onToggle(false)}
        >
          START
        </button>

        <div className="bg-wine-700/50 h-4 w-px" />

        <button
          className={`font-display rounded-md px-4 py-2 text-sm tracking-[0.2em] transition-all duration-300 ${
            showMenu
              ? 'text-cream-100 bg-wine-700 shadow-inner'
              : 'text-wine-300 hover:text-cream-100 hover:bg-wine-800/50'
          } `}
          onClick={() => onToggle(true)}
        >
          MENU
        </button>
      </div>
    </nav>
  );
};
