import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Key, 
  Server,
  Network,
  Database,
  Cloud,
  Zap,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Brain,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Rocket,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Pearl,
  Jade,
  Onyx,
  Quartz,
  Marble,
  Granite,
  Limestone,
  Sandstone,
  Shale,
  Clay,
  Silt,
  Loam,
  Peat,
  Chalk,
  Gypsum,
  Halite,
  Calcite,
  Dolomite,
  Feldspar,
  Mica,
  Hornblende,
  Pyroxene,
  Olivine,
  Garnet,
  Staurolite,
  Kyanite,
  Sillimanite,
  Andalusite,
  Chiastolite,
  Cordierite,
  Tourmaline,
  Beryl,
  Spinel,
  Corundum,
  Zircon,
  Rutile,
  Brookite,
  Anatase,
  Perovskite,
  Ilmenite,
  Magnetite,
  Hematite,
  Goethite,
  Limonite,
  Siderite,
  Pyrite,
  Marcasite,
  Chalcopyrite,
  Bornite,
  Covellite,
  Chalcocite,
  Galena,
  Sphalerite,
  Cinnabar,
  Realgar,
  Orpiment,
  Stibnite,
  Bismuthinite,
  Molybdenite,
  Wolframite,
  Scheelite,
  Cassiterite,
  Columbite,
  Tantalite,
  Uraninite,
  Pitchblende,
  Carnotite,
  Autunite,
  Torbernite,
  Zeunerite,
  Rocket
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security - Zion Tech Group"
        description="Enterprise-grade security solutions and services. Protect your data with advanced encryption, threat detection, and compliance management."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Enterprise Security
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Protect your business with enterprise-grade security solutions. Advanced threat detection, 
              comprehensive compliance, and 24/7 security monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-xl hover:from-red-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-red-400/25"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/services/cybersecurity"
                className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to protecting your business with proven security measures
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive security features designed to protect your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.features.map((feat, featIndex) => (
                    <div key={featIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We maintain the highest standards of security compliance and certification
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
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-xl hover:from-red-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-red-400/25"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/services/cybersecurity"
                className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
