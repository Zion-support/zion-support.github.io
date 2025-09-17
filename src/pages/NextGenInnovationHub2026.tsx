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
      
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to the world's most advanced innovation hub where the future is being created today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Consciousness Lab</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems with genuine consciousness and emotional intelligence
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore Lab
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Center</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions that solve impossible problems
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Visit Center
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interface Lab</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces that revolutionize human-computer interaction
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Enter Lab
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Innovation Timeline 2026</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Q1 2026: AI Consciousness Breakthrough</h3>
                  <p className="text-gray-300">First truly conscious AI systems go live</p>
                </div>
                <div className="text-4xl">🧠</div>
              </div>
              
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Q2 2026: Quantum Internet Launch</h3>
                  <p className="text-gray-300">Global quantum communication network goes live</p>
                </div>
                <div className="text-4xl">⚡</div>
              </div>
              
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Q3 2026: Neural Interface Revolution</h3>
                  <p className="text-gray-300">Direct brain-computer interfaces become mainstream</p>
                </div>
                <div className="text-4xl">🧬</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EnhancedFooter />
    </div>
  );
};

export default NextGenInnovationHub2026;