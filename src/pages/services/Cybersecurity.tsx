import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Zap, TrendingUp, Users, Globe } from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Advanced threat detection and response systems"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Multi-factor authentication and identity management"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Regular security audits and penetration testing"
    }
  ];

  const benefits = [
    "Protect against 99.9% of cyber threats",
    "Compliance with industry standards",
    "Reduced risk of data breaches",
    "Enhanced customer trust and reputation",
    "Cost-effective security solutions"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity - Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity solutions and expert threat detection."
        keywords="cybersecurity, threat detection, security monitoring, access control, vulnerability assessment"
        canonical="https://ziontechgroup.com/services/cybersecurity"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cybersecurity
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              {" "}Protection
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Secure your digital assets with our comprehensive cybersecurity solutions designed 
            to protect against evolving threats and ensure business continuity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Secure Your Business
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from all angles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Security Solutions?</h2>
              <p className="text-xl text-gray-600">
                Experience peace of mind with our proven cybersecurity approach
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Security Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;