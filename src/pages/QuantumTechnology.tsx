import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Bot
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
    },
    {
      icon: Zap,
      title: "Quantum Financial Trading",
      description: "Advanced trading algorithms leveraging quantum computing power",
      features: ["Risk Assessment", "Portfolio Optimization", "Market Prediction", "High-Frequency Trading"],
      path: "/quantum-financial-trading"
    },
    {
      icon: Brain,
      title: "Quantum AI Integration",
      description: "Seamless integration of quantum computing with artificial intelligence",
      features: ["Hybrid Systems", "Quantum ML", "Optimization", "Pattern Recognition"],
      path: "/quantum-ai-integration"
    }
  ];

  const applications = [
    {
      icon: Rocket,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling"
    },
    {
      icon: Target,
      title: "Optimization",
      description: "Solve complex optimization problems in logistics and manufacturing"
    },
    {
      icon: Users,
      title: "Machine Learning",
      description: "Enhance AI capabilities with quantum-enhanced algorithms"
    },
    {
      icon: BarChart3,
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO 
        title="Quantum Technology - Zion Tech Group" 
        description="Explore cutting-edge quantum technology solutions including quantum computing, neural networks, cryptography, and financial applications from Zion Tech Group."
        keywords="quantum technology, quantum computing, quantum neural networks, quantum cryptography, quantum financial trading"
        canonical="https://ziontechgroup.com/quantum-technology"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Technology for the
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex problems. 
              From computing to cryptography, we're building the quantum future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quantum technology portfolio spans across computing, cryptography, AI, and financial applications, 
              providing cutting-edge solutions for the most challenging problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Technology Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum technology is transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application) => (
              <div key={application.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Power of Quantum Computing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Quantum computing represents a paradigm shift in computational power. By leveraging quantum mechanical 
                phenomena like superposition and entanglement, quantum computers can process information in ways that 
                classical computers simply cannot.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Exponential Speedup</h3>
                    <p className="text-gray-600">Solve complex problems in minutes instead of years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Parallel Processing</h3>
                    <p className="text-gray-600">Process multiple possibilities simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quantum Advantage</h3>
                    <p className="text-gray-600">Outperform classical computers on specific tasks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quantum Computing Milestones</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Quantum Supremacy</span>
                  <span className="font-bold">✓ Achieved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Error Correction</span>
                  <span className="font-bold">In Progress</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Commercial Applications</span>
                  <span className="font-bold">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Quantum Internet</span>
                  <span className="font-bold">Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Explore the Quantum Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and discover how quantum technology can transform your business. 
            Our experts are ready to guide you through the quantum landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumTechnology;