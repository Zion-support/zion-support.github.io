import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Lock, 
  Eye, 
  Zap, 
  Target, 
  Users, 
  Globe,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Clock
} from 'lucide-react';

const AICybersecurity: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect threats in real-time"
    },
    {
      icon: Shield,
      title: "Zero Trust Security",
      description: "Implement comprehensive zero-trust network access controls"
    },
    {
      icon: Eye,
      title: "Behavioral Analysis",
      description: "Monitor and analyze user behavior patterns for anomalies"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated threat response and mitigation"
    }
  ];

  const services = [
    {
      title: "Threat Intelligence",
      description: "Real-time threat intelligence and analysis using AI"
    },
    {
      title: "Vulnerability Assessment",
      description: "AI-powered vulnerability scanning and risk assessment"
    },
    {
      title: "Incident Response",
      description: "Automated incident response and recovery systems"
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous compliance monitoring and reporting"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO 
        title="AI Cybersecurity Services - Zion Tech Group"
        description="Protect your business with cutting-edge AI-powered cybersecurity solutions. Advanced threat detection, zero-trust security, and automated response systems."
        keywords="AI cybersecurity, threat detection, zero trust security, behavioral analysis, automated response, cybersecurity services"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Cybersecurity</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Defend against evolving cyber threats with intelligent AI systems. 
                Our cybersecurity solutions provide real-time protection and automated response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Protected
                </button>
                <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience next-generation security with our AI-powered cybersecurity platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your digital assets with AI-powered cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Security Assessment
              </button>
              <button className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                Contact Security Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurity;