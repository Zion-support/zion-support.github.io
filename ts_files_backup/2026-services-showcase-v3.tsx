'use client';

import React from 'react';
import { motion } from 'framer-motion';
BrainShieldZapGlobePhoneMail

export default function ServicesShowcase2026V3() {
  const services = [
    {
      id: 'ai-automation-2026',
      name: 'AI Automation 2026',
      description: 'Next-generation AI automation with quantum-enhanced processing and neural interfaces.',
      icon: Brain,
      features: ['Quantum AI 'Processing', 'Neural Interface 'Integration', 'Predictive Automation']
    },
    {
      id: 'quantum-security-2026',
      name: 'Quantum Security 2026',
      description: 'Revolutionary quantum encryption and AI-powered threat detection systems.',
      icon: Shield,
      features: ['Quantum 'Encryption', 'AI Threat 'Detection', 'Zero Trust Architecture']
    },
    {
      id: 'advanced-infrastructure-2026',
      name: 'Advanced Infrastructure 2026',
      description: 'Cutting-edge cloud infrastructure with AI optimization and autonomous management.',
      icon: Zap,
      features: ['AI 'Optimization', 'Autonomous 'Scaling', 'Real-time Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Advanced Services
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}2026
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our revolutionary AI-powered services 
            designed for the next generation of business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((serviceindex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <Globe className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready for the Future?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our advanced 2026 services and 
            how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}