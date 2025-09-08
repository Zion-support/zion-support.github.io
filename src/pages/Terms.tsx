import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms and conditions.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time, with changes effective upon posting.'
      ]
    },
    {
      title: 'Service Description',
      content: [
        'Zion Tech Group provides AI-powered technology solutions and consulting services.',
        'Our services include but are not limited to AI development, cloud solutions, and digital transformation.',
        'We strive to provide high-quality services but cannot guarantee specific outcomes or results.'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when using our services.',
        'Maintain the security of your account credentials and access.',
        'Use our services in compliance with applicable laws and regulations.',
        'Respect intellectual property rights and not misuse our proprietary information.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content, software, and technology developed by Zion Tech Group remains our property.',
        'You retain rights to your own intellectual property and data.',
        'We grant you a limited license to use our services for their intended purpose.',
        'Unauthorized use or reproduction of our intellectual property is prohibited.'
      ]
    }
  ];

  const limitations = [
    'Our services are provided "as is" without warranties of any kind',
    'We are not liable for indirect, incidental, or consequential damages',
    'Our total liability is limited to the amount paid for our services',
    'We are not responsible for third-party services or integrations'
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our services. 
              They outline the rules and guidelines for using Zion Tech Group services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Important Information</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service govern your use of Zion Tech Group services. By using our services, 
              you agree to these terms and our Privacy Policy.
            </p>
            <p className="text-gray-300">
              If you have any questions about these terms, please contact us before using our services.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
    "Violating any applicable laws or regulations",
    "Infringing on intellectual property rights",
    "Transmitting malware, viruses, or harmful code",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with the proper functioning of our services",
    "Collecting personal information without consent",
    "Engaging in fraudulent or deceptive practices",
    "Spamming or sending unsolicited communications"
  ];

  const intellectualProperty = [
    {
      category: "Our IP",
      description: "All content, trademarks, logos, and software on our platform are owned by Zion Tech Group",
      rights: ["Copyright protection", "Trademark rights", "Patent rights", "Trade secret protection"]
    },
    {
      category: "Your Content",
      description: "You retain ownership of content you upload, but grant us a license to use it",
      rights: ["Non-exclusive license", "Worldwide distribution", "Modification rights", "Commercial use"]
    },
    {
      category: "Third-Party IP",
      description: "We respect third-party intellectual property and expect users to do the same",
      rights: ["Copyright compliance", "Trademark respect", "License adherence", "Attribution requirements"]
    }
  ];

  const privacyAndData = [
    "We collect and process personal data as described in our Privacy Policy",
    "By using our services, you consent to our data practices",
    "We implement appropriate security measures to protect your information",
    "We may share data with service providers and as required by law",
    "You have rights regarding your personal data as outlined in our Privacy Policy",
    "We retain data for as long as necessary to provide our services"
  ];

  const terminationConditions = [
    "Breach of these terms of service",
    "Violation of applicable laws or regulations",
    "Engagement in fraudulent or harmful activities",
    "Non-payment of applicable fees",
    "Extended period of account inactivity",
    "Request for account deletion by the user"
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please read these terms carefully before using our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version: 2.0</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#overview" className="text-zion-cyan hover:text-zion-purple-light transition-colors">1. Overview</a>
              <a href="#definitions" className="text-zion-cyan hover:text-zion-purple-light transition-colors">2. Definitions</a>
              <a href="#acceptance" className="text-zion-cyan hover:text-zion-purple-light transition-colors">3. Acceptance of Terms</a>
              <a href="#services" className="text-zion-cyan hover:text-zion-purple-light transition-colors">4. Description of Services</a>
              <a href="#user-accounts" className="text-zion-cyan hover:text-zion-purple-light transition-colors">5. User Accounts</a>
              <a href="#user-obligations" className="text-zion-cyan hover:text-zion-purple-light transition-colors">6. User Obligations</a>
              <a href="#prohibited-activities" className="text-zion-cyan hover:text-zion-purple-light transition-colors">7. Prohibited Activities</a>
              <a href="#intellectual-property" className="text-zion-cyan hover:text-zion-purple-light transition-colors">8. Intellectual Property</a>
              <a href="#privacy-data" className="text-zion-cyan hover:text-zion-purple-light transition-colors">9. Privacy & Data</a>
              <a href="#termination" className="text-zion-cyan hover:text-zion-purple-light transition-colors">10. Termination</a>
              <a href="#disclaimers" className="text-zion-cyan hover:text-zion-purple-light transition-colors">11. Disclaimers</a>
              <a href="#limitation-liability" className="text-zion-cyan hover:text-zion-purple-light transition-colors">12. Limitation of Liability</a>
              <a href="#governing-law" className="text-zion-cyan hover:text-zion-purple-light transition-colors">13. Governing Law</a>
              <a href="#contact" className="text-zion-cyan hover:text-zion-purple-light transition-colors">14. Contact Information</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your access to and use of 
                our website, applications, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                If you disagree with any part of these terms, you may not access our Services.
              </p>
              <p>
                These Terms apply to all users of our Services, including without limitation users who are 
                browsers, vendors, customers, merchants, and contributors of content.
              </p>
              <p>
                We reserve the right to update or change these Terms at any time. Your continued use of the 
                Services following the posting of any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </section>

              <FileText className="w-6 h-6" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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
              Terms and Conditions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understanding the terms that govern our relationship and service delivery.
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

      {/* Limitations Section */}
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
              Limitations and Disclaimers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Important information about the scope and limitations of our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{limitation}</span>
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
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification 
              on any specific terms, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
