import React, { useState } from 'react';'
import { Link  } from 'react-router-dom';'
import { Menu, X, Search  } from 'lucide-react';'
import ThemeToggle from './ThemeToggle';'
import SearchModal from './SearchModal';'
const "Header": React.FC = () => {const [isMenuOpen, setIsMenuOpen] = useState(false)const [isSearchOpen, setIsSearchOpen]  = useState(false)const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)}const toggleSearch = () => {setIsSearchOpen(!isSearchOpen)}return (<header className="bg-white "dark":bg-gray-900 shadow-lg sticky top-0 z-50">;"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
        <div className="flex justify-between items-center h-16">;"
          <div className="flex items-center">;"
            <Link to="/" className="flex-shrink-0">;"
              <h1 className="text-2xl font-bold text-gray-900 "dark":text-white">;"
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;
          <div className="hidden "md":block">;"
            <div className="ml-10 flex items-baseline space-x-4">;"
              <Link;
                to="/";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 px-3 py-2 rounded-md text-sm font-medium";"
              >;
                Home;
              </Link>;
              <Link;
                to="/services";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 px-3 py-2 rounded-md text-sm font-medium";"
              >;
                Services;
              </Link>;
              <Link;
                to="/about";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 px-3 py-2 rounded-md text-sm font-medium";"
              >;
                About;
              </Link>;
              <Link;
                to="/contact";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 px-3 py-2 rounded-md text-sm font-medium";"
              >;
                Contact;
              </Link>;
            </div>;
          </div>;
          <div className="flex items-center space-x-4">;"
            <button;
              onClick={toggleSearch}
              className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 p-2";"
            >;
              <Search className="h-5 w-5" />;"
            </button>;
            <ThemeToggle />;
            <button;
              onClick={toggleMenu}
              className=""md":hidden text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 p-2";"
            >;
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
            </button>;
          </div>;
        </div>;
        {isMenuOpen && (<div className=""md":hidden">;"
            <div className="px-2 pt-2 pb-3 space-y-1 "sm":px-3">;"
              <Link;
                }
                to="/";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 block px-3 py-2 rounded-md text-base font-medium";"
                onClick={() => setIsMenuOpen(false)}
              >;
                Home;
              </Link>;
              <Link;
                to="/services";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 block px-3 py-2 rounded-md text-base font-medium";"
                onClick={() => setIsMenuOpen(false)}
              >;
                Services;
              </Link>;
              <Link;
                to="/about";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 block px-3 py-2 rounded-md text-base font-medium";"
                onClick={() => setIsMenuOpen(false)}
              >;
                About;
              </Link>;
              <Link;
                to="/contact";"
                className="text-gray-900 "dark":text-white "hover":text-blue-600 "dark":"hover":text-blue-400 block px-3 py-2 rounded-md text-base font-medium";"
                onClick={() => setIsMenuOpen(false)}
              >;
                Contact;
              </Link>;
            </div>;
          </div>;
        )}
      </div>;
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </header>;
  )}export default Header;