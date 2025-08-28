import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Network, Shield, Zap, Globe, Settings } from 'lucide-react';

export default function Equipment() {
  const services = [
    {
      icon: Server,
      title: 'Server Infrastructure',
      description: 'High-performance servers and data center solutions'
    },
    {
      icon: Cpu,
      title: 'Computing Hardware',
      description: 'Advanced processors and specialized computing equipment'
    },
    {
      icon: HardDrive,
      title: 'Storage Solutions',
      description: 'Enterprise storage and backup systems'
    },
    {
      icon: Network,
      title: 'Network Equipment',
      description: 'Routers, switches, and network infrastructure'
    },
    {
      icon: Shield,
      title: 'Security Hardware',
      description: 'Firewalls, intrusion detection, and security appliances'
    },
    {
      icon: Zap,
      title: 'Power Systems',
      description: 'UPS systems and power management solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Equipment Services - Zion Tech Group"
        description="Enterprise-grade technology equipment and infrastructure solutions. Servers, networking, storage, and security hardware."
      />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Equipment</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade technology infrastructure and equipment solutions for modern businesses.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
              Get Equipment Quote
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Equipment & Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology equipment solutions to power your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert consultation and equipment recommendations for your business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
              Contact Equipment Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}