import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Search, Sun, Moon, User, Menu, X, Phone, Mail } from 'lucide-react';
import { Zap, Search, Sun, Moon, User, Menu, X } from 'lucide-react';

interface HeaderProps {

export function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Search, Sun, Moon, User, Menu, X, Phone, Mail } from 'lucide-react';
;
interface HeaderProps {;
  className?: "string;
"}
export function Header({ className = '' }: "HeaderProps) {;
  const [isScrolled", setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
;
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10);
    };
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
  const toggleTheme = () => {;
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
;
  const handleSearch = ("e": "React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {;
      // Add search logic here;
      ;
    "}
  };
;
  const navigationItems = [;
    { "name": 'Home', "href": '/' }
    { "name": 'Services', "href": '/services' }
    { "name": 'New Services 2025', "href": '/new-services-2025' }
    { "name": 'AI Services', "href": '/ai-services' }
    { "name": 'IT Services', "href": '/it-services' }
    { "name": 'Micro SaaS', "href": '/micro-saas' }
    { "name": 'Solutions', "href": '/solutions' }
    { "name": 'About', "href": '/about' }
    { "name": 'Contact', "href": '/contact' }
  ];
;
  return (;
    <header ;
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
        isScrolled ;
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg";
          : "bg-transparent";
      } ${className}`}
    >;
      <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8">;
        <div className="flex items-center justify-between h-16 "lg":h-20">;
          ;
          {/* Logo */"}
          <Link to="/" className="flex items-center space-x-3 group">;
            <div className="w-10 h-10 "lg": "w-12 "lg":h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300">;
              <Zap className="w-6 h-6 "lg":w-7 "lg":h-7 text-white" />;
            </div>;
            <div className="hidden "sm":block">;
              <h1 className="text-xl "lg":text-2xl font-bold text-white group-"hover":text-blue-400 transition-colors">;
                Zion Tech Group;
              </h1>;
            </div>;
          </Link>;

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
          {/* Desktop Navigation */"}
          <nav className="hidden "lg": "flex items-center space-x-8">;
            {navigationItems.map((item) => (;
              <Link;
                key={item.name"}
                to={item.href}
                className={`text-gray-300 "hover": "text-cyan-400 transition-colors duration-200 font-medium ${;
                  location.pathname === item.href ? 'text-cyan-400' : '';
                "}`}
              >;
                {item.name}
              </Link>;
            ))}
          </nav>;
          {/* Contact Info - Hidden on small screens */}
          <div className="hidden "xl": "flex items-center space-x-4 text-sm text-gray-400">;
            <div className="flex items-center space-x-2">;
              <Phone className="w-4 h-4" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-4 h-4" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
          </div>;
          {/* Right side actions */"}
          <div className="flex items-center space-x-2 "lg": "space-x-4">;
            {/* Search */"}
            <button;
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 "hover": "text-blue-400 transition-colors";
              aria-label="Search";
            >;
              <Search className="w-5 h-5" />;
            </button>;
            {/* Theme toggle */"}
            <button;
              onClick={toggleTheme}
              className="p-2 text-gray-300 "hover": "text-blue-400 transition-colors";
              aria-label="Toggle theme";
            >;
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />"}
            </button>;
            {/* User menu */}
            <div className="relative">;
              <button;
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-400 "hover": "text-cyan-400 "hover":bg-gray-800/50 rounded-md transition-colors duration-200";
                aria-label="User menu";
              >;
                <User className="w-5 h-5" />;
                <span className="hidden "sm":block">Account</span>;
              </button>;
              {/* User dropdown */"}
              {isUserMenuOpen && (;
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">;
                  <Link;
                    to="/dashboard";
                    className="block px-4 py-2 text-sm text-gray-300 "hover": "bg-gray-700 "hover":text-white";
                    onClick={() => setIsUserMenuOpen(false)"}
                  >;
                    Dashboard;
                  </Link>;
                  <Link;
                    to="/login";
                    className="block px-4 py-2 text-sm text-gray-300 "hover": "bg-gray-700 "hover":text-white";
                    onClick={() => setIsUserMenuOpen(false)"}
                  >;
                    Login;
                  </Link>;
                  <Link;
                    to="/contact";
                    className="block px-4 py-2 text-sm text-gray-300 "hover": "bg-gray-700 "hover":text-white";
                    onClick={() => setIsUserMenuOpen(false)"}
                  >;
                    Contact Support;
                  </Link>;
                </div>;
              )}
            </div>;
            {/* Mobile menu button */}
            <button;
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=""lg": "hidden p-2 text-gray-300 "hover":text-blue-400 transition-colors";
              aria-label="Toggle mobile menu";
            >;
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />"}
            </button>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (;
          <div className=""lg": "hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 "sm":px-3 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">;
              {navigationItems.map((item) => (;
                <Link;
                  key={item.name"}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-300 "hover": "text-cyan-400 "hover":bg-gray-800 rounded-md transition-colors duration-200 ${;
                    location.pathname === item.href ? 'text-cyan-400 bg-gray-800' : '';
                  "}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >;
                  {item.name}
                </Link>;
              ))}
              {/* Mobile Contact Info */}
              <div className="border-t border-gray-800 pt-3 mt-3 px-3">;
                <div className="text-sm text-gray-400 space-y-2">;
                  <div className="flex items-center space-x-2">;
                    <Phone className="w-4 h-4" />;
                    <a href=""tel": "+13024640950" className=""hover":text-cyan-400">+1 302 464 0950</a>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Mail className="w-4 h-4" />;
                    <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400">kleber@ziontechgroup.com</a>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        )"}
        {/* Search overlay */}
        {isSearchOpen && (;
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 p-4">;
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">;
              <div className="relative">;
                <input;
                  type="text";
                  placeholder="Search services, solutions, or help...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 "focus": "ring-2 "focus":ring-cyan-500 "focus":border-transparent";
                />;
                <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />;
                <button;
                  type="submit";
                  className="absolute right-2 top-2 bg-cyan-500 "hover":bg-cyan-600 text-white px-4 py-1.5 rounded-md font-semibold transition-colors";
                >;
                  Search;
                </button>;
              </div>;
            </form>;
          </div>;
        )"}
      </div>;
    </header>;
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigation = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Government', href: '/industries/government' },
      ],
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'API Documentation', href: '/api-docs' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

const Header: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Header</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Header;
