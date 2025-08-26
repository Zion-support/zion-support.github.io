import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Link, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Brain,
  BarChart3,
  Users,
  Globe,
  Cpu,
  Shield,
  Database,
  Network
} from 'lucide-react';

const BlockchainServicesPage = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      features: ['DeFi Protocols', 'NFT Smart Contracts', 'Multi-sig Wallets', 'Token Standards'],
      icon: Lock
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Custom blockchain networks and infrastructure solutions for enterprise applications.',
      features: ['Private Blockchains', 'Consensus Mechanisms', 'Node Management', 'Network Security'],
      icon: Network
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications including DEXs, lending platforms, and yield farming.',
      features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Pools'],
      icon: Zap
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance on blockchain adoption, tokenomics, and regulatory compliance.',
      features: ['Technology Assessment', 'Tokenomics Design', 'Regulatory Compliance', 'Implementation Strategy'],
      icon: Users
    }
  ];

  const benefits = [
    'Enhanced security and transparency',
    'Reduced transaction costs',
    'Automated trust and verification',
    'Global accessibility and inclusion',
    'Immutable record keeping',
    'Programmable money and assets'
  ];

  const industries = [
    'Finance & Banking',
    'Supply Chain',
    'Healthcare',
    'Real Estate',
    'Gaming & NFTs',
    'Energy & Utilities'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Lock className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Blockchain Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build the Future with
              <span className="text-gradient"> Blockchain</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with secure, transparent, and decentralized blockchain solutions 
              that revolutionize trust and value exchange.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Blockchain Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Explore Blockchain Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From smart contracts to DeFi protocols, we provide end-to-end blockchain solutions 
              that drive innovation and trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Blockchain Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative power of blockchain technology with our innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how blockchain technology can revolutionize various industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-white">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the blockchain revolution and transform your business with decentralized solutions. 
              Our blockchain experts are ready to help you build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Blockchain Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download Blockchain Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainServicesPage;