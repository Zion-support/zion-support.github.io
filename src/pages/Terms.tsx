import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Globe,
  Lock,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'December 15, 2024';

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
    'Sharing account credentials with unauthorized users',
    'Violating any applicable laws or regulations'
  ];

  const terminationConditions = [
    'Violation of these Terms of Service',
    'Non-payment of service fees',
    'Engagement in prohibited activities',
    'Breach of security or privacy policies',
    'Failure to comply with legal requirements',
    'Mutual agreement to terminate services'
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.'
    },
    {
      obligation: 'Content Standards',
      description: 'Ensure all content submitted through our services meets our content standards.'
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account credentials and report any suspicious activity.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'legal@ziontechgroup.com',
      href: 'mailto:legal@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand the rules and guidelines for using our AI-powered technology solutions and services."
        keywords="terms of service, Zion Tech Group, legal terms, service agreement, user responsibilities"
      />
      
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                  <FileText className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium">Legal Information</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Terms of Service
                </h1>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  These terms govern your use of Zion Tech Group's services. Please read them carefully 
                  before using our AI-powered technology solutions and consulting services.
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Terms Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {termsSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* User Obligations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  User Obligations
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userObligations.map((obligation, index) => (
                    <motion.div
                      key={obligation.obligation}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {obligation.obligation}
                      </h3>
                      <p className="text-gray-300">
                        {obligation.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Prohibited Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Prohibited Activities
                </h2>
                
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prohibitedActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Termination Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Termination Conditions
                </h2>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {terminationConditions.map((condition, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Questions About These Terms?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you have any questions about these Terms of Service or need clarification 
                  on any provision, please don't hesitate to contact our legal team.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {contact.label}
                      </h3>
                      
                      <a
                        href={contact.href}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
