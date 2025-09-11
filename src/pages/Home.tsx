import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Services</h3>
            <p className="text-gray-300">Transform your business with cutting-edge AI solutions.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-300">Protect your digital assets with advanced security solutions.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-300">Scale your operations with robust cloud solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;