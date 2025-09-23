import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Brain, Target, Rocket, Star, Users, Award, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

const QuantumComputingSolutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed for your specific business challenges and optimization problems.',
      benefits: ['Exponential speedup', 'Complex problem solving', 'Custom optimization']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Ultra-secure communication systems using quantum key distribution and quantum-resistant encryption.',
      benefits: ['Unbreakable security', 'Future-proof protection', 'Real-time encryption']
    },
    {
      icon: Target,
      title: 'Portfolio Optimization',
      description: 'Advanced financial modeling and risk management using quantum computing power.',
      benefits: ['Real-time optimization', 'Risk reduction', 'Enhanced returns']
    },
    {
      icon: Zap,
      title: 'Molecular Simulation',
      description: 'Accelerated drug discovery and materials science through quantum molecular modeling.',
      benefits: ['Faster discovery', 'Reduced costs', 'Better accuracy']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Portfolio optimization', 'Risk modeling', 'Fraud detection', 'Algorithmic trading'],
      impact: '40% improvement in portfolio returns'
    },
    {
      industry: 'Pharmaceuticals',
      applications: ['Drug discovery', 'Molecular modeling', 'Protein folding', 'Clinical trials optimization'],
      impact: '60% reduction in discovery time'
    },
    {
      industry: 'Logistics',
      applications: ['Route optimization', 'Supply chain management', 'Inventory optimization', 'Demand forecasting'],
      impact: '25% reduction in operational costs'
    },
    {
      industry: 'Cybersecurity',
      applications: ['Quantum key distribution', 'Post-quantum cryptography', 'Threat detection', 'Secure communications'],
      impact: '99.9% security improvement'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$10,000',
      period: '/month',
      description: 'Perfect for small businesses exploring quantum computing',
      features: [
        '5 hours quantum compute time',
        'Basic algorithm library',
        'Email support',
        'Monthly optimization reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$50,000',
      period: '/month',
      description: 'Ideal for growing businesses with complex optimization needs',
      features: [
        '25 hours quantum compute time',
        'Custom algorithm development',
        'Priority support',
        'Real-time optimization',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited quantum compute time',
        'Dedicated quantum team',
        '24/7 support',
        'Custom infrastructure',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Leverage the power of quantum computing to solve complex business problems. Our quantum solutions deliver exponential speedups for optimization, cryptography, and simulation challenges."
        keywords="quantum computing, quantum algorithms, optimization, cryptography, molecular simulation, business solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the exponential power of quantum computing to solve your most complex business challenges. 
              From optimization to cryptography, unlock unprecedented computational capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum-Powered Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing solutions deliver exponential speedups for the most challenging business problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming businesses across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-300 mb-3">Applications:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {useCase.applications.map((app, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold">Impact: {useCase.impact}</p>
                </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your business needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock exponential computational capabilities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Start Your Quantum Journey
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions;