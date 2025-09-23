import React from 'react';

export function Header() {
  return (
    <header className="border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="font-bold text-xl gradient-text">Zion OS</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-white/80">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/multiverse/launch" className="hover:text-white">Launch</a>
          <a href="/admin/instances" className="hover:text-white">Instances</a>
          <a href="/admin/os-deploy" className="hover:text-white">Admin</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
