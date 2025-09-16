import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Atom, Cpu, Database, Lock, Zap, Globe, Target, TrendingUp } from 'lucide-react';

const QuantumComputingRevolution2026 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Quantum Computing Revolution 2026 - Next-Generation Computing Power</title>
        <meta name="description" content="Explore the quantum computing revolution of 2026 with breakthrough quantum algorithms, quantum supremacy, and transformative computational capabilities." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum supremacy, 2026 technology, computational revolution" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Supremacy Achieved
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolution 2026
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Witness the dawn of a new era in computing where quantum mechanics meets artificial intelligence, 
            unlocking unprecedented computational power and solving problems previously thought impossible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Explore Quantum Power
              <Atom className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View Quantum Demo
            </button>
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary power of quantum computing with capabilities that transcend classical limitations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Quantum Supremacy",
                description: "Solve complex problems in seconds that would take classical computers millennia to complete."
              },
              {
                icon: Database,
                title: "Quantum Database",
                description: "Process and search massive datasets with quantum speedup algorithms and parallel processing."
              },
              {
                icon: Lock,
                title: "Quantum Cryptography",
                description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
              },
              {
                icon: Zap,
                title: "Quantum Machine Learning",
                description: "Train AI models with quantum neural networks for unprecedented pattern recognition."
              },
              {
                icon: Globe,
                title: "Quantum Simulation",
                description: "Simulate complex molecular structures and quantum systems with perfect accuracy."
              },
              {
                icon: Target,
                title: "Quantum Optimization",
                description: "Solve optimization problems across logistics, finance, and resource allocation."
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Performance */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Performance Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Measurable quantum advantage across multiple computational domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10^15", label: "Speed Increase", suffix: "x faster" },
              { number: "1000", label: "Qubits", suffix: " quantum bits" },
              { number: "99.9%", label: "Accuracy", suffix: " quantum fidelity" },
              { number: "0.001", label: "Error Rate", suffix: "% quantum errors" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  {metric.number}
                </div>
                <div className="text-lg text-cyan-400 font-medium mb-1">{metric.suffix}</div>
                <div className="text-xl text-gray-300 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300">
              Revolutionary applications transforming industries with quantum computing power
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Drug Discovery Revolution",
                description: "Quantum simulation of molecular interactions accelerating drug development by 1000x, discovering new treatments for cancer, Alzheimer's, and rare diseases.",
                features: ["Molecular modeling", "Drug interaction simulation", "Side effect prediction", "Personalized medicine"]
              },
              {
                title: "Financial Quantum Advantage",
                description: "Quantum algorithms for portfolio optimization, risk assessment, and fraud detection, revolutionizing investment strategies and financial security.",
                features: ["Portfolio optimization", "Risk modeling", "Fraud detection", "Algorithmic trading"]
              },
              {
                title: "Climate Change Solutions",
                description: "Quantum simulation of atmospheric processes, carbon capture optimization, and renewable energy systems design for sustainable future.",
                features: ["Climate modeling", "Carbon capture", "Energy optimization", "Weather prediction"]
              },
              {
                title: "Artificial Intelligence Evolution",
                description: "Quantum machine learning algorithms enabling AI systems to process information at quantum speeds with exponential learning capabilities.",
                features: ["Quantum neural networks", "Pattern recognition", "Natural language processing", "Computer vision"]
              }
            ].map((application, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{application.description}</p>
                <ul className="space-y-2">
                  {application.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Timeline 2026
            </h2>
            <p className="text-xl text-gray-300">
              The roadmap to quantum supremacy and beyond
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            
            {[
              {
                year: "Q1 2026",
                title: "Quantum Supremacy Achieved",
                description: "First demonstration of quantum advantage in practical applications"
              },
              {
                year: "Q2 2026",
                title: "Commercial Quantum Cloud",
                description: "Public access to quantum computing resources via cloud platforms"
              },
              {
                year: "Q3 2026",
                title: "Quantum AI Integration",
                description: "Seamless integration of quantum computing with AI systems"
              },
              {
                year: "Q4 2026",
                title: "Quantum Internet Launch",
                description: "First quantum communication network connecting major cities"
              }
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enter the Quantum Era
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience the transformative power of quantum computing. 
              Join the revolution that's reshaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Access Quantum Cloud
                <Atom className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Request Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2026;