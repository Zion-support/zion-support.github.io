import React from 'react';
import { Helmet } from 'react-helmet-async';

const InterdimensionalTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Interdimensional Tech Revolution 2026 - Access Parallel Dimensions</title>
        <meta name="description" content="Experience revolutionary interdimensional technology that allows access to parallel dimensions and realities." />
        <meta name="keywords" content="interdimensional technology, parallel dimensions, reality manipulation, quantum travel, multiverse access" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌌 INTERDIMENSIONAL TECH 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Interdimensional Technology Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access parallel dimensions and realities through breakthrough interdimensional technology. 
              Explore infinite possibilities across the multiverse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                Enter New Dimensions
              </button>
              <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Revolutionary Interdimensional Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced interdimensional technology ever created.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-600/20 to-violet-600/20 p-8 rounded-2xl border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Dimensional Gateway</h3>
            <p className="text-gray-300 mb-6">
              Access and navigate between different dimensions and realities with our breakthrough gateway technology.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-8 rounded-2xl border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Reality Manipulation</h3>
            <p className="text-gray-300 mb-6">
              Manipulate reality itself to create new possibilities and explore alternate timelines.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-pink-600/20 p-8 rounded-2xl border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Travel</h3>
            <p className="text-gray-300 mb-6">
              Instantaneous travel between dimensions using quantum entanglement principles.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Ready to Explore New Dimensions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the interdimensional revolution and discover infinite possibilities across the multiverse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
              Start Exploring
            </button>
            <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterdimensionalTechRevolution2026;