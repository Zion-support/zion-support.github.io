import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Zap, 
  Network,
  CheckCircle,
  BarChart3,
  Globe,
  Rocket,
  Lock,
  Database
} from 'lucide-react';
import { SEO } from '../../../components/SEO';

export default function BlockchainEnterprisePlatform() {
  const features = [
    {
      icon: Link,
      title: "Smart Contracts",
      description: "Automated, self-executing contracts that ensure transparency and reduce intermediaries."
    },
    {
      icon: Shield,
      title: "Immutable Security",
      description: "Tamper-proof blockchain technology that provides unparalleled data integrity."
    },
    {
      icon: Network,
      title: "Decentralized Networks",
      description: "Distributed ledger technology that eliminates single points of failure."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized blockchain solutions designed for enterprise-scale operations."
    }
  ];

  const benefits = [
    "Reduce transaction costs by up to 90%",
    "Eliminate fraud and increase transparency",
    "Streamline supply chain operations",
    "Enable new business models and revenue streams",
    "Improve regulatory compliance and audit trails"
  ];

  const useCases = [
    {
      title: "Supply Chain Management",
      description: "End-to-end visibility and traceability across complex supply networks"
    },
    {
      title: "Financial Services",
      description: "Faster, cheaper, and more secure cross-border transactions"
    },
    {
      title: "Healthcare",
      description: "Secure patient data sharing and pharmaceutical supply chain tracking"
    },
    {
      title: "Real Estate",
      description: "Streamlined property transactions and title management"
    }
  ];

  return (
    <>
      <SEO 
        title="Blockchain Enterprise Platform | Zion Tech Group"
        description="Transform your business with enterprise-grade blockchain solutions. Secure, scalable, and transparent blockchain infrastructure for modern enterprises."
        keywords="blockchain, enterprise blockchain, smart contracts, decentralized networks, supply chain, fintech"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blockchain
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}Enterprise Platform
                </span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Transform your business operations with enterprise-grade blockchain technology. 
                Our platform delivers secure, scalable, and transparent solutions that drive 
                innovation and efficiency across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Explore Platform
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-green-400 hover:text-green-400 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise Blockchain Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our blockchain platform combines cutting-edge technology with enterprise-grade 
                security and scalability to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                See real results with our blockchain enterprise platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our blockchain platform works across diverse industries and business models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl p-12 text-center border border-green-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the blockchain revolution with our enterprise platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-green-400 hover:text-green-400 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}