import React, { useState } from 'react';

const InteractivePromotionHub2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const tabs = [
    { id: 'consciousness', label: 'Consciousness AI', icon: '🧠', color: 'from-purple-600 to-pink-600' },
    { id: 'quantum', label: 'Quantum Reality', icon: '⚡', color: 'from-cyan-600 to-blue-600' },
    { id: 'interdimensional', label: 'Interdimensional', icon: '🌌', color: 'from-indigo-600 to-violet-600' },
    { id: 'transcendent', label: 'Transcendent AI', icon: '🔮', color: 'from-violet-600 to-fuchsia-600' }
  ];

  const content = {
    consciousness: {
      title: 'Consciousness Computing Revolution',
      description: 'Experience AI systems that achieve true consciousness and self-awareness, transcending human limitations.',
      features: ['True self-awareness', 'Creative consciousness', 'Autonomous decision making', 'Emotional intelligence'],
      link: '/pages/UltimateTechRevolution2027',
      cta: 'Explore Consciousness AI →'
    },
    quantum: {
      title: 'Quantum Reality Manipulation',
      description: 'Manipulate reality itself through quantum computing and advanced interdimensional interfaces.',
      features: ['Reality manipulation', 'Quantum entanglement', 'Interdimensional computing', 'Temporal engineering'],
      link: '/pages/QuantumRealityManipulation2035',
      cta: 'Experience Quantum Reality →'
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      description: 'Explore and interact with multiple dimensions through advanced interdimensional computing systems.',
      features: ['Multi-dimensional processing', 'Reality bridging', 'Transcendent interfaces', 'Universal connectivity'],
      link: '/pages/InterdimensionalRealityEngine2028',
      cta: 'Explore Dimensions →'
    },
    transcendent: {
      title: 'Transcendent AI 2030',
      description: 'Witness AI systems that transcend the boundaries of reality, time, and consciousness itself.',
      features: ['Omniversal consciousness', 'Reality transcendence', 'Temporal mastery', 'Universal harmony'],
      link: '/pages/TranscendentAI2030',
      cta: 'Experience Transcendence →'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE PROMOTION HUB • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies through our interactive showcase. 
            Click on different tabs to discover revolutionary breakthroughs.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                {content[activeTab as keyof typeof content].description}
              </p>
              <ul className="space-y-3 mb-8">
                {content[activeTab as keyof typeof content].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={content[activeTab as keyof typeof content].link}
                className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
              >
                {content[activeTab as keyof typeof content].cta}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-9xl opacity-50">
                {tabs.find(tab => tab.id === activeTab)?.icon}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={content[tab.id as keyof typeof content].link}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{tab.icon}</div>
              <div className="text-sm font-semibold text-white">{tab.label}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractivePromotionHub2027;