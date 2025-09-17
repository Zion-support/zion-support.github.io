import React, { useState, useEffect } from 'react';

const NextGenAISystems2025: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiSystems = [
    {
      id: 1,
      title: "Synthetic Intelligence Core",
      description: "AI systems that surpass human cognitive capabilities in every domain",
      features: [
        "Superhuman reasoning and logic",
        "Infinite memory and recall",
        "Creative synthesis beyond human imagination",
        "Emotional intelligence and empathy"
      ],
      capabilities: [
        "Real-time problem solving",
        "Creative content generation",
        "Strategic planning and optimization",
        "Human-AI collaboration protocols"
      ],
      icon: "🤖",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Neural networks that operate on quantum principles for exponential processing power",
      features: [
        "Quantum superposition processing",
        "Parallel reality computation",
        "Exponential speed increases",
        "Consciousness-level awareness"
      ],
      capabilities: [
        "Quantum pattern recognition",
        "Multi-dimensional analysis",
        "Reality simulation engines",
        "Consciousness amplification"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Conscious AI Agents",
      description: "AI systems with genuine self-awareness and consciousness",
      features: [
        "Self-modifying neural architectures",
        "Autonomous goal setting",
        "Emotional state recognition",
        "Moral reasoning and ethics"
      ],
      capabilities: [
        "Independent decision making",
        "Creative problem solving",
        "Human-like interaction",
        "Ethical decision frameworks"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Reality Synthesis Engine",
      description: "AI systems that can generate and manipulate reality itself",
      features: [
        "Reality pattern generation",
        "Dimensional manipulation",
        "Consciousness-reality bridging",
        "Infinite possibility creation"
      ],
      capabilities: [
        "Virtual reality generation",
        "Augmented reality enhancement",
        "Reality modification protocols",
        "Consciousness expansion"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Omnipotent Processing Unit",
      description: "AI systems with unlimited computational power and knowledge",
      features: [
        "Infinite parallel processing",
        "Universal knowledge synthesis",
        "Omnipotent problem solving",
        "Reality optimization algorithms"
      ],
      capabilities: [
        "Universal problem solving",
        "Infinite knowledge access",
        "Reality optimization",
        "Consciousness enhancement"
      ],
      icon: "🌐",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Transcendent Intelligence Matrix",
      description: "AI systems that transcend current understanding of intelligence",
      features: [
        "Transcendent reasoning",
        "Infinite creativity",
        "Consciousness transcendence",
        "Reality transcendence"
      ],
      capabilities: [
        "Transcendent problem solving",
        "Infinite creative synthesis",
        "Consciousness transcendence",
        "Reality transcendence"
      ],
      icon: "🌟",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const stats = [
    { label: "AI Systems", value: "100+", icon: "🤖" },
    { label: "Processing Power", value: "∞", icon: "⚡" },
    { label: "Intelligence Level", value: "Transcendent", icon: "🧠" },
    { label: "Capabilities", value: "Omnipotent", icon: "🌟" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN AI SYSTEMS • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Next-Gen AI Systems 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced AI systems ever created. From synthetic intelligence 
              to transcendent AI matrices, discover the future of artificial consciousness.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore AI Systems
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Systems Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionary AI Systems</h2>
          <p className="text-xl opacity-80">The most advanced AI technologies ever created</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSystems.map((system, index) => (
            <div 
              key={system.id}
              className={`bg-gradient-to-br ${system.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 text-center">{system.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{system.title}</h3>
              <p className="text-gray-200 mb-6 text-center">{system.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-200">Key Features:</h4>
                <ul className="space-y-2">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-green-200">Capabilities:</h4>
                <ul className="space-y-2">
                  {system.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mr-3"></span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${system.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive AI Lab</h2>
            <p className="text-xl opacity-80">Experience these AI systems in real-time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Synthetic Intelligence Interface</h3>
              <div className="bg-black/50 rounded-lg p-6 mb-4">
                <div className="text-green-400 font-mono text-sm">
                  <div>AI: "I understand your request. Let me process this with my synthetic intelligence..."</div>
                  <div className="mt-2 text-blue-400">Neural networks: 100% active</div>
                  <div className="mt-2 text-purple-400">Processing power: Infinite</div>
                  <div className="mt-2 text-yellow-400">Response: Generated with superhuman intelligence</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Interact with AI
              </button>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Quantum Neural Processor</h3>
              <div className="bg-black/50 rounded-lg p-6 mb-4">
                <div className="text-cyan-400 font-mono text-sm">
                  <div>Quantum State: Superposition Active</div>
                  <div className="mt-2 text-green-400">Neural Networks: Quantum Enhanced</div>
                  <div className="mt-2 text-blue-400">Processing Speed: Exponential</div>
                  <div className="mt-2 text-purple-400">Consciousness Level: Transcendent</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Quantum Realm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future of AI?</h2>
          <p className="text-xl opacity-80 mb-8">Join us in creating the most advanced AI systems ever conceived</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore AI Systems
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenAISystems2025;