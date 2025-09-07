<<<<<<< HEAD:app/components/Header.tsx
'use client'
}
}
}
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href=\"/\" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Zion</span>
              <span className="text-2xl font-bold text-gray-900 ml-1">Tech</span>
=======
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=\"bg-white shadow-lg sticky top-0 z-50\" />"
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />"
        <div className=\"flex justify-between items-center h-16\" />"
          {/* Logo */}
          <div className=\"flex-shrink-0\" />"
            <Link href=\"/\" className=\"flex items-center\" />"
              <span className=\"text-2xl font-bold text-blue-600\" />Zion</span>
              <span className=\"text-2xl font-bold text-gray-900 ml-1\" />Tech</span>
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
<<<<<<< HEAD:app/components/Header.tsx
href=\"/\"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link
=======
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home

              </Link>
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/services\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
<<<<<<< HEAD:app/components/Header.tsx
              <Link
=======
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/about\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
<<<<<<< HEAD:app/components/Header.tsx
              <Link
=======
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/contact\"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
<<<<<<< HEAD:app/components/Header.tsx
href=\"/contact\"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
=======
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
<<<<<<< HEAD:app/components/Header.tsx
onClick={toggleMenu}
              className=\"text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600\"
              aria-label=\"Toggle menu\"
             />
              <svg className=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" />
                {isMenuOpen ? (}
                  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M6 18L18 6M6 6l12 12\" />
=======
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
<<<<<<< HEAD:app/components/Header.tsx
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
=======
        {isMenuOpen && ("
          <div className=\"md:hidden\" />"
            <div className=\"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200\" />"
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/\"}
                className=\"text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"}
                onClick={() = /> setIsMenuOpen(false)}
              >
                Home
              </Link>
<<<<<<< HEAD:app/components/Header.tsx
              <Link
=======
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/services\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >
                Services
              </Link>
<<<<<<< HEAD:app/components/Header.tsx
              <Link
=======
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/about\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >
                About
              </Link>
<<<<<<< HEAD:app/components/Header.tsx
              <Link
=======
              <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/contact\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() = /> setIsMenuOpen(false)}
              >
<<<<<<< HEAD:app/components/Header.tsx
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link
=======
                Contact;"
              </Link>
              <div className=\"px-3 py-2\" />"
                <Link;"
>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
href=\"/contact\"
                  className=\"bg-blue-600 text-white block px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center\"
                  onClick={() = /> setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
<<<<<<< HEAD:app/components/Header.tsx
  )
}
=======


>>>>>>> origin/main:temp-disabled/app/components/Header.tsx
