import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Server, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  Star,
  Heart,
  Users,
  Zap,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Clock,
  Activity,
  BarChart3,
  TrendingUp,
  Cpu,
  Atom,
  Brain,
  Cloud,
  Leaf
} from 'lucide-react';

export default function SecurityPage() {
  const currentYear = new Date().getFullYear();

  const securityFeatures = [
    {
      category: 'Data Protection',
      icon: Database,
      features: [
        'End-to-end encryption for all data',
        'GDPR and CCPA compliance',
        'Data residency controls',
        'Automatic data backup and recovery',
        'Data loss prevention (DLP)',
        'Secure data deletion protocols'
      ]
    },
    {
      category: 'Network Security',
      icon: Network,
      features: [
        'Zero Trust Network Architecture',
        'Advanced threat detection',
        'DDoS protection and mitigation',
        'Secure VPN access',
        'Network segmentation',
        'Real-time security monitoring'
      ]
    },
    {
      category: 'Application Security',
      icon: Cpu,
      features: [
        'Secure coding practices',
        'Regular security audits',
        'Vulnerability scanning',
        'Penetration testing',
        'Secure API endpoints',
        'Input validation and sanitization'
      ]
    },
    {
      category: 'Access Control',
      icon: Lock,
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management',
        'Session management',
        'Audit logging and monitoring'
      ]
    }
  ];

  const securityCertifications = [
    {
      certification: 'ISO 27001',
      status: 'Certified',
      icon: Award,
      description: 'Information Security Management System certification',
      color: 'text-green-500',
      validity: 'Valid until 2026'
    },
    {
      certification: 'SOC 2 Type II',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'Service Organization Control 2 compliance',
      color: 'text-green-500',
      validity: 'Annual audit completed'
    },
    {
      certification: 'PCI DSS',
      status: 'Compliant',
      icon: Shield,
      description: 'Payment Card Industry Data Security Standard',
      color: 'text-green-500',
      validity: 'Level 1 compliance'
    },
    {
      certification: 'HIPAA',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'Health Insurance Portability and Accountability Act',
      color: 'text-green-500',
      validity: 'Full compliance verified'
    }
  ];

  const securityTools = [
    {
      name: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and response system',
      icon: Brain
    },
    {
      name: 'Security Information & Event Management',
      description: 'Comprehensive security monitoring and alerting',
      icon: Activity
    },
    {
      name: 'Vulnerability Management',
      description: 'Automated vulnerability scanning and remediation',
      icon: BarChart3
    },
    {
      name: 'Incident Response',
      description: '24/7 security incident response team',
      icon: AlertTriangle
    }
  ];

  const securityPolicies = [
    {
      name: 'Information Security Policy',
      description: 'Comprehensive security framework and guidelines',
      icon: FileText
    },
    {
      name: 'Data Privacy Policy',
      description: 'Data handling and privacy protection measures',
      icon: Eye
    },
    {
      name: 'Acceptable Use Policy',
      description: 'Guidelines for system and resource usage',
      icon: Users
    },
    {
      name: 'Incident Response Plan',
      description: 'Procedures for security incident handling',
      icon: AlertTriangle
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security & Trust Center - Zion Tech Group"
        description="Learn about our comprehensive security measures, compliance certifications, and commitment to protecting your data and privacy."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
            Security & Trust Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your security is our top priority. We implement industry-leading security measures 
            and maintain the highest standards of data protection and privacy compliance.
          </p>
        </motion.div>

        {/* Security Commitment */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Security Commitment</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are committed to maintaining the highest standards of security and privacy. 
              Our comprehensive security program includes advanced threat protection, 
              regular security audits, and compliance with international security standards. 
              We continuously invest in security technologies and processes to protect your data.
            </p>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {securityFeatures.map((category, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Certifications & Compliance</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {securityCertifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{cert.certification}</h3>
                  <div className="flex items-center">
                    <cert.icon className={`w-6 h-6 ${cert.color} mr-2`} />
                    <span className={`font-semibold ${cert.color}`}>{cert.status}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{cert.description}</p>
                <p className="text-sm text-gray-400">{cert.validity}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Tools */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Tools & Technologies</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {securityTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <tool.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                </div>
                <p className="text-gray-300">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Policies */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Policies & Procedures</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {securityPolicies.map((policy, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <policy.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{policy.name}</h3>
                </div>
                <p className="text-gray-300">{policy.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Security Metrics & Performance</h2>
            <p className="text-lg text-gray-300">
              We maintain transparent security metrics and continuously monitor our security performance.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
              <p className="text-gray-300">System availability</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">&lt;1min</div>
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Security incident response</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
              <p className="text-gray-300">Security operations center</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Breaches</h3>
              <p className="text-gray-300">Security incidents</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Security Questions or Concerns?</h2>
            <p className="text-lg text-gray-300">
              Our security team is available to address any security-related questions or concerns you may have.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <Phone className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Security Hotline</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Security Email</h3>
              <p className="text-gray-300">security@ziontechgroup.com</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <MessageCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Security Contact</h3>
              <p className="text-gray-300">Use our contact form</p>
            </div>
          </div>
        </motion.div>

        {/* Continuous Improvement */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Continuous Security Improvement</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              We are committed to continuously improving our security posture. Our security team 
              regularly reviews and updates our security measures based on emerging threats, 
              industry best practices, and customer feedback.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 font-semibold"
              >
                Report Security Issues
              </a>
              <a
                href="/privacy"
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200 font-semibold"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
