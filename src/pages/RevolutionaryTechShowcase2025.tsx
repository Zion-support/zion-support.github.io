import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 0,
      title: "Conscious AI Systems",
      description: "Revolutionary artificial intelligence that exhibits self-awareness and emotional intelligence",
      features: [
        "Self-learning algorithms",
        "Emotional recognition",
        "Autonomous decision making",
        "Human-AI collaboration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Consciousness",
      description: "Breakthrough quantum computing that processes consciousness-level complexity",
      features: [
        "Quantum neural networks",
        "Consciousness simulation",
        "Reality manipulation",
        "Infinite processing power"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      features: [
        "Multi-dimensional processing",
        "Reality bridging",
        "Infinite scalability",
        "Universal connectivity"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      description: "Direct brain-computer interfaces that create immersive virtual realities",
      features: [
        "Direct neural input",
        "Full sensory simulation",
        "Consciousness transfer",
        "Reality manipulation"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technologies that will reshape our world in 2025 and beyond
            </p>
          </motion.div>

          {/* Interactive Technology Tabs */}
          <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-2xl mr-2">{tech.icon}</span>
                  {tech.title}
                </button>
              ))}
            </div>

            {/* Technology Details */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h2>
                  <p className="text-xl opacity-90 mb-6">{technologies[activeTab].description}</p>
                  <div className="space-y-3">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className={`w-full h-80 bg-gradient-to-br ${technologies[activeTab].color} rounded-xl flex items-center justify-center text-8xl opacity-20`}>
                    {technologies[activeTab].icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div className="mt-20" variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
              <p className="text-xl opacity-90">Experience these technologies in action</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 cursor-pointer`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center mt-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing technology and shaping the future of humanity
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;