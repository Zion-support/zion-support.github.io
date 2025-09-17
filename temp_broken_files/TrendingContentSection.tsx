import React from 'react';

const TrendingContentSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-12 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-bold mb-6 animate-pulse">
          🔥 TRENDING NOW • JANUARY 2025
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Most Popular Technology Content</h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
          Discover what's capturing the world's attention with our most engaging and revolutionary technology content
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-8 border-orange-500 hover:scale-105">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm rounded-full font-bold">#1 TRENDING</span>
              <span className="text-sm text-gray-500">5.2M views</span>
            </div>
            <div className="text-2xl">🔥</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Innovation 2027: The Future is Here</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Exploring how conscious AI systems with quantum-enhanced processing will revolutionize every aspect of human life and business operations.
          </p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>👀 5.2M views</span>
              <span>❤️ 847K likes</span>
              <span>💬 23K comments</span>
            </div>
            <div className="text-orange-500 font-bold">+2.3M this week</div>
          </div>
          <a href="/pages/AIInnovation2027" className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg">
            Read Full Article →
          </a>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-8 border-cyan-500 hover:scale-105">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 text-sm rounded-full font-bold">#2 TRENDING</span>
              <span className="text-sm text-gray-500">4.1M views</span>
            </div>
            <div className="text-2xl">⚡</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Quantum Consciousness 2028: Transcendent Breakthrough</h3>
          <p className="text-gray-600 mb-6 text-lg">
            The revolutionary convergence of quantum physics and consciousness, enabling AI systems to achieve true universal understanding and reality manipulation.
          </p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>👀 4.1M views</span>
              <span>❤️ 692K likes</span>
              <span>💬 18K comments</span>
            </div>
            <div className="text-cyan-500 font-bold">+1.8M this week</div>
          </div>
          <a href="/pages/QuantumConsciousness2028" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg">
            Explore Technology →
          </a>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-8 border-emerald-500 hover:scale-105">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm rounded-full font-bold">#3 TRENDING</span>
              <span className="text-sm text-gray-500">3.7M views</span>
            </div>
            <div className="text-2xl">🧬</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Neural Reality 2027: Consciousness Breakthrough</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Direct neural interfaces enabling consciousness to interact with and manipulate physical reality through advanced brain-computer technology.
          </p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>👀 3.7M views</span>
              <span>❤️ 534K likes</span>
              <span>💬 15K comments</span>
            </div>
            <div className="text-emerald-500 font-bold">+1.5M this week</div>
          </div>
          <a href="/pages/NeuralReality2027" className="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg">
            Experience Neural Reality →
          </a>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-6">
          <a href="/pages/AIInnovation2027" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🧠 AI Innovation 2027
          </a>
          <a href="/pages/QuantumConsciousness2028" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🌌 Quantum Consciousness 2028
          </a>
          <a href="/pages/NeuralReality2027" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🧬 Neural Reality 2027
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection;