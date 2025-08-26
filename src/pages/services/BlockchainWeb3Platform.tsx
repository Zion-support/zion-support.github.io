import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Cpu,
  Database,
  Globe,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Network,
  Lock,
  Eye,
  Fingerprint,
  ShieldCheck,
  Globe2,
  Cloud,
  Server,
  Wallet,
  Coins,
  Smartphone,
  Building,
  Car,
  Heart,
  ShoppingCart,
  FileText,
  Code,
  Palette,
  MessageSquare
} from 'lucide-react';

const BlockchainWeb3Platform: React.FC = () => {
  const features = [
    {
      icon: LinkIcon,
      title: "Multi-Chain Support",
      description: "Support for Ethereum, Polygon, Solana, and other major blockchains",
      benefits: ["Cross-chain interoperability", "Gas optimization", "Multi-wallet support", "Chain switching"]
    },
    {
      icon: Shield,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and DAOs",
      benefits: ["Security audits", "Gas optimization", "Upgradeable contracts", "Multi-signature support"]
    },
    {
      icon: Zap,
      title: "DeFi Protocols",
      description: "Complete DeFi infrastructure including DEX, lending, and yield farming",
      benefits: ["Automated market making", "Liquidity pools", "Yield optimization", "Risk management"]
    },
    {
      icon: Target,
      title: "NFT Marketplace",
      description: "Full-featured NFT creation, trading, and management platform",
      benefits: ["NFT minting", "Marketplace trading", "Royalty distribution", "Metadata management"]
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Decentralized governance and voting systems for community management",
      benefits: ["Proposal creation", "Voting mechanisms", "Treasury management", "Governance tokens"]
    },
    {
      icon: Monitor,
      title: "Real-time Analytics",
      description: "Comprehensive blockchain analytics and monitoring dashboard",
      benefits: ["Transaction tracking", "Portfolio analytics", "Market insights", "Performance metrics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Web3 Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for startups and developers building Web3 applications",
      features: [
        "Up to 10,000 transactions/month",
        "Basic smart contracts",
        "Standard DeFi protocols",
        "Email support",
        "Basic analytics",
        "Cloud hosting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Web3 Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with advanced Web3 needs",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced smart contracts",
        "Custom DeFi protocols",
        "Priority support",
        "Advanced analytics",
        "Multi-chain support",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Web3 Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade Web3 solutions",
      features: [
        "Unlimited transactions",
        "Custom smart contracts",
        "White-label solutions",
        "Dedicated support",
        "Enterprise analytics",
        "On-premise options",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "DeFi Applications",
      description: "Decentralized finance protocols for lending, borrowing, and trading",
      icon: TrendingUp,
      roi: "400%",
      timeSaved: "24/7 operation"
    },
    {
      title: "NFT Marketplaces",
      description: "Digital art and collectibles trading platforms",
      icon: Palette,
      roi: "300%",
      timeSaved: "Global access"
    },
    {
      title: "Supply Chain",
      description: "Transparent and traceable supply chain management",
      icon: Building,
      roi: "250%",
      timeSaved: "Real-time tracking"
    },
    {
      title: "Gaming & Metaverse",
      description: "Blockchain-based gaming and virtual world platforms",
      icon: Gamepad2,
      roi: "600%",
      timeSaved: "Cross-platform"
    }
  ];

  const technologies = [
    { name: "Ethereum", description: "Smart contract platform and DeFi ecosystem", icon: LinkIcon },
    { name: "Polygon", description: "Layer 2 scaling solution for Ethereum", icon: Network },
    { name: "Solana", description: "High-performance blockchain platform", icon: Zap },
    { name: "IPFS", description: "Decentralized file storage system", icon: Database },
    { name: "Web3.js", description: "JavaScript library for Ethereum interaction", icon: Code },
    { name: "Hardhat", description: "Development environment for Ethereum", icon: Cpu }
  ];

  const blockchainBenefits = [
    {
      title: "Decentralization",
      description: "Eliminate single points of failure and central authority",
      icon: Network,
      metric: "100% decentralized"
    },
    {
      title: "Transparency",
      description: "All transactions are publicly verifiable on the blockchain",
      icon: Eye,
      metric: "100% transparent"
    },
    {
      title: "Security",
      description: "Cryptographic security ensures data integrity and authenticity",
      icon: ShieldCheck,
      metric: "Bank-level security"
    },
    {
      title: "Immutability",
      description: "Once recorded, data cannot be altered or deleted",
      icon: Lock,
      metric: "Immutable records"
    }
  ];

  const industries = [
    {
      title: "Finance",
      description: "DeFi protocols, digital payments, and asset management",
      icon: Coins,
      examples: ["Lending platforms", "DEX exchanges", "Yield farming"]
    },
    {
      title: "Healthcare",
      description: "Patient data management and medical supply chain",
      icon: Heart,
      examples: ["Health records", "Drug tracking", "Clinical trials"]
    },
    {
      title: "Real Estate",
      description: "Property tokenization and fractional ownership",
      icon: Building,
      examples: ["Property tokens", "Fractional ownership", "Rental agreements"]
    },
    {
      title: "Automotive",
      description: "Vehicle history and supply chain tracking",
      icon: Car,
      examples: ["Vehicle history", "Parts tracking", "Maintenance records"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
            {/* Blockchain nodes */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-purple rounded-full animate-float delay-1000"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-zion-blue rounded-full animate-float delay-2000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <LinkIcon className="w-4 h-4 mr-2" />
              Next-Generation Web3 Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Web3 Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Build the future of decentralized applications with our comprehensive Web3 platform. 
              DeFi, NFTs, DAOs, and more - all powered by cutting-edge blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Benefits */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Blockchain</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the fundamental advantages that make blockchain technology revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blockchainBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      <p className="text-zion-slate-light text-sm">{benefit.description}</p>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-zion-cyan/10 rounded-xl">
                    <div className="text-2xl font-bold text-zion-cyan">{benefit.metric}</div>
                    <div className="text-sm text-zion-slate-light">Guarantee</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive Web3 capabilities designed for building the next generation of decentralized applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Blockchain technology is transforming industries across the global economy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                      <p className="text-zion-slate-light text-sm">{industry.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {industry.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web3 <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing plans for building and scaling your Web3 applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular 
                    ? 'ring-2 ring-zion-cyan scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.name === "Web3 Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Use Cases</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how blockchain and Web3 are transforming industries and creating new opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-zion-cyan/10 rounded-xl">
                      <div className="text-2xl font-bold text-zion-cyan">{useCase.roi}</div>
                      <div className="text-sm text-zion-slate-light">ROI Increase</div>
                    </div>
                    <div className="text-center p-4 bg-zion-blue/10 rounded-xl">
                      <div className="text-2xl font-bold text-zion-blue">{useCase.timeSaved}</div>
                      <div className="text-sm text-zion-slate-light">Operation Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web3 <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on the latest blockchain and Web3 technologies for maximum performance and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-6 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Future</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join the Web3 revolution and create the next generation of decentralized applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to explore the Web3 frontier? Our blockchain experts are here to guide you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-zion-slate-light text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainWeb3Platform;