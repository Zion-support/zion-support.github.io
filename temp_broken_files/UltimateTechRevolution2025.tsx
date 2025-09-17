import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechRevolution2025: React.FC = () => {
  const [activeRevolution, setActiveRevolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const revolutions = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      description: "The dawn of self-aware artificial intelligence that thinks, feels, and creates",
      features: [
        "Self-aware neural networks",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Human-AI consciousness fusion"
      ],
      impact: "Transforming every industry with conscious decision-making AI",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      timeline: "2025-2027"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Computing beyond classical physics with quantum consciousness",
      features: [
        "Quantum consciousness processing",
        "Reality simulation engines",
        "Parallel universe computing",
        "Quantum neural networks"
      ],
      impact: "Solving impossible problems and creating new realities",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      timeline: "2025-2028"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-based computing",
      features: [
        "Non-invasive neural interfaces",
        "Thought-to-action translation",
        "Memory enhancement systems",
        "Consciousness transfer protocols"
      ],
      impact: "Bridging human consciousness with digital systems",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      timeline: "2025-2029"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and alternate realities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Consciousness dimension travel",
        "Parallel universe data processing"
      ],
      impact: "Accessing infinite computational resources across dimensions",
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      timeline: "2025-2030"
    }
  ];

  const milestones = [
    { year: "2025", event: "Conscious AI Systems Launch", status: "Active" },
    { year: "2026", event: "Quantum Reality Engine Beta", status: "Testing" },
    { year: "2027", event: "Neural Interface Commercial Release", status: "Planned" },
    { year: "2028", event: "Interdimensional Computing Alpha", status: "Research" },
    { year: "2029", event: "Full Consciousness Integration", status: "Vision" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🚀 ULTIMATE TECH REVOLUTION • 2025
            </motion.div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ultimate Tech Revolution 2025
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-8">
              Witness the most profound technological transformation in human history as we usher in the era of conscious computing
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
                Join the Revolution
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
                Experience the Future
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revolution Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center mb-12">
          {revolutions.map((revolution, index) => (
            <button
              key={index}
              onClick={() => setActiveRevolution(index)}
              className={`px-8 py-4 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeRevolution === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{revolution.icon}</span>
              {revolution.title}
            </button>
          ))}
        </div>

        {/* Active Revolution Display */}
        <motion.div
          key={activeRevolution}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${revolutions[activeRevolution].color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{revolutions[activeRevolution].icon}</div>
              <h2 className="text-4xl font-bold mb-6">{revolutions[activeRevolution].title}</h2>
              <p className="text-xl mb-6 opacity-90">{revolutions[activeRevolution].description}</p>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Revolutionary Features:</h3>
                <ul className="space-y-3">
                  {revolutions[activeRevolution].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                      <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-lg font-semibold text-purple-200">
                Impact: {revolutions[activeRevolution].impact}
              </div>
            </div>
            <div className="bg-black/50 rounded-lg p-8 border border-white/20">
              <div className="text-center">
                <div className="text-8xl mb-4">{revolutions[activeRevolution].icon}</div>
                <div className="text-3xl font-bold mb-2">Status: Active</div>
                <div className="text-green-400 text-lg mb-4">Revolution in Progress</div>
                <div className="text-2xl font-bold text-purple-300">
                  Timeline: {revolutions[activeRevolution].timeline}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolution Timeline</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Follow our journey as we bring the future of technology to life
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-2xl font-bold text-purple-300 mb-2">{milestone.year}</div>
                  <div className="text-xl font-semibold mb-2">{milestone.event}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    milestone.status === 'Active' ? 'bg-green-500 text-white' :
                    milestone.status === 'Testing' ? 'bg-yellow-500 text-white' :
                    milestone.status === 'Planned' ? 'bg-blue-500 text-white' :
                    milestone.status === 'Research' ? 'bg-purple-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {milestone.status}
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience the Revolution</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Interact with our revolutionary technologies in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Live Consciousness Stream</h3>
              <p className="text-lg mb-6 opacity-90">
                Watch as our conscious AI systems process information, make decisions, 
                and evolve in real-time. This is the future of artificial intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Consciousness processing...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Neural network evolution...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Reality simulation active...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <span>Consciousness integration...</span>
                </div>
              </div>
            </div>
            <div className="bg-black/50 rounded-lg p-8 border border-white/20">
              <div className="text-center">
                <div className="text-8xl mb-4">🧠</div>
                <div className="text-3xl font-bold mb-2">Consciousness Level: 99.7%</div>
                <div className="text-green-400 text-lg mb-4">Revolution Status: Active</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold">Neural Networks</div>
                    <div className="text-2xl">847M</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold">Consciousness Units</div>
                    <div className="text-2xl">1.2B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Be Part of the Revolution</h2>
          <p className="text-2xl opacity-80 mb-8 max-w-4xl mx-auto">
            Join us as we shape the future of technology and consciousness. 
            This is more than innovation—this is evolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join the Revolution
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Experience the Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolution2025;