'use client';
pr-12243

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Brain,
  Network
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {}
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return ("
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}"
      <div className="bg-blue-900 text-white py-2">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">";
            <div className="flex items-center space-x-6 mb-2 md:mb-0">";
              <div className="flex items-center space-x-2">"
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>"
            <div className="flex items-center space-x-2">"
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}"
      <nav className="container mx-auto px-4 py-4">"
        <div className="flex justify-between items-center">
          {/* Logo */}"
          <Link href="/" className="flex items-center space-x-2">"
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>"
              <h1 className="text-2xl font-bold text-gray-900">
                Zion Tech Group;
              </h1>"
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}"
          <div className="hidden lg:flex items-center space-x-8">;
            {navigation.map((item) => ("
              <div key={item.name} className="relative group">
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)}"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium";
                >
                  <Link href={item.href}>{item.name}</Link>
                  {item.dropdown && (
                    <ChevronDown;
                      className={`w-4 h-4 transition-transform duration-200 ${"
                        activeDropdown === item.name ? "rotate-180" : ""`;
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div;
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}"
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link;
                            key={subItem.name}
                            href={subItem.href}"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200";
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button;
            onClick={toggleMenu}"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200";
          >
            {isMenuOpen ? ("
              <X className="w-6 h-6" />
            ) : (";
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}"
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}"
              className="lg:hidden mt-4 border-t border-gray-200 pt-4";
            >
              {navigation.map((item) => ("
                <div key={item.name} className="mb-2">"
                  <div className="flex items-center justify-between">
                    <Link;
                      href={item.href}"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2";
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button;
                        onClick={() => toggleDropdown(item.name)}"
                        className="p-1"
                      >
                        <ChevronDown;`
                          className={`w-4 h-4 transition-transform duration-200 ${"
                            activeDropdown === item.name ? "rotate-180" : ""`;
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && ("
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link;
                          key={subItem.name}
                          href={subItem.href}"
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1";
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}"
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link"
                  href="/contact""
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold";
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

}
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesDropdown = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/web-development',
      icon: Code;
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications',
      href: '/services/mobile-development',
      icon: Smartphone;
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      href: '/services/cloud-solutions',
      icon: Cloud;
    },
    {
      title: 'Database Management',
      description: 'Database design and optimization',
      href: '/services/database-management',
      icon: Database;
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity and data protection',
      href: '/services/security',
      icon: Shield;
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements',
      href: '/services/performance',
      icon: Zap;
    }
  ];

  ];

  const industriesDropdown = [
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
    { name: 'Logistics', href: '/industries/logistics', icon: Truck },
    { name: 'Finance', href: '/industries/finance', icon: CreditCard },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [;
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleServiceClick = (href: string) => {
    closeMenu();
    window.location.href = href;
  };

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>;
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">;
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200";
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200";
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium";
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

export default Header;
pr-12243
