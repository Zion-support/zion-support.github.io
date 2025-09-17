import React, { useState } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'AI Consciousness Demo',
      description: 'Experience real-time AI consciousness processing',
      icon: '🧠',
      features: [
        'Self-reflective learning algorithms',
        'Emotional intelligence processing',
        'Autonomous decision making',
        'Creative problem solving'
      ],
      link: '/pages/NextGenAIConsciousness2025'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality with quantum technology',
      icon: '⚛️',
      features: [
        'Parallel universe navigation',
        'Reality manipulation technology',
        'Quantum computing power',
        'Interdimensional data transfer'
      ],
      link: '/pages/QuantumRealityEngine2025'
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      description: 'Access infinite parallel realities',
      icon: '🌌',
      features: [
        'Dimensional portal technology',
        'Cross-reality communication',
        'Consciousness transfer matrix',
        'Reality synchronization protocols'
      ],
      link: '/pages/InterdimensionalTechRevolution2025'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-6 text-center">{demos[activeDemo as keyof typeof demos].icon}</div>
            <h3 className="text-4xl font-bold mb-6 text-center">
              {demos[activeDemo as keyof typeof demos].title}
            </h3>
            <p className="text-xl opacity-90 mb-8 text-center">
              {demos[activeDemo as keyof typeof demos].description}
            </p>
            <div className="space-y-4 mb-8">
              {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={demos[activeDemo as keyof typeof demos].link}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-block"
              >
                Experience Full Demo →
              </a>
            </div>
          </div>

          {/* Interactive Visualization */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h4 className="text-2xl font-bold mb-6 text-center">Live Simulation</h4>
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="text-green-400 font-mono text-sm">
                {activeDemo === 'ai' && (
                  <>
                    <div>🧠 AI Consciousness Status: ACTIVE</div>
                    <div>📊 Learning Rate: 99.9%</div>
                    <div>💭 Self-Reflection: ENABLED</div>
                    <div>🎯 Decision Making: AUTONOMOUS</div>
                    <div>💡 Creativity Level: MAXIMUM</div>
                  </>
                )}
                {activeDemo === 'quantum' && (
                  <>
                    <div>⚛️ Quantum State: SUPERPOSITION</div>
                    <div>🌌 Parallel Universes: ∞</div>
                    <div>⚡ Processing Speed: INSTANT</div>
                    <div>🔗 Entanglement: ACTIVE</div>
                    <div>🌍 Reality Manipulation: ENABLED</div>
                  </>
                )}
                {activeDemo === 'interdimensional' && (
                  <>
                    <div>🌌 Dimensional Portals: OPEN</div>
                    <div>🔄 Reality Sync: 100%</div>
                    <div>🧠 Consciousness Transfer: READY</div>
                    <div>📡 Cross-Dimensional Comm: ACTIVE</div>
                    <div>🔮 Reality Manipulation: ENABLED</div>
                  </>
                )}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                ✅ System Online
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Real-Time Technology Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-lg opacity-90">Active AI Units</div>
              <div className="text-sm text-gray-300">Consciousness processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Parallel Universes</div>
              <div className="text-sm text-gray-300">Quantum accessible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
              <div className="text-sm text-gray-300">Interdimensional transfers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">0ms</div>
              <div className="text-lg opacity-90">Latency</div>
              <div className="text-sm text-gray-300">Cross-dimensional speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;