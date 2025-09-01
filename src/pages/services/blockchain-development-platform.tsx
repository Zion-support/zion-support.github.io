import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Lock,
  BarChart3,
  TrendingUp,
  Target,
  Rocket,
  Zap,
  Code,
  Network,
  Wallet
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BlockchainDevelopmentPlatform() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise blockchain applications"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Multi-Chain Support",
      description: "Build on Ethereum, Polygon, Binance Smart Chain, Solana, and other leading blockchain networks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Auditing",
      description: "Comprehensive security audits, penetration testing, and vulnerability assessment for blockchain applications"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Wallet Integration",
      description: "Seamless integration with MetaMask, WalletConnect, and custom wallet solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Blockchain Infrastructure",
      description: "Node management, RPC endpoints, and blockchain data indexing services"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment & Management",
      description: "Automated deployment, monitoring, and maintenance of blockchain applications"
    }
  ];

  const pricing = [
    {
      name: "Developer",
      price: "$299",
      period: "/month",
      features: [
        "Smart contract development",
        "Basic security audit",
        "Multi-chain deployment",
        "API access",
        "Email support",
        "Community forum access",
        "Documentation & tutorials"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      features: [
        "Advanced smart contracts",
        "Comprehensive security audit",
        "Custom blockchain solutions",
        "Priority support",
        "Custom integrations",
        "Performance optimization",
        "Dedicated developer",
        "SLA guarantees"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      features: [
        "Custom blockchain networks",
        "White-label solutions",
        "On-premise deployment",
        "Custom security protocols",
        "Dedicated support team",
        "Training and certification",
        "Compliance consulting",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Launch blockchain applications 3x faster",
    "Reduce development costs by 60%",
    "Ensure 99.9% security with audited contracts",
    "Access to enterprise-grade infrastructure",
    "Multi-chain compatibility for maximum reach",
    "Expert blockchain development team"
  ];

  const useCases = [
    {
      industry: "DeFi & Finance",
      description: "Decentralized exchanges, lending platforms, yield farming, and financial instruments",
      advantage: "Launch DeFi protocols in weeks"
    },
    {
      industry: "NFTs & Gaming",
      description: "NFT marketplaces, gaming platforms, digital collectibles, and metaverse applications",
      advantage: "Create NFT ecosystems rapidly"
    },
    {
      industry: "Supply Chain",
      description: "Transparent tracking, authentication, and verification of products and materials",
      advantage: "End-to-end traceability"
    },
    {
      industry: "Healthcare",
      description: "Secure medical records, drug authentication, and patient data management",
      advantage: "HIPAA-compliant blockchain"
    }
  ];

  const blockchainNetworks = [
    "Ethereum (ETH)",
    "Polygon (MATIC)",
    "Binance Smart Chain (BSC)",
    "Solana (SOL)",
    "Cardano (ADA)",
    "Polkadot (DOT)",
    "Avalanche (AVAX)",
    "Arbitrum (ARB)"
  ];

  const services = [
    "Smart Contract Development",
    "DApp Frontend Development",
    "Blockchain API Development",
    "Security Auditing",
    "Token Development (ERC-20, ERC-721)",
    "DeFi Protocol Development",
    "NFT Marketplace Development",
    "Blockchain Consulting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blockchain Development & Smart Contract Platform - Zion Tech Group"
        description="Comprehensive blockchain development platform for DeFi, NFTs, DAOs, and enterprise applications. Launch blockchain apps 3x faster with audited smart contracts."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Development Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build, deploy, and manage blockchain applications with our comprehensive development platform. 
              Launch DeFi protocols, NFT marketplaces, and enterprise solutions with audited smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Blockchain Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by blockchain experts and security professionals, our platform delivers enterprise-grade blockchain solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage blockchain applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build on the most popular and reliable blockchain networks with our multi-chain platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainNetworks.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 text-center"
              >
                <Network className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{network}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart contracts to complete DApps, we provide end-to-end blockchain development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center">
                  <Code className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain technology is transforming various industries and creating new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {useCase.advantage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Development Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your blockchain development needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700 hover:border-green-500'
                }`}
              >
                {plan.popular && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the blockchain revolution and create the next generation of decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}