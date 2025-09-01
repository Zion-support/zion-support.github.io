import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, Database, Globe, CheckCircle, AlertTriangle, FileText, Mail, Users, Settings, Trash2, Download } from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'December 15, 2024';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every aspect of our services and systems.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and your rights.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact details', 'Account information', 'Business details']
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Login times', 'Feature usage', 'Performance metrics']
    },
    {
      title: 'Technical Data',
      description: 'Device information and technical specifications',
      examples: ['IP address', 'Browser type', 'Device information']
    },
    {
      title: 'Communication Data',
      description: 'Records of our interactions and communications',
      examples: ['Support tickets', 'Email correspondence', 'Chat logs']
    },
    {
      title: 'Business Information',
      description: 'Business-related data and project information',
      examples: [
        'Project requirements and specifications',
        'Service usage and performance data',
        'Payment and billing information',
        'Support and communication records'
      ]
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our services, process transactions, and deliver support.'
    },
    {
      purpose: 'Communication',
      description: 'To communicate with you about our services, updates, and support.'
    },
    {
      purpose: 'Security',
      description: 'To protect our services, detect fraud, and ensure system security.'
    },
    {
      purpose: 'Improvement',
      description: 'To analyze usage patterns and improve our services and user experience.'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal obligations and regulatory requirements.'
    }
  ];

  const userRights = [
    {
      title: 'Access',
      description: 'Request a copy of your personal data',
      icon: Eye
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate data',
      icon: Settings
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Request data in a portable format',
      icon: Download
    },
    {
      title: 'Restriction',
      description: 'Request restriction of data processing',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: AlertTriangle
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our commitment to privacy and data protection."
        keywords="privacy policy, data protection, GDPR, personal data, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Our Privacy Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {privacyPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Categories */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                What Data We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Your Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userRights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <right.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {right.title}
                    </h3>
                    <p className="text-gray-300">
                      {right.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our privacy policy or how we handle your data, please contact us.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>ziontechgroup.com/privacy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;

