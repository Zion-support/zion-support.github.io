import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { Shield,
  Lock,
  Eye,
  Database,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Settings,
  Trash2,
  Download
} from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'December 15, 2024';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement enterprise-grade security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'All data processing follows strict security protocols and industry best practices.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and protect your information.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      items: [
        'Name and contact information (email, phone, address)',
        'Company and job title information',
        'Professional credentials and certifications',
        'Communication preferences and history'
      ]
    },
    {
      title: 'Technical Information',
      items: [
        'IP address and device information',
        'Browser type and version',
        'Operating system and platform',
        'Usage data and analytics'
      ]
    },
    {
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
      icon: Settings,
      title: 'Service Delivery',
      description: 'To provide and improve our technology services and solutions.'
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
      icon: Eye,
      title: 'Right to Access',
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
      icon: Calendar,
      title: 'Response Time',
      value: 'Within 30 days',
      description: 'We respond to all privacy requests within 30 days',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy and understand your data rights."
        keywords="privacy policy, data protection, GDPR, data rights, personal information, Zion Tech Group, privacy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Privacy Policy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Your privacy is our priority. Learn how we collect, use, and protect your personal information 
                while providing exceptional technology services and solutions.
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-700/50 border border-slate-600/50">
                <Calendar className="w-4 h-4 text-slate-400 mr-2" />
                <span className="text-slate-400 text-sm">Last updated: {lastUpdated}</span>
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
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center rounded-xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                    <principle.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
=======
import { Shield, Lock, Eye, Database, Users, FileText, CheckCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-400" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-400" />
                Information We Collect
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We collect various types of information to provide and improve our services. 
                Here's what we collect and why it's necessary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
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
                How We Use Your Information
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We use your information responsibly and only for purposes that benefit you and our services. 
                Here's how we use the data we collect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataUses.map((use, index) => (
                <motion.div
                  key={use.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                      <use.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {use.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {use.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
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
                Your Data Rights
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                You have important rights regarding your personal data. We're committed to helping you 
                exercise these rights and maintain control over your information.
=======
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Name and contact information
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Company and job title
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Email and phone number
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      IP address and device information
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Browser type and version
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Usage analytics and cookies
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-400" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Service Delivery</h4>
                    <p className="text-gray-300 text-sm">
                      Provide and maintain our services, respond to inquiries, and deliver requested information.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Communication</h4>
                    <p className="text-gray-300 text-sm">
                      Send important updates, newsletters, and respond to your requests.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Improvement</h4>
                    <p className="text-gray-300 text-sm">
                      Analyze usage patterns to improve our website and services.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Legal Compliance</h4>
                    <p className="text-gray-300 text-sm">
                      Comply with legal obligations and protect our rights and safety.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-400" />
                Information Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>To comply with legal requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>With trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>To protect our rights, property, or safety</span>
                </li>
              </ul>
            </section>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataRights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center rounded-xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                    <right.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {right.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {right.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
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
                How We Protect Your Data
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
=======
            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-400" />
                Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Encryption</h4>
                  <p className="text-gray-300 text-sm">SSL/TLS encryption for data transmission</p>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Access Control</h4>
                  <p className="text-gray-300 text-sm">Strict access controls and authentication</p>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Secure Storage</h4>
                  <p className="text-gray-300 text-sm">Secure data centers and backup systems</p>
                </div>
              </div>
            </section>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                      <measure.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {measure.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {measure.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                Contact Our Privacy Team
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Have questions about your privacy or want to exercise your data rights? 
                Our dedicated privacy team is here to help.
=======
            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Access & Portability</h4>
                  <p className="text-gray-300 text-sm">
                    Request access to your data and receive it in a portable format.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Correction</h4>
                  <p className="text-gray-300 text-sm">
                    Request correction of inaccurate or incomplete information.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Deletion</h4>
                  <p className="text-gray-300 text-sm">
                    Request deletion of your personal information.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Objection</h4>
                  <p className="text-gray-300 text-sm">
                    Object to processing of your personal information.
                  </p>
                </div>
              </div>
            </section>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center rounded-xl p-6"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-2">
                    {info.value}
                  </p>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    {info.description}
                  </p>
                  
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      {info.title}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                We're committed to transparency and protecting your privacy. If you have any questions 
                or concerns, don't hesitate to reach out to our privacy team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </a>
                
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies & Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and provide personalized content. You can control cookie settings through your browser.
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-medium text-white mb-3">Types of Cookies We Use:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Essential:</strong> Required for basic website functionality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Analytics:</strong> Help us understand how visitors use our site</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Functional:</strong> Remember your preferences and settings</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-2">Zion Tech Group</h4>
                    <p className="text-gray-300 text-sm">
                      Email: privacy@ziontechgroup.com<br />
                      Phone: +1 (555) 123-4567<br />
                      Address: 123 Tech Street, Innovation City, IC 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Data Protection Officer</h4>
                    <p className="text-gray-300 text-sm">
                      Email: dpo@ziontechgroup.com<br />
                      For urgent privacy concerns
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" date. 
                We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  );
}
