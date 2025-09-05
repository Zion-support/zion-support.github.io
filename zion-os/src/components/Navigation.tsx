"use client&quot;;

import { useState, useEffect, useRef } from &quot;react&quot;;
import Link from &quot;next/link";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/20 shadow-lg&quot; 
          : &quot;bg-black/80 backdrop-blur-md border-b border-white/10&quot;
      }`}
      role=&quot;navigation&quot;
      aria-label=&quot;Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity&quot; aria-label=&quot;Zion OS Home">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4 ml-1&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-blue-400 mb-2">AI & Autonomous</h3>
                        <ul className="space-y-1">
                          <li><Link href="/ai-autonomous-business-manager" className="text-sm text-gray-300 hover:text-white block py-1">Business Manager</Link></li>
                          <li><Link href="/ai-autonomous-business-operations" className="text-sm text-gray-300 hover:text-white block py-1">Business Operations</Link></li>
                          <li><Link href="/ai-autonomous-code-review" className="text-sm text-gray-300 hover:text-white block py-1">Code Review</Link></li>
                          <li><Link href="/ai-autonomous-research-assistant" className="text-sm text-gray-300 hover:text-white block py-1">Research Assistant</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-purple-400 mb-2">Technology</h3>
                        <ul className="space-y-1">
                          <li><Link href="/quantum-services" className="text-sm text-gray-300 hover:text-white block py-1">Quantum Computing</Link></li>
                          <li><Link href="/cybersecurity" className="text-sm text-gray-300 hover:text-white block py-1">Cybersecurity</Link></li>
                          <li><Link href="/enterprise-it" className="text-sm text-gray-300 hover:text-white block py-1">Enterprise IT</Link></li>
                          <li><Link href="/services" className="text-sm text-gray-300 hover:text-white block py-1">View All Services</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                Company
                <svg className="w-4 h-4 ml-1&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCompanyOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  <div className="p-4">
                    <ul className="space-y-1">
                      <li><Link href="/about" className="text-sm text-gray-300 hover:text-white block py-1">About Us</Link></li>
                      <li><Link href="/case-studies" className="text-sm text-gray-300 hover:text-white block py-1">Case Studies</Link></li>
                      <li><Link href="/news" className="text-sm text-gray-300 hover:text-white block py-1">News</Link></li>
                      <li><Link href="/events" className="text-sm text-gray-300 hover:text-white block py-1">Events</Link></li>
                      <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white block py-1">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/docs" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Documentation
            </Link>

            <a 
              href="/multiverse/launch" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Launch
            </Link>
            <a 
              href="/admin/os-deploy" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Deploy
            </Link>
            <a 
              href="/admin/instances" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Instances
            </Link>
            <a 
              href="/docs" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Docs
            </Link>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors&quot;
              aria-label=&quot;Search"
            >
              <svg className="w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors&quot;
              aria-label=&quot;Search"
            >
              <svg className="w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors&quot;
              aria-label=&quot;Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; aria-hidden=&quot;true&quot;>
                {isMobileMenuOpen ? (
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M6 18L18 6M6 6l12 12&quot; />
                ) : (
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 animate-fade-in">
            <div className="relative&quot;>
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search Zion OS documentation, features, and more..."
                className="w-full bg-gray-900/50 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2 mb-4">
              {/* Services Section */}
              <div className="border-b border-white/10 pb-2">
                <h3 className="text-sm font-semibold text-blue-400 mb-2 px-3">Services</h3>
                <a 
                  href="/ai-autonomous-business-manager" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI Business Manager
                </Link>
                <a 
                  href="/ai-autonomous-business-operations" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business Operations
                </Link>
                <a 
                  href="/quantum-services" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Quantum Computing
                </Link>
                <a 
                  href="/services" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>

              {/* Company Section */}
              <div className="border-b border-white/10 pb-2">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 px-3">Company</h3>
                <a 
                  href="/about" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <a 
                  href="/contact" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Other Links */}
              <a 
                href="/docs" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <a 
                href="/multiverse/launch" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Launch
              </Link>
              <button className="w-full mt-4 btn-primary text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}