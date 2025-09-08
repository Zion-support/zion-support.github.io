import React from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-zion-slate-light hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-zion-slate-light hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-zion-slate-light hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};