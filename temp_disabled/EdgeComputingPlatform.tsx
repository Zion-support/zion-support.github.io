import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Shield, Phone } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function EdgeComputingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Edge Computing Platform | Zion Tech Group"
        description="High-performance edge computing platform for low-latency data processing and real-time analytics."
        keywords="edge computing, IoT, real-time processing, low latency, distributed computing, edge analytics"
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20"
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
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Edge Computing
            </span>
            <br />
            <span className="text-white">Platform</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            High-performance edge computing platform for low-latency data processing, real-time analytics, 
            and IoT device management with distributed computing capabilities.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-emerald-300 font-semibold">$2,499</span>/month
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-teal-300 font-semibold">200-350%</span> ROI
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-cyan-300 font-semibold">8-10 weeks</span> delivery
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
          <p className="text-xl text-gray-300">High-performance edge computing for modern applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Edge processing", description: "Distributed computing at the network edge" },
            { icon: Zap, title: "Low latency", description: "Ultra-fast response times for real-time applications" },
            { icon: Globe, title: "IoT integration", description: "Seamless IoT device management and connectivity" },
            { icon: Shield, title: "Security", description: "Advanced security protocols for edge deployments" },
            { icon: Cpu, title: "Scalability", description: "Horizontal scaling across edge locations" },
            { icon: Zap, title: "Real-time analytics", description: "Instant data processing and insights" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
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
        className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate with Edge Computing?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Connect with our team to discuss how edge computing can enhance your application performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
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