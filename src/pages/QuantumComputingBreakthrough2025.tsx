import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingBreakthrough2025: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);

  const demos = [
    {
      title: "Quantum Supremacy Demo",
      description: "Witness quantum computers solving problems that would take classical computers millions of years.",
      features: ["Exponential speedup", "Quantum parallelism", "Complex optimization", "Real-time results"],
      icon: "⚡",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum principles for ultimate security.",
      features: ["Quantum key distribution", "Unhackable communication", "Quantum entanglement", "Perfect security"],
      icon: "🔐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "AI powered by quantum computing for unprecedented learning capabilities.",
      features: ["Quantum neural networks", "Quantum advantage", "Faster training", "Better accuracy"],
      icon: "🧠",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Simulating molecular interactions for faster pharmaceutical development.",
      impact: "10x faster drug development",
      icon: "💊"
    },
    {
      title: "Financial Modeling",
      description: "Complex risk analysis and portfolio optimization in real-time.",
      impact: "99.9% accuracy in predictions",
      icon: "💰"
    },
    {
      title: "Climate Simulation",
      description: "Modeling climate change scenarios with unprecedented detail.",
      impact: "1000x more detailed models",
      icon: "🌍"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimizing complex logistics networks across global operations.",
      impact: "40% cost reduction",
      icon: "🚚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the power of quantum computing with our breakthrough technology that's solving impossible problems and reshaping the future.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Quantum Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Quantum Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">10^18</div>
              <div className="text-lg opacity-80">Operations/Second</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">1000x</div>
              <div className="text-lg opacity-80">Speed Increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Interactive Quantum Demos
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience quantum computing in action with our interactive demonstrations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedDemo(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  selectedDemo === index
                    ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400'
                    : 'bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-gray-300">{demo.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedDemo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
          >
            <div className="text-6xl mb-6 text-center">{demos[selectedDemo].icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center">{demos[selectedDemo].title}</h3>
            <p className="text-gray-300 mb-6 text-center">{demos[selectedDemo].description}</p>
            <div className="space-y-3">
              {demos[selectedDemo].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></span>
                  {feature}
                </div>
              ))}
            </div>
            <button className={`w-full mt-6 bg-gradient-to-r ${demos[selectedDemo].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Try This Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Real-World Applications
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See how quantum computing is transforming industries and solving complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="text-4xl mb-4 text-center">{app.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{app.title}</h3>
              <p className="text-gray-300 mb-4 text-center text-sm">{app.description}</p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {app.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/30"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Quantum Computing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and discover how our breakthrough technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;