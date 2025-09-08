import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Shield, Zap, Phone } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BlockchainDeFiPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Blockchain DeFi Platform | Zion Tech Group"
        description="Decentralized finance platform built on blockchain technology for secure, transparent financial services."
        keywords="blockchain, DeFi, decentralized finance, cryptocurrency, smart contracts, financial technology"
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Blockchain DeFi
            </span>
            <br />
            <span className="text-white">Platform</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Decentralized finance platform built on blockchain technology for secure, transparent 
            financial services including lending, trading, and yield farming.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-yellow-300 font-semibold">$2,999</span>/month
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-orange-300 font-semibold">300-500%</span> ROI
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-red-300 font-semibold">10-12 weeks</span> delivery
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-300">Decentralized finance powered by blockchain</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Coins, title: "DeFi lending", description: "Decentralized lending and borrowing protocols" },
            { icon: TrendingUp, title: "Yield farming", description: "Automated yield optimization strategies" },
            { icon: Shield, title: "Smart contracts", description: "Secure, audited smart contract infrastructure" },
            { icon: Zap, title: "DEX trading", description: "Decentralized exchange for token trading" },
            { icon: Coins, title: "Staking rewards", description: "Token staking and reward distribution" },
            { icon: Shield, title: "Security features", description: "Multi-layer security and audit protocols" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future of Finance with Blockchain?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Connect with our team to discuss how blockchain and DeFi can transform your financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}