import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumRealityEngine2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Quantum Reality Engine 2027 - Revolutionary Reality Manipulation</title>
        <meta name="description" content="Experience the future of reality manipulation with our quantum reality engine technology." />
        <meta name="keywords" content="quantum reality, reality engine, quantum technology, reality manipulation, quantum 2027" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              QUANTUM REALITY ENGINE 2027
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Reality Engine
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of reality manipulation with our revolutionary quantum reality engine technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Quantum Reality →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Quantum Reality Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful capabilities of our quantum reality engine
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Manipulation</h3>
            <p className="text-gray-300 mb-6 text-center">
              Manipulate reality at the quantum level with unprecedented precision
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Quantum state control</li>
              <li>• Reality distortion</li>
              <li>• Dimensional shifting</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space-Time Control</h3>
            <p className="text-gray-300 mb-6 text-center">
              Control the fabric of space and time with quantum precision
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Temporal manipulation</li>
              <li>• Spatial distortion</li>
              <li>• Reality anchoring</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Reality Simulation</h3>
            <p className="text-gray-300 mb-6 text-center">
              Create and simulate alternate realities with infinite possibilities
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Alternate timelines</li>
              <li>• Reality branching</li>
              <li>• Quantum superposition</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience Quantum Reality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the quantum revolution and unlock new possibilities for reality manipulation
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Enter Quantum Reality
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumRealityEngine2027;