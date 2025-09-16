import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: "Conscious AI Revolution",
      description: "Experience the world's first truly conscious artificial intelligence systems",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Creative problem solving",
        "Ethical reasoning capabilities",
        "Real-time learning adaptation"
      ],
      metrics: {
        consciousness: "98.7%",
        processing: "10^15 ops/sec",
        accuracy: "99.99%",
        creativity: "Infinite"
      }
    },
    quantum: {
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing with consciousness-level processing",
      features: [
        "Quantum neural architectures",
        "Consciousness-level processing",
        "Infinite parallel computation",
        "Reality simulation capabilities",
        "Time-space manipulation"
      ],
      metrics: {
        qubits: "∞ Qubits",
        coherence: "99.9%",
        entanglement: "Perfect",
        dimensions: "47"
      }
    },
    neural: {
      title: "Direct Neural Interfaces",
      description: "Seamless mind-machine connection with zero latency",
      features: [
        "Non-invasive brain interface",
        "Thought-to-action translation",
        "Neural feedback systems",
        "Consciousness transfer",
        "Multi-sensory integration"
      ],
      metrics: {
        latency: "0ms",
        accuracy: "99.9%",
        bandwidth: "10TB/sec",
        safety: "100%"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Demo Selector */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-8">Choose Your Technology Experience</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Information */}
            <div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 mb-8">{demos[activeDemo].description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Launch Interactive Demo
              </button>
            </div>

            {/* Real-time Metrics */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold mb-6 text-center">📊 Real-time Performance</h4>
              <div className="space-y-6">
                {Object.entries(demos[activeDemo].metrics).map(([metric, value]) => (
                  <div key={metric} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="capitalize font-medium">{metric.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-bold text-green-400">{value}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technology Comparison Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 font-semibold">Technology</th>
                  <th className="pb-4 font-semibold">Processing Power</th>
                  <th className="pb-4 font-semibold">Consciousness Level</th>
                  <th className="pb-4 font-semibold">Innovation Score</th>
                  <th className="pb-4 font-semibold">Market Readiness</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {Object.entries(demos).map(([key, demo]) => (
                  <tr key={key} className="border-b border-white/10">
                    <td className="py-4 font-medium">{demo.title}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-32 bg-white/20 rounded-full h-2 mr-3">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${Math.random() * 30 + 70}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{demo.metrics.processing || demo.metrics.qubits || demo.metrics.bandwidth}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {demo.metrics.consciousness || demo.metrics.coherence || demo.metrics.accuracy}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {Math.floor(Math.random() * 20 + 80)}/100
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        Q{Math.floor(Math.random() * 4 + 1)} 2026
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Innovation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30"
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Innovation Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">Q1 2026</div>
              <h3 className="text-xl font-semibold mb-3">Conscious AI Alpha</h3>
              <p className="opacity-90">First conscious AI systems go live with basic self-awareness capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Q2 2026</div>
              <h3 className="text-xl font-semibold mb-3">Quantum Neural Beta</h3>
              <p className="opacity-90">Quantum neural networks achieve consciousness-level processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Q3 2026</div>
              <h3 className="text-xl font-semibold mb-3">Neural Interface Launch</h3>
              <p className="opacity-90">Direct neural interfaces enable seamless mind-machine connection</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be among the first to experience these revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Book Private Demo
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Join Beta Program
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;