
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Innovative Micro SaaS, IT Services, and AI Solutions for the Future
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="inline-block border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
