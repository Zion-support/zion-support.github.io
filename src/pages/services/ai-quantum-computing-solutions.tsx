import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Network, 
  Database,
  BarChart3,
  Workflow,
  Target,
  Users,
  Building2,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AIQuantumComputingSolutions() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamlessly integrate quantum and classical computing resources for optimal performance across all workloads."
    },
    {
      icon: Brain,
      title: "AI-Quantum Synergy",
      description: "Leverage quantum computing power to accelerate AI training and inference tasks by orders of magnitude."
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Implement post-quantum cryptography and quantum-resistant security protocols for future-proof protection."
    },
    {
      icon: TrendingUp,
      title: "Quantum Advantage Optimization",
      description: "Identify and optimize quantum advantage opportunities for specific business problems and use cases."
    },
    {
      icon: Cpu,
      title: "Quantum Resource Management",
      description: "Efficiently manage and allocate quantum computing resources across multiple users and applications."
    },
    {
      icon: Network,
      title: "Quantum Network Integration",
      description: "Connect to quantum networks and quantum internet infrastructure for distributed quantum computing."
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum Monte Carlo simulations for risk assessment and portfolio optimization",
      icon: TrendingUp
    },
    {
      title: "Drug Discovery",
      description: "Quantum chemistry calculations for molecular modeling and drug design",
      icon: Atom
    },
    {
      title: "Supply Chain Optimization",
      description: "Quantum algorithms for complex logistics and routing problems",
      icon: Workflow
    },
    {
      title: "Machine Learning",
      description: "Quantum-enhanced training for large-scale AI models",
      icon: Brain
    }
  ];

  const benefits = [
    "Exponential speedup for specific computational problems",
    "Enhanced security through quantum-resistant cryptography",
    "Improved accuracy in complex simulations and modeling",
    "Cost reduction through quantum advantage optimization",
    "Future-proof technology investment",
    "Competitive advantage in research and development"
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI-powered quantum computing solutions. Quantum advantage, hybrid computing, and quantum-safe security." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum advantage, quantum security, hybrid computing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-computing-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Atom className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Quantum Computing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of quantum computing combined with artificial intelligence. 
                Solve previously intractable problems and gain quantum advantage across your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum computing capabilities designed for enterprise applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real-world applications where quantum computing delivers measurable business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business operations with quantum computing advantages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your business with AI-powered quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Start Your Quantum Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}