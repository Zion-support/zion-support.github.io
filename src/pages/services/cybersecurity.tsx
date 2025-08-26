import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Users, Globe, Zap, Target } from 'lucide-react';

const CybersecurityPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with real-time response capabilities to protect your systems 24/7.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Enterprise-grade encryption for data at rest and in transit, ensuring your sensitive information remains secure.'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Comprehensive monitoring and logging with intelligent alerting for proactive security management.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response teams and automated incident handling to minimize damage and recovery time.'
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control to secure user permissions and data access.'
    },
    {
      icon: Globe,
      title: 'Network Security',
      description: 'Firewall management, intrusion prevention, and secure network architecture design.'
    }
  ];

  const features = [
    'AI-powered threat intelligence',
    'Real-time security monitoring',
    'Automated incident response',
    'Compliance management',
    'Security awareness training',
    'Penetration testing',
    'Vulnerability assessments',
    'Security architecture review'
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
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered platform 
              provides comprehensive protection against evolving threats and ensures compliance with industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Security Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                View Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Our cybersecurity platform leverages cutting-edge AI and machine learning to provide 
                proactive threat detection and automated response capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{feature}</span>
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
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Threat Detection Rate</div>
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
              <div className="text-4xl font-bold text-zion-blue mb-2">24/7</div>
              <div className="text-zion-slate-light">Security Monitoring</div>
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
              Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Security Assessment
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;