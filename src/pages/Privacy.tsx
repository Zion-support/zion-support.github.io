import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      color: 'from-blue-500 to-indigo-500',
      content: [
        'Personal information (name, email, phone number)',
        'Business information (company name, industry, role)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, features used)',
        'Communication data (support tickets, feedback, surveys)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide and improve our services',
        'Process transactions and manage accounts',
        'Send important service updates and notifications',
        'Provide customer support and respond to inquiries',
        'Analyze usage patterns to enhance user experience',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      content: [
        'We do not sell, trade, or rent your personal information',
        'We may share information with trusted service providers',
        'We may disclose information if required by law',
        'We may share information in case of business transfers',
        'We may share aggregated, non-personal information'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      content: [
        'Encryption of data in transit and at rest',
        'Regular security audits and assessments',
        'Access controls and authentication measures',
        'Employee training on data protection',
        'Incident response and breach notification procedures'
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we hold about you'
    },
    {
      title: 'Correct Your Data',
      description: 'Update or correct any inaccurate personal information'
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal information'
    },
    {
      title: 'Restrict Processing',
      description: 'Limit how we use your personal information'
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      title: 'Object to Processing',
      description: 'Opt out of certain uses of your personal information'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>
            <p className="text-gray-600 mb-6">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, 
              please do not use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Privacy Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are transparent about how we handle your personal information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
                <p className="text-gray-600">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                  <p className="text-gray-600">privacy@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                  <p className="text-gray-600">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
          >
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Policy Updates</h3>
                <p className="text-yellow-700">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                  date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;