import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  Users,
  CheckCircle,
  ArrowRight,
  Building2,
  Cpu,
  Network,
  Monitor,
  Smartphone,
  Laptop,
  Printer,
  Router,
  Coins,
  Wallet,
  Lock,
  Key
} from 'lucide-react';

const BlockchainServices: React.FC = () => {
  const blockchainServices = [
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "Smart Contract Development",
      description: "Custom smart contracts for DeFi, NFTs, and enterprise applications",
      features: ["Solidity development", "Security auditing", "Testing & deployment", "Gas optimization"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "DeFi Platform Development",
      description: "Decentralized finance platforms and protocols",
      features: ["Lending protocols", "DEX development", "Yield farming", "Liquidity pools"]
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "NFT Marketplace Solutions",
      description: "Complete NFT creation, trading, and management platforms",
      features: ["Minting platforms", "Marketplace UI/UX", "Royalty systems", "Metadata management"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Blockchain Infrastructure",
      description: "Private blockchain networks and enterprise solutions",
      features: ["Consensus mechanisms", "Node management", "Network security", "Scalability solutions"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Auditing",
      description: "Comprehensive blockchain security and smart contract auditing",
      features: ["Vulnerability assessment", "Penetration testing", "Code review", "Security best practices"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web3 Integration",
      description: "Seamless integration of Web3 technologies into existing systems",
      features: ["Wallet integration", "API development", "Frontend frameworks", "Backend services"]
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Management",
      description: "Transparent tracking and verification of goods across the supply chain",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Digital Identity",
      description: "Self-sovereign identity solutions and verification systems",
      icon: <Key className="w-6 h-6" />
    },
    {
      title: "Financial Services",
      description: "Cross-border payments, remittances, and financial inclusion",
      icon: <Coins className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Secure patient data management and medical record verification",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Real Estate",
      description: "Property tokenization and fractional ownership platforms",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Gaming & Entertainment",
      description: "Play-to-earn games and digital asset ownership",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const technologies = [
    "Ethereum & EVM",
    "Polygon & Layer 2",
    "Solana",
    "Polkadot",
    "Hyperledger Fabric",
    "IPFS",
    "Zero-Knowledge Proofs",
    "Multi-Signature Wallets"
  ];

  const benefits = [
    "Enhanced transparency and traceability",
    "Reduced intermediaries and costs",
    "Improved security and immutability",
    "Automated execution through smart contracts",
    "Global accessibility and 24/7 operation",
    "Programmable money and assets"
  ];

  const industries = [
    "Financial Services",
    "Healthcare & Life Sciences",
    "Manufacturing & Logistics",
    "Real Estate & Construction",
    "Gaming & Entertainment",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
>>>>>>> a4a522bebff354a39d8989949882ddf2ed4fa924
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blockchain & Web3 Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge blockchain technology and Web3 solutions. 
            Build trust, transparency, and efficiency into every transaction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-cyan to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan/90 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Blockchain Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Services */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From smart contracts to complete DeFi platforms, we deliver end-to-end blockchain solutions 
              that drive innovation and create real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-zion-cyan mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how blockchain technology is revolutionizing industries and creating new opportunities 
              for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-zion-cyan transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
              >
                <div className="text-zion-cyan mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Blockchain technology offers unique advantages that can transform your business operations 
              and create new revenue streams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-zion-cyan/10 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-zion-cyan" />
                Technologies We Use
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-slate-700 font-medium">{technology}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-zion-cyan" />
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-slate-700 font-medium">{industry}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Build on Blockchain?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how blockchain technology can transform your business and create new opportunities 
            for growth and innovation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-zion-cyan text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
>>>>>>> a4a522bebff354a39d8989949882ddf2ed4fa924
        </div>
      </section>
    </div>);
};
export default BlockchainServices;
