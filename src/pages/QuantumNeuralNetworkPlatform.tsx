import React from 'react';
import { Link } from 'react-router-dom';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      title: "Quantum Computing",
      description: "Leverage quantum bits for exponential processing power",
      icon: "⚛️"
    },
    {
      title: "Neural Networks",
      description: "Advanced AI neural network architectures and training",
      icon: "🧠"
    },
    {
      title: "Hybrid Processing",
      description: "Quantum-classical hybrid computing approaches",
      icon: "🔗"
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum algorithms for machine learning tasks",
      icon: "📊"
    }
  ];

  const applications = [
    {
      category: "Financial Modeling",
      useCases: ["Portfolio optimization", "Risk assessment", "Algorithmic trading", "Market prediction"]
    },
    {
      category: "Drug Discovery",
      useCases: ["Molecular simulation", "Protein folding", "Chemical optimization", "Drug design"]
    },
    {
      category: "Cryptography",
      useCases: ["Quantum key distribution", "Post-quantum cryptography", "Secure communications", "Encryption"]
    },
    {
      category: "Optimization",
      useCases: ["Supply chain optimization", "Logistics planning", "Resource allocation", "Scheduling"]
    }
  ];

  const capabilities = [
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems and quantum chemistry",
      icon: "🔬"
    },
    {
      title: "Quantum Machine Learning",
      description: "Train neural networks using quantum algorithms",
      icon: "🤖"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems",
      icon: "🎯"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption and secure communications",
      icon: "🔐"
    }
  ];

  const benefits = [
    {
      title: "Exponential Speedup",
      description: "Solve problems exponentially faster than classical computers",
      metric: "1000x+"
    },
    {
      title: "Quantum Advantage",
      description: "Achieve quantum advantage in specific domains",
      metric: "Yes"
    },
    {
      title: "Future-Proof",
      description: "Prepare for the quantum computing era",
      metric: "Ready"
    },
    {
      title: "Innovation",
      description: "Enable breakthroughs in science and technology",
      metric: "Limitless"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Neural
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Network Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of computing with our quantum neural network platform. 
              Combine the power of quantum computing with advanced neural networks to solve 
              previously impossible problems.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quantum-Neural Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Revolutionary Applications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{app.category}</h3>
                  <ul className="space-y-2">
                    {app.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Quantum Neural Networks?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Implementation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate quantum computing needs and use cases</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Design quantum neural network architecture</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Develop and test quantum algorithms</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deployment</h3>
                <p className="text-gray-300 text-sm">Deploy on quantum hardware and cloud platforms</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Quantum Computing Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum State</h3>
                  <p className="text-gray-300 text-sm">Monitor quantum system states and coherence</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Neural Networks</h3>
                  <p className="text-gray-300 text-sm">Track neural network training and performance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
                  <p className="text-gray-300 text-sm">View quantum computing results and insights</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-lg font-semibold text-white mb-3">Research</h3>
                <p className="text-gray-300 text-sm">Scientific research and discovery</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">Complex optimization problems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">Drug discovery and medical research</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold text-white mb-3">Finance</h3>
                <p className="text-gray-300 text-sm">Portfolio optimization and risk analysis</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Quantum Computing?</h3>
              <p className="text-gray-300 mb-6">
                Join the quantum revolution. Experience exponential speedup and solve 
                previously impossible problems with our quantum neural network platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Quantum Assessment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;