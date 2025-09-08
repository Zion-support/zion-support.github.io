import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  Network,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Globe,
  Database,
  Cpu,
  Lock,
  Activity,
  Server,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  BarChart3,
  TrendingUp,
  Shield,
  Eye,
  Link,
  Coins,
  Wallet,
  Smartphone,
  Code,
  ShieldCheck,
  Fingerprint,
  Key,
  Monitor,
  Search,
  Filter,
  Bell,
  Settings,
  Blockchain,
  Web3,
  Cryptocurrency,
  SmartContract,
  Coins,
  Image,
  Users,
  Globe
} from 'lucide-react';

export default function AIBlockchainWeb3SolutionsEnterprise() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that automatically optimize and adapt based on market conditions and user behavior patterns."
    },
    {
      icon: Network,
      title: "Multi-Chain Integration",
      description: "Seamlessly connect and operate across multiple blockchain networks including Ethereum, Polygon, Solana, and more."
    },
    {
      icon: Zap,
      title: "Automated DeFi Strategies",
      description: "AI-driven DeFi protocols that automatically optimize yield farming, liquidity provision, and trading strategies."
    },
    {
      icon: Shield,
      title: "Enhanced Security & Compliance",
      description: "Advanced security protocols with built-in compliance features for regulatory requirements and risk management."
    },
    {
      icon: Users,
      title: "Enterprise Web3 Infrastructure",
      description: "Scalable infrastructure for enterprise blockchain applications with role-based access and governance controls."
    },
    {
      icon: Globe,
      title: "Cross-Platform Interoperability",
      description: "Connect traditional systems with blockchain networks for seamless data and value transfer across platforms."
    }
  ];

  const pricing = [
    {
      name: "Web3 Starter",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small blockchain projects",
      features: [
        "Up to 1000 transactions/day",
        "Basic smart contracts",
        "Single blockchain support",
        "Standard security",
        "Email support",
        "Cloud deployment"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Web3 Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing DeFi projects",
      features: [
        "Up to 10,000 transactions/day",
        "Advanced smart contracts",
        "Multi-chain support",
        "Enhanced security",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Web3 Enterprise",
      price: "$15,999",
      period: "/month",
      description: "For large-scale blockchain operations",
      features: [
        "Unlimited transactions",
        "Custom blockchain solutions",
        "Full multi-chain support",
        "Enterprise security",
        "24/7 dedicated support",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Costs by 60%",
      description: "Automation and AI optimization significantly reduce operational costs in blockchain operations."
    },
    {
      icon: Clock,
      title: "10x Faster Transactions",
      description: "AI-optimized blockchain networks process transactions exponentially faster than traditional systems."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "AI-powered threat detection and automated security protocols protect against blockchain attacks."
    },
    {
      icon: Users,
      title: "Improved User Experience",
      description: "Intuitive interfaces and automated processes make blockchain technology accessible to everyone."
    }
  ];

  const solutions = [
    {
      icon: Coins,
      title: "DeFi Platforms",
      description: "Complete DeFi solutions including lending, borrowing, yield farming, and automated trading strategies."
    },
    {
      icon: Image,
      title: "NFT Marketplaces",
      description: "Enterprise-grade NFT platforms with AI-powered pricing, curation, and trading capabilities."
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Decentralized governance platforms with AI-enhanced voting systems and proposal management."
    },
    {
      icon: Globe,
      title: "Metaverse Infrastructure",
      description: "Complete metaverse solutions including virtual worlds, digital assets, and immersive experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Blockchain Web3 Solutions Enterprise | Zion Tech Group"
        description="Transform your business with our enterprise-grade AI Blockchain Web3 Solutions. Multi-chain integration, AI-powered smart contracts, and automated DeFi strategies."
        keywords="AI blockchain, Web3 solutions, enterprise blockchain, DeFi platforms, smart contracts, NFT marketplaces, DAO governance, metaverse"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              AI-Powered Blockchain & Web3
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain Web3 Solutions Enterprise
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your business with our AI-enhanced blockchain and Web3 platform. 
              Get multi-chain integration, intelligent smart contracts, and automated DeFi strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Web3 Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge blockchain technology with AI optimization to deliver 
              the most advanced Web3 solutions available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Web3 Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From DeFi platforms to metaverse infrastructure, we provide comprehensive solutions 
              for all your blockchain and Web3 needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web3 Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our Web3 platform have achieved remarkable results in cost reduction, 
              transaction speed, and user engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web3 Platform Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the Web3 plan that best fits your blockchain project needs and scale. 
              All plans include our core AI capabilities and multi-chain support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-slate-800/50 to-green-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with Web3?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the Web3 revolution and unlock the future of decentralized technology. 
              Start your free trial today and experience the power of AI-enhanced blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our AI Blockchain Web3 Solutions? 
                Our blockchain experts are here to help you get started.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-green-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
                Contact Web3 Team
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}