import React from 'react';
import { Link } from 'react-router-dom';
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
  Users,
  Building,
  Globe,
  Code,
  Brain,
  ShieldCheck,
  LockKeyhole,
  QrCode,
  Scan,
  Camera,
  Mic,
  Volume2,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon
} from 'lucide-react';

const securityFeatures = [
  {
    title: 'Multi-Factor Authentication',
    icon: Shield,
    description: 'Advanced MFA with biometric, hardware key, and app-based options',
    features: ['Biometric authentication', 'Hardware security keys', 'TOTP apps', 'SMS verification']
  },
  {
    title: 'End-to-End Encryption',
    icon: Lock,
    description: 'Military-grade encryption for all data in transit and at rest',
    features: ['AES-256 encryption', 'TLS 1.3 protocols', 'Zero-knowledge architecture', 'Quantum-resistant algorithms']
  },
  {
    title: 'Identity & Access Management',
    icon: Fingerprint,
    description: 'Comprehensive IAM with role-based access control',
    features: ['Single Sign-On (SSO)', 'Role-based permissions', 'Just-in-time access', 'Privileged access management']
  },
  {
    title: 'Network Security',
    icon: Network,
    description: 'Advanced network protection with intrusion detection',
    features: ['Next-gen firewalls', 'Intrusion detection systems', 'DDoS protection', 'VPN access']
  },
  {
    title: 'Data Protection',
    icon: Database,
    description: 'Comprehensive data security and privacy measures',
    features: ['Data classification', 'Encryption at rest', 'Backup encryption', 'Data loss prevention']
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    description: 'Enterprise-grade cloud security and compliance',
    features: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'Regular security audits']
  }
];

const securityCertifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 compliance',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    status: 'Level 1',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    name: 'FedRAMP',
    description: 'Federal Risk and Authorization Management Program',
    status: 'In Progress',
    icon: AlertTriangle,
    color: 'text-yellow-400'
  }
];

const securityIncidentResponse = [
  {
    phase: 'Detection',
    description: '24/7 monitoring and automated threat detection',
    time: '< 1 minute',
    icon: Eye
  },
  {
    phase: 'Analysis',
    description: 'AI-powered threat analysis and classification',
    time: '< 5 minutes',
    icon: Brain
  },
  {
    phase: 'Containment',
    description: 'Automated threat containment and isolation',
    time: '< 10 minutes',
    icon: Lock
  },
  {
    phase: 'Eradication',
    description: 'Complete threat removal and system restoration',
    time: '< 1 hour',
    icon: Shield
  },
  {
    phase: 'Recovery',
    description: 'System recovery and security hardening',
    time: '< 4 hours',
    icon: Zap
  },
  {
    phase: 'Post-Incident',
    description: 'Analysis, reporting, and security improvements',
    time: '< 24 hours',
    icon: CheckCircle
  }
];

const securityResources = [
  {
    title: 'Security Whitepaper',
    description: 'Comprehensive overview of our security architecture',
    type: 'PDF',
    size: '2.4 MB',
    href: '/security/whitepaper'
  },
  {
    title: 'Security Checklist',
    description: 'Best practices for securing your account and data',
    type: 'Checklist',
    size: 'Interactive',
    href: '/security/checklist'
  },
  {
    title: 'Security FAQ',
    description: 'Common security questions and answers',
    type: 'FAQ',
    size: 'Web',
    href: '/security/faq'
  },
  {
    title: 'Security Training',
    description: 'Interactive security awareness training modules',
    type: 'Training',
    size: 'Online',
    href: '/security/training'
  }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Your data security is our top priority. We implement industry-leading security measures 
              to protect your information and ensure compliance with global standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/security/compliance"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
              >
                View Compliance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-lg text-zion-slate-light">
              Multi-layered security approach protecting every aspect of your digital infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Certifications & Compliance
            </h2>
            <p className="text-lg text-zion-slate-light">
              Meeting and exceeding global security standards and regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center">
                      <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      cert.status === 'Certified' ? 'bg-green-500/20 text-green-400' :
                      cert.status === 'Compliant' ? 'bg-blue-500/20 text-blue-400' :
                      cert.status === 'Level 1' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-zion-slate-light text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rapid Incident Response
            </h2>
            <p className="text-lg text-zion-slate-light">
              AI-powered security operations with lightning-fast response times
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityIncidentResponse.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <span className="text-sm px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full font-medium">
                      {phase.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                  <p className="text-zion-slate-light text-sm">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Resources
            </h2>
            <p className="text-lg text-zion-slate-light">
              Access our comprehensive security documentation and training materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-zion-slate-light mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Type: <span className="text-zion-cyan">{resource.type}</span>
                    </span>
                    <span className="text-zion-slate-light">
                      Size: <span className="text-zion-cyan">{resource.size}</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to secure your digital future?
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                Let our security experts assess your current security posture and recommend improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/security/compliance"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  View Compliance Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}