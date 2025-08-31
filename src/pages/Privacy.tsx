import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  Settings,
  Trash2,
  Download
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const companyAddress = '364 E Main St STE 1008, Middletown, DE 19709';
  const companyEmail = 'privacy@ziontechgroup.com';
  const companyPhone = '+1 (302) 464-0950';

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information (name, email, phone number)',
        'Business information (company name, job title)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions)',
        'Communication records (emails, support tickets, chat logs)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our services',
        'Communicate with you about our offerings',
        'Process transactions and manage accounts',
        'Analyze usage patterns and optimize performance',
        'Ensure security and prevent fraud',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: [
        'We do not sell your personal information',
        'Share with service providers under strict agreements',
        'Disclose when required by law or court order',
        'Share with your consent for specific purposes',
        'Aggregate data for analytics (no personal identification)'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'Encryption in transit and at rest',
        'Regular security audits and assessments',
        'Access controls and authentication measures',
        'Employee training on data protection',
        'Incident response and breach notification procedures'
      ]
    }
  ];

  const yourRights = [
    {
      title: 'Access',
      description: 'Request a copy of your personal data',
      icon: CheckCircle
    },
    {
      title: 'Correction',
      description: 'Update or correct inaccurate information',
      icon: CheckCircle
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: CheckCircle
    },
    {
      title: 'Portability',
      description: 'Receive your data in a portable format',
      icon: CheckCircle
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: CheckCircle
    },
    {
      title: 'Objection',
      description: 'Object to certain processing activities',
      icon: CheckCircle
    }
  ];

  const cookies = [
    {
      category: 'Essential',
      description: 'Required for basic website functionality',
      examples: 'Authentication, security, session management',
      duration: 'Session or 1 year'
    },
    {
      category: 'Analytics',
      description: 'Help us understand how visitors use our site',
      examples: 'Page views, user behavior, performance metrics',
      duration: '2 years'
    },
    {
      category: 'Functional',
      description: 'Enable enhanced features and personalization',
      examples: 'Language preferences, form data, user settings',
      duration: '1 year'
    },
    {
      category: 'Marketing',
      description: 'Used for targeted advertising and campaigns',
      examples: 'Ad tracking, remarketing, campaign analytics',
      duration: '2 years'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              Version: 2.1
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">{companyAddress}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href={`mailto:${companyEmail}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {companyEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href={`tel:${companyPhone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {companyPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Data Protection Officer</h3>
                  <p className="text-gray-300">Available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Privacy Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Privacy Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Your Rights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yourRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                <p className="text-gray-400 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Cookie Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cookie Policy</h2>
          <div className="space-y-4">
            {cookies.map((cookie, index) => (
              <motion.div
                key={cookie.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cookie.category}</h3>
                    <p className="text-sm text-gray-400">{cookie.description}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Examples:</span>
                    <p className="text-sm text-gray-300">{cookie.examples}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Duration:</span>
                    <p className="text-sm text-gray-300">{cookie.duration}</p>
                  </div>
                  <div className="text-right">
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300 text-sm">
                      Manage
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Data Retention */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Data Retention</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Account Data</h3>
                  <p className="text-gray-300">Retained while your account is active and for 7 years after deactivation for legal compliance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Transaction Records</h3>
                  <p className="text-gray-300">Kept for 10 years to comply with financial and tax regulations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Analytics Data</h3>
                  <p className="text-gray-300">Aggregated and anonymized data may be retained indefinitely for business intelligence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Deletion Requests</h3>
                  <p className="text-gray-300">Personal data is deleted within 30 days of receiving a valid deletion request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* International Transfers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">International Data Transfers</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                {companyName} operates globally and may transfer your personal data to countries outside your residence. 
                We ensure all transfers comply with applicable data protection laws through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Standard Contractual Clauses (SCCs) approved by relevant authorities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Adequacy decisions for countries with equivalent data protection standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Binding corporate rules for intra-group transfers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Other appropriate safeguards as required by law</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                General Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
