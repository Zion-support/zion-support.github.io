import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  FileText,
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Globe,
  Lock,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu
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

  const contactInfo = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service. Learn about our service terms, user responsibilities, and legal agreements."
        keywords="terms of service, legal, agreement, Zion Tech Group, service terms"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <div className="mt-6 text-sm text-slate-400">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">Welcome to Zion Tech Group</h2>
                <p className="text-slate-300 leading-relaxed">
                  These Terms of Service govern your use of Zion Tech Group's website and services. 
                  By accessing or using our services, you agree to be bound by these terms. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Prohibited Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-700/30"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Prohibited Activities</h3>
              </div>
              <p className="text-slate-300 mb-6">
                The following activities are strictly prohibited when using our services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
              <p className="text-slate-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
