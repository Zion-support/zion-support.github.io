import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const techCategories = {
    ai: {
      title: "Artificial Intelligence 2030",
      icon: "🧠",
      description: "Next-generation AI systems with consciousness-level capabilities",
      features: [
        "Quantum-Enhanced Neural Networks",
        "Autonomous AI Ecosystems",
        "Emotional Intelligence Integration",
        "Predictive Reality Modeling"
      ],
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Computing Revolution",
      icon: "⚛️",
      description: "Breakthrough quantum technologies solving impossible problems",
      features: [
        "1000-Qubit Processors",
        "Quantum Internet Infrastructure",
        "Molecular Simulation at Scale",
        "Quantum Cryptography Networks"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      description: "Direct brain-computer interfaces transforming human capability",
      features: [
        "Non-Invasive Thought Control",
        "Memory Enhancement Systems",
        "Telepathic Communication",
        "Consciousness Transfer Protocols"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    space: {
      title: "Space Technology 2030",
      icon: "🚀",
      description: "Revolutionary space exploration and colonization technologies",
      features: [
        "Faster-Than-Light Travel",
        "Terraforming Capabilities",
        "Space Elevator Systems",
        "Interplanetary Internet"
      ],
      color: "from-orange-600 to-red-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY 2030 • BREAKTHROUGH INNOVATION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Future is Here
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that will reshape humanity's future. 
              From AI consciousness to quantum reality, discover what's possible in 2030.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase</h2>
          <p className="text-xl opacity-80">Click on each technology to explore its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{techCategories[activeTab as keyof typeof techCategories].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {techCategories[activeTab as keyof typeof techCategories].title}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${techCategories[activeTab as keyof typeof techCategories].color} rounded-full`}></div>
                </div>
              </div>
              <p className="text-xl opacity-90 mb-6">
                {techCategories[activeTab as keyof typeof techCategories].description}
              </p>
              <ul className="space-y-3">
                {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className={`w-full h-80 bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} rounded-2xl flex items-center justify-center ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-bounce">
                    {techCategories[activeTab as keyof typeof techCategories].icon}
                  </div>
                  <p className="text-2xl font-bold">Interactive Demo</p>
                  <p className="text-lg opacity-80">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Features</h2>
          <p className="text-xl opacity-80">Discover the capabilities that make our technology unique</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
            <p className="opacity-90">Process information at quantum speeds with our revolutionary computing architecture.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-3">Predictive Intelligence</h3>
            <p className="opacity-90">Anticipate future events and outcomes with our advanced AI prediction models.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
            <p className="opacity-90">Transform industries and improve lives worldwide with our breakthrough technologies.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto">
            Join us in shaping the next decade of technological innovation. 
            Be among the first to experience these revolutionary technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Early Access
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2030;