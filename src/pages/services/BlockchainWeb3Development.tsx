import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Coins, Globe, Code, Zap, Lock, 
  CheckCircle, Star, Target, BarChart3, Network,
  Phone, Mail, MapPin, Smartphone, Database, Cpu
} from 'lucide-react';

const BlockchainWeb3Development = () => {
  const services = [
    {
      icon: Coins,
      title: 'DeFi Protocol Development',
      description: 'Build decentralized finance applications with automated market makers, yield farming, and lending protocols.',
      technologies: ['Solidity', 'Ethereum', 'Polygon', 'Uniswap V3'],
      price: 'Starting at $75,000'
    },
    {
      icon: Shield,
      title: 'Smart Contract Auditing',
      description: 'Comprehensive security audits and formal verification of smart contracts before deployment.',
      technologies: ['Mythril', 'Slither', 'Echidna', 'Manticore'],
      price: 'Starting at $15,000'
    },
    {
      icon: Globe,
      title: 'NFT Marketplace Development',
      description: 'Custom NFT marketplaces with minting, trading, royalties, and advanced metadata management.',
      technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'OpenSea API'],
      price: 'Starting at $50,000'
    },
    {
      icon: Network,
      title: 'Layer 2 Solutions',
      description: 'Implement scaling solutions with optimistic rollups, zk-rollups, and state channels.',
      technologies: ['Arbitrum', 'Optimism', 'Polygon', 'StarkNet'],
      price: 'Starting at $100,000'
    },
    {
      icon: Database,
      title: 'DAO Governance Platform',
      description: 'Decentralized autonomous organization tools with voting, treasury management, and proposals.',
      technologies: ['Snapshot', 'Compound Governor', 'Aragon', 'Multi-sig'],
      price: 'Starting at $60,000'
    },
    {
      icon: Cpu,
      title: 'Cross-Chain Bridges',
      description: 'Secure cross-chain infrastructure for asset transfers between different blockchain networks.',
      technologies: ['Chainlink CCIP', 'LayerZero', 'Wormhole', 'Polkadot'],
      price: 'Starting at $150,000'
    }
  ];

  const blockchains = [
    { name: 'Ethereum', logo: '🔷', description: 'Leading smart contract platform' },
    { name: 'Polygon', logo: '🟣', description: 'Ethereum scaling solution' },
    { name: 'Binance Smart Chain', logo: '🟡', description: 'High-performance blockchain' },
    { name: 'Solana', logo: '🌟', description: 'High-speed, low-cost blockchain' },
    { name: 'Avalanche', logo: '🔺', description: 'Scalable blockchain platform' },
    { name: 'Polkadot', logo: '🔴', description: 'Multi-chain interoperability' },
    { name: 'Cardano', logo: '🔵', description: 'Research-driven blockchain' },
    { name: 'Near Protocol', logo: '🌙', description: 'Developer-friendly blockchain' }
  ];

  const deliverables = [
    {
      phase: 'Discovery & Planning',
      duration: '2-3 weeks',
      deliverables: [
        'Technical requirements analysis',
        'Blockchain architecture design',
        'Security assessment plan',
        'Project roadmap and timeline',
        'Cost estimation and resource allocation'
      ]
    },
    {
      phase: 'Development & Testing',
      duration: '8-16 weeks',
      deliverables: [
        'Smart contract development',
        'Frontend/backend integration',
        'Comprehensive testing suite',
        'Security audit and fixes',
        'Gas optimization'
      ]
    },
    {
      phase: 'Deployment & Support',
      duration: '2-4 weeks',
      deliverables: [
        'Mainnet deployment',
        'Documentation and training',
        'Monitoring and analytics setup',
        '30-day post-launch support',
        'Maintenance and upgrade plan'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'DeFi Starter',
      price: '$75,000',
      description: 'Basic DeFi protocol with essential features',
      features: [
        'Token creation (ERC-20)',
        'Basic staking mechanism',
        'Simple governance',
        'Security audit',
        'Deployment support',
        '3 months support'
      ],
      popular: false
    },
    {
      name: 'Enterprise DeFi',
      price: '$200,000',
      description: 'Advanced DeFi ecosystem with complex features',
      features: [
        'Multi-token protocol',
        'Advanced AMM integration',
        'Yield farming protocols',
        'DAO governance system',
        'Cross-chain compatibility',
        'Comprehensive audit',
        'White-label solution',
        '12 months support'
      ],
      popular: true
    },
    {
      name: 'Custom Blockchain',
      price: 'From $500,000',
      description: 'Full blockchain development and ecosystem',
      features: [
        'Custom blockchain development',
        'Consensus mechanism design',
        'Validator network setup',
        'Block explorer development',
        'Wallet integration',
        'Full ecosystem development',
        'Ongoing maintenance',
        'Dedicated support team'
      ],
      popular: false
    }
  ];

  const technologies = [
    { name: 'Solidity', category: 'Smart Contracts', description: 'Ethereum smart contract language' },
    { name: 'Rust', category: 'Blockchain', description: 'Systems programming for blockchains' },
    { name: 'Web3.js', category: 'Frontend', description: 'Ethereum JavaScript API' },
    { name: 'Ethers.js', category: 'Frontend', description: 'Ethereum library and wallet' },
    { name: 'Hardhat', category: 'Development', description: 'Ethereum development environment' },
    { name: 'OpenZeppelin', category: 'Security', description: 'Secure smart contract library' },
    { name: 'Chainlink', category: 'Oracle', description: 'Decentralized oracle network' },
    { name: 'The Graph', category: 'Data', description: 'Indexing protocol for blockchain data' }
  ];

  const stats = [
    { label: 'Smart Contracts Deployed', value: '500+', icon: Code },
    { label: 'Total Value Locked', value: '$50M+', icon: Coins },
    { label: 'Security Audits', value: '200+', icon: Shield },
    { label: 'Blockchain Networks', value: '15+', icon: Network }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center">
                <Network className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Blockchain &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                {' '}Web3 Development
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Build the future of decentralized applications with our expert blockchain development services. 
              From DeFi protocols to NFT marketplaces, we create secure and scalable Web3 solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Your Web3 Project
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                Get Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
                      <stat.icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Web3 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart contracts to full blockchain ecosystems, we deliver cutting-edge Web3 solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-lg font-bold text-purple-400 mb-4">{service.price}</div>
                
                <Link
                  to="/contact"
                  className="block w-full text-center py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Blockchains */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We develop on leading blockchain networks with expertise across the ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blockchains.map((blockchain, index) => (
              <motion.div
                key={blockchain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{blockchain.logo}</div>
                <h3 className="text-lg font-bold text-white mb-2">{blockchain.name}</h3>
                <p className="text-sm text-gray-300">{blockchain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured approach ensuring security, quality, and timely delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                    <p className="text-sm text-gray-400">{phase.duration}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right package for your blockchain development needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  tier.popular 
                    ? 'border-purple-500 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest and most secure technologies in the blockchain ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-purple-300 mb-2">{tech.category}</p>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the Web3 revolution with our expert blockchain development services. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainWeb3Development;