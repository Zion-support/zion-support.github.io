import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      title: "Quantum-Classical Hybrid Processing",
      description: "Seamlessly combine quantum and classical computing for optimal performance",
      icon: Atom,
      benefits: ["Quantum advantage for specific algorithms", "Classical optimization for general tasks", "Hybrid workflow orchestration"]
    },
    {
      title: "AI-Powered Quantum Error Correction",
      description: "Advanced machine learning algorithms for quantum error mitigation",
      icon: Brain,
      benefits: ["Real-time error detection", "Adaptive correction strategies", "Improved quantum coherence"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum algorithms for enhanced ML model training and inference",
      icon: Cpu,
      benefits: ["Quantum neural networks", "Quantum feature mapping", "Quantum kernel methods"]
    },
    {
      title: "Hybrid Cloud Architecture",
      description: "Distributed quantum-classical computing across cloud infrastructure",
      icon: Cloud,
      benefits: ["Scalable quantum resources", "Classical preprocessing", "Hybrid workload distribution"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Portfolio optimization", "Risk assessment", "Algorithmic trading", "Fraud detection"],
      quantumAdvantage: "10-100x faster optimization"
    },
    {
      industry: "Healthcare & Pharma",
      applications: ["Drug discovery", "Protein folding", "Genomic analysis", "Medical imaging"],
      quantumAdvantage: "Accelerated molecular simulations"
    },
    {
      industry: "Logistics & Supply Chain",
      applications: ["Route optimization", "Inventory management", "Demand forecasting", "Resource allocation"],
      quantumAdvantage: "Complex optimization solutions"
    },
    {
      industry: "Cybersecurity",
      applications: ["Cryptographic analysis", "Threat detection", "Zero-day vulnerability assessment", "Security protocol design"],
      quantumAdvantage: "Enhanced encryption breaking"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small teams exploring quantum computing",
      features: [
        "2 quantum processing units",
        "Basic hybrid workflow templates",
        "Standard error correction",
        "Community support",
        "5GB quantum data storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing businesses with quantum needs",
      features: [
        "8 quantum processing units",
        "Advanced hybrid algorithms",
        "AI-powered error correction",
        "Priority support",
        "25GB quantum data storage",
        "Custom workflow development"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Full-scale quantum computing infrastructure",
      features: [
        "Unlimited quantum processing units",
        "Custom hybrid architectures",
        "Dedicated quantum engineers",
        "24/7 premium support",
        "Unlimited quantum data storage",
        "White-label solutions",
        "On-premise deployment options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: "Quantum Hardware",
      specs: [
        "Superconducting qubits: 50-1000+ qubits",
        "Error rates: <0.1% per gate operation",
        "Coherence time: >100 microseconds",
        "Connectivity: All-to-all or nearest neighbor"
      ]
    },
    {
      category: "Classical Infrastructure",
      specs: [
        "CPU: AMD EPYC or Intel Xeon processors",
        "GPU: NVIDIA A100 or H100 accelerators",
        "Memory: 512GB-2TB DDR5 RAM",
        "Storage: NVMe SSDs with 10+ TB capacity"
      ]
    },
    {
      category: "Hybrid Framework",
      specs: [
        "Quantum-Classical Interface: Custom API",
        "Workflow Engine: Apache Airflow integration",
        "Error Mitigation: ML-based algorithms",
        "Optimization: Hybrid classical-quantum solvers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Quantum Hybrid Platform | Zion Tech Group"
        description="Revolutionary quantum-classical hybrid computing platform powered by AI. Transform your business with quantum advantage and classical reliability."
        keywords="quantum computing, AI, hybrid platform, quantum advantage, machine learning, optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                <Atom className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Hybrid Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's first truly hybrid quantum-classical computing platform, 
              combining the power of quantum mechanics with the reliability of classical computing, 
              all orchestrated by advanced AI algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating quantum particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Hybrid Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the best of both worlds with our quantum-classical hybrid platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum-classical hybrid computing transforms industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                  <p className="text-cyan-400 font-semibold">
                    Quantum Advantage: {useCase.quantumAdvantage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with cutting-edge quantum capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{spec.category}</h3>
                <ul className="space-y-4">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your business with our hybrid platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Contact Sales Team
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free trial includes 2 quantum processing units for 30 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}