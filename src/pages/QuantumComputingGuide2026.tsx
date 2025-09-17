import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, Cpu, Zap, Shield, Globe, Brain, CheckCircle, Play, Download } from 'lucide-react';
const QuantumComputingGuide2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const tabs = [
    { id: 'basics', label: 'Quantum Basics', icon: Atom },
    { id: 'applications', label: 'Applications', icon: Cpu },
    { id: 'implementation', label: 'Implementation', icon: Zap },
    { id: 'future', label: 'Future Trends', icon: Brain }
  ];
  const quantumBasics = [
    {
      concept: "Quantum Superposition",
      description: "Quantum bits can exist in multiple states simultaneously",
      example: "A qubit can be both 0 and 1 at the same time"
    },
    {
      concept: "Quantum Entanglement",
      description: "Particles become interconnected regardless of distance",
      example: "Changing one particle instantly affects its entangled partner"
    },
    {
      concept: "Quantum Tunneling",
      description: "Particles can pass through barriers they shouldn't be able to",
      example: "Electrons tunneling through insulating materials"
    }
  ];
  const applications = [
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption methods",
      icon: Shield,
      benefits: ["Unbreakable security", "Post-quantum cryptography", "Secure communications"]
    },
    {
      title: "Optimization",
      description: "Solving complex optimization problems",
      icon: Zap,
      benefits: ["Supply chain optimization", "Financial modeling", "Logistics planning"]
    },
    {
      title: "Drug Discovery",
      description: "Simulating molecular interactions",
      icon: Atom,
      benefits: ["Faster drug development", "Molecular simulation", "Chemical analysis"]
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations",
      icon: Globe,
      benefits: ["Weather prediction", "Climate change modeling", "Environmental analysis"]
    }
  ];
  const implementationSteps = [
    {
      step: 1,
      title: "Assessment & Planning",
      description: "Evaluate your organization's readiness for quantum computing",
      duration: "2-4 weeks"
    },
    {
      step: 2,
      title: "Infrastructure Setup",
      description: "Install quantum computing hardware and software",
      duration: "4-8 weeks"
    },
    {
      step: 3,
      title: "Algorithm Development",
      description: "Develop quantum algorithms for your specific use cases",
      duration: "8-12 weeks"
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "Test and optimize quantum algorithms for production",
      duration: "4-6 weeks"
    },
    {
      step: 5,
      title: "Deployment & Monitoring",
      description: "Deploy quantum solutions and monitor performance",
      duration: "Ongoing"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Quantum Computing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Guide 2026
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Master the fundamentals and applications of quantum computing in the modern era
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Guide
            </button>
          </motion.div>
        </div>
      </section>
      {/* Tabbed Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            {activeTab === 'basics' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Quantum Computing Fundamentals</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {quantumBasics.map((basic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/20"
                    >
                      <h3 className="text-xl font-bold text-white mb-3">{basic.concept}</h3>
                      <p className="text-gray-300 mb-4">{basic.description}</p>
                      <div className="bg-cyan-500/20 rounded-lg p-3">
                        <p className="text-cyan-300 text-sm"><strong>Example:</strong> {basic.example}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Quantum Computing Applications</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/20"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-xl mr-4">
                          <app.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{app.title}</h3>
                          <p className="text-gray-300">{app.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'implementation' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Implementation Roadmap</h2>
                <div className="space-y-6">
                  {implementationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center bg-white/5 rounded-2xl p-6 border border-white/20"
                    >
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 mb-2">{step.description}</p>
                        <span className="text-cyan-400 text-sm font-medium">Duration: {step.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'future' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Future of Quantum Computing</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">2026-2030 Predictions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        Quantum advantage in optimization problems
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        Mainstream quantum cloud services
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        Quantum machine learning breakthroughs
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        Quantum internet infrastructure
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Emerging Technologies</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        Quantum neural networks
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        Topological quantum computing
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        Quantum error correction
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        Quantum-classical hybrid systems
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Interactive Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Interactive Quantum Demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Experience quantum computing concepts through interactive simulations
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto"
          >
            <Play className="w-5 h-5" />
            Launch Quantum Simulator
          </motion.button>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Dive Deeper?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join our quantum computing community and stay ahead of the curve
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Join Quantum Community
          </motion.button>
        </div>
      </section>
    </div>
  );

export default QuantumComputingGuide2026;