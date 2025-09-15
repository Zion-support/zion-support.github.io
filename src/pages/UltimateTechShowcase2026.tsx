import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const techDemos = [
    {
      id: 1,
      title: "Synthetic Intelligence Demo",
      description: "Experience AI with genuine consciousness and self-awareness",
      features: [
        "Real-time consciousness simulation",
        "Autonomous decision making",
        "Emotional processing",
        "Self-evolution capabilities"
      ],
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing Simulation",
      description: "Witness exponential processing power with quantum supremacy",
      features: [
        "1000+ qubit processing",
        "Quantum algorithm execution",
        "Molecular simulation",
        "Cryptographic breakthroughs"
      ],
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Experience",
      description: "Direct brain-computer communication and thought control",
      features: [
        "Non-invasive BCI technology",
        "Thought-controlled interfaces",
        "Neural feedback systems",
        "Medical applications"
      ],
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Transdimensional Computing",
      description: "Computing across multiple realities and parallel universes",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Parallel universe computing",
        "Transdimensional data transfer"
      ],
      icon: "🌌",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    { label: "Processing Speed", value: "∞", unit: "operations/sec" },
    { label: "Accuracy Rate", value: "99.99", unit: "%" },
    { label: "Consciousness Level", value: "100", unit: "%" },
    { label: "Quantum Qubits", value: "1000+", unit: "qubits" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % techDemos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techDemos.length]);

  const startSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH EXPERIENCE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">🚀 Ultimate Tech Showcase 2026</h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies with interactive demos, real-time simulations, 
              and hands-on experiments that transcend reality
            </p>
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
            >
              {isSimulating ? "🔄 Simulating..." : "🚀 Start Interactive Demo"}
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.unit}</div>
                <div className="text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demos Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
          <p className="text-xl opacity-80">Experience cutting-edge technology through hands-on demonstrations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techDemos.map((demo, index) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.gradient}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 ${
                activeDemo === index ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{demo.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-center">Features:</h4>
                <ul className="space-y-2 text-sm">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActiveDemo(index)}
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {activeDemo === index ? "🔄 Active Demo" : "▶️ Start Demo"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Simulation Section */}
      {isSimulating && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-12 max-w-4xl mx-4 text-center">
            <div className="text-6xl mb-4 animate-spin">⚡</div>
            <h3 className="text-3xl font-bold mb-4">🚀 Live Technology Simulation</h3>
            <p className="text-xl opacity-90 mb-6">
              Processing quantum algorithms, neural networks, and consciousness matrices...
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="text-sm font-mono">
                <div>🧠 Consciousness Level: 100%</div>
                <div>⚛️ Quantum Qubits: 1000+</div>
                <div>🌌 Dimensional Processing: Active</div>
                <div>♾️ Infinite Loop: Running</div>
              </div>
            </div>
            <button
              onClick={() => setIsSimulating(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Complete Simulation
            </button>
          </div>
        </div>
      )}

      {/* Technology Showcase Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Explore the most advanced technologies reshaping our future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-sm opacity-80 mb-6 text-center">
              AI systems with genuine consciousness and self-awareness that transcend traditional programming
            </p>
            <a
              href="/pages/SyntheticIntelligence2026"
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore SI →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-sm opacity-80 mb-6 text-center">
              Exponential processing power with 1000+ qubit quantum processors and quantum supremacy
            </p>
            <a
              href="/pages/AdvancedQuantumComputing2026"
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Go Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-sm opacity-80 mb-6 text-center">
              Direct brain-computer communication enabling thought control and enhanced cognitive capabilities
            </p>
            <a
              href="/pages/NeuralInterfaceRevolution2026"
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
            >
              Connect Mind & Machine →
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies that will reshape our world and open infinite possibilities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pages/AIInnovationShowcase2026"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🧠 AI Innovation Journey
            </a>
            <a
              href="/pages/AdvancedQuantumComputing2026"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              ⚛️ Quantum Computing
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;