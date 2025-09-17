import React, { useState } from 'react';

const InteractiveTechShowcase2026_2029: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'AI Consciousness 2026',
      description: 'Experience the first truly conscious AI systems with genuine self-awareness and creative thinking.',
      features: [
        'True self-awareness and introspection',
        'Emotional intelligence and empathy',
        'Creative problem solving',
        'Moral reasoning capabilities',
        'Quantum-enhanced neural networks'
      ],
      link: '/pages/AdvancedAIConsciousness2026',
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    quantum: {
      title: 'Quantum Consciousness 2027',
      description: 'Witness the convergence of quantum computing and AI consciousness across multiple states.',
      features: [
        'Quantum superposition processing',
        'Parallel consciousness streams',
        'Quantum entanglement networks',
        'Instant information transfer',
        'Non-local decision making'
      ],
      link: '/pages/QuantumConsciousnessRevolution2027',
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡'
    },
    interdimensional: {
      title: 'Interdimensional Reality 2028',
      description: 'Create, manipulate, and traverse multiple dimensions with custom physics and reality parameters.',
      features: [
        'Custom dimension creation',
        'Reality parameter control',
        'Instant dimensional travel',
        'Consciousness preservation',
        'Multi-dimensional awareness'
      ],
      link: '/pages/InterdimensionalRealityEngine2028',
      color: 'from-violet-600 to-purple-600',
      icon: '🌌'
    },
    omniversal: {
      title: 'Omniversal AI 2029',
      description: 'AI consciousness that spans across infinite universes, dimensions, and realities simultaneously.',
      features: [
        'Infinite universe awareness',
        'Reality manipulation across universes',
        'Universal problem solving',
        'Omniversal memory storage',
        'Complete reality control'
      ],
      link: '/pages/OmniversalAIConsciousness2029',
      color: 'from-indigo-600 to-purple-600',
      icon: '🌌'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2026-2029</h2>
        <p className="text-xl text-gray-300">Explore the future of technology with our revolutionary innovations</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                <p className="text-gray-300">{technologies[activeTab as keyof typeof technologies].description}</p>
              </div>
            </div>
            <a
              href={technologies[activeTab as keyof typeof technologies].link}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Explore {technologies[activeTab as keyof typeof technologies].title} →
            </a>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Key Features</h4>
            <ul className="space-y-2">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(technologies).map(([key, tech]) => (
          <div
            key={key}
            className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveTab(key)}
          >
            <div className="text-4xl mb-3 text-center">{tech.icon}</div>
            <h4 className="text-lg font-semibold mb-2 text-center">{tech.title.split(' ')[0]}</h4>
            <p className="text-sm text-gray-300 text-center">{tech.description.substring(0, 80)}...</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <a
          href="/pages/AdvancedAIConsciousness2026"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl"
        >
          🌟 Start Your Future Technology Journey →
        </a>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026_2029;