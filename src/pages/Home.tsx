import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading the future with cutting-edge AI, quantum computing, and cybersecurity solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions for modern businesses.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300">
                Revolutionary quantum computing technologies for the future.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive cybersecurity solutions to protect your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;