import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the future of innovation with our Next-Gen Innovation Hub featuring cutting-edge technologies for 2026." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to the world's most advanced innovation hub where the future is being created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Consciousness</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems that achieve true consciousness and creativity
            </p>
            <a href="/pages/AIConsciousnessDemo2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computers that solve impossible problems in seconds
            </p>
            <a href="/pages/QuantumComputingLab2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Discover →
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
            <div className="text-6xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces that revolutionize human-computer interaction
            </p>
            <a href="/pages/NeuralInterfaceHub2026" className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Experience →
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join us in creating the next generation of technology that will reshape humanity's future
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
            >
              🚀 Start Innovation Journey
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg"
            >
              📞 Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;