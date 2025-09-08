import React from 'react';
import { motion  } from 'framer-motion';
import { Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Key, 
  Fingerprint, 
  Server, 
  Database, 
  Network, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Heart,
  Award,
  Zap,
  Brain,
  Cloud,
  Code,
  Target,
  Star,
  Rocket,
  Lightbulb,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope,
  BadgeCheck,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data in transit and at rest',
    icon: Lock,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'AES-256 encryption',
      'TLS 1.3 protocols',
      'Zero-knowledge architecture',
      'Encrypted backups',
      'Hardware security modules',
      'Key management systems'
    ]
  },
  {
    title: 'Identity & Access Management',
    description: 'Comprehensive identity verification and access control',
    icon: Fingerprint,
    color: 'from-green-400 to-emerald-500',
    features: [
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Role-based access control',
      'Privileged access management',
      'Identity federation',
      'Biometric authentication'
    ]
  },
  {
    title: 'Network Security',
    description: 'Advanced network protection and monitoring',
    icon: Network,
    color: 'from-purple-400 to-pink-500',
    features: [
      'Next-generation firewalls',
      'Intrusion detection systems',
      'DDoS protection',
      'VPN and secure tunnels',
      'Network segmentation',
      'Traffic analysis'
    ]
  },
  {
    title: 'Threat Detection',
    description: 'AI-powered threat detection and response',
    icon: Eye,
    color: 'from-orange-400 to-red-500',
    features: [
      'Behavioral analytics',
      'Machine learning detection',
      'Real-time monitoring',
      'Automated response',
      'Threat intelligence',
      'Incident response'
    ]
  }
];

const securityStandards = [
  {
    standard: 'SOC 2 Type II',
    description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    standard: 'ISO 27001',
    description: 'International standard for information security management systems',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    standard: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    standard: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  }
];

const securityServices = [
  {
    title: 'Security Assessment',
    description: 'Comprehensive security evaluation and penetration testing',
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
    services: [
      'Vulnerability assessments',
      'Penetration testing',
      'Security audits',
      'Compliance reviews',
      'Risk assessments',
      'Security architecture review'
    ]
  },
  {
    title: 'Incident Response',
    description: '24/7 security incident detection and response services',
    icon: Zap,
    color: 'from-green-400 to-emerald-500',
    services: [
      'Threat hunting',
      'Incident investigation',
      'Forensic analysis',
      'Recovery planning',
      'Post-incident review',
      'Security training'
    ]
  },
  {
    title: 'Security Consulting',
    description: 'Expert guidance on security strategy and implementation',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    services: [
      'Security strategy development',
      'Policy and procedure creation',
      'Security awareness training',
      'Technology selection',
      'Implementation guidance',
      'Ongoing support'
    ]
  },
  {
    title: 'Managed Security',
    description: 'Complete security operations center services',
    icon: Server,
    color: 'from-orange-400 to-red-500',
    services: [
      '24/7 monitoring',
      'Threat detection',
      'Incident response',
      'Vulnerability management',
      'Security updates',
      'Performance reporting'
    ]
  }
];

const securityMetrics = [
  {
    metric: '99.99%',
    label: 'Uptime',
    description: 'System availability and reliability'
  },
  {
    metric: '< 5 min',
    label: 'Response Time',
    description: 'Average incident response time'
  },
  {
    metric: '0',
    label: 'Data Breaches',
    description: 'Successful security incidents'
  },
  {
    metric: '100%',
    label: 'Compliance',
    description: 'Regulatory compliance rate'
  }
];

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'End-to-end encryption and secure data handling protocols',
      features: [
        'AES-256 encryption at rest',
        'TLS 1.3 encryption in transit',
        'Secure key management',
        'Data anonymization',
        'Regular security audits'
      ]
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access management',
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO)',
        'Session management',
        'Privileged access management'
      ]
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection systems',
      features: [
        'Real-time threat detection',
        'Security information and event management (SIEM)',
        'Intrusion detection systems (IDS)',
        'Behavioral analytics',
        'Automated response systems'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure and physical security measures',
      features: [
        'Secure cloud hosting (AWS, Azure, GCP)',
        'Physical data center security',
        'Network segmentation',
        'DDoS protection',
        'Backup and disaster recovery'
      ]
    }
  ];

  const securityCertifications = [
    {
      name: 'ISO 27001',
      level: 'Information Security',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: BadgeCheck,
      validUntil: '2025-12-31'
    },
    {
      name: 'SOC 2 Type II',
      level: 'Security & Privacy',
      description: 'Service Organization Control 2 compliance for security and privacy',
      status: 'Certified',
      icon: BadgeCheck,
      validUntil: '2025-06-30'
    },
    {
      name: 'GDPR',
      level: 'Data Protection',
      description: 'General Data Protection Regulation compliance for EU data handling',
      status: 'Compliant',
      icon: CheckCircle,
      validUntil: 'Ongoing'
    },
    {
      name: 'HIPAA',
      level: 'Healthcare',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: CheckCircle,
      validUntil: 'Ongoing'
    }
  ];

  const threatProtection = [
    {
      threat: 'Malware & Ransomware',
      protection: 'Advanced endpoint protection, sandboxing, and behavioral analysis',
      tools: ['CrowdStrike', 'SentinelOne', 'Custom ML models'],
      risk: 'Low'
    },
    {
      threat: 'Phishing & Social Engineering',
      protection: 'Email security, user training, and threat intelligence',
      tools: ['Proofpoint', 'Mimecast', 'Security awareness training'],
      risk: 'Low'
    },
    {
      threat: 'DDoS Attacks',
      protection: 'Multi-layered DDoS protection and traffic filtering',
      tools: ['Cloudflare', 'AWS Shield', 'Custom mitigation'],
      risk: 'Very Low'
    },
    {
      threat: 'Insider Threats',
      protection: 'User behavior analytics and access monitoring',
      tools: ['Forcepoint', 'Exabeam', 'Privileged access management'],
      risk: 'Low'
    }
  ];

  const securityMetrics = [
    {
      metric: 'Uptime',
      value: '99.99%',
      description: 'System availability and reliability',
      trend: 'Stable',
      icon: TrendingUp
    },
    {
      metric: 'Response Time',
      value: '< 15min',
      description: 'Security incident response time',
      trend: 'Improving',
      icon: Clock
    },
    {
      metric: 'Threats Blocked',
      value: '10M+',
      description: 'Malicious attempts blocked monthly',
      trend: 'Increasing',
      icon: Shield
    },
    {
      metric: 'Vulnerabilities',
      value: '0 Critical',
      description: 'Critical security vulnerabilities',
      trend: 'Stable',
      icon: CheckCircle
    }
  ];

  const securityPolicies = [
    {
      name: 'Data Classification Policy',
      description: 'Guidelines for classifying and handling different types of data',
      lastUpdated: '2024-01-15',
      nextReview: '2024-07-15'
    },
    {
      name: 'Access Control Policy',
      description: 'Standards for user access management and authentication',
      lastUpdated: '2024-02-01',
      nextReview: '2024-08-01'
    },
    {
      name: 'Incident Response Plan',
      description: 'Procedures for handling security incidents and breaches',
      lastUpdated: '2024-01-30',
      nextReview: '2024-07-30'
    },
    {
      name: 'Business Continuity Plan',
      description: 'Strategies for maintaining operations during disruptions',
      lastUpdated: '2024-02-15',
      nextReview: '2024-08-15'
    }
  ];

  const complianceAreas = [
    {
      area: 'Data Privacy',
      status: 'Compliant',
      frameworks: ['GDPR', 'CCPA', 'LGPD'],
      description: 'Comprehensive data privacy compliance across jurisdictions'
    },
    {
      area: 'Financial Services',
      status: 'Compliant',
      frameworks: ['PCI DSS', 'SOX', 'GLBA'],
      description: 'Financial industry security and compliance standards'
    },
    {
      area: 'Healthcare',
      status: 'Compliant',
      frameworks: ['HIPAA', 'HITECH', 'FDA'],
      description: 'Healthcare industry security and privacy requirements'
    },
    {
      area: 'Government',
      status: 'In Progress',
      frameworks: ['FedRAMP', 'FISMA', 'CJIS'],
      description: 'Government security and compliance certifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and systems."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Security & Compliance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your security is our top priority. We implement enterprise-grade security measures 
            and maintain rigorous compliance standards to protect your data and systems.
          </p>
        </motion.div>

        {/* Security Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-16 border border-cyan-500/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We employ a multi-layered security approach that combines advanced technology, 
              rigorous processes, and continuous monitoring to protect against evolving threats. 
              Our security framework is designed to meet the highest industry standards and 
              regulatory requirements.
            </p>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">{cert.level}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Certified' || cert.status === 'Compliant'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {cert.status}
                </span>
                <p className="text-gray-500 text-xs mt-2">Valid until: {cert.validUntil}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Threat Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Threat Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {threatProtection.map((threat, index) => (
              <motion.div
                key={threat.threat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{threat.threat}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    threat.risk === 'Very Low' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : threat.risk === 'Low'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {threat.risk}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{threat.protection}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyan-400">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {threat.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-400 text-sm mb-3">{metric.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  metric.trend === 'Improving' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : metric.trend === 'Stable'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {metric.trend}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Policies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {securityPolicies.map((policy, index) => (
              <motion.div
                key={policy.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{policy.name}</h3>
                <p className="text-gray-400 mb-4">{policy.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Last Updated:</span>
                    <p className="text-white">{policy.lastUpdated}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Next Review:</span>
                    <p className="text-white">{policy.nextReview}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{area.area}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    area.status === 'Compliant' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {area.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyan-400">Frameworks:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.frameworks.map((framework, frameworkIndex) => (
                      <span
                        key={frameworkIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Security Questions?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our security team is available to answer your questions and provide 
              detailed information about our security measures and compliance status.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{standard.standard}</h4>
                    <p className="text-slate-300 text-sm mb-3">{standard.description}</p>
                  </div>
                  <div className={`flex items-center ${standard.color}`}>
                    <standard.icon className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium">{standard.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive security services to protect your business at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.services.map((serv, servIndex) => (
                    <div key={servIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {serv}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Architecture
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multi-layered security approach for comprehensive protection
            </p>
          </motion.div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Perimeter Security</h4>
                <p className="text-slate-300 text-sm">
                  Firewalls, DDoS protection, and network monitoring
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Data Protection</h4>
                <p className="text-slate-300 text-sm">
                  Encryption, access controls, and data loss prevention
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Monitoring & Response</h4>
                <p className="text-slate-300 text-sm">
                  Threat detection, incident response, and continuous monitoring
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a comprehensive security assessment and protect your business from evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Security Team
              </a>
              <a
                href="/support"
                className="bg-slate-700/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50"
              >
                Security Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
