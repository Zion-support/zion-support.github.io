import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Atom, Cpu, Globe, Shield, Zap, Target, Users, BarChart3, Rocket, Brain } from 'lucide-react';

export default function QuantumTechnology() {
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
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Quantum-enhanced AI algorithms for faster training and superior performance"
    },
    {
      icon: BarChart3,
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization and risk assessment"
    },
    {
      icon: Rocket,
      title: "Drug Discovery",
      description: "Quantum simulations for molecular modeling and pharmaceutical research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing, cryptography, and neural networks for breakthrough innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quantum Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge quantum technology solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <service.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum technology can transform your industry and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <useCase.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Go Quantum?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss how quantum technology can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/revolutionary-services-2025" 
              className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}