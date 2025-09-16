import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems 2025",
      description: "Experience the next generation of artificial intelligence that's reshaping industries and creating unprecedented opportunities.",
      features: [
        "Autonomous AI Agents with 99.9% accuracy",
        "Real-time Natural Language Processing",
        "Predictive Analytics with 95% precision",
        "Self-learning Neural Networks",
        "Quantum-Enhanced AI Processing"
      ],
      stats: {
        "Processing Speed": "1000x faster",
        "Accuracy Rate": "99.9%",
        "Cost Reduction": "80%",
        "Implementation Time": "50% faster"
      }
    },
    quantum: {
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum computing solutions that solve impossible problems and unlock new possibilities.",
      features: [
        "Exponential computational power",
        "Quantum cryptography security",
        "Molecular simulation capabilities",
        "Optimization algorithms",
        "Quantum machine learning"
      ],
      stats: {
        "Computing Power": "10^15 operations/sec",
        "Security Level": "Unbreakable",
        "Problem Solving": "1000x faster",
        "Energy Efficiency": "90% less power"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that bridge the gap between human consciousness and digital systems.",
      features: [
        "Non-invasive brain-computer interfaces",
        "Thought-controlled systems",
        "Neural feedback loops",
        "Consciousness computing",
        "Mind-machine synchronization"
      ],
      stats: {
        "Response Time": "0.1ms",
        "Accuracy": "98.5%",
        "Safety Level": "100% non-invasive",
        "Compatibility": "Universal"
      }
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Tech Showcase 2025
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most advanced technology solutions that are reshaping our world and creating infinite possibilities for the future.
          </motion.p>
        </motion.div>

        {/* Interactive Technology Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(technologies).map((tech) => (
              <motion.button
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tech)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tech
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {tech === 'ai' && '🤖 AI Systems'}
                {tech === 'quantum' && '⚛️ Quantum Computing'}
                {tech === 'neural' && '🧠 Neural Interfaces'}
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
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-purple-300">
                    {technologies[activeTab as keyof typeof technologies].title}
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {technologies[activeTab as keyof typeof technologies].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-3xl font-bold text-purple-300 mb-2">{value}</div>
                        <div className="text-sm text-white/70">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-300">Interactive Technology Demo</h2>
            <p className="text-xl text-white/90">Experience our revolutionary technologies in action</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">AI Brain Simulation</h3>
              <p className="text-white/90 mb-6 text-center">
                Watch as our AI processes complex data in real-time, making decisions faster than human thought.
              </p>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-300">Quantum Processing</h3>
              <p className="text-white/90 mb-6 text-center">
                Experience quantum computing solving problems that would take classical computers millennia.
              </p>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch Quantum
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Neural Interface</h3>
              <p className="text-white/90 mb-6 text-center">
                Connect your mind directly to our systems and control technology with your thoughts.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect Mind
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6 text-purple-300">Ready to Transform Your Future?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already using our revolutionary technology to achieve unprecedented success.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;