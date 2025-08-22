import React from 'react';
import { MenuIcon, PhoneIcon } from 'lucide-react';
interface HeaderProps {
  onSOSClick: () => void;
}
export function Header({
  onSOSClick
}: HeaderProps) {
  return <header className="bg-indigo-900 text-white shadow-md">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">VI</span>
          </div>
          <h1 className="text-xl font-bold">SightGuide</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-purple-300 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-purple-300 transition-colors">
            How It Works
          </a>
          <a href="#download" className="hover:text-purple-300 transition-colors">
            Download
          </a>
          <a href="#about" className="hover:text-purple-300 transition-colors">
            About Us
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={onSOSClick} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-colors" aria-label="Emergency SOS button">
            <PhoneIcon size={18} />
            <span>SOS</span>
          </button>
          <button className="md:hidden" aria-label="Menu">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  </header>;
}