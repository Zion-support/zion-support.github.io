import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Network, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Smartphone,
  Server,
  Key
} from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security with AI-powered threat detection and prevention.',
      icon: Shield,
      benefits: ['Real-time monitoring', 'Automated response', 'Zero-day protection']
    },
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest.',
      icon: Lock,
      benefits: ['AES-256 encryption', 'TLS 1.3 protocols', 'Secure key management']
    },
    {
      title: 'Access Control',
      description: 'Comprehensive identity and access management with multi-factor authentication.',
      icon: Key,
      benefits: ['Role-based access', 'MFA support', 'Single sign-on']
    },
    {
      title: 'Network Security',
      description: 'Advanced firewall and intrusion detection systems.',
      icon: Network,
      benefits: ['DDoS protection', 'Traffic monitoring', 'Vulnerability scanning']
    },
    {
      title: 'Compliance & Auditing',
      description: 'Regular security audits and compliance with industry standards.',
      icon: Eye,
      benefits: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance']
    },
    {
      title: 'Incident Response',
      description: '24/7 security monitoring and rapid incident response.',
      icon: AlertTriangle,
      benefits: ['24/7 monitoring', 'Rapid response', 'Forensic analysis']
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 certification for security, availability, and confidentiality.',
      icon: CheckCircle,
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems.',
      icon: CheckCircle,
      status: 'Certified'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection.',
      icon: CheckCircle,
      status: 'Compliant'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance.',
      icon: CheckCircle,
      status: 'Compliant'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance.',
      icon: CheckCircle,
      status: 'Compliant'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for government cloud.',
      icon: CheckCircle,
      status: 'In Progress'
    }
  ];

  const securityMetrics = [
    {
      metric: '99.99%',
      label: 'Uptime',
      description: 'Guaranteed service availability'
    },
    {
      metric: '< 15 min',
      label: 'Response Time',
      description: 'Average incident response time'
    },
    {
      metric: '0',
      label: 'Data Breaches',
      description: 'No successful breaches to date'
    },
    {
      metric: '256-bit',
      label: 'Encryption',
      description: 'Military-grade encryption standard'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Security & Compliance
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Your security is our top priority. We implement enterprise-grade security measures 
              and maintain strict compliance with industry standards to protect your data and operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Security Assessment
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Security Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Security by the Numbers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven security metrics that demonstrate our commitment to protecting your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-white mb-2">{item.label}</div>
                <p className="text-zion-slate-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Multi-layered security approach designed to protect against all types of threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We maintain the highest standards of compliance and security certifications 
              to ensure your data is protected according to industry best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Certified' || standard.status === 'Compliant'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {standard.name}
                </h3>
                
                <p className="text-zion-slate-light leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Security Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Continuous security improvement through regular assessments, updates, and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Comprehensive security evaluation' },
              { step: '2', title: 'Implementation', description: 'Deploy security measures' },
              { step: '3', title: 'Monitoring', description: '24/7 security surveillance' },
              { step: '4', title: 'Improvement', description: 'Continuous optimization' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-zion-slate-light">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach to happen. Proactively protect your business 
              with our comprehensive security solutions and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Request Security Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;