import React from 'react';

const SpaceTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6">
            🚀 SPACE TECH REVOLUTION 2026
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Space Technology Revolution
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the future of space exploration with advanced propulsion systems, terraforming technologies, and interplanetary travel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Propulsion</h3>
            <p className="text-blue-100 mb-6">
              Revolutionary quantum propulsion systems that enable faster-than-light travel and interplanetary exploration
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Learn More →
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Terraforming</h3>
            <p className="text-indigo-100 mb-6">
              Advanced terraforming technologies that can transform planets into habitable environments for human colonization
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Explore →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4">Space Habitats</h3>
            <p className="text-cyan-100 mb-6">
              Self-sustaining space habitats that provide comfortable living environments for long-term space missions
            </p>
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Discover →
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">Space Technology Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-lg opacity-80">Faster Travel</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-lg opacity-80">Self-Sustaining</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">2026</div>
              <div className="text-lg opacity-80">Future is Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SpaceTechRevolution2026;
