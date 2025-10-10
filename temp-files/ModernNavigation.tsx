import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
<<<<<<< HEAD
interface ModernNavigationProps {/* TODO: Fix JSX expression */}
}
=======
interface ModernNavigationProps {/* TODO: Fix JSX expression */};
};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const,
  ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {/* TODO: Fix JSX expression */};
  f: '/' },
    {/* TODO: Fix JSX expression */};
  f: '/services' },
    {/* TODO: Fix JSX expression */};
  f: '/about' },
    {/* TODO: Fix JSX expression */};
  f: '/contact' }];
  return(<nav className={`bg-white shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
  return (
    <nav className={`bg-white shadow-md ${className}`}>
      <div className="container mx-auto px-4"></div>
        <div className="flex justify-between items-center py-4"></div>
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group;
          </Link>
<<<<<<< HEAD
          {/* Desktop Navigation */}
=======
          {/* Desktop Navigation */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="hidden md: flex space-x-8">,
            {navigationItems.map(item => (,
              <Link;
                key={item.name})
                href={item.href})
                className="text-gray-700 hover: text-blue-600 transition-colors")
              >),
          <div className="hidden md:flex space-x-8">
            {navigationItems.map(item => (</div>
              <Link
  return (<nav className={`bg-white shadow-md ${className}`}></nav>
      <div className="container mx-auto px-4"></div>"
        <div className="flex justify-between items-center py-4"></div>"
          <Link href="/" className="text-xl font-bold text-blue-600"></Link>
            Zion Tech Group;
          </Link>
          {/* Desktop Navigation */}"
          <div className="hidden,"
  md:flex space-x-8"></div>
            {/* TODO: Fix JSX expression */};
                key={item.name};
                href={item.href}"
                className="text-gray-700,"
  hover:text-blue-600 transition-colors"
              >
                {item.name};
              </Link>)
            ))};
          </div>
<<<<<<< HEAD
          {/* Mobile Menu Button */}
=======
          {/* Mobile Menu Button */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <button onClick={() => setIsOpen(!isOpen)} className="md: hidden text-gray-700">,
          {/* Mobile Menu Button */}"
          <button onClick={() => setIsOpen(!isOpen)} className="m,"
  d:hidden text-gray-700">"
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>
        </div>
<<<<<<< HEAD
        {/* Mobile Navigation */}
=======
        {/* Mobile Navigation */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        {isOpen && (
          <div className="md: hidden py-4 border-t">,
            {navigationItems.map(item => (,
              <Link ;)
                key={item.name})
                href={item.href})
                className="block text-gray-700 hover: text-blue-600 py-2"),
          <div className="md:hidden py-4 border-t">
            {navigationItems.map(item => (</div>
              <Link
                key={item.name};
                href={item.href};
                className="block text-gray-700 hover:text-blue-600 py-2"
        {/* TODO: Fix JSX expression */};
                key={item.name};
                href={item.href}"
                className="block text-gray-700,"
  hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)};
              >
                {item.name};
              </Link>
            ))};
          </div>
        )};
      </div>
    </nav>
<<<<<<< HEAD
  );
};
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default ModernNavigation;
"`
  </button>
  </nav>
  </ModernNavigationProps>