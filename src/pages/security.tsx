import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Key, 
  Database, 
  Globe, 
  Users, 
  FileText,
  Award,
  Clock,
  Zap
} from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security with AI-powered threat detection and real-time monitoring.',
      features: ['AI Threat Detection', 'Real-time Monitoring', 'Automated Response']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit using industry-standard protocols.',
      features: ['AES-256 Encryption', 'TLS 1.3', 'Zero-Knowledge Architecture']
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Comprehensive identity and access management with multi-factor authentication.',
      features: ['Multi-Factor Authentication', 'Role-Based Access', 'Single Sign-On']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Robust data backup, recovery, and privacy protection measures.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Anonymization']
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Award
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      status: 'Compliant',
      icon: Globe
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: FileText
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      status: 'Certified',
      icon: Shield
    }
  ];

  const securityMeasures = [
    {
      category: 'Infrastructure Security',
      measures: [
        'Secure data centers with 24/7 monitoring',
        'Redundant systems and failover protection',
        'Regular security audits and penetration testing',
        'Network segmentation and firewalls'
      ]
    },
    {
      category: 'Application Security',
      measures: [
        'Secure coding practices and code reviews',
        'Automated vulnerability scanning',
        'Regular security updates and patches',
        'Input validation and sanitization'
      ]
    },
    {
      category: 'Operational Security',
      measures: [
        'Employee security training and awareness',
        'Incident response procedures',
        'Regular security assessments',
        'Third-party security evaluations'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and data protection practices."
        keywords="security, data protection, compliance, SOC 2, GDPR, HIPAA, cybersecurity, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security &
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures 
              and maintain compliance with the highest standards to protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 inline-flex items-center justify-center"
              >
                Security Consultation
              </a>
              <a
                href="#compliance"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Compliance
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Security Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div id="compliance" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {standard.description}
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">{standard.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Security Measures</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {securityMeasures.map((category, index) => (
                <div
                  key={index}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-zion-cyan to-zion-purple rounded-full mr-4"></div>
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.measures.map((measure, measureIndex) => (
                      <div key={measureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light leading-relaxed">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Timeline</h2>
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Continuous Monitoring</h3>
                    <p className="text-zion-slate-light">
                      24/7 security monitoring with automated threat detection and response systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Rapid Response</h3>
                    <p className="text-zion-slate-light">
                      Incident response team ready to address security issues within minutes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proactive Updates</h3>
                    <p className="text-zion-slate-light">
                      Regular security updates and patches to protect against emerging threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Security Questions?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our security team is available to answer your questions and provide detailed information 
              about our security practices and compliance measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@ziontechgroup.com"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Security Team
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;