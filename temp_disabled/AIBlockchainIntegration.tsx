import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Link, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Network,
  Smartphone,
  Database,
  Lock,
  Globe,
  BarChart3,
  Cpu,
  Server,
  Cloud,
  Star,
  Award,
  Rocket
} from 'lucide-react';

export default function AIBlockchainIntegration() {
  const features = [
    'AI-powered smart contract optimization',
    'Blockchain data analytics & insights',
    'DeFi protocol integration & automation',
    'NFT marketplace development',
    'Cross-chain interoperability solutions',
    'AI-driven trading bot development',
    'Blockchain security & audit services',
    'Smart contract automation workflows',
    'Real-time blockchain monitoring',
    'AI-powered risk assessment',
    'Decentralized identity management',
    'Blockchain scalability solutions'
  ];

  const useCases = [
    {
      title: 'DeFi Platforms',
      description: 'Build intelligent DeFi protocols with AI-driven yield optimization and risk management',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'NFT Marketplaces',
      description: 'Create AI-powered NFT platforms with automated pricing and market analysis',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Supply Chain',
      description: 'Implement transparent supply chain solutions with AI-powered tracking and optimization',
      icon: Link,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Identity Management',
      description: 'Secure digital identity solutions with AI-powered verification and fraud detection',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small blockchain projects',
      features: [
        'AI smart contract templates',
        'Basic blockchain analytics',
        'Smart contract deployment',
        'Basic security audit',
        'Email support',
        'Up to 1,000 transactions/month'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing blockchain businesses',
      features: [
        'Advanced AI optimization',
        'Real-time monitoring dashboard',
        'Cross-chain integration',
        'Advanced security features',
        'Priority support',
        'Up to 10,000 transactions/month',
        'Custom smart contract development',
        'Performance analytics'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale blockchain operations',
      features: [
        'Custom AI model training',
        'White-label solutions',
        'Unlimited transactions',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced compliance features',
        'Multi-chain deployment',
        'Performance optimization',
        'Security consulting'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'AI-Powered Optimization',
      description: 'Leverage machine learning for smart contract optimization and gas fee reduction',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enhanced Security',
      description: 'AI-driven security audits and real-time threat detection for blockchain applications',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Scalability Solutions',
      description: 'Advanced scaling solutions with AI-powered load balancing and optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs with AI-powered automation and optimization',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Blockchain Integration - Zion Tech Group"
        description="Revolutionary AI-powered blockchain solutions for DeFi, NFTs, and enterprise applications. Build the future of decentralized technology."
        canonical="/services/ai-blockchain-integration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Integration
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your blockchain applications with cutting-edge AI integration. 
                Build intelligent DeFi protocols, NFT marketplaces, and enterprise blockchain solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Demo
                </motion.button>
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
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Blockchain
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI-powered platform provides everything you need to build, deploy, and scale blockchain applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
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
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business with AI Blockchain
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI-powered blockchain solutions can revolutionize your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
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
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your blockchain integration needs. Scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 ${
                    plan.popular 
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Blockchain Integration?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of blockchain technology with AI-powered solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color}`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-lg">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the blockchain revolution with AI-powered solutions that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}