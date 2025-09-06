'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Header() {const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [;
    { name: 'Home', href: '/' }
    { name: 'About', href: '/about' }
    { name: 'Services', href: '/services' }
    { name: 'AI Solutions', href: '/ai-solutions' }
    { name: 'Quantum Computing', href: '/quantum-computing' }
    { name: 'Research & Development', href: '/research-development' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'News', href: '/news' }
    { name: 'Contact', href: '/contact' }];
  const services = [;
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' }
    { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' }
    { name: 'Enterprise Security', href: '/ai-powered-enterprise-security' }
    { name: 'Business Intelligence', href: '/ai-business-intelligence' }
    { name: 'Content Generation', href: '/ai-content-generator' }
    { name: 'Research Automation', href: '/ai-autonomous-research-assistant' }];
  return (;
    <header;
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled;
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl';
          : 'bg-black/60 backdrop-blur-md border-b border-white/10';
      }`}
role=&quot;banner&quot;
      aria-label=&quot;Main navigation&quot;
'use client',;
import { useState, useEffect } from 'react',;
import Link from 'next/link',;
export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false),;
  const [isScrolled, setIsScrolled] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
    },;
    window.addEventListener('scroll', handleScroll),;
    return () => window.removeEventListener('scroll', handleScroll);
  }, []),;

  const navigation = [;
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai - solutions' },
    { name: 'Quantum Computing', href: '/quantum - computing' },
    { name: 'Research & Development', href: '/research - development' },
    { name: 'Case Studies', href: '/case - studies' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }],
  const services = [;
    { name: 'AI Autonomous Systems', href: '/ai - autonomous - systems' },
    { name: 'Quantum Neural Networks', href: '/quantum - neural - network - platform' },
    { name: 'Enterprise Security', href: '/ai - powered - enterprise - security' },
    { name: 'Business Intelligence', href: '/ai - business - intelligence' },
    { name: 'Content Generation', href: '/ai - content - generator' }
    { name: 'Research Automation', href: '/ai - autonomous - research - assistant' }];
  return (
    <header;
      className={`sticky top - 0 z - 50 transition - all duration - 300 ${
        is_scrolled;
          ? 'bg - black / 90 backdrop - blur - xl border - b border - white / 20 shadow - 2xl';
          : 'bg - black / 60 backdrop - blur - md border - b border - white / 10';
      }`}


    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}

          <div className=&quot;flex items - center & quot;>;
            <Link href=&quot;/&quot; className=&quot;flex items - center space - x-3 group & quot; aria - label=&quot;Zion Tech Group Home & quot;>;
              <div className=&quot;w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - blue - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300 shadow - lg & quot;>;
                <span className=&quot;text - white font - bold text - xl & quot;>Z</span>;
              </div>;
              <span className=&quot;text - xl font - bold gradient - text text - shadow & quot;>;
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className=&quot;hidden lg:flex items - center space - x-8 & quot; role=&quot;navigation & quot; aria - label=&quot;Main menu & quot;>;
            {navigation.map ((item) => (
              <Link;
                key={item.name}
                href={item.href}
                className=&quot;text - gray - 300 hover:text - white transition - all duration - 200 font - medium relative group & quot;
                aria - label={`Navigate to ${item.name} page`}
              >;
                {item.name}


                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
=======
=======
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>


              </Link>
            ))}
;
            {/* Services Dropdown */}


              <button 
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium flex items-center group"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg className=&quot;ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; aria-hidden=&quot;true&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 9l-7 7-7-7&quot; />
                </svg>
              </button>
              <div className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0&quot;>
                <div className=&quot;p-6 grid grid-cols-1 gap-3&quot;>
                  {services.map((service) => (
                    <Link
=======
<span className=&quot;absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - purple - 400 to - blue - 400 transition - all duration - 300 group - hover:w - full & quot;></span>;
              </Link>))}
            {/* Services Dropdown */}
<div className=&quot;relative group & quot;>;
              <button;
                className=&quot;text - gray - 300 hover:text - white transition - all duration - 200 font - medium flex items - center group & quot;
                aria - expanded=&quot;false & quot;
                aria - haspopup=&quot;true & quot;
                aria - label=&quot;Services menu & quot;
              >;
                Services;
                <svg className=&quot;ml - 1 w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot; aria - hidden=&quot;true & quot;>;
                  <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M19 9l - 7 7 - 7-7 & quot; />;
                </svg>;
              </button>;
              <div className=&quot;absolute top - full left - 0 mt - 2 w - 80 bg - black / 95 backdrop - blur - xl border border - white / 20 rounded - xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0 & quot;>;
                <div className=&quot;p - 6 grid grid - cols - 1 gap - 3&quot;>;
                  {services.map ((service) => (
                    <Link;
                      key={service.name}
                      href={service.href}
                      className=&quot;text - gray - 300 hover:text - white p - 3 rounded - lg hover:bg - white / 10 transition - all duration - 200 group / item & quot;
                      aria - label={`Navigate to ${service.name} service page`}
                    >;
                      <div className=&quot;flex items - center justify - between & quot;>;
                        <span>{service.name}</span>;
                        <svg className=&quot;w - 4 h - 4 opacity - 0 group - hover / item:opacity - 100 transition - opacity duration - 200 & quot; fill=&quot;none & quot; stroke=&quot;current_color & quot; view_box=&quot;0 0 24 24 & quot;>;
                          <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M9 5l7 7 - 7 7 & quot; />;
                        </svg>;
                      </div>;
                    </Link>))}
=======
role=&quot;banner&quot;
      aria-label=&quot;Main navigation&quot;
=======
'use client',;
import { useState, useEffect } from 'react',;
import Link from 'next/link',;
export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false),;
  const [isScrolled, setIsScrolled] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
    },;
    window.addEventListener('scroll', handleScroll),;
    return () => window.removeEventListener('scroll', handleScroll);
  }, []),;
  const navigation = [;
    { name: 'Home', href: '/' },;
    { name: 'About', href: '/about' },;
    { name: 'Services', href: '/services' },;
    { name: 'AI Solutions', href: '/ai-solutions' },;
    { name: 'Quantum Computing', href: '/quantum-computing' },;
    { name: 'Research & Development', href: '/research-development' },;
    { name: 'Case Studies', href: '/case-studies' },;
    { name: 'News', href: '/news' },;
    { name: 'Contact', href: '/contact' }],;
  const services = [;
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },;
    { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },;
    { name: 'Enterprise Security', href: '/ai-powered-enterprise-security' },;
    { name: 'Business Intelligence', href: '/ai-business-intelligence' },;
    { name: 'Content Generation', href: '/ai-content-generator' };
    { name: 'Research Automation', href: '/ai-autonomous-research-assistant' }];
  return (;
    <header;
      className={`sticky top-0 z-50 transition-all duration-300 ${;
        isScrolled;
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl';
          : 'bg-black/60 backdrop-blur-md border-b border-white/10';
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text text-shadow">
                Zion Tech Group
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium relative group"
                aria-label={`Navigate to ${item.name} page`}
              >;
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
=======
=======
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
;
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium flex items-center group"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group/item"
                      aria-label={`Navigate to ${service.name} service page`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>;
              </div>;
            </div>;
          </nav>;
          {/* CTA Button */}
<div className=&quot;hidden lg:flex items-center space-x-4&quot;>
          <div className="hidden lg:flex items-center space-x-4">


            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <button;
            onClick={() => setIsMenuOpen(!isMenuOpen)}
className=&quot;lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200&quot;
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"

            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {isMenuOpen ? (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M6 18L18 6M6 6l12 12 & quot; />) : (
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M4 6h16M4 12h16M4 18h16 & quot; />)}
=======
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <button;
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>;
          </button>;
        </div>;
        {/* Mobile Navigation */}
{isMenuOpen && (
          <div
            id=&quot;mobile-menu&quot;
            className=&quot;lg:hidden border-t border-white/10 animate-fade-in&quot;
            role=&quot;navigation&quot;
            aria-label=&quot;Mobile menu&quot;
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden border-t border-white/10 animate-fade-in"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className=&quot;px-2 pt-2 pb-3 space-y-1&quot;>
              {navigation.map((item) => (
                <Link
=======
          <div;
            id=&quot;mobile - menu & quot;
            className=&quot;lg:hidden border - t border - white / 10 animate - fade - in & quot;
            role=&quot;navigation & quot;
            aria - label=&quot;Mobile menu & quot;
          >;
            <div className=&quot;px - 2 pt - 2 pb - 3 space - y-1 & quot;>;
              {navigation.map ((item) => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className=&quot;block px - 3 py - 3 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                  on_click={() => setIsMenuOpen (false)}
                  aria - label={`Navigate to ${item.name} page`}
                >;
                  {item.name}

                </Link>;
              ))}
<div className=&quot;px-3 py-2&quot;>
                <div className=&quot;text-gray-400 text-sm font-medium mb-2&quot;>Services</div>
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Services</div>


                {services.map((service) => (
                  <Link
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    key={service.name}
                    href={service.href}
                    className=&quot;block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 5 rounded - lg transition - all duration - 200 & quot;
                    on_click={() => setIsMenuOpen (false)}
                    aria - label={`Navigate to ${service.name} service page`}
                  >;
                    {service.name}

                  </Link>;
                ))}
</div>
              <div className=&quot;pt-4&quot;>
              </div>
              <div className="pt-4">


                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </div>;
    </header>);
}