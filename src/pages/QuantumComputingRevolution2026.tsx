import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  const [selectedApplication, setSelectedApplication] = useState(0);

  const quantumApplications = [
    {
      title: "Drug Discovery & Healthcare",
      description: "Revolutionary molecular simulation for faster drug development",
      icon: "💊",
      benefits: ["10x faster drug discovery", "Precision medicine", "Molecular optimization", "Disease modeling"],
      impact: "Breakthrough treatments in months, not years"
    },
    {
      title: "Financial Modeling",
      description: "Advanced portfolio optimization and risk analysis",
      icon: "💰",
      benefits: ["Complex risk modeling", "Portfolio optimization", "Fraud detection", "Market prediction"],
      impact: "Unprecedented financial insights"
    },
    {
      title: "Climate Science",
      description: "Climate modeling and environmental optimization",
      icon: "🌍",
      benefits: ["Climate prediction", "Carbon capture optimization", "Renewable energy", "Environmental modeling"],
      impact: "Accelerated climate solutions"
    },
    {
      title: "Cryptography & Security",
      description: "Quantum-resistant encryption and secure communications",
      icon: "🔐",
      benefits: ["Quantum encryption", "Secure communications", "Data protection", "Future-proof security"],
      impact: "Unbreakable security protocols"
    },
    {
      title: "Artificial Intelligence",
      description: "Quantum-enhanced machine learning and neural networks",
      icon: "🤖",
      benefits: ["Quantum neural networks", "Faster training", "Complex pattern recognition", "Optimization algorithms"],
      impact: "Exponential AI capabilities"
    },
    {
      title: "Materials Science",
      description: "Discovery of new materials with quantum properties",
      icon: "🔬",
      benefits: ["Superconductors", "Quantum materials", "Energy storage", "Advanced composites"],
      impact: "Revolutionary material breakthroughs"
    }
  ];

  const quantumTechnologies = [
    {
      name: "Quantum Supremacy",
      description: "Achieving computational tasks impossible for classical computers",
      status: "Achieved",
      progress: 100
    },
    {
      name: "Quantum Error Correction",
      description: "Maintaining quantum coherence for practical applications",
      status: "In Development",
      progress: 75
    },
    {
      name: "Quantum Internet",
      description: "Global quantum communication network",
      status: "Pilot Phase",
      progress: 40
    },
    {
      name: "Quantum Cloud Computing",
      description: "Accessible quantum computing via cloud platforms",
      status: "Available",
      progress: 90
    }
  ];

  const caseStudies = [
    {
      company: "Pharmaceutical Giant",
      challenge: "Accelerate drug discovery for rare diseases",
      solution: "Quantum molecular simulation platform",
      results: "5x faster drug development, 3 new treatments in 6 months"
    },
    {
      company: "Global Investment Bank",
      challenge: "Optimize complex trading strategies",
      solution: "Quantum portfolio optimization algorithms",
      results: "25% better returns, 50% reduced risk"
    },
    {
      company: "Climate Research Institute",
      challenge: "Model climate change scenarios",
      solution: "Quantum climate simulation system",
      results: "100x faster simulations, breakthrough climate insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION 2026 • BREAKTHROUGH COMPUTING
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Experience the power of quantum computing that's solving impossible problems and unlocking new possibilities across every industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions →
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Quantum Applications</h2>
            <p className="text-xl text-gray-600">Discover how quantum computing is transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedApplication === index ? 'ring-2 ring-cyan-500 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedApplication(index)}
              >
                <div className="text-6xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{app.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{app.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-4 text-center">
                  <span className="text-sm font-semibold text-cyan-700">Impact: {app.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Progress */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚡ Technology Progress</h2>
            <p className="text-xl text-gray-600">Current state of quantum computing technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tech.status === 'Achieved' ? 'bg-green-100 text-green-700' :
                    tech.status === 'Available' ? 'bg-blue-100 text-blue-700' :
                    tech.status === 'In Development' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {tech.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🏆 Quantum Success Stories</h2>
            <p className="text-xl opacity-90">Real results from quantum computing implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-sm opacity-80">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm opacity-80">{study.solution}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
                  <h4 className="font-semibold text-green-300 mb-1">Results:</h4>
                  <p className="text-green-200 text-sm font-medium">{study.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Computing Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Why Choose Quantum Computing?</h2>
            <p className="text-xl text-gray-600">Unlock unprecedented computational power</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Exponential Speed", description: "Solve problems in seconds that would take classical computers millennia" },
              { icon: "🔬", title: "Complex Simulation", description: "Model molecular interactions and quantum phenomena with perfect accuracy" },
              { icon: "🔐", title: "Unbreakable Security", description: "Quantum cryptography provides theoretically unbreakable encryption" },
              { icon: "🌍", title: "Global Impact", description: "Address climate change, healthcare, and global challenges at scale" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the quantum computing revolution and discover how this breakthrough technology can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Start Quantum Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2026;