import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems 2025",
      description: "Experience the next generation of artificial intelligence that thinks, learns, and adapts in real-time.",
      features: [
        "Conscious AI with emotional intelligence",
        "Real-time learning and adaptation",
        "Multi-modal processing capabilities",
        "Autonomous decision making",
        "Human-AI collaboration interfaces"
      ],
      stats: {
        "Processing Speed": "1000x faster",
        "Accuracy": "99.9%",
        "Learning Rate": "Exponential",
        "Applications": "Unlimited"
      }
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Harness the power of quantum mechanics to solve problems that were previously impossible.",
      features: [
        "Quantum supremacy achieved",
        "Cryptographic security",
        "Molecular simulation",
        "Optimization algorithms",
        "Quantum machine learning"
      ],
      stats: {
        "Qubits": "1000+",
        "Coherence Time": "100ms",
        "Error Rate": "<0.01%",
        "Speedup": "Exponential"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless communication between mind and machine.",
      features: [
        "Non-invasive BCI technology",
        "Thought-to-text conversion",
        "Neural pattern recognition",
        "Emotional state detection",
        "Cognitive enhancement"
      ],
      stats: {
        "Accuracy": "95%",
        "Response Time": "<100ms",
        "Channels": "256+",
        "Safety": "100%"
      }
    }
  };

  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <>
      <SEOHead
        title="Revolutionary Tech Showcase 2025 | Zion Tech Group"
        description="Experience the most advanced technology of 2025 including AI consciousness, quantum computing, and neural interfaces. Discover revolutionary solutions that will reshape our world."
        keywords="revolutionary technology, AI consciousness, quantum computing, neural interfaces, 2025 technology, advanced AI, cutting-edge tech"
        canonical="https://ziontechgroup.com/pages/RevolutionaryTechShowcase2025"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology that will reshape our world in 2025 and beyond
          </p>
        </motion.div>

        {/* Technology Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            {Object.keys(technologies).map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTab(tech)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tech
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {tech === 'ai' && '🤖 AI Systems'}
                {tech === 'quantum' && '⚛️ Quantum Computing'}
                {tech === 'neural' && '🧠 Neural Interface'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technology Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">{currentTech.title}</h2>
              <p className="text-xl opacity-90 leading-relaxed">{currentTech.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {currentTech.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(currentTech.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{value}</div>
                  <div className="text-sm opacity-80">{key}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Try our interactive demos and see how these revolutionary technologies can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              🚀 Start Interactive Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              📊 View Case Studies
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              💼 Schedule Consultation
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of companies already using our revolutionary technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default RevolutionaryTechShowcase2025;