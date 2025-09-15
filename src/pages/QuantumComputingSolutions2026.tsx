import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingSolutions2026: React.FC = () => {
  const [selectedQubit, setSelectedQubit] = useState(50);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM COMPUTING 2026 • REVOLUTIONARY POWER
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Solutions 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Harness the power of quantum computing to solve impossible problems and unlock unprecedented computational capabilities. 
              Experience the future of computing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold">
                Try Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Power Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">⚡ Quantum Power Calculator</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the exponential power of quantum computing. Adjust the number of qubits to see the incredible computational advantage.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Quantum Qubits</h3>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Number of Qubits: {selectedQubit}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={selectedQubit}
                      onChange={(e) => setSelectedQubit(parseInt(e.target.value))}
                      className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span>Quantum States:</span>
                      <span className="text-cyan-400 font-mono">
                        2^{selectedQubit} = {Math.pow(2, selectedQubit).toExponential(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span>Classical Bits Equivalent:</span>
                      <span className="text-cyan-400 font-mono">{selectedQubit}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Computational Advantage</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-lg border border-green-400/30">
                      <div className="text-sm text-green-200 mb-1">Speed Improvement</div>
                      <div className="text-2xl font-bold text-green-400">
                        {Math.pow(2, selectedQubit / 10).toExponential(1)}x faster
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg border border-purple-400/30">
                      <div className="text-sm text-purple-200 mb-1">Memory Efficiency</div>
                      <div className="text-2xl font-bold text-purple-400">
                        {Math.pow(2, selectedQubit / 5).toExponential(1)}x less memory
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-lg border border-orange-400/30">
                      <div className="text-sm text-orange-200 mb-1">Problem Solving</div>
                      <div className="text-2xl font-bold text-orange-400">
                        {selectedQubit > 50 ? 'Exponential' : 'Polynomial'} complexity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="py-20 bg-gradient-to-r from-cyan-800/30 to-blue-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Quantum Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the cutting-edge quantum technologies that are revolutionizing computing and problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Quantum Supremacy",
                description: "Achieve computational tasks that are impossible for classical computers using quantum algorithms",
                features: ["Exponential Speed", "Complex Optimization", "Cryptography Breaking", "Molecular Simulation"]
              },
              {
                icon: "🔐",
                title: "Quantum Cryptography",
                description: "Unbreakable encryption using quantum principles for ultimate security and data protection",
                features: ["Quantum Key Distribution", "Unbreakable Encryption", "Secure Communication", "Future-Proof Security"]
              },
              {
                icon: "🧬",
                title: "Quantum Chemistry",
                description: "Simulate molecular interactions and chemical reactions with unprecedented accuracy",
                features: ["Molecular Simulation", "Drug Discovery", "Material Design", "Chemical Analysis"]
              },
              {
                icon: "🌐",
                title: "Quantum Internet",
                description: "Global quantum network enabling secure communication and distributed quantum computing",
                features: ["Quantum Entanglement", "Global Network", "Secure Communication", "Distributed Computing"]
              },
              {
                icon: "🤖",
                title: "Quantum Machine Learning",
                description: "Revolutionary AI algorithms that leverage quantum computing for enhanced learning capabilities",
                features: ["Quantum Neural Networks", "Enhanced Learning", "Pattern Recognition", "Optimization"]
              },
              {
                icon: "🔮",
                title: "Quantum Sensing",
                description: "Ultra-precise sensors that can detect the smallest changes in physical quantities",
                features: ["Ultra-Precision", "Magnetic Field Detection", "Gravitational Waves", "Medical Imaging"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-cyan-100 mb-6 text-center">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-cyan-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🚀 Quantum Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real-world applications of quantum computing that are transforming industries and solving complex problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Financial Optimization",
                description: "Revolutionary portfolio optimization and risk analysis using quantum algorithms",
                benefits: [
                  "Portfolio optimization 1000x faster",
                  "Real-time risk analysis",
                  "Fraud detection with quantum ML",
                  "High-frequency trading optimization"
                ],
                icon: "💰"
              },
              {
                title: "Drug Discovery",
                description: "Accelerated drug discovery through quantum molecular simulation",
                benefits: [
                  "Molecular interaction simulation",
                  "Drug efficacy prediction",
                  "Side effect analysis",
                  "Personalized medicine development"
                ],
                icon: "💊"
              },
              {
                title: "Climate Modeling",
                description: "Advanced climate modeling and environmental prediction using quantum computing",
                benefits: [
                  "Complex climate simulation",
                  "Weather pattern prediction",
                  "Carbon footprint optimization",
                  "Renewable energy optimization"
                ],
                icon: "🌍"
              },
              {
                title: "Supply Chain Optimization",
                description: "Ultra-efficient supply chain management with quantum optimization algorithms",
                benefits: [
                  "Route optimization",
                  "Inventory management",
                  "Demand forecasting",
                  "Cost reduction strategies"
                ],
                icon: "📦"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{app.title}</h3>
                <p className="text-cyan-100 mb-6 text-center">{app.description}</p>
                <ul className="space-y-3">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-cyan-200 text-sm flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Success Stories */}
      <section className="py-20 bg-gradient-to-r from-cyan-800/30 to-blue-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🏆 Quantum Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how quantum computing is delivering unprecedented results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Quantum Finance Corp",
                result: "1000x Faster Trading",
                description: "Implemented quantum algorithms for high-frequency trading, achieving 1000x faster execution and 500% profit increase",
                icon: "💰"
              },
              {
                company: "PharmaTech Solutions",
                result: "90% Faster Drug Discovery",
                description: "Used quantum molecular simulation to accelerate drug discovery by 90%, bringing life-saving medications to market faster",
                icon: "💊"
              },
              {
                company: "ClimateTech Global",
                result: "99.9% Accurate Predictions",
                description: "Deployed quantum climate modeling achieving 99.9% accuracy in weather predictions, saving millions in disaster prevention",
                icon: "🌍"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{story.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{story.company}</h3>
                <div className="text-center mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold">
                    {story.result}
                  </span>
                </div>
                <p className="text-cyan-100 text-center">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join the quantum revolution and unlock unprecedented computational capabilities for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Quantum Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                Schedule Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions2026;