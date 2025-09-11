import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = '2025-01-15';
  
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Eye,
      content: `Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, company information, and any other information you choose to provide.`
    },
    {
      id: 'usage-information',
      title: 'How We Use Your Information',
      icon: Users,
      content: `We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Globe,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: CheckCircle,
      content: `You have the right to access, correct, or delete your personal information. You can also opt out of certain communications and control how your information is used.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Eye,
      content: `We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.`
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: ExternalLink,
      content: `Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.`
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: Globe,
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.`
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: Users,
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: AlertTriangle,
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Mail,
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information provided below.`
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company and job title', 'Billing and payment information'],
      purpose: 'Account management, service delivery, billing',
      retention: 'As long as your account is active plus 7 years'
    },
    {
      category: 'Usage Data',
      examples: ['Service usage patterns', 'Feature interactions', 'Performance metrics'],
      purpose: 'Service improvement, analytics, troubleshooting',
      retention: '2 years from collection'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, device information', 'Browser type and version', 'Operating system'],
      purpose: 'Security, fraud prevention, service optimization',
      retention: '1 year from collection'
    },
    {
      category: 'Communication Data',
      examples: ['Support tickets, chat logs', 'Email communications', 'Feedback and surveys'],
      purpose: 'Customer support, service improvement',
      retention: '3 years from last interaction'
    }
  ];

  const securityMeasures = [
    {
      measure: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
      icon: Lock
    },
    {
      measure: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms to prevent unauthorized access',
      icon: Shield
    },
    {
      measure: 'Regular Audits',
      description: 'Regular security audits and penetration testing to identify and address vulnerabilities',
      icon: CheckCircle
    },
    {
      measure: 'Data Backup',
      description: 'Regular data backups with disaster recovery procedures in place',
      icon: Database
    },
    {
      measure: 'Employee Training',
      description: 'Regular security training for all employees to ensure data protection awareness',
      icon: Users
    },
    {
      measure: 'Incident Response',
      description: 'Comprehensive incident response plan for handling security breaches',
      icon: AlertTriangle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices, data protection measures, and how we handle your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, Zion Tech Group, privacy practices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Table of Contents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 hover:border-slate-300"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Categories and Retention
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Purpose:</h4>
                        <p className="text-slate-600">{category.purpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Retention Period:</h4>
                        <p className="text-slate-600">{category.retention}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Security Measures
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure.measure}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-green-200"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <measure.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{measure.measure}</h3>
                    <p className="text-slate-600 text-center">{measure.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our privacy team is here to help. Contact us with any questions about your data or our privacy practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FileText className="w-5 h-5" />
                  <span>Data Protection Officer</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Contact Privacy Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;