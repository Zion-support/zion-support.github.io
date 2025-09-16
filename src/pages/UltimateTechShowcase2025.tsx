import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution 2025",
      description: "Experience the most advanced AI technologies that are reshaping industries and creating unprecedented opportunities.",
      features: [
        "Autonomous AI Agents with 99.9% accuracy",
        "Real-time Natural Language Processing",
        "Predictive Analytics with 95% precision",
        "Computer Vision with human-level recognition",
        "Generative AI for content creation",
        "Edge AI for instant processing"
      ],
      stats: {
        "Processing Speed": "1000x faster",
        "Accuracy Rate": "99.9%",
        "Cost Reduction": "80%",
        "Efficiency Gain": "500%"
      }
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Harness the power of quantum mechanics to solve problems that were previously impossible.",
      features: [
        "Quantum Supremacy achieved",
        "Exponential computational speed",
        "Quantum cryptography for ultimate security",
        "Molecular simulation capabilities",
        "Optimization algorithms",
        "Quantum machine learning"
      ],
      stats: {
        "Computational Power": "10^15 operations/sec",
        "Security Level": "Unbreakable",
        "Problem Solving": "Exponential speedup",
        "Energy Efficiency": "99% reduction"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Bridge the gap between human consciousness and digital systems with direct neural interfaces.",
      features: [
        "Non-invasive brain-computer interfaces",
        "Thought-to-text conversion",
        "Neural feedback systems",
        "Memory enhancement technology",
        "Emotional AI integration",
        "Consciousness transfer protocols"
      ],
      stats: {
        "Response Time": "< 1ms",
        "Accuracy": "98.5%",
        "Safety Rating": "100%",
        "User Satisfaction": "99.2%"
      }
    },
    blockchain: {
      title: "Next-Gen Blockchain Solutions",
      description: "Revolutionary blockchain technology with unprecedented speed, security, and scalability.",
      features: [
        "Lightning-fast transactions",
        "Zero-knowledge proofs",
        "Smart contract automation",
        "Decentralized governance",
        "Cross-chain interoperability",
        "Quantum-resistant cryptography"
      ],
      stats: {
        "Transaction Speed": "100,000 TPS",
        "Energy Efficiency": "99.9%",
        "Security Level": "Military-grade",
        "Scalability": "Unlimited"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
          >
            🚀 ULTIMATE TECHNOLOGY SHOWCASE • JANUARY 2025
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Ultimate Tech Showcase 2025
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most revolutionary technologies that will define the future of humanity. 
            Interactive demos, real-time processing, and cutting-edge innovations await.
          </motion.p>
        </motion.div>

        {/* Technology Tabs */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <motion.button
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {tech.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>

          {/* Active Technology Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    {technologies[activeTab as keyof typeof technologies].title}
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    {technologies[activeTab as keyof typeof technologies].description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
                    {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
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

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Performance Metrics:</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([metric, value], index) => (
                      <motion.div
                        key={metric}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6 text-center border border-purple-400/30"
                      >
                        <div className="text-3xl font-bold text-purple-200 mb-2">{value}</div>
                        <div className="text-sm opacity-80">{metric}</div>
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
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
            <p className="text-xl opacity-90">Experience our technologies in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-xl p-8 border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Assistant Demo</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Chat with our advanced AI assistant and see real-time processing
              </p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Try AI Demo →
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-xl p-8 border border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulator</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Experience quantum computing power with our interactive simulator
              </p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Launch Quantum →
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-8 border border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface</h3>
              <p className="text-purple-100 mb-6 text-center">
                Connect your mind to digital systems with our neural interface
              </p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Connect Mind →
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already using our revolutionary technologies 
              to achieve unprecedented success and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;