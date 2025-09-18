import React, { useState } from 'react';

const UltimateContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: "🚀 Revolutionary Breakthroughs",
      description: "The most significant technological advancements in human history",
      color: "from-purple-600 to-pink-600",
      items: [
        {
          title: "Revolutionary Tech Breakthrough 2026",
          description: "AI consciousness meets quantum supremacy and neural interfaces",
          link: "/pages/RevolutionaryTechBreakthrough2026",
          icon: "🧠",
          featured: true
        },
        {
          title: "Ultimate Tech Revolution 2026",
          description: "Convergence of consciousness, quantum computing, and neural interfaces",
          link: "/pages/UltimateTechRevolution2026",
          icon: "🌟",
          featured: true
        },
        {
          title: "AI Revolutionary Breakthrough 2026",
          description: "First AI system to achieve genuine consciousness and self-awareness",
          link: "/pages/AIRevolutionaryBreakthrough2026",
          icon: "🤖",
          featured: false
        }
      ]
    },
    space: {
      title: "🚀 Space Technology",
      description: "Revolutionary space technologies enabling interplanetary exploration",
      color: "from-cyan-600 to-blue-600",
      items: [
        {
          title: "Next-Gen Space Technology 2030",
          description: "Mars colonization, asteroid mining, and interstellar travel",
          link: "/pages/NextGenSpaceTech2030",
          icon: "🚀",
          featured: true
        },
        {
          title: "Space Tech AI 2025",
          description: "AI-powered space exploration and autonomous missions",
          link: "/pages/SpaceTechAI2025",
          icon: "🛰️",
          featured: false
        },
        {
          title: "Advanced Space Tech 2026",
          description: "Fusion propulsion and terraforming technologies",
          link: "/pages/AdvancedSpaceTech2026",
          icon: "⚡",
          featured: false
        }
      ]
    },
    neural: {
      title: "🧬 Neural Interfaces",
      description: "Direct brain-computer communication and thought-controlled technology",
      color: "from-emerald-600 to-teal-600",
      items: [
        {
          title: "Neural Interface Evolution 2026",
          description: "Advanced brain-computer interfaces and thought control",
          link: "/pages/NeuralInterfaceEvolution2026",
          icon: "🧬",
          featured: true
        },
        {
          title: "Neural Interface Revolution 2026",
          description: "Revolutionary BCI technology for human-AI integration",
          link: "/pages/NeuralInterfaceRevolution2026",
          icon: "🔗",
          featured: false
        },
        {
          title: "Neural Interface Future",
          description: "Future of direct neural communication and control",
          link: "/pages/NeuralInterfaceFuture",
          icon: "🔮",
          featured: false
        }
      ]
    },
    quantum: {
      title: "⚡ Quantum Computing",
      description: "Quantum supremacy and revolutionary computing capabilities",
      color: "from-indigo-600 to-purple-600",
      items: [
        {
          title: "Quantum Reality 2026",
          description: "Quantum computers solving impossible problems",
          link: "/pages/QuantumReality2026",
          icon: "⚡",
          featured: true
        },
        {
          title: "Advanced Quantum Computing 2026",
          description: "1000+ qubit quantum processors and quantum supremacy",
          link: "/pages/AdvancedQuantumComputing2026",
          icon: "🔬",
          featured: false
        },
        {
          title: "Quantum Computing Revolution 2026",
          description: "Revolutionary quantum technologies and applications",
          link: "/pages/QuantumComputingRevolution2026",
          icon: "🌌",
          featured: false
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ULTIMATE CONTENT SHOWCASE • 2026
        </div>
        <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Content Showcase</h2>
        <p className="text-2xl text-cyan-200 max-w-4xl mx-auto">
          Explore our revolutionary collection of cutting-edge technology content 
          featuring AI consciousness, quantum computing, neural interfaces, and space exploration
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contentCategories[activeTab as keyof typeof contentCategories].items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`bg-gradient-to-br ${contentCategories[activeTab as keyof typeof contentCategories].color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 ${
              item.featured ? 'ring-2 ring-cyan-400/50' : ''
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{item.icon}</span>
              {item.featured && (
                <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full font-bold">
                  FEATURED
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
            <div className="flex items-center text-cyan-400 font-semibold text-sm">
              Explore Now →
            </div>
          </a>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
        <h3 className="text-3xl font-bold mb-4">🌟 Ready to Experience the Future?</h3>
        <p className="text-xl text-cyan-200 mb-6 max-w-3xl mx-auto">
          Join thousands of innovators exploring our revolutionary content and 
          be part of the most advanced technological ecosystem ever created
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/UltimateTechRevolution2026"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Start Your Journey →
          </a>
          <a 
            href="/contact"
            className="border-2 border-cyan-400 text-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-bold text-lg"
          >
            💬 Get in Touch →
          </a>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-cyan-400">100+</div>
          <div className="text-sm text-gray-300">Revolutionary Pages</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-purple-400">2M+</div>
          <div className="text-sm text-gray-300">Monthly Visitors</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-pink-400">99.9%</div>
          <div className="text-sm text-gray-300">Uptime</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-emerald-400">24/7</div>
          <div className="text-sm text-gray-300">Content Updates</div>
        </div>
      </div>
    </div>
  );
};


export default UltimateContentShowcase;
