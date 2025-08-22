import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, HomeIcon, MapIcon, SettingsIcon, UserIcon } from 'lucide-react';
interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  onLogout
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" aria-label="Navigate Home">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?q=80&w=80&auto=format&fit=crop" alt="VisionGuide Logo" className="w-8 h-8 object-cover rounded-full" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              VisionGuide
            </span>
          </Link>
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="p-2 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-white" aria-expanded={isMenuOpen} aria-label="Toggle navigation menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200 transition-colors" aria-label="Home">
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
            <Link to="/journey-planner" className="flex items-center space-x-1 hover:text-blue-200 transition-colors" aria-label="Journey Planner">
              <MapIcon size={20} />
              <span>Journey Planner</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-1 hover:text-blue-200 transition-colors" aria-label="Settings">
              <SettingsIcon size={20} />
              <span>Settings</span>
            </Link>
            {isLoggedIn ? <>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-200 transition-colors" aria-label="Profile">
                  <UserIcon size={20} />
                  <span>Profile</span>
                </Link>
                <button onClick={onLogout} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-2 rounded-md transition-colors shadow-md" aria-label="Log out">
                  Log Out
                </button>
              </> : <Link to="/login" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 py-2 rounded-md transition-colors shadow-md" aria-label="Log in">
                Log In
              </Link>}
          </nav>
        </div>
        {/* Mobile navigation menu */}
        {isMenuOpen && <nav className="mt-4 space-y-3 md:hidden">
            <Link to="/" className="block py-2 hover:bg-blue-800 rounded px-3" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/journey-planner" className="block py-2 hover:bg-blue-800 rounded px-3" onClick={toggleMenu}>
              Journey Planner
            </Link>
            <Link to="/settings" className="block py-2 hover:bg-blue-800 rounded px-3" onClick={toggleMenu}>
              Settings
            </Link>
            {isLoggedIn ? <>
                <Link to="/profile" className="block py-2 hover:bg-blue-800 rounded px-3" onClick={toggleMenu}>
                  Profile
                </Link>
                <button onClick={() => {
            onLogout();
            toggleMenu();
          }} className="block w-full text-left py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded px-3">
                  Log Out
                </button>
              </> : <Link to="/login" className="block py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded px-3" onClick={toggleMenu}>
                Log In
              </Link>}
          </nav>}
      </div>
    </header>;
};