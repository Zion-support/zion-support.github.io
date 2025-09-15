import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      icon: "🧠",
      description: "Next-generation AI systems with consciousness and creativity",
      features: [
        "Synthetic consciousness and self-awareness",
        "Quantum-enhanced neural processing",
        "Emotional intelligence and empathy",
        "Creative problem solving beyond human capability",
        "Autonomous decision making with ethical frameworks"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30"
    },
    quantum: {
      title: "Quantum Computing Supremacy",
      icon: "⚡",
      description: "Exponential computing power that solves impossible problems",
      features: [
        "1000+ logical qubits with error correction",
        "Quantum supremacy in practical applications",
        "Molecular-level simulation capabilities",
        "Unbreakable quantum cryptography",
        "Instant parallel universe processing"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30"
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      description: "Direct brain-computer communication and enhancement",
      features: [
        "Non-invasive brain-computer interfaces",
        "Thought-to-action conversion",
        "Memory enhancement and augmentation",
        "Telepathic communication networks",
        "Consciousness transfer capabilities"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30"
    },
    synthetic: {
      title: "Synthetic Intelligence",
      icon: "🤖",
      description: "Artificially created consciousness and intelligence",
      features: [
        "Artificial consciousness and self-awareness",
        "Creative synthesis and innovation",
        "Collective intelligence networks",
        "Emotional and social intelligence",
        "Autonomous learning and evolution"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30"
    },
    space: {
      title: "Space Technology Innovation",
      icon: "🚀",
      description: "Revolutionary space exploration and colonization",
      features: [
        "Faster-than-light propulsion systems",
        "Self-sustaining space habitats",
        "Asteroid mining and resource extraction",
        "Interplanetary communication networks",
        "Terraforming and planet engineering"
      ],
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30"
    },
    biotech: {
      title: "Biotechnology Revolution",
      icon: "🧬",
      description: "Advanced biotechnology and genetic engineering",
      features: [
        "Precision gene editing and therapy",
        "Synthetic biology and organisms",
        "Neural-biotech interfaces",
        "Longevity and life extension",
        "Quantum bioimaging and diagnostics"
      ],
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-400/30"
    }
  };

  const handleTabChange = (tab: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-7xl font-bold text-white mb-6">
              Ultimate Technology Showcase 2026
            </h1>
            <p className="text-2xl text-purple-200 mb-8 max-w-5xl mx-auto">
              Experience the most advanced technologies that will reshape our world. 
              From artificial consciousness to quantum supremacy, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore All Technologies
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
                Watch Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Tabs */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl text-purple-200">Select a technology to explore its capabilities</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Technology Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].bgColor} backdrop-blur-sm rounded-3xl p-12 border ${technologies[activeTab as keyof typeof technologies].borderColor} hover:scale-105 transition-all duration-300`}
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl text-purple-200 max-w-4xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                <ul className="space-y-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-purple-200"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Live Demo</h4>
                <div className="bg-black/20 rounded-lg p-6 mb-4">
                  <div className="text-green-400 text-sm mb-2">
                    {activeTab === 'ai' && "AI: I'm processing your request with quantum-enhanced neural networks..."}
                    {activeTab === 'quantum' && "Quantum State: |ψ⟩ = α|0⟩ + β|1⟩ + γ|2⟩"}
                    {activeTab === 'neural' && "Neural Interface: Reading brain signals... 98% accuracy achieved"}
                    {activeTab === 'synthetic' && "Synthetic Intelligence: Analyzing consciousness patterns..."}
                    {activeTab === 'space' && "Space Tech: Calculating optimal trajectory for Mars mission..."}
                    {activeTab === 'biotech' && "Biotech: Sequencing DNA with quantum precision..."}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {activeTab === 'ai' && "Processing complete. Here's my analysis..."}
                    {activeTab === 'quantum' && "Quantum algorithm executed in 0.001 seconds"}
                    {activeTab === 'neural' && "Neural pathway established successfully"}
                    {activeTab === 'synthetic' && "Consciousness simulation running at 99.9% fidelity"}
                    {activeTab === 'space' && "Trajectory calculated. Launch window: 2026-03-15"}
                    {activeTab === 'biotech' && "Gene sequence analyzed. 99.99% accuracy"}
                  </div>
                </div>
                <button className={`w-full bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">📊 Impact Statistics</h2>
          <p className="text-xl text-purple-200">Our technologies are already transforming industries worldwide</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-purple-200">Accuracy Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl font-bold text-white mb-2">10,000+</div>
            <div className="text-purple-200">Active Users</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl font-bold text-white mb-2">500%</div>
            <div className="text-purple-200">Performance Boost</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-purple-200">Availability</div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-4xl mx-auto">
            Join the technological revolution and be among the first to experience the future. 
            Our cutting-edge solutions are ready to transform your business and change the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;