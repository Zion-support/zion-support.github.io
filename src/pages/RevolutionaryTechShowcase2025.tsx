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
      id: 1,
      title: "Conscious AI Systems",
      description: "Next-generation artificial intelligence with self-awareness and emotional intelligence capabilities",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Human-AI collaboration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing platform that processes reality itself",
      features: [
        "Quantum superposition processing",
        "Reality manipulation algorithms",
        "Infinite computational power",
        "Dimensional computing"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that merge human consciousness with technology",
      features: [
        "Non-invasive neural reading",
        "Thought-to-action translation",
        "Memory enhancement",
        "Consciousness transfer"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      features: [
        "Multi-dimensional processing",
        "Parallel universe computing",
        "Dimensional data storage",
        "Reality simulation"
      ],
      icon: "🌌",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Revolutionary Technology Showcase 2025
            </motion.h1>
            <motion.p
              className="text-2xl opacity-90 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
            </motion.p>
          </div>

          {/* Interactive Technology Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-white/80 mb-6 text-center text-sm">
                  {tech.description}
                </p>
                <ul className="text-white/70 space-y-2 mb-6 text-xs">
                  {tech.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Explore Technology →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Technology Showcase */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🌟 {technologies[activeTab].title}</h2>
              <p className="text-xl opacity-90">{technologies[activeTab].description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Revolutionary Impact</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Industry Transformation</h4>
                    <p className="text-sm opacity-90">Complete paradigm shift in how we interact with technology</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Human Enhancement</h4>
                    <p className="text-sm opacity-90">Augmenting human capabilities beyond current limitations</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Future Possibilities</h4>
                    <p className="text-sm opacity-90">Unlocking infinite potential for innovation and growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
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