import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Shield, 
  Globe, 
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function QuantumServices() {
  const services = [
    {
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      title: "Quantum Computing Solutions",
      description: "Leverage the power of quantum computing for complex problem-solving and optimization challenges.",
      features: ["Quantum algorithm development", "Optimization problems", "Cryptography applications"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Quantum Machine Learning",
      description: "Combine quantum computing with machine learning for unprecedented AI capabilities.",
      features: ["Quantum neural networks", "Pattern recognition", "Data classification"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      title: "Quantum Software Development",
      description: "Custom quantum software solutions tailored to your specific business needs.",
      features: ["Custom quantum applications", "API development", "Integration services"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
      features: ["Quantum key distribution", "Post-quantum cryptography", "Security audits"]
    }
  ];

  const benefits = [
    "Exponential speedup for complex calculations",
    "Enhanced security through quantum cryptography",
    "Revolutionary machine learning capabilities",
    "Future-proof technology investment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Atom className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Harness the power of quantum computing to solve the most complex problems 
            and unlock new possibilities for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-zion-cyan">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Quantum Computing?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-zion-slate-light">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Quantum Computing Use Cases</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-zion-cyan/30 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Financial Services</h3>
                <p className="text-zion-slate-light">
                  Portfolio optimization, risk assessment, and algorithmic trading with quantum speed and accuracy.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-purple/30 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
                <p className="text-zion-slate-light">
                  Molecular modeling and simulation for faster, more accurate pharmaceutical development.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-cyan/30 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Logistics & Supply Chain</h3>
                <p className="text-zion-slate-light">
                  Complex optimization problems for routing, scheduling, and resource allocation.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-purple/30 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-zion-slate-light">
                  Quantum-resistant encryption and advanced threat detection systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore Quantum Computing?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our quantum computing experts are ready to help you understand how this revolutionary 
              technology can transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
