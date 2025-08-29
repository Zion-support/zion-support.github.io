import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Globe,
  Award,
  Heart,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Database,
  Server,
  Network,
  Key,
  Fingerprint,
  Monitor,
  Clock,
  Code,
  Building,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Security() {
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
      icon: Lock,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Database encryption at field level',
        'Secure key management systems'
      ]
    },
    {
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control',
      icon: Key,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management'
      ]
    },
    {
      title: 'Network Security',
      description: 'Advanced network protection and threat detection',
      icon: Network,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Next-generation firewalls',
        'Intrusion detection systems',
        'DDoS protection',
        'VPN and secure connections'
      ]
    },
    {
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection',
      icon: Monitor,
      color: 'from-orange-500 to-red-500',
      features: [
        'Real-time threat detection',
        'Security information management',
        'Automated incident response',
        'Continuous vulnerability scanning'
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 Type II certification',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      status: 'Certified',
      details: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality protection',
        'Privacy safeguards'
      ]
    },
    {
      title: 'ISO 27001',
      description: 'Information Security Management System certification',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      status: 'Certified',
      details: [
        'Risk management framework',
        'Security policies and procedures',
        'Asset management',
        'Access control systems',
        'Incident management'
      ]
    },
    {
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      status: 'Compliant',
      details: [
        'Data protection by design',
        'Privacy impact assessments',
        'Data subject rights',
        'Breach notification procedures',
        'Data processing agreements'
      ]
    }
  ];

  const securityPractices = [
    {
      title: 'Secure Development',
      description: 'Security-first approach to software development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      practices: [
        'Secure coding standards',
        'Code security reviews',
        'Dependency vulnerability scanning',
        'Security testing automation'
      ]
    },
    {
      title: 'Employee Security',
      description: 'Comprehensive security training and awareness programs',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      practices: [
        'Regular security training',
        'Phishing awareness programs',
        'Security policy education',
        'Incident response training'
      ]
    },
    {
      title: 'Physical Security',
      description: 'Physical security measures for data centers and offices',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      practices: [
        '24/7 security monitoring',
        'Biometric access controls',
        'Environmental monitoring',
        'Disaster recovery planning'
      ]
    }
  ];

  const securityTools = [
    {
      title: 'Security Dashboard',
      description: 'Real-time security monitoring and analytics',
      icon: Monitor,
      href: '/security/dashboard',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated security vulnerability assessment',
      icon: Shield,
      href: '/security/vulnerability-scan',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security Reports',
      description: 'Comprehensive security reports and analytics',
      icon: FileText,
      href: '/security/reports',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Incident Response',
      description: 'Security incident reporting and response',
      icon: AlertTriangle,
      href: '/security/incident-report',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Security Team',
      description: 'Contact our security team for security-related inquiries',
      email: 'security@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '4-8 hours'
    },
    {
      title: 'Security Incident',
      description: 'Report security incidents or vulnerabilities',
      email: 'security-incident@ziontechgroup.com',
      phone: '+1 302 464 0950',
      responseTime: '1-2 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and commitment to protecting your data and systems."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security & Compliance
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your security is our priority. We implement industry-leading security measures to protect 
              your data, systems, and business operations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Commitment */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Security Commitment
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            We understand that security is critical to your business success. Our comprehensive security 
            program combines advanced technology, industry best practices, and continuous monitoring to 
            provide the highest level of protection for your data and systems.
          </p>
        </motion.div>
      </div>

      {/* Security Features */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Security Features
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Compliance & Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{standard.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{standard.description}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Certified' ? 'bg-green-500/20 text-green-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {standard.status}
                </span>
              </div>
              
              <div className="space-y-3">
                {standard.details.map((detail, idx) => (
                  <div key={idx} className="text-slate-300 text-sm">
                    • {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Practices */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Security Practices
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${practice.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <practice.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{practice.title}</h3>
                  <p className="text-slate-400 text-sm">{practice.description}</p>
                </div>
                
                <div className="space-y-3">
                  {practice.practices.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Tools */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Security Tools & Resources
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-slate-400 text-sm">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Security Support & Reporting
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-400 mb-6">{contact.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 text-sm font-medium">@</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.email}</div>
                      <div className="text-slate-400 text-sm">Response time: {contact.responseTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 text-sm font-medium">📞</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.phone}</div>
                      <div className="text-slate-400 text-sm">Available 24/7 for incidents</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Security */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Continuous Security Improvement
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Security is not a one-time effort but a continuous process. We regularly assess our security 
            posture, update our security measures, and stay current with emerging threats and best practices. 
            Our security team works around the clock to ensure your systems remain protected.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
