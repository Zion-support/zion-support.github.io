import React from 'react';
import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle, Server, Database, Network, Users, FileText, Globe } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security architecture with advanced threat protection',
      features: ['SOC2 Type II Compliance', 'ISO 27001 Certified', 'GDPR Compliant', 'HIPAA Ready']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit',
      features: ['AES-256 Encryption', 'TLS 1.3 Protocol', 'Zero-Knowledge Architecture', 'Secure Key Management']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Access Control',
      description: 'Granular access controls with multi-factor authentication',
      features: ['Role-Based Access Control', 'MFA Required', 'Single Sign-On', 'Session Management']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with continuous monitoring',
      features: ['AWS Security Best Practices', 'DDoS Protection', 'Intrusion Detection', '24/7 Monitoring']
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC2 Type II',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Ready',
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />
    }
  ];

  const securityPractices = [
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted quarterly by third-party experts',
      frequency: 'Quarterly'
    },
    {
      title: 'Penetration Testing',
      description: 'Regular penetration testing to identify and fix vulnerabilities',
      frequency: 'Monthly'
    },
    {
      title: 'Security Training',
      description: 'Ongoing security awareness training for all employees',
      frequency: 'Quarterly'
    },
    {
      title: 'Incident Response',
      description: '24/7 incident response team with automated threat detection',
      frequency: '24/7'
    }
  ];

  const dataProtection = [
    {
      title: 'Data Residency',
      description: 'Choose where your data is stored with our global data centers',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated backups with 99.99% recovery time objective',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Data Retention',
      description: 'Configurable data retention policies with automatic deletion',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Privacy Controls',
      description: 'Granular privacy controls for data sharing and processing',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Shield className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise-Grade Security
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures to protect your information and maintain the highest standards of compliance.
          </p>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Comprehensive Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-zion-cyan mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Industry Compliance & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{standard.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{standard.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full font-medium">
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Practices */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Security Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{practice.title}</h3>
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full font-medium">
                    {practice.frequency}
                  </span>
                </div>
                <p className="text-zion-slate-light">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Protection */}
      <div className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Data Protection & Privacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataProtection.map((item, index) => (
              <div key={index} className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 text-center">
                <div className="text-zion-cyan mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zion-slate-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Commitment */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Security Commitment
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We are committed to maintaining the highest security standards and continuously improving our security posture to protect your data and maintain your trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Request Security Assessment
              </a>
              <a 
                href="/docs/security"
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
              >
                Security Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
