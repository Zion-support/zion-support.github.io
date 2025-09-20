import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome to Zion AI
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, machine learning services, and innovative technology solutions to transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded">
              Explore Services
            </a>
            
            <a href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded">
              Visit Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}