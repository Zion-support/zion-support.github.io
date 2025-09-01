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
      description: 'Request transfer of your data to another service',
      icon: Download
    },
    {
      title: 'Restriction',
      description: 'Request limitation of data processing',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to certain types of data processing',
      icon: AlertTriangle
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols.'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Strict access controls and authentication mechanisms protect your data.'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Data is stored in secure, monitored environments with regular backups.'
    },
    {
      icon: Globe,
      title: 'Network Security',
      description: 'Advanced network security measures protect against external threats.'
    }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group protects your privacy and handles your personal data."
        keywords="privacy policy, data protection, GDPR, CCPA, data privacy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Your privacy is our priority. Learn how we protect your data and maintain transparency in our practices.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-gray-300">Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Privacy Principles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to protecting your privacy and maintaining the highest standards of data protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Data We Collect</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Use Your Data</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use your data responsibly and only for purposes that benefit you and our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataUses.map((use, index) => (
                <motion.div
                  key={use.purpose}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">{use.purpose}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{use.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Rights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over your personal data. Here are your rights and how to exercise them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Measures</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to protect your data from unauthorized access and threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <measure.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{measure.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{measure.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Privacy?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you have any questions about our privacy practices or want to exercise your rights, 
                our privacy team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;