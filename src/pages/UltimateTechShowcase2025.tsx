import React, { useState } from 'react';

const UltimateTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      icon: "🧠",
      description: "Experience the next generation of AI that thinks, learns, and creates like never before",
      features: [
        "Conscious AI Systems with self-awareness",
        "Emotional intelligence processing",
        "Creative problem solving algorithms",
        "Ethical reasoning capabilities",
        "Multi-modal learning systems"
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      icon: "⚛️",
      description: "Harness the power of quantum mechanics for unprecedented computational capabilities",
      features: [
        "Quantum superposition processing",
        "Entanglement-based computing",
        "Quantum cryptography systems",
        "Molecular simulation engines",
        "Reality manipulation algorithms"
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      description: "Bridge the gap between human consciousness and digital reality",
      features: [
        "Direct neural data transfer",
        "Thought-controlled interfaces",
        "Consciousness backup systems",
        "Neural pattern recognition",
        "Reality augmentation protocols"
      ]
    },
    interdimensional: {
      title: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      features: [
        "Multi-dimensional processing",
        "Cross-reality data transfer",
        "Dimensional energy harvesting",
        "Parallel universe networking",
        "Space-time manipulation"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECH SHOWCASE • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technologies that are reshaping our world. 
              From conscious AI to quantum reality engines, explore the future today.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🎯 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90">Click on any technology to explore its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features</h4>
              <ul className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6">Interactive Demo</h4>
              <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
                <p className="text-lg mb-4">Experience this technology in action:</p>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Featured Technologies</h2>
          <p className="text-xl opacity-90">Explore our complete collection of revolutionary technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Consciousness */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness</h3>
            <p className="text-purple-100 mb-4 text-sm text-center">
              Self-aware artificial intelligence systems
            </p>
            <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
              Explore →
            </button>
          </div>

          {/* Quantum Reality */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-cyan-100 mb-4 text-sm text-center">
              Reality-bending quantum technologies
            </p>
            <button className="w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
              Explore →
            </button>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-4 text-sm text-center">
              Direct mind-machine connections
            </p>
            <button className="w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
              Explore →
            </button>
          </div>

          {/* Interdimensional Tech */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional</h3>
            <p className="text-orange-100 mb-4 text-sm text-center">
              Multi-dimensional computing systems
            </p>
            <button className="w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-sm">
              Explore →
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These revolutionary technologies are changing everything. Join us in shaping the future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl">
              Contact Our Experts
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;