import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with quantum technology that solves impossible problems and unlocks unprecedented computational power
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Solutions
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Watch Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Capabilities</h2>
            <p className="text-xl text-gray-300">Harness the power of quantum mechanics for revolutionary computing solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Exponential Speed",
                description: "Solve complex problems exponentially faster than classical computers using quantum parallelism.",
                features: ["10^15x faster processing", "Parallel computation", "Quantum algorithms"]
              },
              {
                icon: "🔐",
                title: "Quantum Cryptography",
                description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
                features: ["Unhackable security", "Quantum key distribution", "Future-proof encryption"]
              },
              {
                icon: "🧬",
                title: "Molecular Simulation",
                description: "Simulate complex molecular structures and chemical reactions with unprecedented accuracy.",
                features: ["Drug discovery", "Material science", "Chemical modeling"]
              },
              {
                icon: "🎯",
                title: "Optimization Problems",
                description: "Solve complex optimization challenges in logistics, finance, and resource allocation.",
                features: ["Portfolio optimization", "Supply chain", "Route planning"]
              },
              {
                icon: "🔍",
                title: "Machine Learning",
                description: "Quantum machine learning algorithms that process data in quantum superposition states.",
                features: ["Quantum neural networks", "Pattern recognition", "Data analysis"]
              },
              {
                icon: "🌐",
                title: "Quantum Internet",
                description: "Ultra-secure quantum communication networks with instant data transmission.",
                features: ["Quantum teleportation", "Secure communication", "Global quantum network"]
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-800/50 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((item, idx) => (
                    <li key={idx} className="text-blue-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300">Quantum computing solutions already transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                industry: "Healthcare & Pharmaceuticals",
                icon: "🏥",
                applications: [
                  "Drug discovery and molecular design",
                  "Personalized medicine optimization",
                  "Protein folding simulations",
                  "Cancer treatment planning"
                ],
                impact: "Reducing drug development time from 10+ years to 2-3 years"
              },
              {
                industry: "Financial Services",
                icon: "💰",
                applications: [
                  "Portfolio optimization and risk analysis",
                  "Fraud detection and prevention",
                  "High-frequency trading algorithms",
                  "Cryptocurrency security"
                ],
                impact: "Achieving 99.9% accuracy in fraud detection"
              },
              {
                industry: "Logistics & Transportation",
                icon: "🚚",
                applications: [
                  "Route optimization for delivery networks",
                  "Supply chain management",
                  "Traffic flow optimization",
                  "Resource allocation"
                ],
                impact: "Reducing logistics costs by up to 40%"
              },
              {
                industry: "Energy & Environment",
                icon: "⚡",
                applications: [
                  "Renewable energy optimization",
                  "Climate modeling and prediction",
                  "Carbon capture simulation",
                  "Smart grid management"
                ],
                impact: "Accelerating clean energy transition by 5x"
              }
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{application.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{application.industry}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {application.applications.map((app, idx) => (
                    <li key={idx} className="text-blue-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {app}
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-4">
                  <p className="text-white font-semibold">Impact: {application.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Timeline</h2>
            <p className="text-xl text-gray-300">The evolution of quantum computing and what's coming next</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {[
              {
                year: "2024",
                title: "Quantum Supremacy Achieved",
                description: "First demonstration of quantum computers outperforming classical computers on specific tasks",
                status: "completed"
              },
              {
                year: "2025",
                title: "Commercial Quantum Services",
                description: "Widespread availability of quantum computing as a service for enterprise applications",
                status: "current"
              },
              {
                year: "2026",
                title: "Quantum Internet Launch",
                description: "First quantum communication networks enabling ultra-secure global communication",
                status: "upcoming"
              },
              {
                year: "2027",
                title: "Fault-Tolerant Quantum Computing",
                description: "Error-corrected quantum computers capable of running complex algorithms reliably",
                status: "upcoming"
              },
              {
                year: "2030",
                title: "Universal Quantum Computing",
                description: "General-purpose quantum computers solving real-world problems across all industries",
                status: "future"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-2 ${
                    milestone.status === 'completed' ? 'bg-green-500 text-white' :
                    milestone.status === 'current' ? 'bg-blue-500 text-white' :
                    milestone.status === 'upcoming' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be among the first to leverage quantum computing for your business. Join the quantum revolution today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Quantum Journey
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2025;