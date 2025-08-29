import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield,
  Lock,
  Eye,
  Brain,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  FileText,
  Video,
  BookOpen,
  Users,
  Globe,
  MapPin,
  Calendar,
  User,
  Building,
  Zap,
  Cloud,
  ArrowRight,
  Settings,
  HelpCircle,
  MessageSquare,
  FileCode,
  Terminal,
  Database,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Clock3,
  MessageCircle,
  Phone,
  Mail,
  Star,
  Monitor,
  Key,
  Fingerprint,
  Server,
  Network,
  AlertTriangle,
  XCircle,
  FileCheck,
  FileX,
  FileAlert,
  FileSearch,
  FileShield,
  FileLock,
  CreditCard
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Security() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['features']);

  const securityCategories = [
    { id: 'all', name: 'All Security', count: 32, color: 'from-red-500 to-orange-600' },
    { id: 'features', name: 'Security Features', count: 12, color: 'from-blue-500 to-cyan-600' },
    { id: 'compliance', name: 'Compliance & Standards', count: 8, color: 'from-green-500 to-emerald-600' },
    { id: 'threats', name: 'Threat Protection', count: 6, color: 'from-purple-500 to-pink-600' },
    { id: 'resources', name: 'Security Resources', count: 6, color: 'from-indigo-500 to-purple-600' }
  ];

  const securityFeatures = [
    {
      id: 'zero-trust',
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust principles with continuous verification and least privilege access',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      status: 'fully-implemented',
      details: [
        'Identity verification at every access point',
        'Continuous monitoring and validation',
        'Least privilege access controls',
        'Micro-segmentation of networks',
        'Real-time threat detection'
      ]
    },
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for data at rest and in transit across all platforms',
      icon: Lock,
      color: 'from-green-500 to-emerald-600',
      featured: true,
      status: 'fully-implemented',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Key management and rotation',
        'Hardware security modules (HSM)',
        'Quantum-resistant algorithms'
      ]
    },
    {
      id: 'ai-threat-detection',
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms for real-time threat detection and response',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      featured: true,
      status: 'fully-implemented',
      details: [
        'Machine learning threat analysis',
        'Behavioral anomaly detection',
        'Predictive threat intelligence',
        'Automated response systems',
        'Continuous learning and adaptation'
      ]
    },
    {
      id: 'multi-factor-auth',
      title: 'Multi-Factor Authentication',
      description: 'Multiple authentication methods for enhanced account security',
      icon: Key,
      color: 'from-orange-500 to-red-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'SMS and email verification',
        'Authenticator app support',
        'Hardware security keys',
        'Biometric authentication',
        'Adaptive authentication'
      ]
    },
    {
      id: 'network-security',
      title: 'Advanced Network Security',
      description: 'Comprehensive network protection with firewalls and intrusion prevention',
      icon: Network,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Next-generation firewalls',
        'Intrusion prevention systems',
        'DDoS protection',
        'Network segmentation',
        'Traffic analysis and monitoring'
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection with privacy-by-design principles',
      icon: Database,
      color: 'from-teal-500 to-cyan-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Data classification and labeling',
        'Access controls and permissions',
        'Data loss prevention (DLP)',
        'Privacy impact assessments',
        'GDPR and CCPA compliance'
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response & Recovery',
      description: '24/7 security operations center with rapid incident response',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        '24/7 security monitoring',
        'Automated incident response',
        'Forensic analysis capabilities',
        'Business continuity planning',
        'Post-incident reviews'
      ]
    },
    {
      id: 'vulnerability-management',
      title: 'Vulnerability Management',
      description: 'Continuous vulnerability assessment and remediation processes',
      icon: FileSearch,
      color: 'from-pink-500 to-rose-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Automated vulnerability scanning',
        'Penetration testing services',
        'Patch management systems',
        'Security assessment reports',
        'Remediation tracking'
      ]
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Enterprise-grade cloud security with compliance and governance',
      icon: Cloud,
      color: 'from-slate-500 to-gray-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Cloud access security brokers',
        'Identity and access management',
        'Data encryption in the cloud',
        'Compliance monitoring',
        'Security posture management'
      ]
    },
    {
      id: 'endpoint-security',
      title: 'Endpoint Security',
      description: 'Comprehensive endpoint protection for all devices and platforms',
      icon: Monitor,
      color: 'from-cyan-500 to-blue-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Antivirus and antimalware',
        'Device control and management',
        'Application whitelisting',
        'Endpoint detection and response',
        'Mobile device management'
      ]
    },
    {
      id: 'compliance-monitoring',
      title: 'Compliance Monitoring',
      description: 'Real-time compliance monitoring and reporting across all systems',
      icon: FileCheck,
      color: 'from-emerald-500 to-green-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Automated compliance checks',
        'Real-time policy enforcement',
        'Compliance reporting dashboards',
        'Audit trail management',
        'Regulatory updates'
      ]
    },
    {
      id: 'security-training',
      title: 'Security Awareness Training',
      description: 'Comprehensive security training for employees and stakeholders',
      icon: Users,
      color: 'from-violet-500 to-purple-600',
      featured: false,
      status: 'fully-implemented',
      details: [
        'Phishing simulation exercises',
        'Security best practices training',
        'Incident response training',
        'Compliance training modules',
        'Regular security assessments'
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Service Organization Control 2 Type II certification for security controls',
      status: 'certified',
      lastAudit: 'Nov 1, 2024',
      nextAudit: 'May 1, 2025',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      details: [
        'Security controls assessment',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality protection',
        'Privacy controls'
      ]
    },
    {
      title: 'ISO 27001 Certification',
      description: 'International standard for information security management systems',
      status: 'certified',
      lastAudit: 'Oct 15, 2024',
      nextAudit: 'Apr 15, 2025',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Information security management',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Continuous improvement',
        'Management commitment'
      ]
    },
    {
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'compliant',
      lastAudit: 'Dec 1, 2024',
      nextAudit: 'Jun 1, 2025',
      icon: Lock,
      color: 'from-purple-500 to-pink-600',
      details: [
        'Data protection principles',
        'Individual rights protection',
        'Data breach notification',
        'Privacy by design',
        'Data processing agreements'
      ]
    },
    {
      title: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'compliant',
      lastAudit: 'Nov 30, 2024',
      nextAudit: 'May 30, 2025',
      icon: FileShield,
      color: 'from-indigo-500 to-purple-600',
      details: [
        'Protected health information',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Privacy rule compliance'
      ]
    },
    {
      title: 'PCI DSS Compliance',
      description: 'Payment Card Industry Data Security Standard compliance',
      status: 'compliant',
      lastAudit: 'Oct 30, 2024',
      nextAudit: 'Apr 30, 2025',
      icon: FileLock,
      color: 'from-orange-500 to-red-600',
      details: [
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures',
        'Network monitoring',
        'Security policy maintenance'
      ]
    },
    {
      title: 'FedRAMP Authorization',
      description: 'Federal Risk and Authorization Management Program authorization',
      status: 'authorized',
      lastAudit: 'Nov 15, 2024',
      nextAudit: 'May 15, 2025',
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      details: [
        'Cloud service security',
        'Federal security requirements',
        'Third-party assessment',
        'Continuous monitoring',
        'Authorization maintenance'
      ]
    },
    {
      title: 'NIST Cybersecurity Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework',
      status: 'implemented',
      lastAudit: 'Dec 10, 2024',
      nextAudit: 'Jun 10, 2025',
      icon: FileCode,
      color: 'from-cyan-500 to-blue-600',
      details: [
        'Identify cybersecurity risks',
        'Protect critical assets',
        'Detect cybersecurity events',
        'Respond to incidents',
        'Recover from incidents'
      ]
    },
    {
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance for data protection',
      status: 'compliant',
      lastAudit: 'Dec 5, 2024',
      nextAudit: 'Jun 5, 2025',
      icon: FileLock,
      color: 'from-yellow-500 to-orange-600',
      details: [
        'Consumer privacy rights',
        'Data disclosure requirements',
        'Opt-out mechanisms',
        'Data security measures',
        'Privacy policy compliance'
      ]
    }
  ];

  const threatProtection = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced protection against ransomware attacks with automated recovery',
      type: 'protection',
      coverage: 'Comprehensive',
      icon: FileX,
      color: 'from-red-500 to-pink-600',
      features: [
        'Behavioral analysis detection',
        'File integrity monitoring',
        'Automated backup systems',
        'Rapid recovery procedures',
        'Threat intelligence sharing'
      ]
    },
    {
      title: 'Phishing Defense',
      description: 'Multi-layered phishing protection with AI-powered detection',
      type: 'defense',
      coverage: 'Advanced',
      icon: FileAlert,
      color: 'from-orange-500 to-red-600',
      features: [
        'AI-powered email analysis',
        'URL reputation checking',
        'Attachment sandboxing',
        'User awareness training',
        'Real-time threat blocking'
      ]
    },
    {
      title: 'DDoS Mitigation',
      description: 'Distributed Denial of Service protection with traffic analysis',
      type: 'mitigation',
      coverage: 'Enterprise',
      icon: Network,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Traffic analysis and filtering',
        'Rate limiting and throttling',
        'Geographic blocking',
        'Load balancing',
        '24/7 monitoring'
      ]
    },
    {
      title: 'Insider Threat Detection',
      description: 'Advanced monitoring for insider threats and data exfiltration',
      type: 'detection',
      coverage: 'Comprehensive',
      icon: User,
      color: 'from-purple-500 to-pink-600',
      features: [
        'User behavior analytics',
        'Data access monitoring',
        'Privilege escalation detection',
        'Anomaly identification',
        'Automated response'
      ]
    },
    {
      title: 'Supply Chain Security',
      description: 'Comprehensive security for third-party vendors and suppliers',
      type: 'security',
      coverage: 'End-to-End',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Vendor risk assessment',
        'Security requirements enforcement',
        'Continuous monitoring',
        'Incident response coordination',
        'Compliance verification'
      ]
    },
    {
      title: 'Zero-Day Threat Protection',
      description: 'Protection against unknown and emerging threats',
      type: 'protection',
      coverage: 'Advanced',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Behavioral analysis',
        'Machine learning detection',
        'Threat intelligence feeds',
        'Sandbox analysis',
        'Rapid response systems'
      ]
    }
  ];

  const securityResources = [
    {
      title: 'Security Documentation',
      description: 'Comprehensive security documentation and best practices',
      type: 'documentation',
      availability: '24/7',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600',
      access: 'Public',
      updateFrequency: 'Weekly'
    },
    {
      title: 'Security Training',
      description: 'Security awareness training for employees and partners',
      type: 'training',
      availability: 'By appointment',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      access: 'Restricted',
      updateFrequency: 'Monthly'
    },
    {
      title: 'Security Assessments',
      description: 'Professional security assessments and penetration testing',
      type: 'service',
      availability: 'By appointment',
      icon: FileSearch,
      color: 'from-purple-500 to-pink-600',
      access: 'Restricted',
      updateFrequency: 'Quarterly'
    },
    {
      title: 'Security Updates',
      description: 'Regular security updates and patch information',
      type: 'updates',
      availability: '24/7',
      icon: FileCheck,
      color: 'from-orange-500 to-red-600',
      access: 'Public',
      updateFrequency: 'Daily'
    },
    {
      title: 'Security Community',
      description: 'Join our security community for insights and collaboration',
      type: 'community',
      availability: '24/7',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      access: 'Public',
      updateFrequency: 'Real-time'
    },
    {
      title: 'Security Support',
      description: '24/7 security support and incident response',
      type: 'support',
      availability: '24/7',
      icon: MessageCircle,
      color: 'from-teal-500 to-cyan-600',
      access: 'Restricted',
      updateFrequency: 'Immediate'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'fully-implemented':
      case 'certified':
      case 'compliant':
      case 'authorized':
      case 'implemented':
        return 'text-green-400 bg-green-400/10';
      case 'partially-implemented':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'not-implemented':
      case 'non-compliant':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'fully-implemented':
      case 'certified':
      case 'compliant':
      case 'authorized':
      case 'implemented':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'partially-implemented':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'not-implemented':
      case 'non-compliant':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security - Zion Tech Group"
        description="Enterprise-grade security with zero trust architecture, AI-powered threat detection, and comprehensive compliance. Protect your business with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Protect your business with enterprise-grade security featuring zero trust architecture, AI-powered threat detection, and comprehensive compliance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search security features, compliance info, or threat protection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Zero Trust</div>
                <div className="text-slate-400 text-sm">Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Threat Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-slate-400 text-sm">Compliance Standards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Features</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Comprehensive security features designed to protect your business from all types of threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  feature.featured 
                    ? 'border-red-500/50 shadow-lg shadow-red-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {feature.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Feature</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                    {feature.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Standards</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              We maintain the highest standards of security compliance across all our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{standard.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{standard.description}</p>
                    
                    <div className="flex items-center gap-3 mb-3">
                      {getStatusIcon(standard.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(standard.status)}`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Last Audit</span>
                    {standard.lastAudit}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Next Audit</span>
                    {standard.nextAudit}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Compliance Areas:</h4>
                  <ul className="space-y-1">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  View Compliance Report
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Threat Protection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Threat Protection</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Comprehensive protection against all types of cyber threats and attacks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatProtection.map((threat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${threat.color} rounded-xl flex items-center justify-center`}>
                    <threat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{threat.title}</h3>
                    <p className="text-slate-400 text-sm">{threat.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
                    {threat.type}
                  </span>
                  <span className="text-green-400">{threat.coverage}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Protection Features:</h4>
                  <ul className="space-y-1">
                    {threat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Resources</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Access comprehensive security resources, training, and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityResources.map((resource, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                    <p className="text-slate-400 text-sm">{resource.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-400">
                  <div>
                    <span className="block text-xs text-slate-500">Type</span>
                    {resource.type}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Availability</span>
                    {resource.availability}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Access</span>
                    {resource.access}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Updates</span>
                    {resource.updateFrequency}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Access Resource
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Get enterprise-grade security with zero trust architecture and AI-powered threat protection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              Get Security Assessment
            </button>
            <button className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
              Contact Security Team
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero Trust Security</h3>
              <p className="text-slate-400 text-sm">Continuous verification and monitoring</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Protection</h3>
              <p className="text-slate-400 text-sm">Advanced threat detection and response</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Ready</h3>
              <p className="text-slate-400 text-sm">Meet all security standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
