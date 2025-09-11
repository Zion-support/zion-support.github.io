>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/20 shadow-lg' 
        : 'bg-black/60 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zion OS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/multiverse/launch" 
              className="text-gray-300 hover:text-white transition-all duration-200 font-medium relative group"
            >
              Launch
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/admin/os-deploy" 
              className="text-gray-300 hover:text-white transition-all duration-200 font-medium relative group"
            >
              Deploy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/admin/instances" 
              className="text-gray-300 hover:text-white transition-all duration-200 font-medium relative group"
            >
              Instances
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/docs" 
              className="text-gray-300 hover:text-white transition-all duration-200 font-medium relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="btn-primary text-sm transform hover:scale-105 transition-all duration-300">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16" />
                  </svg>
                </span>
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
                  </svg>
                </span>
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Zion OS documentation, features, and more..."
                className="w-full bg-gray-900/50 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2 mb-4 border border-white/10">
            <a 
              href="/multiverse/launch" 
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 transform hover:translate-x-2"
              onClick={closeMobileMenu}
            >
              🚀 Launch
            </a>
            <a 
              href="/admin/os-deploy" 
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 transform hover:translate-x-2"
              onClick={closeMobileMenu}
            >
              ⚡ Deploy
            </a>
            <a 
              href="/admin/instances" 
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 transform hover:translate-x-2"
              onClick={closeMobileMenu}
            >
              📊 Instances
            </a>
            <a 
              href="/docs" 
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 transform hover:translate-x-2"
              onClick={closeMobileMenu}
            >
              📚 Docs
            </a>
            <div className="pt-4 border-t border-white/10">
              <button className="w-full btn-primary text-sm transform hover:scale-105 transition-all duration-300">
                🚀 Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
=======
"use client",;
import { useState, useEffect, useRef } from "react",;
import Link from "next/link",;
export function Navigation() {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),;
  const [isSearchOpen, setIsSearchOpen] = useState(false),;


  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (;

;

=======
>>>>>>> main
}