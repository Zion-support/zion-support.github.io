import React from 'react';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-zion-slate-light">We respect your privacy and protect your data.</p>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Database, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Settings, 
  Download,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Privacy() {
  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Information that identifies you personally',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Name and contact information',
        'Email address and phone number',
        'Company and job title',
        'IP address and device information'
      ]
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Website usage patterns',
        'Service interaction data',
        'Performance metrics',
        'Error logs and diagnostics'
      ]
    },
    {
      title: 'Technical Data',
      description: 'Technical information about your devices and systems',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Browser type and version',
        'Operating system',
        'Device specifications',
        'Network configuration'
      ]
    }
  ];

  const dataUses = [
    {
      title: 'Service Provision',
      description: 'To provide and maintain our services',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Deliver requested services',
        'Process transactions',
        'Provide customer support',
        'Maintain service quality'
      ]
    },
    {
      title: 'Communication',
      description: 'To communicate with you about our services',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Send service updates',
        'Respond to inquiries',
        'Provide technical support',
        'Share important notices'
      ]
    },
    {
      title: 'Improvement',
      description: 'To improve our services and user experience',
      icon: ArrowRight, // Changed from TrendingUp to ArrowRight
      color: 'from-purple-500 to-pink-500',
      details: [
        'Analyze usage patterns',
        'Identify areas for improvement',
        'Develop new features',
        'Optimize performance'
      ]
    },
    {
      title: 'Security',
      description: 'To protect our services and users',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      details: [
        'Prevent fraud and abuse',
        'Detect security threats',
        'Maintain system integrity',
        'Comply with legal obligations'
      ]
    }
  ];

  const dataSharing = [
    {
      title: 'Service Providers',
      description: 'Third-party services that help us operate',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Cloud hosting providers',
        'Payment processors',
        'Analytics services',
        'Customer support tools'
      ]
    },
    {
      title: 'Legal Requirements',
      description: 'When required by law or legal process',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Court orders',
        'Government requests',
        'Regulatory compliance',
        'Legal proceedings'
      ]
    },
    {
      title: 'Business Transfers',
      description: 'In connection with business transactions',
      icon: ExternalLink, // Changed from Building to ExternalLink
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Mergers and acquisitions',
        'Asset sales',
        'Corporate restructuring',
        'Partnership agreements'
      ]
    }
  ];

  const userRights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      process: 'Submit a request and receive your data within 30 days'
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate data',
      icon: Settings, // Changed from Edit to Settings
      color: 'from-green-500 to-emerald-500',
      process: 'Identify the data and provide correct information'
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: Trash2, // Added Trash2
      color: 'from-purple-500 to-pink-500',
      process: 'Submit request and data will be deleted within 60 days'
    },
    {
      title: 'Portability',
      description: 'Request data in a portable format',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      process: 'Receive your data in a machine-readable format'
    }
  ];

  const contactInfo = [
    {
      title: 'Privacy Officer',
      description: 'For privacy-related questions and concerns',
      email: 'privacy@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {
      title: 'Data Protection',
      description: 'For data protection and security inquiries',
      email: 'dataprotection@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about Zion Tech Group's privacy practices, data collection, usage, and your rights regarding personal information."
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect 
              your personal information when you use our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-2">
            <Clock className="w-4 h-4" />
            <span>Last Updated: December 2024</span>
          </div>
          <p className="text-slate-300">
            This privacy policy is effective as of the date above and applies to all users of Zion Tech Group services.
          </p>
        </motion.div>
      </div>

      {/* Data Collection */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Information We Collect
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-slate-400 text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-slate-300 font-medium">Examples:</h4>
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Use Data */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          How We Use Your Information
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dataUses.map((use, index) => (
            <motion.div
              key={use.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${use.color} rounded-xl flex items-center justify-center`}>
                  <use.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{use.title}</h3>
                  <p className="text-slate-400 text-sm">{use.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {use.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data Sharing */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Information Sharing
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataSharing.map((sharing, index) => (
              <motion.div
                key={sharing.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${sharing.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <sharing.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{sharing.title}</h3>
                  <p className="text-slate-400 text-sm">{sharing.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-slate-300 font-medium">Examples:</h4>
                  {sharing.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Security */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Data Security & Protection
        </motion.h2>
        
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Security Measures</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Encryption in transit and at rest</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Access controls and authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Regular security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Secure data storage practices</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">GDPR compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">ISO 27001 certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Regular compliance audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Rights */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Your Rights & Choices
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${right.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{right.title}</h3>
                  <p className="text-slate-400 text-sm">{right.description}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-slate-300 text-sm">{right.process}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Contact Us
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
              <p className="text-slate-400 mb-6">{contact.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-sm font-medium">@</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-sm font-medium">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-sm font-medium">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Policy Updates */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Policy Updates
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto mb-6">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the new policy on this page.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <Info className="w-4 h-4" />
              <span>Check this page regularly for updates</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
