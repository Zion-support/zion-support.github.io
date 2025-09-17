import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const QuantumAIIntegration2026: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum AI Integration: The Future is Now | Revolutionary Technology</title>
        <meta name="description" content="Explore the revolutionary convergence of quantum computing and artificial intelligence in 2026. Discover quantum advantages, real-world applications, and implementation strategies." />
        <meta name="keywords" content="quantum computing, AI integration, quantum AI, future technology, quantum algorithms, computational power" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Quantum AI Integration:
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Future is Now
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The convergence of quantum computing and artificial intelligence represents one of the most significant technological breakthroughs of our time.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Quantum AI
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Quantum Advantage Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Quantum Advantage
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Parallel Processing",
                  description: "Millions of calculations simultaneously",
                  icon: "⚡"
                },
                {
                  title: "Optimization Speed",
                  description: "Complex problems solved in minutes",
                  icon: "🚀"
                },
                {
                  title: "Pattern Recognition",
                  description: "Enhanced data pattern identification",
                  icon: "🔍"
                },
                {
                  title: "Security Enhancement",
                  description: "Quantum encryption for AI protection",
                  icon: "🔒"
                }
              ].map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Real-World Applications
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: "Financial Services",
                  applications: [
                    "Real-time risk assessment",
                    "Advanced fraud detection", 
                    "Portfolio optimization"
                  ],
                  color: "from-green-500 to-emerald-600"
                },
                {
                  industry: "Healthcare Innovation",
                  applications: [
                    "Accelerated drug discovery",
                    "Personalized medicine",
                    "Enhanced medical imaging"
                  ],
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  industry: "Climate Science",
                  applications: [
                    "Weather prediction modeling",
                    "Carbon capture optimization",
                    "Renewable energy efficiency"
                  ],
                  color: "from-green-500 to-teal-600"
                }
              ].map((sector, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{sector.industry}</h3>
                  <ul className="space-y-3">
                    {sector.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-300 flex items-center">
                        <span className={`w-2 h-2 bg-gradient-to-r ${sector.color} rounded-full mr-3`}></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Industry Impact
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "40%", label: "Faster Optimization" },
                { metric: "60%", label: "Predictive Accuracy" },
                { metric: "80%", label: "Computational Speed" },
                { metric: "100%", label: "Future Ready" }
              ].map((impact, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-purple-400 mb-4">{impact.metric}</div>
                  <div className="text-xl text-gray-300">{impact.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Roadmap Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Getting Started
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Assessment Phase</h3>
                <ul className="space-y-4">
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Capability Evaluation
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Use Case Identification
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    ROI Analysis
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Implementation Roadmap</h3>
                <ul className="space-y-4">
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Pilot Projects
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Skill Development
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Infrastructure Planning
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-purple-500/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Begin Your Quantum Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Organizations that begin their quantum journey today will be the leaders of tomorrow's digital economy.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Quantum Experts
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumAIIntegration2026;