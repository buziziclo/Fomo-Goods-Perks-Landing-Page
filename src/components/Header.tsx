import { Lock, HelpCircle } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
  onHelpClick: () => void;
}

export default function Header({ onLoginClick, onHelpClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#040768] text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-outfit text-2xl font-bold tracking-tight">
            fomo perks<span className="text-[#F00480]">.</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <button 
            onClick={onLoginClick}
            className="flex items-center gap-2 hover:text-[#FFB800] transition-colors"
          >
            <Lock className="w-4 h-4" />
            LOG IN
          </button>
          <button 
            onClick={onHelpClick}
            className="flex items-center gap-2 hover:text-[#FFB800] transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            SUPPORT
          </button>
        </nav>
      </div>
    </header>
  );
}
