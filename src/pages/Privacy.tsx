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
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    email: 'privacy@ziontechgroup.com',
    phone: '+1 302 464 0950'
  };

  const dataCategories = [
    {
      icon: Users,
      title: 'Personal Information',
      description: 'Name, email, phone number, company details',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      icon: Database,
      title: 'Usage Data',
      description: 'Website interactions, preferences, analytics',
      examples: ['Page visits', 'Feature usage', 'Performance metrics']
    },
    {
      icon: Globe,
      title: 'Technical Data',
      description: 'IP address, browser type, device information',
      examples: ['Log files', 'Cookies', 'Device identifiers']
    }
  ];

  const dataUses = [
    {
      icon: CheckCircle,
      title: 'Service Delivery',
      description: 'Providing and improving our technology solutions'
    },
    {
      icon: CheckCircle,
      title: 'Communication',
      description: 'Responding to inquiries and providing support'
    },
    {
      icon: CheckCircle,
      title: 'Analytics',
      description: 'Understanding usage patterns and improving services'
    },
    {
      icon: CheckCircle,
      title: 'Legal Compliance',
      description: 'Meeting regulatory and legal requirements'
    }
  ];

  const dataProtection = [
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest'
    },
    {
      icon: Shield,
      title: 'Access Controls',
      description: 'Strict access controls and authentication measures'
    },
    {
      icon: Eye,
      title: 'Monitoring',
      description: 'Continuous security monitoring and threat detection'
    },
    {
      icon: Users,
      title: 'Training',
      description: 'Regular security training for all employees'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect 
              your personal information.
            </p>
            <div className="mt-6 text-blue-200">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our 
              website, use our services, or interact with us.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. We will not use or share your information with 
              anyone except as described in this Privacy Policy.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-blue-800">
                    This Privacy Policy applies to all users of our website and services. 
                    If you have any questions about this policy, please contact us using 
                    the information provided below.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, 
              communicate with you, and ensure a secure experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <category.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the information we collect for specific, legitimate business purposes 
              to provide you with the best possible service experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <use.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{use.title}</h3>
                <p className="text-gray-600 leading-relaxed">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your personal 
              information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataProtection.map((protection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <protection.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{protection.title}</h3>
                <p className="text-gray-600 leading-relaxed">{protection.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to 
              third parties without your consent, except in the following circumstances:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Service Providers:</strong> We may share information with trusted 
                  third-party service providers who assist us in operating our website, 
                  conducting business, or servicing you.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Legal Requirements:</strong> We may disclose your information 
                  when required by law or to protect our rights, property, or safety.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, 
                  or sale of assets, your information may be transferred as part of the transaction.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Privacy Rights
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You have certain rights regarding your personal information. We are committed 
              to helping you exercise these rights:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Portability</h3>
                <p className="text-gray-600 text-sm">
                  Request access to your personal information and receive a copy in a 
                  portable format.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction</h3>
                <p className="text-gray-600 text-sm">
                  Request correction of inaccurate or incomplete personal information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
                <p className="text-gray-600 text-sm">
                  Request deletion of your personal information, subject to legal requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Opt-Out</h3>
                <p className="text-gray-600 text-sm">
                  Opt out of certain data processing activities, such as marketing communications.
                </p>
              </div>
            </div>
            
            <p className="text-gray-600">
              To exercise any of these rights, please contact us using the information 
              provided below. We will respond to your request within 30 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing 
              experience, analyze website traffic, and understand where our visitors come from.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Types of Cookies We Use:</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
              </ul>
            </div>
            
            <p className="text-gray-600">
              You can control and manage cookies through your browser settings. However, 
              disabling certain cookies may affect the functionality of our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to reach out to us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-blue-100">{companyInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">{companyInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-blue-100 text-center">{companyInfo.address}</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Data Protection Officer</h3>
              <p className="text-blue-100 mb-4">
                For privacy-related inquiries and to exercise your rights, please contact 
                our Data Protection Officer at the email address above.
              </p>
              <p className="text-blue-200 text-sm">
                We typically respond to privacy inquiries within 48 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
