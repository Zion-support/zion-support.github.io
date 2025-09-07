"use client";""
import { useState, useEffect, useRef } from "react";""
import Link from "next/link";"
export function Navigation() {const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (;
    <nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
        is_scrolled;"
          ? "bg - black / 90 backdrop - blur - md border - b border - white / 20 shadow - lg";""
          : "bg - black / 80 backdrop - blur - md border - b border - white / 10";"`;
      }`}"
      role="navigation";""
      aria - label="Main navigation";"
    >;
</nav>"
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="flex items - center justify - between h - 16">;"
          <div className="flex items - center">;"
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition - opacity" aria - label="Zion OS Home">;"
"
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify - center">;"
                <span className="text - white font - bold text - sm">Z</span>;"
              </div>;"
              <span className="text - xl font - bold gradient - text">Zion Tech Group</span>;"
            ;
          <div className="hidden lg:flex items - center space - x-8">;"
            <div className="relative group">;"
</div>
              <button;"
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";")
                onMouseEnter={() => setIsServicesOpen (true)}
</button>"
                <svg className="w - 4 h - 4 ml - 1" fill="none" stroke="current_color" view_box="0 0 24 24">;"
</svg>"
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;"
</path>
                </svg>;
              </button>;
                <div;"
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";"
                  <div className="p - 4">;"
                    <div className="grid grid - cols - 2 gap - 4">;"
                      <div>;
                        <h3 className="text - sm font - semibold text - blue - 400 mb - 2">AI & Autonomous</h3>;""
                        <ul className="space - y-1">;"
</ul>"
                          <li><a href="/ai - autonomous - business - manager" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Manager</a></li>;""
                          <li><a href="/ai - autonomous - business - operations" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Operations</a></li>;""
                          <li><a href="/ai - autonomous - code - review" className="text - sm text - gray - 300 hover:text - white block py - 1">Code Review</a></li>;""
                          <li><a href="/ai - autonomous - research - assistant" className="text - sm text - gray - 300 hover:text - white block py - 1">Research Assistant</a></li>;"
                        </ul>;
                      </div>;
                        <h3 className="text - sm font - semibold text - purple - 400 mb - 2">Technology</h3>;""
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py - 1">Quantum Computing</a></li>;""
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py - 1">Cybersecurity</a></li>;""
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py - 1">Enterprise IT</a></li>;""
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py - 1">View All Services</a></li>;"
                </div>)}
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";"
                onMouseEnter={() => setIsCompanyOpen (true)}
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";"
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py - 1">About Us</a></li>;""
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py - 1">Case Studies</a></li>;""
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py - 1">News</a></li>;""
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py - 1">Events</a></li>;""
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py - 1">Contact</a></li>;"
            <a;"
              href="/docs";""
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";"
</a>
            </a>;
              href="/multiverse / launch";""
              href="/admin / os - deploy";""
              href="/admin / instances";""
            <button;
              on_click={() => setIsSearchOpen (!isSearchOpen)}
              <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;"
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;"
            </button>;"
            <Link href="/get - started" className="btn - primary text - sm">;"

          <div className="md:hidden flex items - center space - x-2">;"
              on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
              <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24" aria - hidden="true">;"
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M6 18L18 6M6 6l12 12" />) : ("
</path>)"
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />)}"
          <div className="py - 4 animate - fade - in">;"
            <div className="relative">;"
              <input;"
                type="text";""
                placeholder="Search Zion OS documentation, features, and more...";""
                className="w - full bg - gray - 900 / 50 border border - white / 20 rounded - lg pl - 10 pr - 4 py - 3 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent transition - all duration - 200";"
                auto_focus;
              />;
</input>"
              <svg className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400" fill="none" stroke="current_color" view_box="0 0 24 24">;"
          <div className="lg:hidden animate - fade - in">;"
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb - 4">;"
              <div className="border - b border - white / 10 pb - 2">;"
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px - 3">Services</h3>;"
                  href="/ai - autonomous - business - manager";""
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";"
                  on_click={() => setIsMobileMenuOpen (false)}
                  href="/ai - autonomous - business - operations";""
                  href="/quantum - services";""
                  href="/services";""
                <h3 className="text - sm font - semibold text - purple - 400 mb - 2 px - 3">Company</h3>;"
                  href="/about";""
                  href="/contact";""
              </a>;"
              <button className="w - full mt - 4 btn - primary text - sm">;"
</button>
      </div>;"`;