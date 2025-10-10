import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

interface ModernNavigationProps {
  className?: string;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {</ModernNavigationProps>const</ModernNavigationProps> [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`bg-white shadow-md ${className}`}></nav>
      <div className="container mx-auto px-4"></div>
        <div className="flex justify-between items-center py-4"></div>
          <Link href="/" className="text-xl font-bold text-blue-600"></Lin>Zion</Lin> Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8"></div>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              ></Lin>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700"></button>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</Menu>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t"></div>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}</Lin>
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;
