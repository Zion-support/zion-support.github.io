import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const CybersecurityServices: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Next-generation security solutions to protect against evolving threats",
      features: ["AI-powered threat detection", "Real-time monitoring", "Incident response", "Threat intelligence"]
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive zero-trust architecture for modern businesses",
      features: ["Identity verification", "Access controls", "Network segmentation", "Continuous validation"]
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security operations center and continuous monitoring",
      features: ["SIEM integration", "Log analysis", "Vulnerability scanning", "Compliance reporting"]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents",
      features: ["Emergency response", "Forensic analysis", "Recovery planning", "Business continuity"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Cybersecurity
            </span>
            <br />
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced cybersecurity solutions to protect your business from evolving threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
            <p className="text-gray-300 mb-6">
              Don't wait for a security breach. Protect your business with our advanced cybersecurity solutions
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 inline-block"
            >
              Get Security Assessment
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityServices;