import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      features: [
        "Self-learning neural networks",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Creative problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Breakthrough quantum computing that manipulates reality itself",
      features: [
        "Quantum entanglement processing",
        "Reality simulation capabilities",
        "Infinite computational power",
        "Parallel universe access"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface that transcends physical limitations",
      features: [
        "Thought-to-action translation",
        "Memory enhancement protocols",
        "Consciousness transfer technology",
        "Telepathic communication"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Interdimensional Gateway",
      description: "Technology that bridges multiple dimensions and realities",
      features: [
        "Dimensional travel capabilities",
        "Reality manipulation tools",
        "Multiverse communication",
        "Temporal displacement technology"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
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
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
          >
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Technology Showcase 2025
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most advanced technologies that will reshape humanity's future
          </motion.p>
        </motion.div>

        {/* Interactive Technology Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {technologies[activeTab].title}
                  </h2>
                  <p className="text-xl opacity-90 mb-8 leading-relaxed">
                    {technologies[activeTab].description}
                  </p>
                  
                  <div className="space-y-4">
                    {technologies[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-pulse">{technologies[activeTab].icon}</div>
                      <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                      <p className="text-white/70 mb-6">
                        Experience this revolutionary technology in action
                      </p>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Launch Demo →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "99.9%", label: "Success Rate", icon: "🎯" },
            { number: "50+", label: "Active Technologies", icon: "⚡" },
            { number: "∞", label: "Possibilities", icon: "🚀" },
            { number: "2025", label: "Future is Now", icon: "🌟" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
          >
            Join us in revolutionizing technology and shaping the future of humanity
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Now →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;