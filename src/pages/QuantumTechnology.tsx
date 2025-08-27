import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Atom, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Key, 
  Eye, 
  Target, 
  Rocket, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Lightbulb,
  Cog,
  Microchip,
  CircuitBoard,
  Wifi,
  Bluetooth,
  Satellite,
  Radar,
  Camera,
  Fingerprint,
  Unlock,
  AlertTriangle,
  Info,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Wrench,
  Hammer,
  Globe,
  Users,
  BarChart3,
  Code,
  Cloud,
  DollarSign,
  ShoppingCart,
  Heart,
  Activity,
  Monitor,
  Smartphone,
  Car,
  Plane,
  Ship,
  Bot,
  Truck
} from 'lucide-react';

export default function QuantumTechnology() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'services', label: 'Services', icon: Cog },
    { id: 'use-cases', label: 'Use Cases', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Microchip },
    { id: 'benefits', label: 'Benefits', icon: Star }
  ];

  const quantumServices = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks powered by quantum computing principles",
      features: ["Quantum Superposition", "Entanglement Processing", "Quantum Memory", "Faster Training"],
      path: "/quantum-neural-network-platform"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Solutions",
      description: "Access to quantum computing resources for complex problem solving",
      features: ["Quantum Algorithms", "Cloud Access", "Expert Consultation", "Custom Development"],
      path: "/quantum-computing"
    },
    {
      icon: Globe,
      title: "Quantum Edge Computing",
      description: "Distributed quantum computing at the edge for real-time processing",
      features: ["Low Latency", "High Performance", "Scalable Architecture", "Edge Optimization"],
      path: "/quantum-edge-computing-platform"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum mechanical principles",
      features: ["Quantum Key Distribution", "Post-Quantum Security", "Quantum Random Numbers", "Future-Proof Encryption"],
      path: "/quantum-cryptography"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Quantum algorithms for portfolio optimization, risk assessment, and high-frequency trading",
      icon: DollarSign,
      benefits: ["Faster Risk Calculations", "Optimized Portfolios", "Real-time Trading", "Fraud Detection"]
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Drug discovery, protein folding, and medical imaging using quantum computing",
      icon: Heart,
      benefits: ["Faster Drug Discovery", "Accurate Protein Folding", "Advanced Imaging", "Personalized Medicine"]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Route optimization, inventory management, and supply chain optimization",
      icon: Truck,
      benefits: ["Optimal Routes", "Efficient Inventory", "Cost Reduction", "Real-time Tracking"]
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and advanced threat detection systems",
      icon: Shield,
      benefits: ["Unbreakable Encryption", "Advanced Detection", "Future-Proof Security", "Quantum Keys"]
    }
  ];

  const technologies = [
    {
      name: "Quantum Bits (Qubits)",
      description: "The fundamental unit of quantum information, capable of superposition and entanglement",
      icon: Atom,
      status: "Active Development"
    },
    {
      name: "Quantum Gates",
      description: "Operations that manipulate qubits to perform quantum computations",
      icon: Cog,
      status: "Production Ready"
    },
    {
      name: "Quantum Error Correction",
      description: "Techniques to protect quantum information from decoherence and noise",
      icon: Shield,
      status: "Research Phase"
    },
    {
      name: "Quantum Algorithms",
      description: "Specialized algorithms that leverage quantum mechanical properties",
      icon: Code,
      status: "Active Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Atom className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex problems. 
              Experience the future of computing with Zion Tech Group's quantum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                href="/services/quantum-computing"
                className="inline-flex items-center px-6 py-3 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Future of Computing is Quantum
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Quantum computing represents a paradigm shift in computational power, 
                  leveraging the principles of quantum mechanics to process information 
                  in ways that classical computers cannot.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Quantum Superposition</h3>
                      <p className="text-gray-400">Qubits can exist in multiple states simultaneously</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Quantum Entanglement</h3>
                      <p className="text-gray-400">Particles become correlated regardless of distance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Exponential Speedup</h3>
                      <p className="text-gray-400">Solve complex problems in seconds instead of years</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-600/20 p-8 rounded-2xl border border-blue-500/30">
                  <div className="text-center">
                    <Atom className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Quantum Advantage</h3>
                    <p className="text-gray-300">
                      Experience computational power that exceeds classical computing by orders of magnitude
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Quantum Computing Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {quantumServices.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.path}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Real-World Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className={`bg-slate-800/50 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                      selectedUseCase === index 
                        ? 'border-blue-500/50 bg-blue-600/10' 
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                    onClick={() => setSelectedUseCase(index)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <useCase.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'technologies' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Core Quantum Technologies
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <tech.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{tech.name}</h3>
                        <span className="text-sm text-blue-400 bg-blue-600/20 px-2 py-1 rounded-full">
                          {tech.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Why Choose Quantum Technology?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Exponential Performance</h3>
                  <p className="text-gray-300">
                    Solve complex problems that would take classical computers thousands of years
                  </p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation Leadership</h3>
                  <p className="text-gray-300">
                    Stay ahead of the competition with cutting-edge quantum solutions
                  </p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Future-Proof Investment</h3>
                  <p className="text-gray-300">
                    Build your infrastructure on the technology of tomorrow
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and transform your business with the most advanced computing technology available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Quantum Journey
            </Link>
            <Link
              href="/services/quantum-computing"
              className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300"
            >
              <Info className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}