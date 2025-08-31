import { motion } from 'framer-motion';
import {
    AlertTriangle,
    Calendar,
    CheckCircle,
    Clock,
    FileText,
    Lock,
    Mail,
    MapPin,
    Phone,
    Shield,
    Users
} from 'lucide-react';
import React from 'react';

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      content: 'Zion Tech Group provides AI-powered technology solutions, cloud services, cybersecurity, digital transformation, and IT consulting services. We reserve the right to modify or discontinue services at any time.',
      icon: Shield
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the security of their accounts, and complying with all applicable laws and regulations when using our services.',
      icon: Users
    },
    {
      title: 'Intellectual Property',
      content: 'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights. Users may not copy, modify, or distribute our proprietary materials without permission.',
      icon: Lock
    },
    {
      title: 'Privacy and Data Protection',
      content: 'Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',
      icon: Shield
    },
    {
      title: 'Limitation of Liability',
      content: 'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',
      icon: AlertTriangle
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using our services for illegal or harmful purposes',
    'Interfering with the operation of our services',
    'Attempting to reverse engineer our software',
    'Distributing malware or harmful code',
    'Violating intellectual property rights',
    'Harassing or threatening other users',
    'Collecting personal information without consent'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'legal@ziontechgroup.com',
      link: 'mailto:legal@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Innovation City, IC 12345',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-6">
            <FileText className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Last updated: December 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Effective: January 1, 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prohibited Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-16"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Prohibited Activities</h2>
            <p className="text-gray-300">The following activities are strictly prohibited and may result in immediate account termination.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prohibitedActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Questions About These Terms?</h2>
            <p className="text-gray-300">If you have any questions about these Terms of Service, please contact our legal team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-3">
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{info.label}</h3>
                <p className="text-gray-300 text-sm">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center text-gray-400 mt-16"
        >
          <p className="text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            These terms are subject to change. Please check back periodically for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
