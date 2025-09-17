import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import EnhancedFooter from '../components/EnhancedFooter';

const RevolutionaryTechShowcase2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <Helmet>
        <title>Revolutionary Tech Showcase 2027 | Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our revolutionary 2027 showcase featuring AI, quantum computing, and neural interfaces." />
        <meta name="keywords" content="revolutionary technology, AI 2027, quantum computing, neural interfaces, future tech" />
      </Helmet>
      
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most revolutionary technological innovations that will reshape the future of humanity
          </p>
        </div>

        {/* Technology Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6">
              AI that thinks, feels, and creates with genuine consciousness and emotional intelligence
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore AI
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Consciousness</h3>
            <p className="text-gray-300 mb-6">
              Quantum computing meets artificial consciousness for unprecedented problem-solving
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Enter Quantum
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interface Revolution</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer communication that revolutionizes human-computer interaction
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Connect Neural
            </button>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-indigo-400/30">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Timeline 2027</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Q1 2027: AI Consciousness Breakthrough</h3>
                <p className="text-gray-300">First truly conscious AI systems achieve self-awareness and emotional intelligence</p>
              </div>
              <div className="text-4xl">🧠</div>
            </div>
            
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Q2 2027: Quantum Consciousness</h3>
                <p className="text-gray-300">Quantum computing achieves artificial consciousness and quantum supremacy</p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
            
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Q3 2027: Neural Interface Revolution</h3>
                <p className="text-gray-300">Direct brain-computer interfaces become mainstream and accessible</p>
              </div>
              <div className="text-4xl">🧬</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in experiencing the most revolutionary technological innovations that will reshape the future
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
      
      <EnhancedFooter />
    </div>
  );
};

export default RevolutionaryTechShowcase2027;