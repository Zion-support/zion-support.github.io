import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import EnhancedFooter from '../components/EnhancedFooter';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the future of innovation with our Next-Gen Innovation Hub featuring cutting-edge technologies for 2026." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to the world's most advanced innovation hub where the future is being created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Innovation Lab</h3>
            <p className="text-gray-300 mb-6">
              Cutting-edge artificial intelligence research and development
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore Lab
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Research</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing and quantum technologies
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
            <p className="text-gray-300 mb-6">
              Advanced neural interface and brain-computer interaction
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;