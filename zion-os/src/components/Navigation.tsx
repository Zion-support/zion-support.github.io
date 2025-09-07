<<<<<<< HEAD
<<<<<<< HEAD
=======

;
"use client",import { useState, useEffect, useRef } from "react",import Link from "next/link",export function Navigation() {const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),const [isSearchOpen, setIsSearchOpen]  = useState(false),const [isServicesOpen, setIsServicesOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)return (const [isServicesOpen, setIsServicesOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)return (const [isServicesOpen, setIsServicesOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)return (<nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export function Navigation() {const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (;  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (;
    <nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
        is_scrolled;
          ? "bg - black / 90 backdrop - blur - md border - b border - white / 20 shadow - lg";
          : "bg - black / 80 backdrop - blur - md border - b border - white / 10";
      }`}
      role="navigation";
      aria - label="Main navigation";
    >;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex items - center justify - between h - 16">;
          {/* Logo */}
          <div className="flex items - center">;
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition - opacity" aria - label="Zion OS Home">;
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
                <span className="text - white font - bold text - sm">Z</span>;
              </div>;
              <span className="text - xl font - bold gradient - text">Zion Tech Group</span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";
=======
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="flex items - center justify - between h-16">;
=======
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex items - center justify - between h - 16">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          {/* Logo */}
          <div className="flex items - center">;
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition - opacity" aria - label="Zion OS Home">;
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
                <span className="text - white font - bold text - sm">Z</span>;
              </div>;
              <span className="text - xl font - bold gradient - text">Zion Tech Group</span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;
<<<<<<< HEAD
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items-center";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="flex items - center justify - between h-16">;
          {/* Logo */}
          <div className="flex items - center">;
            <Link href="/" className="flex items - center space - x-2 hover:opacity - 80 transition - opacity" aria - label="Zion OS Home">;
              <div className="w - 8 h - 8 bg - gradient - to - br from - blue - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
                <span className="text - white font - bold text - sm">Z</span>;
              </div>;
              <span className="text - xl font - bold gradient - text">Zion Tech Group</span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                onMouseEnter={() => setIsServicesOpen (true)}
                onMouseLeave={() => setIsServicesOpen (false)}
              >;
                Services;
<<<<<<< HEAD
<<<<<<< HEAD
                <svg className="w - 4 h - 4 ml - 1" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;
=======
=======
                <svg className="w - 4 h - 4 ml - 1" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                <svg className="w - 4 h - 4 ml-1" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l - 7 7 - 7-7" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </svg>;
              </button>;
<<<<<<< HEAD
              {isServicesOpen && (
                <div;
<<<<<<< HEAD
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  <div className="p - 4">;
                    <div className="grid grid - cols - 2 gap - 4">;
                      <div>;
                        <h3 className="text - sm font - semibold text - blue - 400 mb - 2">AI & Autonomous</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/ai - autonomous - business - manager" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Manager</a></li>;
                          <li><a href="/ai - autonomous - business - operations" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Operations</a></li>;
                          <li><a href="/ai - autonomous - code - review" className="text - sm text - gray - 300 hover:text - white block py - 1">Code Review</a></li>;
                          <li><a href="/ai - autonomous - research - assistant" className="text - sm text - gray - 300 hover:text - white block py - 1">Research Assistant</a></li>;
                        </ul>;
                      </div>;
                      <div>;
                        <h3 className="text - sm font - semibold text - purple - 400 mb - 2">Technology</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py - 1">Quantum Computing</a></li>;
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py - 1">Cybersecurity</a></li>;
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py - 1">Enterprise IT</a></li>;
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py - 1">View All Services</a></li>;
=======
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow-xl";
=======
              {isServicesOpen && (<div;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  <div className="p - 4">;
                    <div className="grid grid - cols - 2 gap - 4">;
                      <div>;
                        <h3 className="text - sm font - semibold text - blue - 400 mb - 2">AI & Autonomous</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/ai - autonomous - business - manager" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Manager</a></li>;
                          <li><a href="/ai - autonomous - business - operations" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Operations</a></li>;
                          <li><a href="/ai - autonomous - code - review" className="text - sm text - gray - 300 hover:text - white block py - 1">Code Review</a></li>;
                          <li><a href="/ai - autonomous - research - assistant" className="text - sm text - gray - 300 hover:text - white block py - 1">Research Assistant</a></li>;
                        </ul>;
                      </div>;
                      <div>;
<<<<<<< HEAD
                        <h3 className="text - sm font - semibold text - purple - 400 mb-2">Technology</h3>;
                        <ul className="space-y-1">;
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py-1">Quantum Computing</a></li>;
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py-1">Cybersecurity</a></li>;
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py-1">Enterprise IT</a></li>;
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py-1">View All Services</a></li>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
                        <h3 className="text - sm font - semibold text - purple - 400 mb - 2">Technology</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py - 1">Quantum Computing</a></li>;
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py - 1">Cybersecurity</a></li>;
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py - 1">Enterprise IT</a></li>;
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py - 1">View All Services</a></li>;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow-xl";
                </svg>;
              </button>;
              {isServicesOpen && (
                <div;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  <div className="p - 4">;
                    <div className="grid grid - cols - 2 gap - 4">;
                      <div>;
                        <h3 className="text - sm font - semibold text - blue - 400 mb - 2">AI & Autonomous</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/ai - autonomous - business - manager" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Manager</a></li>;
                          <li><a href="/ai - autonomous - business - operations" className="text - sm text - gray - 300 hover:text - white block py - 1">Business Operations</a></li>;
                          <li><a href="/ai - autonomous - code - review" className="text - sm text - gray - 300 hover:text - white block py - 1">Code Review</a></li>;
                          <li><a href="/ai - autonomous - research - assistant" className="text - sm text - gray - 300 hover:text - white block py - 1">Research Assistant</a></li>;
                        </ul>;
                      </div>;
                      <div>;
                        <h3 className="text - sm font - semibold text - purple - 400 mb - 2">Technology</h3>;
                        <ul className="space - y-1">;
                          <li><a href="/quantum - services" className="text - sm text - gray - 300 hover:text - white block py - 1">Quantum Computing</a></li>;
                          <li><a href="/cybersecurity" className="text - sm text - gray - 300 hover:text - white block py - 1">Cybersecurity</a></li>;
                          <li><a href="/enterprise - it" className="text - sm text - gray - 300 hover:text - white block py - 1">Enterprise IT</a></li>;
                          <li><a href="/services" className="text - sm text - gray - 300 hover:text - white block py - 1">View All Services</a></li>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                        </ul>;
                      </div>;
                    </div>;
                  </div>;
                </div>)}
            </div>;
            {/* Company Dropdown */}
            <div className="relative group">;
              <button;
<<<<<<< HEAD
<<<<<<< HEAD
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";
=======
=======
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items - center";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium flex items-center";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                onMouseEnter={() => setIsCompanyOpen (true)}
                onMouseLeave={() => setIsCompanyOpen (false)}
              >;
                Company;
<<<<<<< HEAD
<<<<<<< HEAD
                <svg className="w - 4 h - 4 ml - 1" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;
=======
=======
                <svg className="w - 4 h - 4 ml - 1" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19 9l - 7 7 - 7-7" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                <svg className="w - 4 h - 4 ml-1" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l - 7 7 - 7-7" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </svg>;
              </button>;
<<<<<<< HEAD
              {isCompanyOpen && (
                <div;
<<<<<<< HEAD
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsCompanyOpen (true)}
                  onMouseLeave={() => setIsCompanyOpen (false)}
                >;
                  <div className="p - 4">;
                    <ul className="space - y-1">;
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py - 1">About Us</a></li>;
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py - 1">Case Studies</a></li>;
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py - 1">News</a></li>;
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py - 1">Events</a></li>;
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py - 1">Contact</a></li>;
=======
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow-xl";
                  onMouseEnter={() => setIsCompanyOpen (true)}
                  onMouseLeave={() => setIsCompanyOpen (false)}
                >;
                  <div className="p-4">;
                    <ul className="space-y-1">;
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py-1">About Us</a></li>;
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py-1">Case Studies</a></li>;
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py-1">News</a></li>;
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py-1">Events</a></li>;
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py-1">Contact</a></li>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
              {isCompanyOpen && (<div;
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsCompanyOpen (true)}
                  onMouseLeave={() => setIsCompanyOpen (false)}
                >;
                  <div className="p - 4">;
                    <ul className="space - y-1">;
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py - 1">About Us</a></li>;
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py - 1">Case Studies</a></li>;
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py - 1">News</a></li>;
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py - 1">Events</a></li>;
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py - 1">Contact</a></li>;
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow-xl";
                </svg>;
              </button>;
              {isCompanyOpen && (
                <div;
                  className="absolute top - full left - 0 mt - 2 w - 64 bg - black / 90 backdrop - blur - md border border - white / 10 rounded - lg shadow - xl";
                  onMouseEnter={() => setIsCompanyOpen (true)}
                  onMouseLeave={() => setIsCompanyOpen (false)}
                >;
                  <div className="p - 4">;
                    <ul className="space - y-1">;
                      <li><a href="/about" className="text - sm text - gray - 300 hover:text - white block py - 1">About Us</a></li>;
                      <li><a href="/case - studies" className="text - sm text - gray - 300 hover:text - white block py - 1">Case Studies</a></li>;
                      <li><a href="/news" className="text - sm text - gray - 300 hover:text - white block py - 1">News</a></li>;
                      <li><a href="/events" className="text - sm text - gray - 300 hover:text - white block py - 1">Events</a></li>;
                      <li><a href="/contact" className="text - sm text - gray - 300 hover:text - white block py - 1">Contact</a></li>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                    </ul>;
                  </div>;
                </div>)}
            </div>;
            <a;
              href="/docs";
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
=======
=======
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font-medium";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              Documentation;
            </a>;
            <a;
              href="/multiverse / launch";
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
=======
=======
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font-medium";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              Launch;
            </a>;
            <a;
              href="/admin / os - deploy";
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
=======
=======
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font-medium";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              Deploy;
            </a>;
            <a;
              href="/admin / instances";
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
=======
=======
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font-medium";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              Instances;
            </a>;
            <a;
              href="/docs";
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
=======
=======
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white transition - colors duration - 200 font-medium";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              Docs;
            </a>;
            <button;
              on_click={() => setIsSearchOpen (!isSearchOpen)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition - colors";
              aria - label="Search";
            >;
              <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </button>;
            <Link href="/get - started" className="btn - primary text - sm">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition-colors";
              aria - label="Search";
            >;
              <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </button>;
<<<<<<< HEAD
            <Link href="/get - started" className="btn - primary text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <Link href="/get - started" className="btn - primary text - sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div className="md:hidden flex items - center space - x-2">;
            <button;
              on_click={() => setIsSearchOpen (!isSearchOpen)}
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition - colors";
              aria - label="Search";
            >;
              <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div className="md:hidden flex items - center space-x-2">;
            <button;
              on_click={() => setIsSearchOpen (!isSearchOpen)}
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition - colors";
              aria - label="Search";
            >;
<<<<<<< HEAD
              <svg className="w - 5 h-5" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
              <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              </svg>;
            </button>;
            <button;
              on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition - colors";
              aria - label="Toggle mobile menu";
              aria - expanded={isMobileMenuOpen}
            >;
              <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24" aria - hidden="true">;
<<<<<<< HEAD
                {isMobileMenuOpen ? (
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M6 18L18 6M6 6l12 12" />) : (
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />)}
=======
=======
                {isMobileMenuOpen ? (<path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M6 18L18 6M6 6l12 12" />) : (<path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="text - gray - 300 hover:text - white p - 2 rounded - md transition-colors";
              aria - label="Toggle mobile menu";
              aria - expanded={isMobileMenuOpen}
            >;
              <svg className="w - 6 h-6" fill="none" stroke="current_color" viewBox="0 0 24 24" aria - hidden="true">;
                {isMobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
              aria - label="Toggle mobile menu";
              aria - expanded={isMobileMenuOpen}
            >;
              <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24" aria - hidden="true">;
                {isMobileMenuOpen ? (
<<<<<<< HEAD
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M6 18L18 6M6 6l12 12" />) : (
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              </svg>;
            </button>;
          </div>;
        </div>;
        {/* Search Bar */}
<<<<<<< HEAD
        {isSearchOpen && (
<<<<<<< HEAD
          <div className="py - 4 animate - fade - in">;
=======
          <div className="py - 4 animate - fade-in">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
        {isSearchOpen && (<div className="py - 4 animate - fade - in">;
          <div className="py - 4 animate - fade-in">;
        {isSearchOpen && (
          <div className="py - 4 animate - fade - in">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            <div className="relative">;
              <input;
                type="text";
                placeholder="Search Zion OS documentation, features, and more...";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="w - full bg - gray - 900 / 50 border border - white / 20 rounded - lg pl - 10 pr - 4 py - 3 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent transition - all duration - 200";
                auto_focus;
              />;
              <svg className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
<<<<<<< HEAD
=======
                className="w - full bg - gray - 900 / 50 border border - white / 20 rounded - lg pl - 10 pr - 4 py - 3 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent transition - all duration-200";
                auto_focus;
              />;
              <svg className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray-400" fill="none" stroke="current_color" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </svg>;
            </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden animate - fade - in">;
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb - 4">;
              {/* Services Section */}
              <div className="border - b border - white / 10 pb - 2">;
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px - 3">Services</h3>;
                <a;
                  href="/ai - autonomous - business - manager";
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
          <div className="lg:hidden animate - fade-in">;
=======
              </svg>;
            </div>;</div>)}{/* Mobile Navigation */}
        {isMobileMenuOpen && (<div className="lg:hidden animate - fade - in">;
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb - 4">;
              {/* Services Section */}
              <div className="border - b border - white / 10 pb - 2">;
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px - 3">Services</h3>;
                <a;
                  href="/ai - autonomous - business - manager";
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
                className="w - full bg - gray - 900 / 50 border border - white / 20 rounded - lg pl - 10 pr - 4 py - 3 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent transition - all duration-200";
                auto_focus;
              />;
              <svg className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" />;
              </svg>;
            </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (<div className="lg:hidden animate - fade-in">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb-4">;
        {isMobileMenuOpen && (
          <div className="lg:hidden animate - fade - in">;
            <div className="px - 2 pt - 2 pb - 3 space - y-1 bg - black / 90 rounded - lg mt - 2 mb - 4">;
              {/* Services Section */}
              <div className="border - b border - white / 10 pb - 2">;
                <h3 className="text - sm font - semibold text - blue - 400 mb - 2 px - 3">Services</h3>;
                <a;
                  href="/ai - autonomous - business - manager";
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  AI Business Manager;
                </a>;
                <a;
                  href="/ai - autonomous - business - operations";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Business Operations;
                </a>;
                <a;
                  href="/quantum - services";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Quantum Computing;
                </a>;
                <a;
                  href="/services";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  View All Services;
                </a>;
              </div>;
              {/* Company Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              <div className="border - b border - white / 10 pb - 2">;
                <h3 className="text - sm font - semibold text - purple - 400 mb - 2 px - 3">Company</h3>;
                <a;
                  href="/about";
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              <div className="border - b border - white / 10 pb-2">;
                <h3 className="text - sm font - semibold text - purple - 400 mb - 2 px-3">Company</h3>;
                <a;
                  href="/about";
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  About Us;
                </a>;
                <a;
                  href="/contact";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  on_click={() => setIsMobileMenuOpen (false)}
                >;
                  Contact;
                </a>;
              </div>;
              {/* Other Links */}
              <a;
                href="/docs";
<<<<<<< HEAD
<<<<<<< HEAD
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                on_click={() => setIsMobileMenuOpen (false)}
              >;
                Documentation;
              </a>;
              <a;
                href="/multiverse / launch";
<<<<<<< HEAD
<<<<<<< HEAD
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
=======
=======
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition - colors";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="block px - 3 py - 2 text - gray - 300 hover:text - white hover:bg - white / 10 rounded - md transition-colors";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                on_click={() => setIsMobileMenuOpen (false)}
              >;
                Launch;
              </a>;
<<<<<<< HEAD
<<<<<<< HEAD
              <button className="w - full mt - 4 btn - primary text - sm">;
=======
=======
              <button className="w - full mt - 4 btn - primary text - sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              <button className="w - full mt - 4 btn - primary text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Get Started;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;</nav>;
  )}