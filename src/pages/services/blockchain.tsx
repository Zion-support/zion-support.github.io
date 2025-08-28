import React from 'react';
import { motion } from 'framer-motion';
import { Link, Shield, Zap, Target, Users, Lock, ArrowRight, TrendingUp, Cpu, Network, Globe, Award, Lightbulb, Database, BarChart3, Activity } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function Blockchain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blockchain Solutions - Zion Tech Group"
        description="Transform your business with enterprise blockchain solutions. Our platform provides secure, scalable, and innovative blockchain technology for various industries."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Link className="w-4 h-4 mr-2" />
              Distributed Ledger Technology
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Blockchain Solutions
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of blockchain technology to create transparent, secure, and efficient 
              business processes. From smart contracts to decentralized applications, we build the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                View Use Cases
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Platform Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our blockchain solutions provide comprehensive distributed ledger technology capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security & Immutability",
                description: "Tamper-proof records with cryptographic security and consensus mechanisms"
              },
              {
                icon: Link,
                title: "Smart Contracts",
                description: "Automated, self-executing contracts with predefined conditions"
              },
              {
                icon: Target,
                title: "Transparency",
                description: "Complete visibility into transactions and business processes"
              },
              {
                icon: Users,
                title: "Decentralization",
                description: "Distributed network architecture for enhanced reliability"
              },
              {
                icon: Lock,
                title: "Privacy Controls",
                description: "Advanced privacy features with selective disclosure capabilities"
              },
              {
                icon: Zap,
                title: "Scalability",
                description: "High-performance blockchain networks for enterprise use"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future with Blockchain?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations that trust our blockchain solutions for innovation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
            >
              Start Your Blockchain Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}