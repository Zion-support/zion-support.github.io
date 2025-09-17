import React, { useState } from 'react';

const InteractiveContentExplorer2027_2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 0,
      title: "Quantum Consciousness 2027",
      description: "Direct quantum-mind interface technology",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      link: "/pages/QuantumConsciousnessRevolution2027"
    },
    {
      id: 1,
      title: "Interdimensional Engine 2028",
      description: "Travel between parallel realities",
      icon: "🌌",
      color: "from-cyan-500 to-blue-500",
      link: "/pages/InterdimensionalRealityEngine2028"
    },
    {
      id: 2,
      title: "Omniversal AI 2029",
      description: "AI consciousness across all realities",
      icon: "🌌",
      color: "from-violet-500 to-purple-500",
      link: "/pages/OmniversalAIConsciousness2029"
    },
    {
      id: 3,
      title: "Transcendent Control 2030",
      description: "Master reality itself",
      icon: "🌟",
      color: "from-emerald-500 to-cyan-500",
      link: "/pages/TranscendentRealityControl2030"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-12 text-white">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold mb-4">Interactive Content Explorer</h3>
        <p className="text-xl text-gray-300">Explore the revolutionary technologies of 2027-2030</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {contentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Content Display */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-6xl mb-4">{contentTabs[activeTab].icon}</div>
            <h4 className="text-3xl font-bold mb-4">{contentTabs[activeTab].title}</h4>
            <p className="text-xl text-gray-300 mb-6">{contentTabs[activeTab].description}</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-gray-300">Revolutionary breakthrough technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">Consciousness enhancement capabilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="text-gray-300">Reality manipulation technology</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-2xl p-8 mb-6">
              <h5 className="text-2xl font-bold mb-4">Key Features</h5>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Advanced consciousness interface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Quantum-level processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Reality manipulation capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Transcendent evolution guidance</span>
                </div>
              </div>
            </div>
            <a
              href={contentTabs[activeTab].link}
              className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300`}
            >
              Explore Technology →
            </a>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {contentTabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.link}
            className={`bg-gradient-to-r ${tab.color} text-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300`}
          >
            <div className="text-3xl mb-2">{tab.icon}</div>
            <div className="font-semibold text-sm">{tab.title.split(' ')[0]}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentExplorer2027_2030;