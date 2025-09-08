"use client",;
import { useState, useEffect, useRef } from "react",;
import Link from "next/link",;
export function Navigation() {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),;
  const [isSearchOpen, setIsSearchOpen] = useState(false),;

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (;

"use client",
import { useState, useEffect, useRef  } from './react';,
import Link from './next / link';,
export /**
 * Navigation - Function description
 */
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),
  const [isSearchOpen, setIsSearchOpen] = useState (false),
  const [isServicesOpen, setIsServicesOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  return (

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export function Navigation() {const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

"use client",;
import { useState, useEffect, useRef } from "react",;
import Link from "next/link",;
export function Navigation() {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),;
  const [isSearchOpen, setIsSearchOpen] = useState(false),;

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (;  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (;

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (;

    <nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${}
        is_scrolled;
          ? "bg - black / 90 backdrop - blur - md border - b border - white / 20 shadow - lg";"
          : "bg - black / 80 backdrop - blur - md border - b border - white / 10";`
      }`}"
      role="navigation";"
      aria - label="Main navigation";

          {/* Logo */}
          <div className="flex items-center">;
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition-opacity" aria - label="Zion OS Home">;
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify-center">;
                <span className="text - white font - bold text-sm">Z</span>;
              </div>;
              <span className="text - xl font - bold gradient-text">Zion Tech Group</span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space-x-8">;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;

                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";

          {/* Logo */}
          <div className="flex items-center">;
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition-opacity" aria - label="Zion OS Home">;
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify-center">;
                <span className="text - white font - bold text-sm">Z</span>;
              </div>;
              <span className="text - xl font - bold gradient-text">Zion Tech Group</span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space-x-8">;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;

                onMouseEnter={() => setIsServicesOpen (true)}
                onMouseLeave={() => setIsServicesOpen (false)}
              >;

                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;

                </svg>;
              </button>;
              {isServicesOpen && (

                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";

                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}

                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py - 1">View All Services</a></li>;

                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  <div className="p-4">;
                    <div className="grid grid - cols - 2 gap-4">;
                      <div>;
                        <h3 className="text - sm font - semibold text - blue - 400 mb-2">AI & Autonomous</h3>;
                        <ul className="space-y-1">;
                          <li><a href="/ai - autonomous - business - manager" className="text - sm text - gray - 300 hover:text - white block py-1">Business Manager</a></li>;
                          <li><a href="/ai - autonomous - business - operations" className="text - sm text - gray - 300 hover:text - white block py-1">Business Operations</a></li>;
                          <li><a href="/ai - autonomous - code - review" className="text - sm text - gray - 300 hover:text - white block py-1">Code Review</a></li>;
                          <li><a href="/ai - autonomous - research - assistant" className="text - sm text - gray - 300 hover:text - white block py-1">Research Assistant</a></li>;
                        </ul>;
                      </div>;
                      <div>;

                        <h3 className="text - sm font - semibold text - purple - 400 mb-2">Technology</h3>;
                        <ul className="space-y-1">;
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py-1">Quantum Computing</a></li>;
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py-1">Cybersecurity</a></li>;
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py-1">Enterprise IT</a></li>;
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py-1">View All Services</a></li>;

                        </ul>;
                      </div>;
                    </div>;
                  </div>;
                </div>)}
            </div>;
            {/* Company Dropdown */}"
            <div className="relative group">;

                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";

                onMouseEnter={() => setIsCompanyOpen (true)}
                onMouseLeave={() => setIsCompanyOpen (false)}
              >;

                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;

                </svg>;
              </button>;
              {isCompanyOpen && (

                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsCompanyOpen (true)}
                  onMouseLeave={() => setIsCompanyOpen (false)}
                >;"
                  <div className="p - 4">;"
                    <ul className="space - y-1">;"
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py - 1">About Us</a></li>;"
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py - 1">Case Studies</a></li>;"
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py - 1">News</a></li>;"
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py - 1">Events</a></li>;"
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py - 1">Contact</a></li>;

                  <div className="p-4">;
                    <ul className="space-y-1">;
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py-1">About Us</a></li>;
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py-1">Case Studies</a></li>;
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py-1">News</a></li>;
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py-1">Events</a></li>;
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py-1">Contact</a></li>;

                    </ul>;
                  </div>;
                </div>)}
            </div>;

              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";

            >;
              Documentation;
            </a>;

              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";

            >;
              Launch;
            </a>;

              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";

            >;
              Deploy;
            </a>;

              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";

            >;
              Instances;
            </a>;

              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";

            >;
              Docs;
            </a>;
            <button;

              aria - label="Search";
            >;
              <svg className="w - 5 h-5" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </button>;

            <Link href="/get - started" className="btn - primary text - sm">;

              aria - label="Search";
            >;
              <svg className="w - 5 h-5" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </button>;

              Get Started;
            </Link>;
          </div>;

          <div className="md:hidden flex items - center space - x-2">;

            <button;

                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;

            <button;
              on_click={() => setIsSearchOpen (!isSearchOpen)}
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition-colors";
              aria - label="Search";
            >;

              </svg>;
            </button>;
            <button;

              aria - label="Toggle mobile menu";
              aria - expanded={isMobileMenuOpen}
            >;
              <svg className="w - 6 h-6" fill="none" stroke="current_color" viewBox="0 0 24 24" aria - hidden="true">;
                {isMobileMenuOpen ? (

                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />)}

              aria - label="Toggle mobile menu";
              aria - expanded={isMobileMenuOpen}
            >;
              <svg className="w - 6 h-6" fill="none" stroke="current_color" viewBox="0 0 24 24" aria - hidden="true">;
                {isMobileMenuOpen ? (

              </svg>;
            </button>;
          </div>;
        </div>;
        {/* Search Bar */}

            <div className="relative">;
              <input;
                type="text";
                placeholder="Search Zion OS documentation, features, and more...";

                className="w - full bg - gray - 900 / 50 border border - white / 20 rounded - lg pl - 10 pr - 4 py - 3 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent transition - all duration - 200";

                auto_focus;

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate - fade-in">;
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb-4">;
              {/* Services Section */}
              <div className="border - b border - white / 10 pb-2">;
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px-3">Services</h3>;
                <a;
                  href="/ai - autonomous - business - manager";

                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                auto_focus;
              />;
              <svg className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray-400" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </div>;

          </div>)}

;

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate - fade-in">;
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb-4">;
              {/* Services Section */}
              <div className="border - b border - white / 10 pb-2">;
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px-3">Services</h3>;
                <a;
                  href="/ai - autonomous - business - manager";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  AI Business Manager;
                </a>;

                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Business Operations;
                </a>;

                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Quantum Computing;
                </a>;

                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  View All Services;
                </a>;
              </div>;

                <h3 className="text - sm font - semibold text - purple - 400 mb - 2 px - 3">Company</h3>;
                <a;"
                  href="/about";"
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  About Us;
                </a>;

                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Contact;
                </a>;
              </div>;
              {/* Other Links */}

                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                on_click={() => setIsMobileMenuOpen (false)}
              >;
                Documentation;
              </a>;

                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";

                on_click={() => setIsMobileMenuOpen (false)}
              >;
                Launch;

              <button className="w - full mt - 4 btn - primary text - sm">;

                Get Started;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;