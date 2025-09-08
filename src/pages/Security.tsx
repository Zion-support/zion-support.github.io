import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Server, CheckCircle, AlertTriangle, Users, Globe, Brain, Zap, Heart } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      title: 'Data Protection',
      description: 'Advanced encryption and data security measures',
      icon: Lock,
      features: [
        'End-to-end encryption (AES-256)',
        'Data at rest encryption',
        'Secure data transmission (TLS 1.3)',
        'Regular security audits',
        'Compliance with industry standards'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Session management and timeout',
        'Privileged access management'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Network Security',
      description: 'Firewall protection and intrusion detection',
      icon: Server,
      features: [
        'Next-generation firewalls',
        'Intrusion detection and prevention',
        'DDoS protection and mitigation',
        'Network segmentation',
        'Real-time threat monitoring'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Threat Intelligence',
      description: 'AI-powered threat detection and response',
      icon: Brain,
      features: [
        'Machine learning threat detection',
        'Behavioral analysis',
        'Threat hunting capabilities',
        'Security information and event management',
        'Automated incident response'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const complianceCertifications = [
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'Information Security Management System',
      icon: CheckCircle,
      color: 'text-green-400',
      year: '2024'
    },
    {
      name: 'SOC 2 Type II',
      status: 'Compliant',
      description: 'Service Organization Control 2',
      icon: CheckCircle,
      color: 'text-green-400',
      year: '2024'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation',
      icon: CheckCircle,
      color: 'text-green-400',
      year: '2024'
    },
    {
      name: 'HIPAA',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      icon: CheckCircle,
      color: 'text-green-400',
      year: '2024'
    }
  ];

  const threatProtection = [
    {
      name: 'Security Training',
      description: 'Regular security awareness training for all employees',
      icon: Users,
      status: 'Monthly'
    },
    {
      name: 'Penetration Testing',
      description: 'Regular security assessments and vulnerability testing',
      icon: Shield,
      status: 'Quarterly'
    },
    {
      name: 'Incident Response',
      description: '24/7 security monitoring and incident response team',
      icon: AlertTriangle,
      status: '24/7'
    },
    {
      name: 'Security Updates',
      description: 'Regular security patches and system updates',
      icon: Zap,
      status: 'Weekly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and commitment to protecting your data and systems."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your security is our priority. We implement industry-leading security measures 
              and maintain compliance with international standards to protect your data and systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Framework
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our multi-layered security approach combines advanced technology, 
              best practices, and continuous monitoring to protect against evolving threats.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Proactive Defense',
                  description: 'Advanced threat detection and prevention'
                },
                {
                  icon: Lock,
                  title: 'Data Protection',
                  description: 'End-to-end encryption and secure storage'
                },
                {
                  icon: Users,
                  title: 'Human Security',
                  description: 'Trained security professionals and awareness'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive security features protect your data and systems at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We maintain compliance with international security standards and regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <div className="flex items-center gap-2">
                    <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    <span className={`font-medium ${cert.color}`}>{cert.status}</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Year: {cert.year}</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Practices
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our ongoing security practices ensure continuous protection and improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <practice.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{practice.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{practice.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                  {practice.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Security Commitment
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We are committed to maintaining the highest standards of security and continuously 
              improving our security posture to protect our clients and their data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Transparency</h3>
                </div>
                <p className="text-slate-300">
                  We believe in transparent security practices and regular reporting 
                  on our security posture and compliance status.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Trust</h3>
                </div>
                <p className="text-slate-300">
                  Building and maintaining trust through proven security measures 
                  and consistent delivery of secure solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Future
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Partner with Zion Tech Group for enterprise-grade security solutions 
              that protect your business and ensure compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Get Security Assessment
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                View Security Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
