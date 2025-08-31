import React from 'react';
import { motion } from 'framer-motion';
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  CheckCircle,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/SEO';
  Settings,
  Trash2,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every aspect of our services and systems.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and your rights.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
      description: 'You have full control over your personal data and can manage it at any time.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact details', 'Account information', 'Business details']
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Login times', 'Feature usage', 'Performance metrics']
    },
    {
      title: 'Technical Data',
      description: 'Device information and technical specifications',
      examples: ['IP address', 'Browser type', 'Device information']
    },
    {
      title: 'Communication Data',
      description: 'Records of our interactions and communications',
      examples: ['Support tickets', 'Email correspondence', 'Chat logs']
      title: 'Business Information',
      items: [
        'Project requirements and specifications',
        'Service usage and performance data',
        'Payment and billing information',
        'Support and communication records'
      ]
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our services, process transactions, and deliver support.'
    },
    {
      icon: Users,
      title: 'Communication',
      description: 'To communicate with you about our services, updates, and support.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'To ensure the security and integrity of our systems and services.'
    },
    {
      icon: Database,
      title: 'Analytics',
      description: 'To analyze usage patterns and improve our services and user experience.'
    }
  ];

  const dataRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data that we hold.'
    },
    {
      icon: FileText,
      title: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data in certain circumstances.'
    },
    {
      icon: Download,
      title: 'Right to Portability',
      description: 'Request transfer of your data to another service provider.'
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data.'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Data is stored in secure, certified data centers with redundant security measures.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Our team receives regular security training and follows strict data handling procedures.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'privacy@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:privacy@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our team',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Our headquarters location',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 30 days',
      description: 'We respond to all privacy requests within 30 days',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy and understand your data rights."
        keywords="privacy policy, data protection, GDPR, data rights, personal information, Zion Tech Group, privacy"
      />
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency
              in how we handle your personal information.
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-slate-300 leading-relaxed">{principle.description}</p>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency 
              in how we handle your personal information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services
              and improve your experience.
            </p>
          </motion.div>
          
          <div className="grid lg: grid-cols-3 gap-8">
            {dataCategories.map((category, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information only for legitimate business purposes 
              and with your consent where required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{use.purpose}</h3>
                <p className="text-gray-300">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information only for legitimate business purposes
              and with your consent where required.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{use.purpose}</h3>
                    <p className="text-slate-300">{use.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
      {/* Your Rights */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have important rights regarding your personal data.
              We are committed to honoring these rights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"

                <h3 className="text-xl font-semibold text-white mb-4">{right.right}</h3>
                <p className="text-gray-300">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Last Updated</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We implement comprehensive security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Encryption</h3>
                    <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Access Controls</h3>
                    <p className="text-gray-300 text-sm">Strict access controls and authentication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Regular Audits</h3>
                    <p className="text-gray-300 text-sm">Security assessments and compliance monitoring</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"

              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Security Standards</h3>
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                <span>Information We Collect</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Personal Information</h3>
                    <p>Name, email address, phone number, company information, and other contact details you provide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Usage Data</h3>
                    <p>Information about how you use our services, including access times, pages viewed, and features used.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Technical Data</h3>
                    <p>IP address, browser type, device information, and other technical details.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Database className="w-6 h-6 text-cyan-400" />
                <span>How We Use Your Information</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Delivery</h3>
                    <p>To provide, maintain, and improve our services and customer support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Communication</h3>
                    <p>To send you important updates, respond to inquiries, and provide customer service.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Analytics</h3>
                    <p>To analyze usage patterns and improve our services and user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Legal Compliance</h3>
                    <p>To comply with applicable laws, regulations, and legal processes.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>Information Sharing</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">We Do Not Sell Your Data</h3>
                    <p>Zion Tech Group does not sell, trade, or rent your personal information to third parties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Providers</h3>
                    <p>We may share information with trusted third-party service providers who assist us in operating our services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Legal Requirements</h3>
                    <p>We may disclose information when required by law or to protect our rights and safety.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Lock className="w-6 h-6 text-cyan-400" />
                <span>Data Security</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Encryption</h3>
                    <p>We use industry-standard encryption to protect your data during transmission and storage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Access Controls</h3>
                    <p>Strict access controls ensure only authorized personnel can access your information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Regular Audits</h3>
                    <p>We conduct regular security audits and assessments to maintain data protection standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span>Your Rights</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Access & Update</h3>
                    <p>You can access, update, or correct your personal information at any time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Portability</h3>
                    <p>You can request a copy of your data in a portable format.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Deletion</h3>
                    <p>You can request deletion of your personal information, subject to legal requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Opt-out</h3>
                    <p>You can opt-out of marketing communications and certain data processing activities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Contact Us</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">SOC 2 Compliance</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">GDPR Compliant</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">ISO 27001</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Our Privacy Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions about your privacy or want to exercise your rights? We're here to help.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial = {
  { opacity: 0,
  x: -30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Privacy Officer</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span className="text-slate-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </span>
                  </div>
                </div>
              </motion.div>
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Shield className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Privacy Policy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Your privacy is our priority. Learn how we collect, use, and protect your personal information 
                while providing exceptional technology services and solutions.
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30">
                <Clock className="w-4 h-4 text-zion-cyan mr-2" />
                <span className="text-zion-cyan text-sm">Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                These principles guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-4">
                        <principle.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {principle.title}
                      </h3>
                      
                      <p className="text-zion-cyan-light text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              If you have questions about this privacy policy or want to exercise your rights, 
              please contact our privacy team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">privacy@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help. Contact our privacy team for any questions
              about your data or this privacy policy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"

                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                General Contact;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                We're committed to transparency and protecting your privacy. If you have any questions 
                or concerns, don't hesitate to reach out to our privacy team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </Button>
                
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Policy
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
