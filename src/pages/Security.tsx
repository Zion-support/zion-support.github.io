import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Users, Globe, Zap, Target, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Layer Security',
      description: 'Enterprise-grade security with multiple layers of protection including firewalls, encryption, and access controls.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit, ensuring your information remains secure.'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with real-time threat detection and automated response systems.'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence and proactive security measures to prevent attacks before they occur.'
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication and secure user management.'
    },
    {
      icon: Globe,
      title: 'Compliance',
      description: 'Full compliance with industry standards including SOC2, ISO 27001, and GDPR requirements.'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II Certification',
    'ISO 27001 Information Security',
    'GDPR Compliance',
    'HIPAA Compliance',
    'PCI DSS Compliance',
    'NIST Cybersecurity Framework'
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Your security is our top priority. We implement enterprise-grade security measures and maintain 
              full compliance with industry standards to protect your data and business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Security Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Compliance Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive security measures designed to protect your business and data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Compliance
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                We maintain full compliance with industry standards and regulations to ensure your business 
                meets all security and privacy requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>{standard}</span>
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
                    Security Assessment
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive security evaluation of your infrastructure and systems.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.99%</div>
              <div className="text-zion-slate-light">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">&lt;5min</div>
              <div className="text-zion-slate-light">Response Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-zion-blue mb-2">0</div>
              <div className="text-zion-slate-light">Security Breaches</div>
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Protect your business with enterprise-grade security and maintain full compliance with industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Security Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Compliance Review
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;