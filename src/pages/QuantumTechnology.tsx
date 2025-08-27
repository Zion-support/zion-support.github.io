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
      description: "Quantum algorithms for portfolio optimization, risk assessment, and fraud detection",
      icon: DollarSign,
      benefits: ["Faster calculations", "Better risk models", "Real-time fraud detection"]
    },
    {
      title: "Healthcare & Drug Discovery",
      description: "Quantum simulation for molecular modeling and drug development",
      icon: Heart,
      benefits: ["Accurate molecular models", "Faster drug discovery", "Personalized medicine"]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Quantum optimization for route planning and resource allocation",
      icon: Car,
      benefits: ["Optimal routes", "Cost reduction", "Efficient resource use"]
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and advanced threat detection",
      icon: Shield,
      benefits: ["Unbreakable encryption", "Advanced threat detection", "Future-proof security"]
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
              Quantum Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing, cryptography, and AI to solve the world's most complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services/"
                className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Quantum Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                    <useCase.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Experience Quantum Technology?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the quantum revolution and transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors text-lg font-semibold"
            >
              Start Your Quantum Journey
            </Link>
            <Link
              href="/request-quote/"
              className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors text-lg font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}