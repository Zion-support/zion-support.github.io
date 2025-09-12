import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Atom, Cpu, Lock, TrendingUp, Globe, Zap } from 'lucide-react';

const QuantumComputingBreakthrough: React.FC = () => {
  const quantumFeatures = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: "Quantum Supremacy Processing",
      description: "Harness the power of quantum mechanics for exponential computational speed",
      benefits: ["10^15x faster calculations", "Parallel universe processing", "Quantum entanglement optimization"]
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum uncertainty",
      benefits: ["100% secure communications", "Quantum-resistant algorithms", "Future-proof security"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Quantum Machine Learning",
      description: "Revolutionary AI that processes information in quantum states",
      benefits: ["Pattern recognition at quantum scale", "Quantum neural networks", "Exponential learning speed"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "Quantum Financial Modeling",
      description: "Predict market movements with quantum probability calculations",
      benefits: ["Real-time risk assessment", "Quantum portfolio optimization", "Market prediction accuracy"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Quantum Network Infrastructure",
      description: "Global quantum communication networks with instant data transfer",
      benefits: ["Zero-latency communication", "Quantum internet protocols", "Global quantum cloud"]
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Quantum Energy Optimization",
      description: "Revolutionary energy management using quantum field theory",
      benefits: ["99.9% energy efficiency", "Quantum battery technology", "Sustainable computing"]
    }
  ];

  const quantumStats = [
    { number: "10^15x", label: "Faster Processing" },
    { number: "99.9%", label: "Energy Efficiency" },
    { number: "∞", label: "Security Level" },
    { number: "0ms", label: "Network Latency" }
  ];

  const applications = [
    {
      category: "Finance",
      description: "Quantum algorithms for risk analysis, fraud detection, and high-frequency trading",
      impact: "300% ROI improvement"
    },
    {
      category: "Healthcare",
      description: "Quantum molecular simulation for drug discovery and personalized medicine",
      impact: "10x faster drug development"
    },
    {
      category: "Manufacturing",
      description: "Quantum optimization for supply chain management and production scheduling",
      impact: "50% cost reduction"
    },
    {
      category: "Climate Science",
      description: "Quantum simulation for climate modeling and environmental optimization",
      impact: "Accelerated climate solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <SEO 
        title="Quantum Computing Breakthrough - Zion Tech Group"
        description="Revolutionary quantum computing solutions that unlock unprecedented computational power. Quantum supremacy, cryptography, and machine learning."
        keywords="quantum computing, quantum supremacy, quantum cryptography, quantum machine learning, quantum algorithms"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Computing Breakthrough
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enter the quantum realm where computational boundaries disappear. Our revolutionary 
              quantum computing solutions unlock infinite possibilities for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Enter Quantum Realm
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
                Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quantumStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of quantum mechanics applied to real-world business challenges 
              with unprecedented computational capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-purple-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing transforms industries and unlocks new possibilities 
              across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">{app.category}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <div className="text-cyan-400 font-semibold">
                    Impact: {app.impact}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Age?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock infinite computational possibilities 
              for your business with our cutting-edge quantum solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Start Quantum Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Quantum Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingBreakthrough;