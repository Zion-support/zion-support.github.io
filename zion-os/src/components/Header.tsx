"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-xl">Zion OS</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/multiverse/launch" className="text-white/80 hover:text-white">Launch</Link>
            <Link href="/admin/instances" className="text-white/80 hover:text-white">Instances</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

