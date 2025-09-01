import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import {

  Link, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Lock,
  Database,
  Cpu,
  Network,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Video,
  Eye,
  Target,
  Users,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Server,
  Globe2,
  ShieldCheck,
  Wifi,
  Smartphone,
  Activity,
  Clock,
  BarChart,
  PieChart,
  GitBranch,
  Code,
  Package,
  Play,
  Settings,
  Monitor,
  Rocket,
  Globe,
  Factory,
  Car,
  Heart,
  LineChart,
  Scatter,
  Layers,
  Bitcoin,
  Ethereum,
  Smartphone as Mobile,
  Cloud,
  LockKeyhole,
  FileCheck,
  Scale,
  Building2,
  Car as Vehicle,
  HeartPulse,
  ShoppingCart,
  CreditCard,
  Truck,
  Plane,
  Ship
} from 'lucide-react';

export default function BlockchainSolutions() {

  const features = [
    {

      icon: Shield,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts with blockchain security',
      color: 'from-blue-500 to-cyan-500'
    },
    {

      icon: Database,
      title: 'Distributed Ledger',
      description: 'Immutable, transparent record-keeping across networks',
      color: 'from-purple-500 to-pink-500'
    },
    {

      icon: Lock,
      title: 'Cryptographic Security',
      description: 'Advanced encryption and digital signature verification',
      color: 'from-green-500 to-emerald-500'
    },
    {

      icon: Network,
      title: 'Decentralized Networks',
      description: 'Peer-to-peer systems without central authority',
      color: 'from-yellow-500 to-orange-500'
    },
    {

      icon: Zap,
      title: 'Instant Settlements',
      description: 'Real-time transactions and immediate confirmations',
      color: 'from-red-500 to-pink-500'
    },
    {

      icon: Globe,
      title: 'Cross-Border Solutions',
      description: 'Global transactions without traditional banking delays',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const benefits = [
    'Eliminate intermediaries and reduce transaction costs by 90%',
    'Ensure data integrity with immutable blockchain records',
    'Enable 24/7 automated operations with smart contracts',
    'Provide transparent, auditable transaction history',
    'Reduce fraud and increase trust in digital transactions',
    'Enable new business models and revenue streams'
  ];

  const useCases = [
    {

      title: 'Financial Services',
      description: 'Cryptocurrency, DeFi, and cross-border payments',
      icon: CreditCard
    },
    {

      title: 'Supply Chain',
      description: 'Transparent tracking and verification of goods',
      icon: Truck
    },
    {

      title: 'Healthcare',
      description: 'Secure patient records and medical data sharing',
      icon: HeartPulse
    },
    {

      title: 'Real Estate',
      description: 'Property tokenization and smart contract automation',
      icon: Building2
    }
  ];

  const blockchainCapabilities = [
    {

      name: 'Smart Contract Development',
      description: 'Custom smart contracts for business automation',
      examples: ['Ethereum', 'Solana', 'Polygon', 'Custom chains']
    },
    {

      name: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      examples: ['Lending platforms', 'DEX exchanges', 'Yield farming']
    },
    {

      name: 'NFT Development',
      description: 'Non-fungible token creation and marketplace',
      examples: ['Digital art', 'Gaming assets', 'Collectibles']
    },
    {

      name: 'Enterprise Blockchain',
      description: 'Private and consortium blockchain networks',
      examples: ['Hyperledger', 'Corda', 'Quorum', 'Custom solutions']
    }
  ];

  const industries = [
    {

      name: 'Finance & Banking',
      icon: CreditCard,
      description: 'Cryptocurrency, payments, and DeFi solutions'
    },
    {

      name: 'Supply Chain',
      icon: Truck,
      description: 'Transparent tracking and verification systems'
    },
    {

      name: 'Healthcare',
      icon: HeartPulse,
      description: 'Secure medical records and data sharing'
    },
    {

      name: 'Real Estate',
      icon: Building2,
      description: 'Property tokenization and smart contracts'
    },
    {

      name: 'Gaming',
      icon: Play,
      description: 'NFT assets and blockchain gaming platforms'
    },
    {

      name: 'Energy',
      icon: Zap,
      description: 'Renewable energy trading and carbon credits'
    }
  ];

  return (
    <>
      <SEO 
        title="Blockchain Solutions - Zion Tech Group"
        description="Revolutionary blockchain solutions including smart contracts, DeFi, NFTs, and enterprise blockchain. Transform your business with decentralized technology."
        keywords="blockchain, smart contracts, DeFi, NFTs, cryptocurrency, distributed ledger, decentralized finance, enterprise blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <Link className="w-4 h-4" />
                Blockchain Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Blockchain
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with revolutionary blockchain technology. 
                Smart contracts, DeFi solutions, NFTs, and enterprise blockchain 
                that create trust, transparency, and new business opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Blockchain Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our blockchain solutions combine cutting-edge technology with practical 
                applications to deliver unprecedented security, transparency, and efficiency.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 hover:bg-slate-800/70"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Business with Blockchain
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our blockchain solutions deliver measurable improvements in cost reduction, 
                  operational efficiency, and trust while enabling new business models 
                  and revenue streams.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl p-8 border border-green-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Blockchain Impact
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                        <div className="text-sm text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                        <div className="text-sm text-gray-400">Transparency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                        <div className="text-sm text-gray-400">Fraud Risk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blockchain Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive blockchain development and 
                integration services for various use cases and industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blockchainCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {capability.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industries We Transform
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our blockchain solutions are designed to revolutionize 
                various industries with innovative applications and use cases.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Blockchain Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our blockchain platform adapts to various business needs and industries, 
                providing tailored solutions for different requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Embrace Blockchain?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our blockchain 
                solutions to create trust, transparency, and new business opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Start Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}