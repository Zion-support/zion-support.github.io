import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuantumComputingBreakthrough2025_2030Showcase() {
  const quantumBreakthroughs = [
    {
      year: "2025",
      title: "Error-Corrected Quantum Computers",
      description: "First commercially viable quantum computers with 99.99% error correction",
      qubits: "1,000+ Logical Qubits",
      applications: ["Drug Discovery"Financial Modeling"Climate Simulation"],
      icon: "🔬",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2026",
      title: "Quantum Machine Learning Revolution",
      description: "Quantum algorithms achieving exponential speedup in AI training",
      qubits: "10,000+ Logical Qubits",
      applications: ["Autonomous Vehicles"Medical Diagnosis"Supply Chain Optimization"],
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2027",
      title: "Quantum Internet Network",
      description: "Global quantum communication network with perfect security",
      qubits: "100,000+ Logical Qubits",
      applications: ["Secure Communications"Quantum Cloud Computing"Distributed AI"],
      icon: "🌐",
      color: "from-pink-500 to-red-500"
    },
    {
      year: "2028",
      title: "Quantum Supremacy Achieved",
      description: "Quantum computers solving problems impossible for classical computers",
      qubits: "1,000,000+ Logical Qubits",
      applications: ["Materials Science"Cryptography"Optimization"],
      icon: "⚡",
      color: "from-red-500 to-orange-500"
    },
    {
      year: "2029",
      title: "Quantum-AI Hybrid Systems",
      description: "Seamless integration of quantum and classical computing",
      qubits: "10,000,000+ Logical Qubits",
      applications: ["Real-time Decision Making"Predictive Analytics"Complex Simulations"],
      icon: "🤖",
      color: "from-orange-500 to-yellow-500"
    },
    {
      year: "2030",
      title: "Universal Quantum Computer",
      description: "Fully programmable quantum computer solving any computable problem",
      qubits: "100,000,000+ Logical Qubits",
      applications: ["Universal Problem Solving"Reality Simulation"Consciousness Modeling"],
      icon: "🌟",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const industryImpact = [
    {
      industry: "Healthcare",
      impact: "99.9% faster drug discoverypersonalized medicine",
      roi: "5,000% ROI",
      timeline: "2025-2027"
    },
    {
      industry: "Finance",
      impact: "Real-time risk analysisfraud detection",
      roi: "8,500% ROI",
      timeline: "2025-2028"
    },
    {
      industry: "Manufacturing",
      impact: "Optimized supply chainspredictive maintenance",
      roi: "12,000% ROI",
      timeline: "2026-2029"
    },
    {
      industry: "Energy",
      impact: "Nuclear fusion optimizationrenewable energy",
      roi: "15,000% ROI",
      timeline: "2027-2030"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0y: 50 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-lg">⚡ QUANTUM COMPUTING BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quantum Computing Revolution 2025-2030
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Experience the quantum leap that will revolutionize every industry. 
            From error-corrected quantum computers to universal quantum supremacy - 
            the future of computation is quantum.
          </p>
        </motion.div>
      </div>

      {/* Quantum Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Quantum Computing Evolution Timeline
        </h2>
        
        <div className="space-y-12">
          {quantumBreakthroughs.map((breakthroughindex) => (
            <motion.div
              key={breakthrough.year}
              initial={{ opacity: 0x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.8delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className={`bg-gradient-to-r ${breakthrough.color} p-8 rounded-2xl shadow-2xl border border-white/10`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{breakthrough.icon}</span>
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">{breakthrough.year}</div>
                      <h3 className="text-3xl font-bold text-white">{breakthrough.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-200 text-lg mb-6">{breakthrough.description}</p>
                  <div className="bg-black/20 p-4 rounded-lg border border-white/20 mb-4">
                    <span className="text-yellow-400 font-bold text-lg">{breakthrough.qubits}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Key Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {breakthrough.applications.map((appidx) => (
                        <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold text-white mb-6">Revolutionary Impact</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">⚡</span>
                      <span>Exponential computational speed increase</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400">🔒</span>
                      <span>Unbreakable quantum cryptography</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">🎯</span>
                      <span>Perfect optimization solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🚀</span>
                      <span>Breakthrough scientific discoveries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Industry Transformation Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryImpact.map((impactindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0y: 50 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ duration: 0.8delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{impact.industry}</h3>
                <p className="text-blue-400 font-semibold">{impact.timeline}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-300 mb-2">Impact:</h4>
                <p className="text-gray-400">{impact.impact}</p>
              </div>
              
              <div className="text-center">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full text-white font-bold">
                  {impact.roi}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quantum Advantage Calculator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Advantage Calculator
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/20 p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">10^15</div>
              <div className="text-gray-300">Speed Improvement</div>
              <div className="text-sm text-gray-400 mt-2">vs Classical Computers</div>
            </div>
            <div className="bg-black/20 p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300">Error Correction</div>
              <div className="text-sm text-gray-400 mt-2">Reliability Rate</div>
            </div>
            <div className="bg-black/20 p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300">Problem Solving</div>
              <div className="text-sm text-gray-400 mt-2">Computational Limit</div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Quantum computers will solve problems that would take classical computers longer than the age of the universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/quantum-computing-breakthrough-2025-2030"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum Timeline
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Quantum Strategy
            </Link>
          </div>
        </div>
      </div>

      {/* Quantum Applications Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Revolutionary Quantum Applications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0y: 50 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Drug Discovery</h3>
            <p className="text-gray-300 mb-4">
              Quantum simulation of molecular interactions for accelerated drug development
            </p>
            <div className="text-green-400 font-bold">99% faster development</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0y: 50 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
            className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
            <p className="text-gray-300 mb-4">
              Unbreakable encryption using quantum key distribution
            </p>
            <div className="text-green-400 font-bold">100% secure communication</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0y: 50 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8delay: 0.4 }}
            className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-8 rounded-2xl border border-pink-500/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-white mb-4">Climate Modeling</h3>
            <p className="text-gray-300 mb-4">
              Accurate climate predictions through quantum atmospheric simulation
            </p>
            <div className="text-green-400 font-bold">1000x more accurate</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}