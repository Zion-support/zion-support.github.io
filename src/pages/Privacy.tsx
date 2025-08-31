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
  ArrowRight
} from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number)',
        'Business information (company name, job title)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions)',
        'Communication records (emails, support tickets)'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Process transactions and payments',
        'Send marketing communications (with consent)',
        'Ensure security and prevent fraud',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'Share with service providers under strict agreements',
        'Comply with legal requirements and court orders',
        'Protect our rights and safety',
        'With your explicit consent'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Industry-standard encryption protocols',
        'Regular security audits and assessments',
        'Access controls and authentication measures',
        'Secure data centers and infrastructure',
        'Employee training on data protection'
      ]
    }
  ];

  const rights = [
    'Access your personal information',
    'Correct inaccurate data',
    'Request deletion of your data',
    'Object to processing of your data',
    'Data portability',
    'Withdraw consent for marketing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Our Commitment to Privacy</h2>
            <p className="text-gray-300 mb-4">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy outlines how we collect, use, disclose, 
              and safeguard your information when you use our services.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in accordance 
              with this policy. We will not use or share your information with anyone except as described 
              in this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy Details
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understanding how we handle your information and protect your privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              You have certain rights regarding your personal information under applicable data protection laws.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-medium">{right}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </a>
              <a
                href="/terms"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
