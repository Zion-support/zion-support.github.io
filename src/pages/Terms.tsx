import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Globe, Lock } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time',
        'Continued use of our services after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: Globe,
      color: 'from-blue-500 to-indigo-500',
      content: [
        'We provide AI services, cloud computing, and technology solutions',
        'Services are provided "as is" without warranties of any kind',
        'We reserve the right to modify or discontinue services at any time',
        'Service availability is not guaranteed and may be subject to maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide accurate and complete information when using our services',
        'Maintain the confidentiality of your account credentials',
        'Use services in compliance with applicable laws and regulations',
        'Not engage in any illegal, harmful, or unauthorized activities'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Lock,
      color: 'from-orange-500 to-red-500',
      content: [
        'All content and materials on our platform are protected by intellectual property laws',
        'Users retain ownership of their data and content',
        'We may use aggregated, anonymized data to improve our services',
        'Unauthorized use of our intellectual property is strictly prohibited'
      ]
    }
  ];

  const limitations = [
    {
      title: 'Service Limitations',
      description: 'Services are provided on an "as is" basis without warranties'
    },
    {
      title: 'Liability Limitation',
      description: 'Our liability is limited to the maximum extent permitted by law'
    },
    {
      title: 'Indemnification',
      description: 'Users agree to indemnify us against claims arising from their use of services'
    },
    {
      title: 'Termination',
      description: 'We may terminate accounts for violations of these terms'
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
              <Scale className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully 
              before using our platform.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service ("Terms") constitute a legally binding agreement between 
              you and Zion Tech Group ("Company," "we," "our," or "us") regarding your use 
              of our services, website, and platform.
            </p>
            <p className="text-gray-600 mb-6">
              By accessing or using our services, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, then you may not access our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important terms and conditions that govern your use of our services.
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

      {/* Limitations and Disclaimers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Limitations and Disclaimers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important limitations and disclaimers regarding our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{limitation.title}</h3>
                <p className="text-gray-600">{limitation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of Delaware, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600 mb-6">
              Any disputes arising out of or relating to these Terms or our services shall 
              be resolved through binding arbitration in accordance with the rules of the 
              American Arbitration Association.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                  <p className="text-gray-600">legal@ziontechgroup.com</p>
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
      <section className="py-16 bg-gray-50">
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
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Terms Updates</h3>
                <p className="text-yellow-700">
                  We reserve the right to update these Terms of Service at any time. 
                  We will notify users of any material changes by posting the new Terms 
                  on this page and updating the "Last updated" date. Your continued use 
                  of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;