import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Z</span>
            </div>
            <span className="text-white font-semibold">Zion Tech Group</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
            <Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
            <Link href="/contact" className="text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg">Get Started</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
