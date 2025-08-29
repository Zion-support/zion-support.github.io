import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Lock, Shield, Zap, Database, Globe, BarChart3, Users, TrendingUp, CheckCircle, Network, Cpu, DollarSign } from 'lucide-react';

export default function BlockchainEnterpriseSolutions() {
  const features = [
    {
      icon: Lock,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for enterprise applications with comprehensive testing and security measures.',
      benefits: ['Code audits', 'Security testing', 'Gas optimization', 'Upgradeable contracts']
    },
    {
      icon: Shield,
      title: 'DeFi Infrastructure',
      description: 'Complete decentralized finance solutions including lending, trading, and yield farming platforms.',
      benefits: ['Liquidity pools', 'Automated trading', 'Risk management', 'Compliance tools']
    },
    {
      icon: Database,
      title: 'Enterprise Blockchain',
      description: 'Permissioned blockchain networks for enterprise use cases with enhanced privacy and performance.',
      benefits: ['Private networks', 'High throughput', 'Data privacy', 'Regulatory compliance']
    },
    {
      icon: Network,
      title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions enabling seamless communication between different blockchain networks.',
      benefits: ['Multi-chain support', 'Asset bridging', 'Unified interfaces', 'Reduced fragmentation']
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Transparent and immutable tracking of goods across the entire supply chain.',
      icon: Globe,
      benefits: ['Product traceability', 'Quality assurance', 'Compliance tracking', 'Fraud prevention']
    },
    {
      title: 'Digital Identity',
      description: 'Self-sovereign identity solutions with privacy-preserving verification.',
      icon: Users,
      benefits: ['User control', 'Privacy protection', 'Verification systems', 'Interoperability']
    },
    {
      title: 'Financial Services',
      description: 'Innovative financial products including tokenization and decentralized exchanges.',
      icon: DollarSign,
      benefits: ['Asset tokenization', 'Trading platforms', 'Lending protocols', 'Insurance products']
    },
    {
      title: 'Healthcare Records',
      description: 'Secure and accessible medical records with patient-controlled access.',
      icon: Shield,
      benefits: ['Data security', 'Patient privacy', 'Interoperability', 'Audit trails']
    }
  ];

  const technologies = [
    'Ethereum & EVM',
    'Hyperledger Fabric',
    'Polkadot Ecosystem',
    'Cosmos Network',
    'Zero-Knowledge Proofs',
    'Layer 2 Solutions',
    'Cross-Chain Protocols',
    'DeFi Frameworks'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Transparency',
      description: 'Immutable records and transparent operations build trust and accountability.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Cryptographic security and decentralized architecture protect against fraud and attacks.'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency',
      description: 'Automated processes and smart contracts reduce costs and eliminate intermediaries.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Borderless access to financial services and digital assets worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blockchain Enterprise Solutions - Zion Tech Group"
        description="Transform your business with enterprise-grade blockchain solutions. DeFi platforms, smart contracts, and cross-chain interoperability for the modern enterprise."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Enterprise
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with enterprise-grade blockchain solutions. 
              DeFi platforms, smart contracts, and cross-chain interoperability 
              for the modern enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Building
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Network className="w-16 h-16 text-purple-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Cpu className="w-16 h-16 text-pink-500 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive blockchain services deliver the infrastructure, 
              security, and innovation you need to succeed in the Web3 economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Blockchain technology offers unique advantages that can transform 
              your business operations and create new opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how blockchain technology is transforming industries and 
              enabling new business models across the global economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge blockchain technologies and frameworks to 
              deliver robust, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-3">
                  <Zap className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the blockchain revolution and unlock new possibilities 
              for your business with Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}