import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Brain, Target, TrendingUp, Shield, Users, Globe, Atom, CircuitBoard } from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const quantumServices = [
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "Harness the power of quantum computing to create neural networks that can process complex data and solve problems beyond classical computing capabilities.",
      features: ["Quantum Superposition", "Entanglement Processing", "Quantum Memory", "Advanced Pattern Recognition"],
      path: "/solutions/quantum-neural-network"
    },
    {
      icon: Zap,
      title: "Quantum Edge Computing",
      description: "Deploy quantum computing capabilities at the edge for real-time processing and decision-making in distributed environments.",
      features: ["Edge Deployment", "Real-time Processing", "Low Latency", "Distributed Computing"],
      path: "/solutions/quantum-edge-computing"
    },
    {
      icon: CircuitBoard,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed to solve specific business problems and optimize complex computational tasks.",
      features: ["Custom Algorithms", "Problem Optimization", "Performance Tuning", "Scalable Solutions"],
      path: "/solutions/quantum-algorithms"
    },
    {
      icon: Atom,
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for research, drug discovery, materials science, and financial modeling.",
      features: ["Molecular Modeling", "Financial Simulation", "Material Science", "Research Applications"],
      path: "/solutions/quantum-simulation"
    }
  ];

  const applications = [
    {
      icon: Target,
      title: "Financial Services",
      description: "Optimize portfolio management, risk assessment, and algorithmic trading with quantum computing"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Develop quantum-resistant encryption and advanced security protocols for the future"
    },
    {
      icon: Users,
      title: "Healthcare",
      description: "Accelerate drug discovery, protein folding, and medical research with quantum simulations"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Solve complex optimization problems in supply chain management and route planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Quantum Computing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Unlock the Power of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Quantum Computing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the next generation of computing with quantum systems that can solve complex problems 
              in seconds that would take classical computers years to process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From quantum neural networks to edge computing, we provide comprehensive quantum solutions 
              that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantum computing is revolutionizing industries across the board. Discover how it can transform your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cutting-Edge Quantum Technology
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We leverage the latest advances in quantum computing technology, including superconducting qubits, 
                trapped ions, and topological qubits to deliver superior performance and reliability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Superconducting quantum processors
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Advanced error correction algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Quantum-classical hybrid systems
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Scalable quantum architectures
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Cpu className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Advantage</h3>
                <p className="text-gray-300">
                  Achieve computational superiority with quantum systems that can solve problems 
                  exponentially faster than classical computers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and discover how our advanced computing solutions can solve 
            your most complex challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/research-development"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Research & Development
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;