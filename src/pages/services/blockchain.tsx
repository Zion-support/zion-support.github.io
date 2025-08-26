import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Network, Shield, Zap, Globe, Users, BarChart3, Target } from 'lucide-react';

const BlockchainPage = () => {
  const services = [
    {
      icon: Lock,
      title: 'Smart Contracts',
      description: 'Secure, automated smart contracts for business processes, legal agreements, and financial transactions.'
    },
    {
      icon: Network,
      title: 'DeFi Solutions',
      description: 'Decentralized finance platforms for lending, borrowing, trading, and yield farming applications.'
    },
    {
      icon: Shield,
      title: 'Supply Chain',
      description: 'Transparent and immutable supply chain tracking with blockchain verification and authentication.'
    },
    {
      icon: Zap,
      title: 'Tokenization',
      description: 'Asset tokenization for real estate, commodities, and intellectual property on blockchain networks.'
    },
    {
      icon: Globe,
      title: 'Cross-Chain',
      description: 'Interoperability solutions for seamless transactions across different blockchain networks.'
    },
    {
      icon: Users,
      title: 'DAO Development',
      description: 'Decentralized Autonomous Organization frameworks for community governance and decision-making.'
    }
  ];

  const industries = [
    'Financial Services & Banking',
    'Supply Chain & Logistics',
    'Healthcare & Pharmaceuticals',
    'Real Estate & Property',
    'Gaming & Entertainment',
    'Energy & Utilities',
    'Government & Public Sector',
    'Education & Credentials'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with secure, transparent, and decentralized blockchain technology. 
              Build trust, reduce costs, and create new business models with our blockchain solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Blockchain Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Smart Contract Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From smart contracts to DeFi platforms, we provide comprehensive blockchain development and consulting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Blockchain technology is revolutionizing industries by providing transparency, security, 
                and efficiency across various business processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{industry}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <Target className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Blockchain Strategy
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive blockchain assessment and implementation roadmap.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Strategy
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits of blockchain technology for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-zion-slate-light">Immutable records and cryptographic security for tamper-proof data.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transparency</h3>
              <p className="text-zion-slate-light">Public, verifiable records that build trust and accountability.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Efficiency</h3>
              <p className="text-zion-slate-light">Automated processes and reduced intermediaries for cost savings.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Transform your business processes and create new opportunities with blockchain technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Blockchain Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Smart Contract Development
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;