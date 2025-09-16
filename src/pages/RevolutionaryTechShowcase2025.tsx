import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      description: "Experience the next generation of AI that thinks, learns, and creates like never before",
      features: [
        "Neural Network Optimization",
        "Real-time Learning Algorithms", 
        "Emotional Intelligence Integration",
        "Autonomous Decision Making"
      ],
      stats: { accuracy: "99.9%", speed: "1000x", efficiency: "500%" },
      color: "from-blue-500 to-purple-600"
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Unlock the power of quantum mechanics for unprecedented computational capabilities",
      features: [
        "Quantum Supremacy",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Optimization"
      ],
      stats: { qubits: "1000+", speed: "10^18 ops/sec", accuracy: "99.99%" },
      color: "from-cyan-500 to-blue-600"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Connect your mind directly to digital systems for seamless human-computer interaction",
      features: [
        "Brain-Computer Interface",
        "Thought Control",
        "Neural Feedback",
        "Mind-Machine Fusion"
      ],
      stats: { latency: "<1ms", accuracy: "99.8%", bandwidth: "1TB/s" },
      color: "from-emerald-500 to-teal-600"
    }
  };

  const tabs = [
    { id: 'ai', label: 'AI Revolution', icon: '🤖' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', label: 'Neural Interface', icon: '🧠' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH SHOWCASE • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that are reshaping our world and defining the future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
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
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-purple-300 mb-2">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Explore Technology
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators already using our revolutionary technology to transform their businesses and shape the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;