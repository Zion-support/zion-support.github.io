import React from 'react';


const QuantumComputingBreakthrough2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-semibold mb-6">
              ⚛️ BREAKTHROUGH: Quantum Computing 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
              Experience the next generation of quantum computing that's solving problems 
              previously thought impossible and revolutionizing entire industries.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Explore Quantum Power →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Capabilities Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Quantum Capabilities</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Discover the unprecedented computational power that quantum computing brings to the table
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Quantum Supremacy",
                description: "Achieve computational tasks that would take classical computers millions of years to complete in mere seconds.",
                metrics: "10^18x faster",
                features: ["Exponential Speedup", "Parallel Processing", "Quantum Algorithms"]
              },
              {
                icon: "🔮",
                title: "Quantum Simulation",
                description: "Simulate complex quantum systems with unprecedented accuracy, enabling breakthroughs in materials science and drug discovery.",
                metrics: "99.9% accuracy",
                features: ["Molecular Modeling", "Chemical Reactions", "Material Properties"]
              },
              {
                icon: "🔐",
                title: "Quantum Cryptography",
                description: "Unbreakable encryption methods based on quantum principles, ensuring absolute security for sensitive data.",
                metrics: "100% secure",
                features: ["Quantum Key Distribution", "Unhackable Networks", "Perfect Privacy"]
              },
              {
                icon: "🧠",
                title: "Quantum Machine Learning",
                description: "Revolutionary AI algorithms that leverage quantum properties for exponentially faster pattern recognition and optimization.",
                metrics: "1000x faster",
                features: ["Quantum Neural Networks", "Optimization Problems", "Pattern Recognition"]
              },
              {
                icon: "🌐",
                title: "Quantum Internet",
                description: "Ultra-secure quantum communication networks that enable instant, unhackable data transmission across the globe.",
                metrics: "Instant global",
                features: ["Quantum Entanglement", "Secure Communication", "Global Networks"]
              },
              {
                icon: "🔬",
                title: "Quantum Sensing",
                description: "Ultra-precise measurement capabilities that can detect the smallest changes in magnetic fields, gravity, and time.",
                metrics: "10^-18 precision",
                features: ["Gravitational Waves", "Magnetic Fields", "Time Dilation"]
              }
            ].map((capability, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">{capability.metrics}</div>
                <p className="text-cyan-200 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="text-cyan-100 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Applications Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Transformative Applications</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              See how quantum computing is revolutionizing industries and solving humanity's greatest challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-3xl font-bold text-white mb-6">Healthcare & Drug Discovery</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Personalized Medicine</h4>
                      <p className="text-cyan-200">Quantum algorithms analyze individual genetic profiles to design personalized treatments with unprecedented precision.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Drug Discovery</h4>
                      <p className="text-cyan-200">Simulate complex molecular interactions to discover new drugs and treatments 1000x faster than traditional methods.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Protein Folding</h4>
                      <p className="text-cyan-200">Solve protein folding problems to understand diseases like Alzheimer's and develop targeted treatments.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-400/30">
                <h3 className="text-3xl font-bold text-white mb-6">Climate & Energy</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Climate Modeling</h4>
                      <p className="text-blue-200">Ultra-precise climate models that predict weather patterns and climate change with unprecedented accuracy.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Renewable Energy</h4>
                      <p className="text-blue-200">Optimize renewable energy systems and discover new materials for more efficient solar panels and batteries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Carbon Capture</h4>
                      <p className="text-blue-200">Design new materials and processes for efficient carbon capture and storage to combat climate change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
                <h3 className="text-3xl font-bold text-white mb-6">Finance & Optimization</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Portfolio Optimization</h4>
                      <p className="text-purple-200">Quantum algorithms optimize investment portfolios with millions of variables in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Risk Analysis</h4>
                      <p className="text-purple-200">Complex risk modeling that considers thousands of variables and market scenarios simultaneously.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Fraud Detection</h4>
                      <p className="text-purple-200">Real-time fraud detection using quantum machine learning to identify suspicious patterns instantly.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-3xl font-bold text-white mb-6">Logistics & Transportation</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Route Optimization</h4>
                      <p className="text-green-200">Solve complex routing problems for delivery, transportation, and supply chain optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Traffic Management</h4>
                      <p className="text-green-200">Real-time traffic optimization that reduces congestion and improves urban mobility.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Autonomous Vehicles</h4>
                      <p className="text-green-200">Quantum-enhanced AI for autonomous vehicle decision-making and navigation systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Technology Stack */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Technology Stack</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              The complete ecosystem of quantum computing technologies and tools
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Hardware</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Superconducting Qubits
                </li>
                <li className="flex items-center text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Ion Trap Processors
                </li>
                <li className="flex items-center text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Topological Qubits
                </li>
                <li className="flex items-center text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Photonic Quantum Computers
                </li>
                <li className="flex items-center text-cyan-200">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Neutral Atom Arrays
                </li>
              </ul>
            </div>

            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-400/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Software</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Qiskit Framework
                </li>
                <li className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Cirq Library
                </li>
                <li className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  PennyLane
                </li>
                <li className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Quantum Development Kit
                </li>
                <li className="flex items-center text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Quantum Machine Learning
                </li>
              </ul>
            </div>

            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Algorithms</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-purple-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Shor's Algorithm
                </li>
                <li className="flex items-center text-purple-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Grover's Algorithm
                </li>
                <li className="flex items-center text-purple-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Quantum Approximate Optimization
                </li>
                <li className="flex items-center text-purple-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Variational Quantum Eigensolver
                </li>
                <li className="flex items-center text-purple-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Quantum Machine Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Performance Metrics</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Measurable improvements and breakthrough performance indicators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "10^18", label: "Speed Improvement", description: "vs Classical Computers" },
              { metric: "99.9%", label: "Accuracy Rate", description: "Quantum Error Correction" },
              { metric: "1000+", label: "Qubits", description: "Current Generation" },
              { metric: "0.001s", label: "Coherence Time", description: "Quantum State Stability" }
            ].map((item, index) => (
              <div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 text-center border border-cyan-400/30"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-white mb-2">{item.label}</div>
                <div className="text-cyan-200 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join the quantum revolution and unlock computational capabilities that were once thought impossible. 
                The future of computing is quantum, and it starts now.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                  Start Quantum Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;