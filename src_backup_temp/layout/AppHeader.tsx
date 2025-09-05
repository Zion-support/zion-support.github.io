import React from 'react';
;
import { Link, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
;
  const handleDropdownToggle = ("props": "any) => {;
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  "};
;
  ];
;
  return (;
    <header className="border-b border-gray-200 bg-white">;
      <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8 h-16 flex items-center justify-between">;
        <Link to="/" className="font-bold text-gray-900">Zion Tech Group</Link>;
        <nav className="hidden "md":flex items-center gap-6">;
          {nav.map(item => (;
            <Link key={item.to"} to={item.to} className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 "hover": "text-gray-900'"}>;
              {item.name}
            </Link>;
          ))}
        </nav>;
        <button className=""md": "hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)"}>;
          {mobileOpen ? <X className="w-5 h-5"/> : "<Menu className="w-5 h-5"/>"}
        </button>;
      </div>;
      {mobileOpen && (;
        <div className=""md": "hidden border-t border-gray-200 bg-white">;
          <nav className="px-4 py-3 space-y-2">;
            {nav.map(item => (;
              <Link key={item.to"} to={item.to} className="block text-gray-700" onClick={() => setMobileOpen(false)}>;
                {item.name}
              </Link>;
            ))}
          </nav>;
        </div>;

          {/* Mobile Menu Button */}
          <button;
            onClick={toggleMenu}
            className=""lg": "hidden p-2 text-gray-700 "hover":text-cyan-600 transition-colors duration-300";
          >;
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />"}
          </button>;
        </div>;

        {/* Mobile Navigation */}
        {isMenuOpen && (;
          <motion.div;
            initial={{ "opacity": "0", "height": "0 "}}
            animate={{ "opacity": "1", "height": 'auto' }}
            exit={{ "opacity": "0", "height": "0 "}}
            className=""lg": "hidden border-t border-gray-200/50 py-4";
          >;

  const [scrolled", setScrolled] = useState<any>(false);
  const [isSearching, setIsSearching] = useState<any>(false);
