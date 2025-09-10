import React from 'react';
import { motion } from 'framer-motion';
import { FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Lock,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import { SEO } from '../components/SEO';

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

  const userRights = [
    'Access to our services as described in your service agreement',
    'Technical support during business hours',
    'Regular updates and security patches',
    'Data portability upon request',
    'Right to terminate service with proper notice',
    'Transparency about data collection and usage'
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
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Terms and conditions for using Zion Tech Group services and products."
        keywords="terms of service, legal, conditions, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-sm text-zinc-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4">
                    <section.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userRights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{right}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Legal Notice</h2>
              <p className="text-zinc-300 mb-6 max-w-3xl mx-auto">
                These terms are governed by the laws of the State of Delaware, United States. 
                Any disputes arising from these terms will be resolved in the courts of Delaware.
              </p>
              <p className="text-zinc-300 mb-6 max-w-3xl mx-auto">
                We reserve the right to modify these terms at any time. 
                Changes will be effective immediately upon posting to our website.
              </p>
              <div className="text-sm text-zinc-400">
                <p>For questions about these terms, please contact our legal team.</p>
                <p className="mt-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
