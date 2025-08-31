import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Info,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = 'December 15, 2024';
  const effectiveDate = 'January 1, 2025';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-leading security measures to protect your personal information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and your rights.'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Your data is encrypted and stored securely using enterprise-grade security protocols.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your data and can request access, modification, or deletion.'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company name and job title', 'Business contact information'],
      purpose: 'To provide our services, communicate with you, and manage our business relationship',
      retention: 'As long as you are an active customer, plus 7 years for legal compliance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, browser type, device information', 'Usage analytics and performance data', 'Cookies and similar technologies'],
      purpose: 'To improve our services, ensure security, and provide personalized experiences',
      retention: 'Up to 2 years, or as required by applicable law'
    },
    {
      category: 'Service Usage Data',
      examples: ['Feature usage patterns, service interactions', 'Support requests and communications', 'Training and onboarding data'],
      purpose: 'To optimize our services, provide support, and enhance user experience',
      retention: 'Duration of service plus 3 years for business analytics'
    },
    {
      category: 'Financial Information',
      examples: ['Billing and payment information', 'Transaction history and invoices', 'Tax-related documentation'],
      purpose: 'To process payments, manage billing, and comply with financial regulations',
      retention: '7 years as required by tax and financial regulations'
    }
  ];

  const dataRights = [
    {
      right: 'Access',
      description: 'Request a copy of all personal data we hold about you',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Correct inaccurate or incomplete personal data',
      icon: FileText
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data (right to be forgotten)',
      icon: Database
    },
    {
      right: 'Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Globe
    },
    {
      right: 'Restriction',
      description: 'Limit how we process your personal data',
      icon: Lock
    },
    {
      right: 'Objection',
      description: 'Object to processing of your personal data',
      icon: AlertTriangle
    }
  ];

  const securityMeasures = [
    'End-to-end encryption for data in transit and at rest',
    'Multi-factor authentication for all system access',
    'Regular security audits and penetration testing',
    'SOC 2 Type II and ISO 27001 compliance',
    'Employee security training and background checks',
    '24/7 security monitoring and incident response',
    'Regular security updates and patch management',
    'Data backup and disaster recovery procedures'
  ];

  const thirdPartyServices = [
    {
      service: 'Cloud Infrastructure',
      provider: 'AWS, Azure, Google Cloud',
      purpose: 'Hosting and infrastructure services',
      dataShared: 'Service usage data, performance metrics'
    },
    {
      service: 'Analytics & Monitoring',
      provider: 'Google Analytics, Mixpanel',
      purpose: 'Website and service analytics',
      dataShared: 'Anonymous usage data, performance metrics'
    },
    {
      service: 'Customer Support',
      provider: 'Zendesk, Intercom',
      purpose: 'Customer service and support management',
      dataShared: 'Support tickets, communication history'
    },
    {
      service: 'Payment Processing',
      provider: 'Stripe, PayPal',
      purpose: 'Payment processing and billing',
      dataShared: 'Payment information, transaction data'
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'GDPR (General Data Protection Regulation)',
      region: 'European Union',
      status: 'Fully Compliant',
      description: 'Comprehensive data protection and privacy rights for EU residents'
    },
    {
      framework: 'CCPA (California Consumer Privacy Act)',
      region: 'California, USA',
      status: 'Fully Compliant',
      description: 'Consumer privacy rights and business obligations in California'
    },
    {
      framework: 'SOC 2 Type II',
      region: 'Global',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls certification'
    },
    {
      framework: 'ISO 27001',
      region: 'Global',
      status: 'Certified',
      description: 'Information security management system certification'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we protect your data and respect your rights.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you have any questions about this Privacy Policy, please contact us using the information provided at the end of this document.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-blue-800">
                    This Privacy Policy applies to all users of Zion Tech Group services, including our website, mobile applications, AI platforms, and any other services we provide. We may update this policy from time to time, and we will notify you of any material changes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are guided by these fundamental principles in everything we do with your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collect various types of information to provide and improve our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Examples</h4>
                    <ul className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Purpose</h4>
                    <p className="text-gray-600 leading-relaxed">{category.purpose}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Retention Period</h4>
                    <p className="text-gray-600 leading-relaxed">{category.retention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use your information for specific, legitimate business purposes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Uses</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Providing and maintaining our services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Processing payments and managing billing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Providing customer support and training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Improving and optimizing our services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ensuring security and preventing fraud</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Uses</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Sending service updates and notifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Conducting research and analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Complying with legal obligations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Protecting our rights and property</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Marketing and promotional activities (with consent)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Data Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You have comprehensive rights regarding your personal data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <right.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{right.right}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{right.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Exercising Your Rights</h3>
                <p className="text-blue-800 mb-4">
                  To exercise any of these rights, please contact us using the information provided at the end of this policy. We will respond to your request within 30 days and may request additional information to verify your identity.
                </p>
                <p className="text-blue-800">
                  <strong>Note:</strong> Some rights may be limited in certain circumstances, such as when we have a legal obligation to retain data or when the data is necessary for the performance of our contract with you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Measures</h3>
              <div className="space-y-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{measure}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Certifications</h3>
              <div className="space-y-4">
                {complianceFrameworks.map((framework, index) => (
                  <div key={framework.framework} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{framework.framework}</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{framework.region}</p>
                    <p className="text-sm text-gray-600">{framework.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with trusted third-party service providers to deliver our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.service}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Provider:</span>
                    <p className="text-gray-600">{service.provider}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Purpose:</span>
                    <p className="text-gray-600">{service.purpose}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Data Shared:</span>
                    <p className="text-gray-600">{service.dataShared}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Note</h3>
                <p className="text-yellow-800">
                  All third-party service providers are carefully selected and required to maintain the same level of data protection and security standards that we maintain. We have data processing agreements in place with all providers to ensure your data is protected.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <Mail className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">privacy@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <Phone className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Wilmington, Delaware</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
              <p className="text-gray-600 mb-4">
                For specific privacy concerns or to exercise your data rights, you can also contact our Data Protection Officer directly.
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> dpo@ziontechgroup.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}