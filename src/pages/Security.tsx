import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Globe,
  Database,
  Network,
  Zap,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail
} from 'lucide-react';

export default function Security() {
  const [expandedCompliance, setExpandedCompliance] = useState<string | null>(null);

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security with AI-powered threat detection and prevention',
      features: [
        'Real-time threat monitoring',
        'Behavioral analysis',
        'Automated response systems',
        '24/7 security operations'
      ]
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit',
      features: [
        'AES-256 encryption',
        'TLS 1.3 protocols',
        'Key management systems',
        'Hardware security modules'
      ]
    },
    {
      icon: Users,
      title: 'Identity & Access Management',
      description: 'Comprehensive user authentication and authorization controls',
      features: [
        'Multi-factor authentication',
        'Single sign-on (SSO)',
        'Role-based access control',
        'Privileged access management'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with network segmentation',
      features: [
        'VPC and subnet isolation',
        'Web application firewalls',
        'DDoS protection',
        'Intrusion detection systems'
      ]
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Comprehensive data backup, recovery, and privacy controls',
      features: [
        'Automated backups',
        'Point-in-time recovery',
        'Data classification',
        'Privacy by design'
      ]
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall protection and intrusion prevention'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2 Type II certification for security, availability, and confidentiality',
      details: [
        'Annual third-party audits',
        'Continuous monitoring',
        'Regular security assessments',
        'Comprehensive reporting'
      ],
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'International standard for information security management systems',
      details: [
        'Risk-based approach',
        'Continuous improvement',
        'Management commitment',
        'Regular audits and reviews'
      ],
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance for EU data protection',
      details: [
        'Data subject rights',
        'Privacy by design',
        'Data breach notification',
        'Regular compliance audits'
      ],
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'HIPAA',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act compliance',
      details: [
        'Protected health information',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards'
      ],
      icon: CheckCircle,
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act'
    }
  ];

  const securityServices = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'AI-powered threat detection with automated response capabilities'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity management and access control solutions'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud and on-premise infrastructure with regular audits'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall, VPN, and intrusion prevention systems'
    }
  ];

  const bestPractices = [
    {
      title: 'Regular Security Training',
      description: 'Ongoing security awareness training for all employees',
      icon: Users
    },
    {
      title: 'Security Assessments',
      description: 'Regular penetration testing and vulnerability assessments',
      icon: Shield
    },
    {
      title: 'Incident Response',
      description: 'Comprehensive incident response and recovery procedures',
      icon: AlertTriangle
    },
    {
      title: 'Security Updates',
      description: 'Regular security patches and system updates',
      icon: Zap
    }
  ];

  const toggleCompliance = (name: string) => {
    setExpandedCompliance(expandedCompliance === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise-Grade Security
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Security is Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Priority
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security solutions that protect your business from evolving cyber threats. 
              Built with enterprise-grade technology and industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive security approach protects every layer of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-zion-cyan" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We maintain the highest standards of security compliance and certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-4">
                  <standard.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{standard.title}</h3>
                <p className="text-sm text-zion-slate-light">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From threat detection to compliance management, we provide end-to-end security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Secure Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in touch with our security experts to discuss your specific security needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
              Get Security Assessment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;
