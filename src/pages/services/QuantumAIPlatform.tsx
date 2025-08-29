import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Database,
  Network,
  Server,
  Globe,
  Clock,
  BarChart3,
  Cpu,
  Lock,
  Eye,
  Target,
  Rocket,
  Sparkles,
  Atom,
  Infinity,
  CpuIcon,
  CircuitBoard
export default function QuantumAIPlatform() {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing power for unprecedented AI model training and optimization",
      icon: Brain,
      benefits: [
        "1000x faster training times",
        "Quantum advantage in optimization",
        "Hybrid classical-quantum algorithms",
        "Scalable quantum neural networks"
      ]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      icon: Shield,
      benefits: [
        "Unhackable communication",
        "Quantum key distribution",
        "Post-quantum cryptography",
        "Zero-knowledge proofs"
      ]
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems that are impossible for classical computers",
      icon: TrendingUp,
      benefits: [
        "NP-hard problem solving",
        "Portfolio optimization",
        "Supply chain optimization",
        "Route optimization"
      ]
    },
    {
      title: "Quantum Simulation",
      description: "Accurate simulation of quantum systems for drug discovery and materials science",
      icon: Atom,
      benefits: [
        "Molecular modeling",
        "Chemical reaction simulation",
        "Material property prediction",
        "Drug discovery acceleration"
      ]

  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$25,000",
      period: "/month",
      description: "Perfect for research institutions and startups",
      features: [
        "Basic quantum computing access",
        "Up to 100 qubits",
        "Standard quantum algorithms",
        "Email support",
        "Basic quantum simulator",
        "API access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$75,000",
      period: "/month",
      description: "Ideal for growing companies and research labs",
      features: [
        "Advanced quantum computing",
        "Up to 1000 qubits",
        "Custom quantum algorithms",
        "Priority support",
        "Advanced simulators",
        "Custom integrations",
        "Performance optimization",
        "Quantum consulting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$200,000",
      period: "/month",
      description: "For large-scale quantum operations",
      features: [
        "Full quantum platform access",
        "Unlimited qubits",
        "Custom quantum hardware",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise deployment",
        "SLA guarantees",
        "Quantum strategy consulting"
      ],
      cta: "Contact Sales",
      popular: false

  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: [
        "Portfolio optimization",
        "Risk assessment",
        "Fraud detection",
        "Algorithmic trading"
      ]
    },
    {
      industry: "Healthcare & Pharma",
      applications: [
        "Drug discovery",
        "Protein folding",
        "Genomic analysis",
        "Clinical trial optimization"
      ]
    },
    {
      industry: "Manufacturing",
      applications: [
        "Supply chain optimization",
        "Production scheduling",
        "Quality control",
        "Logistics optimization"
      ]
    },
    {
      industry: "Energy & Utilities",
      applications: [
        "Grid optimization",
        "Energy trading",
        "Resource allocation",
        "Climate modeling"
      ]

  ];

  const quantumAdvantages = [
    {
      title: "Exponential Speedup",
      description: "Quantum algorithms provide exponential speedup for specific problems",
      icon: Zap,
      metric: "1000x+"
    },
    {
      title: "Quantum Supremacy",
      description: "Achieve computational tasks impossible for classical computers",
      icon: Star,
      metric: "Unlimited"
    },
    {
      title: "Parallel Processing",
      description: "Process multiple possibilities simultaneously using superposition",
      icon: CpuIcon,
      metric: "∞"
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum correlations for secure communication",
      icon: Network,
      metric: "100%"

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Quantum AI Platform - Zion Tech Group"
        description="Revolutionize your business with quantum computing and AI. Access unprecedented computational power for optimization, cryptography, and machine learning."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Quantum Technology
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Platform
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum computing combined with artificial intelligence to solve
              the world's most complex problems. Experience computational capabilities beyond imagination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"

                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-xl"></div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience computational power that transcends classical computing limitations
              and opens new frontiers in problem-solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"

                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mx-auto mb-4 w-fit">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-blue-400 mb-2">{advantage.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Quantum AI Platform combines cutting-edge quantum computing with advanced
              artificial intelligence to deliver unprecedented computational power.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"

                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access the future of computing with our flexible quantum platform pricing.
              Scale from research to enterprise deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-slate-700'
                }`}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}

                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Quantum AI Platform is revolutionizing industries by solving previously
              intractable problems with unprecedented speed and accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"

                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and unlock computational capabilities
              that will transform your industry and accelerate innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"

                Contact Quantum Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}}}}}}