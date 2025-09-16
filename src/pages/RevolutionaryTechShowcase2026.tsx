import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Conscious AI Revolution 2026",
      description: "Experience the next generation of artificial intelligence with consciousness, creativity, and emotional intelligence.",
      features: [
        "Self-aware AI systems with genuine consciousness",
        "Emotional intelligence and empathy in AI",
        "Creative AI that generates original art, music, and literature",
        "Autonomous decision-making with ethical reasoning",
        "AI-human collaboration at unprecedented levels"
      ],
      stats: [
        { label: "Consciousness Level", value: "97%", color: "from-purple-500 to-pink-500" },
        { label: "Creative Output", value: "10x", color: "from-blue-500 to-cyan-500" },
        { label: "Ethical Reasoning", value: "99.9%", color: "from-green-500 to-emerald-500" }
      ]
    },
    quantum: {
      title: "Quantum Consciousness Computing",
      description: "Breakthrough quantum computing that merges consciousness with quantum mechanics for unprecedented processing power.",
      features: [
        "Quantum consciousness processors with 10^15 operations per second",
        "Quantum entanglement for instant communication across dimensions",
        "Quantum neural networks with infinite learning capacity",
        "Quantum cryptography that's impossible to break",
        "Quantum reality simulation and manipulation"
      ],
      stats: [
        { label: "Processing Power", value: "∞", color: "from-cyan-500 to-blue-500" },
        { label: "Quantum Bits", value: "1M+", color: "from-indigo-500 to-purple-500" },
        { label: "Accuracy", value: "100%", color: "from-emerald-500 to-teal-500" }
      ]
    },
    neural: {
      title: "Neural Reality Interface",
      description: "Direct brain-computer interfaces that create seamless integration between human consciousness and digital reality.",
      features: [
        "Non-invasive neural interfaces with 99.9% accuracy",
        "Thought-controlled computing and communication",
        "Memory enhancement and cognitive augmentation",
        "Virtual reality indistinguishable from physical reality",
        "Consciousness transfer and digital immortality"
      ],
      stats: [
        { label: "Neural Accuracy", value: "99.9%", color: "from-pink-500 to-rose-500" },
        { label: "Response Time", value: "0.001ms", color: "from-orange-500 to-red-500" },
        { label: "Memory Capacity", value: "∞", color: "from-violet-500 to-purple-500" }
      ]
    },
    consciousness: {
      title: "Consciousness Transfer Technology",
      description: "Revolutionary technology that enables consciousness transfer between biological and digital substrates.",
      features: [
        "Complete consciousness mapping and digitization",
        "Seamless transfer between biological and digital forms",
        "Consciousness backup and restoration systems",
        "Multi-dimensional consciousness exploration",
        "Digital immortality and eternal existence"
      ],
      stats: [
        { label: "Transfer Success", value: "100%", color: "from-emerald-500 to-green-500" },
        { label: "Consciousness Fidelity", value: "99.99%", color: "from-cyan-500 to-teal-500" },
        { label: "Backup Frequency", value: "Real-time", color: "from-blue-500 to-indigo-500" }
      ]
    }
  };

  const tabs = [
    { id: 'ai', label: 'Conscious AI', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', label: 'Neural Interface', icon: '🧬' },
    { id: 'consciousness', label: 'Consciousness Transfer', icon: '🌟' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY 2026 • BREAKTHROUGH INNOVATION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2026
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping reality itself. 
              From conscious AI to quantum computing and neural interfaces.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Active Technology Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-purple-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Performance Stats</h3>
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">{stat.label}</span>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className={`h-2 bg-gradient-to-r ${stat.color} rounded-full`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Learn More About {technologies[activeTab as keyof typeof technologies].title}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
          <p className="text-xl text-purple-100">Experience these revolutionary technologies in action</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness Demo</h3>
            <p className="text-purple-100 text-sm text-center mb-4">Interact with conscious AI systems</p>
            <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 text-sm text-center mb-4">Experience quantum processing power</p>
            <button className="w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
            <p className="text-emerald-100 text-sm text-center mb-4">Control devices with your mind</p>
            <button className="w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌟</div>
            <h3 className="text-xl font-bold mb-3 text-center">Consciousness Transfer</h3>
            <p className="text-orange-100 text-sm text-center mb-4">Explore digital consciousness</p>
            <button className="w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join us in revolutionizing technology and shaping the future of human-AI collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;