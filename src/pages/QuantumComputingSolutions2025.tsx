import React, { useState } from 'react';
import { Zap, Shield, Brain, Globe, TrendingUp, ArrowRight, CheckCircle, Play, Download } from 'lucide-react';

const QuantumComputingSolutions2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const quantumApplications = [
    {
      icon: "🔐",
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum algorithms",
      benefits: ["Unhackable communications", "Future-proof security", "Quantum key distribution", "Post-quantum cryptography"],
      impact: "100% secure"
    },
    {
      icon: "🧬",
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research by simulating molecular interactions at quantum scale",
      benefits: ["10x faster drug development", "Reduced R&D costs", "Precision medicine", "Molecular simulation"],
      impact: "90% time reduction"
    },
    {
      icon: "📊",
      title: "Financial Modeling",
      description: "Optimize trading strategies and risk assessment with quantum algorithms",
      benefits: ["Portfolio optimization", "Risk analysis", "Fraud detection", "Algorithmic trading"],
      impact: "500% faster"
    },
    {
      icon: "🚗",
      title: "Autonomous Vehicles",
      description: "Enhance AI decision-making for self-driving cars with quantum processing",
      benefits: ["Real-time navigation", "Collision avoidance", "Route optimization", "Weather prediction"],
      impact: "99.9% accuracy"
    },
    {
      icon: "🌍",
      title: "Climate Modeling",
      description: "Predict climate patterns and optimize environmental solutions",
      benefits: ["Weather forecasting", "Carbon capture optimization", "Renewable energy planning", "Ecosystem modeling"],
      impact: "1000x precision"
    },
    {
      icon: "🏭",
      title: "Supply Chain Optimization",
      description: "Solve complex logistics problems with quantum optimization algorithms",
      benefits: ["Route optimization", "Inventory management", "Demand forecasting", "Cost minimization"],
      impact: "60% efficiency gain"
    }
  ];

  const quantumTechnologies = [
    {
      name: "Quantum Annealing",
      description: "Specialized quantum processors for optimization problems",
      useCases: ["Portfolio optimization", "Logistics planning", "Machine learning"],
      provider: "D-Wave Systems"
    },
    {
      name: "Gate-Based Quantum Computing",
      description: "Universal quantum computers for general-purpose quantum algorithms",
      useCases: ["Cryptography", "Drug discovery", "Financial modeling"],
      provider: "IBM, Google, IonQ"
    },
    {
      name: "Quantum Machine Learning",
      description: "AI algorithms that leverage quantum computing for enhanced performance",
      useCases: ["Pattern recognition", "Optimization", "Data analysis"],
      provider: "Rigetti, Xanadu"
    }
  ];

  const implementationPhases = [
    {
      phase: "Assessment",
      duration: "2-4 weeks",
      description: "Evaluate quantum readiness and identify use cases",
      deliverables: ["Quantum readiness audit", "Use case identification", "ROI analysis", "Strategic roadmap"]
    },
    {
      phase: "Proof of Concept",
      duration: "8-12 weeks",
      description: "Develop and test quantum solutions for specific problems",
      deliverables: ["Quantum algorithm design", "Simulation testing", "Performance benchmarks", "Feasibility report"]
    },
    {
      phase: "Pilot Implementation",
      duration: "16-24 weeks",
      description: "Deploy quantum solutions in controlled environments",
      deliverables: ["Pilot deployment", "Performance monitoring", "Integration testing", "User training"]
    },
    {
      phase: "Full Deployment",
      duration: "24-36 weeks",
      description: "Scale quantum solutions across the organization",
      deliverables: ["Enterprise rollout", "Continuous optimization", "Performance monitoring", "Innovation pipeline"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              QUANTUM COMPUTING • 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. 
              Transform your business with next-generation quantum technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                Explore Quantum <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ⚡ Quantum Advantage in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exponential speedups in computation that were previously impossible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Superposition</h3>
              <p className="text-gray-600">
                Quantum bits can exist in multiple states simultaneously, enabling parallel processing of vast amounts of data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entanglement</h3>
              <p className="text-gray-600">
                Quantum particles remain connected across any distance, enabling instant information transfer and correlation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interference</h3>
              <p className="text-gray-600">
                Quantum interference amplifies correct answers while canceling out wrong ones, boosting accuracy exponentially.
              </p>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Classical vs Quantum Performance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Classical Computer</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Factorization (2048-bit)</span>
                    <span className="text-red-400">1 billion years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portfolio Optimization</span>
                    <span className="text-red-400">3.7 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drug Discovery</span>
                    <span className="text-red-400">10+ years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Quantum Computer</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Factorization (2048-bit)</span>
                    <span className="text-green-400">8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portfolio Optimization</span>
                    <span className="text-green-400">10 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drug Discovery</span>
                    <span className="text-green-400">1 year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🌟 Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary solutions across industries leveraging quantum computing power
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumApplications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{app.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <span className="text-cyan-400 font-bold text-sm">{app.impact}</span>
                </div>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <ul className="space-y-2 mb-4">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🔧 Quantum Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge quantum computing technologies and platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {quantumTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-lg">{tech.description}</p>
                  </div>
                  <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                    {tech.provider}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🗺️ Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your step-by-step journey to quantum computing implementation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait for the future. Start your quantum computing journey today and gain an insurmountable competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Schedule Quantum Consultation
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download Quantum Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions2025;