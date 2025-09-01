import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award,
  Target,
  Workflow,
  Phone,
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum-Classical Hybrid Processing',
      description:
        'Seamlessly integrate quantum algorithms with classical computing for optimal performance',
    },
    {
      icon: Brain,
      title: 'AI-Quantum Algorithm Optimization',
      description:
        'Machine learning algorithms that automatically optimize quantum circuit designs',
    },
    {
      icon: Zap,
      title: 'Real-time Quantum Error Correction',
      description:
        'Advanced error correction algorithms for reliable quantum computations',
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Cryptography',
      description:
        'Post-quantum cryptographic solutions for future-proof security',
    },
    {
      icon: TrendingUp,
      title: 'Quantum Machine Learning',
      description: 'Quantum neural networks and quantum-enhanced ML algorithms',
    },
    {
      icon: Database,
      title: 'Quantum Database Optimization',
      description:
        'Quantum algorithms for database search and optimization problems',
    },
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$2,999',
      period: 'monthly',
      description: 'Perfect for research institutions and quantum startups',
      features: [
        'Up to 100 quantum circuit executions per month',
        'Basic quantum algorithm library',
        'Standard error correction',
        'Email support',
        'Basic analytics dashboard',
      ],
      bestFor:
        'Research institutions, quantum startups, educational organizations',
    },
    {
      name: 'Quantum Professional',
      price: '$7,999',
      period: 'monthly',
      description: 'Advanced features for growing quantum computing companies',
      features: [
        'Up to 1,000 quantum circuit executions per month',
        'Advanced quantum algorithm library',
        'Custom error correction algorithms',
        'Priority support',
        'Advanced analytics and reporting',
        'API access',
        'Custom quantum circuit design',
      ],
      bestFor: 'Quantum computing companies, research labs, enterprise R&D',
    },
    {
      name: 'Quantum Enterprise',
      price: '$19,999',
      period: 'monthly',
      description:
        'Full-scale quantum computing platform for large enterprises',
      features: [
        'Unlimited quantum circuit executions',
        'Custom quantum algorithm development',
        'Advanced quantum error correction',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solutions',
        'On-premise deployment options',
        'Quantum consulting services',
      ],
      bestFor:
        'Large enterprises, government agencies, quantum computing leaders',
    },
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description:
        'Quantum algorithms for portfolio optimization, risk assessment, and derivative pricing',
      icon: TrendingUp,
    },
    {
      title: 'Drug Discovery',
      description:
        'Quantum chemistry simulations for pharmaceutical research and molecular modeling',
      icon: Atom,
    },
    {
      title: 'Logistics Optimization',
      description:
        'Quantum algorithms for supply chain optimization and route planning',
      icon: Workflow,
    },
    {
      title: 'Cryptography',
      description:
        'Quantum-safe encryption and post-quantum cryptographic solutions',
      icon: Lock,
    },
    {
      title: 'Machine Learning',
      description: 'Quantum-enhanced neural networks and pattern recognition',
      icon: Brain,
    },
    {
      title: 'Climate Modeling',
      description: 'Complex climate simulations using quantum computing power',
      icon: Globe,
    },
  ];

  const benefits = [
    '10-100x faster computation for specific problems',
    'Future-proof quantum-safe security solutions',
    'Competitive advantage in research and development',
    'Access to cutting-edge quantum technologies',
    'Scalable quantum computing infrastructure',
    'Expert quantum computing consultation',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="AI Quantum Hybrid Platform - Zion Tech Group"
        description="Revolutionary AI-Quantum hybrid computing platform combining the power of quantum computing with artificial intelligence for unprecedented computational capabilities."
        keywords="quantum computing, AI, hybrid platform, quantum algorithms, quantum machine learning, quantum cryptography"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Revolutionary Quantum-AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Hybrid Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of computing with our revolutionary
              AI-Quantum hybrid platform. Combining artificial intelligence with
              quantum computing for unprecedented computational power.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-colors"
            >
              Request Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Quantum-AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the best of both worlds: quantum computing's
              exponential power and AI's intelligent optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing needs with our
              transparent, enterprise-grade pricing structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1
                    ? 'border-purple-500/50 bg-purple-500/10'
                    : 'border-white/10'
                } hover:border-purple-500/50 transition-all`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-gray-400 mb-6">
                  <strong>Best for:</strong> {tier.bestFor}
                </div>

                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI-Quantum hybrid platform is transforming
              industries and solving previously impossible computational
              challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI-Quantum Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented computational power and intelligent
              optimization with our cutting-edge quantum-AI hybrid technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your computational
              capabilities with our AI-Quantum hybrid platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Your Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
