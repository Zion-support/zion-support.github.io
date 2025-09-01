import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Link, Shield, Zap, CheckCircle, ArrowRight, Star, Globe, Lock, Cpu, Target, Award, BarChart3, Network, Database, Truck, Package, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIBlockchainSupplyChain: React.FC = () => {

  const features = [
    'AI-powered demand forecasting and inventory optimization',
    'Blockchain-based supply chain transparency and traceability',
    'Smart contracts for automated procurement and payments',
    'Real-time tracking of goods across the entire supply chain',
    'Predictive analytics for supply chain risk management',
    'Automated compliance and regulatory reporting',
    'Multi-party collaboration with permissioned blockchain',
    'IoT sensor integration for real-time monitoring',
    'Machine learning for supplier performance optimization',
    'End-to-end visibility from raw materials to end consumer'
  ];

  const benefits = [
    'Reduce supply chain costs by 20-35% through AI optimization',
    'Improve inventory accuracy by 40-60% with real-time tracking',
    'Enhance supplier collaboration and trust through blockchain',
    'Reduce compliance risks with automated regulatory reporting',
    'Accelerate time-to-market with streamlined processes'
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$3,999',
      period: 'month',
      features: ['Up to 100 suppliers', 'Basic AI forecasting', 'Standard blockchain', 'Email support', 'Basic reporting'],
      popular: false
    },
    {

      plan: 'Enterprise',
      price: '$9,999',
      period: 'month',
      features: ['Up to 1,000 suppliers', 'Advanced AI analytics', 'Full blockchain features', 'Priority support', 'Advanced analytics', 'Custom workflows'],
      popular: true
    },
    {

      plan: 'Global',
      price: '$24,999',
      period: 'month',
      features: ['Unlimited suppliers', 'Custom AI models', 'Multi-consortium blockchain', 'Dedicated support', 'White-label solution', 'On-premise deployment'],
      popular: false
    }
  ];

  const useCases = [
    'Manufacturing & Automotive',
    'Pharmaceuticals & Healthcare',
    'Food & Beverage',
    'Retail & E-commerce',
    'Logistics & Transportation',
    'Energy & Utilities',
    'Construction & Real Estate',
    'Financial Services'
  ];

  const blockchainFeatures = [
    'Permissioned Consortium Blockchain',
    'Smart Contract Automation',
    'Immutable Audit Trail',
    'Multi-party Collaboration',
    'Tokenized Assets',
    'Cross-border Transactions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <SEO 
        title="AI Blockchain Supply Chain Platform | Zion Tech Group"
        description="Revolutionary AI-powered blockchain supply chain platform that combines artificial intelligence with distributed ledger technology for unprecedented transparency, efficiency, and optimization."
        keywords="AI blockchain, supply chain, blockchain supply chain, AI optimization, supply chain transparency, smart contracts"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-500/20 rounded-full">
                <Link className="w-8 h-8 text-orange-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              AI Blockchain Supply Chain Platform
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
              Revolutionize your supply chain with AI-powered optimization and blockchain-based transparency for unprecedented efficiency and trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-300 text-orange-300 font-semibold rounded-lg hover:bg-orange-300 hover:text-orange-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI + Blockchain = Supply Chain Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with blockchain technology to deliver unprecedented supply chain visibility and optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Transform supply chains across diverse industries with our comprehensive platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Package className="w-8 h-8 text-orange-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Blockchain Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade blockchain technology for secure, transparent, and efficient supply chain operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockchainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-purple-100"
              >
                <div className="flex items-center">
                  <Network className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Supply Chain Operations
            </h2>
            <p className="text-xl text-gray-600">
              Experience measurable improvements in efficiency, transparency, and cost optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scalable Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your supply chain complexity and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${

                  plan.popular ? 'border-orange-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                      plan.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Revolutionize Your Supply Chain?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join leading enterprises that have already transformed their supply chains with AI and blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Supply Chain Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBlockchainSupplyChain;