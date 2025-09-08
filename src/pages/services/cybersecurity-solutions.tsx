import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Monitor,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Users,
  Database,
  Network,
  Globe
} from 'lucide-react';

const CybersecuritySolutions = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security architecture that detects, prevents, and responds to sophisticated cyber threats in real-time.'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity verification, authentication, and authorization systems with zero-trust security principles.'
    },
    {
      icon: Eye,
      title: 'Security Monitoring & SIEM',
      description: '24/7 security monitoring with advanced SIEM capabilities for threat detection and incident response.'
    },
    {
      icon: Zap,
      title: 'Penetration Testing',
      description: 'Regular security assessments and ethical hacking to identify vulnerabilities before attackers can exploit them.'
    },
    {
      icon: Monitor,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards including SOC2, ISO 27001, GDPR, and HIPAA requirements.'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall management, intrusion detection, and network segmentation for comprehensive protection.'
    }
  ];

  const benefits = [
    'Protect against 99.9% of cyber threats',
    'Reduce security incidents by 80%',
    'Ensure regulatory compliance',
    'Minimize data breach risks',
    'Enable secure remote work',
    'Provide 24/7 security monitoring'
  ];

  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation including vulnerability assessments, penetration testing, and risk analysis.'
    },
    {
      title: 'Security Architecture',
      description: 'Design and implementation of robust security frameworks tailored to your business requirements.'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents with detailed post-incident analysis.'
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation programs to strengthen human firewall.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Advanced Security</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions that adapt to evolving threats 
              and ensure your business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions provide multi-layered protection across all aspects of your digital infrastructure, 
              from endpoints to cloud environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our Cybersecurity Solutions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Framework Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Security Frameworks & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help organizations achieve and maintain compliance with industry-leading security standards and frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'SOC2', icon: Shield },
              { name: 'ISO 27001', icon: Shield },
              { name: 'GDPR', icon: Lock },
              { name: 'HIPAA', icon: Lock },
              { name: 'PCI DSS', icon: Shield },
              { name: 'NIST', icon: Shield },
              { name: 'CIS', icon: Shield },
              { name: 'COBIT', icon: Shield }
            ].map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <framework.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust us to protect their critical digital assets and maintain compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Free Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecuritySolutions;