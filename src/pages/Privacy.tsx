import React from 'react';
import { motion   } from 'framer-motion';
import { SEO   } from '@/components/SEO';
import { Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle
  } from 'lucide-react';

export default function Privacy(...args: any[]): any {
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
      purpose: 'Service Delivery',
      description: 'To provide and maintain our technology services and solutions'
    },
    {
      purpose: 'Communication',
      description: 'To communicate with you about services, updates, and support'
    },
    {
      purpose: 'Improvement',
      description: 'To improve our services and develop new features'
    },
    {
      purpose: 'Security',
      description: 'To ensure the security and integrity of our systems'
    },
    {
      purpose: 'Compliance',
      description: 'To comply with legal obligations and industry regulations'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request access to your personal data and information about how it is processed'
    },
    {
      right: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data'
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances'
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider'
    },
    {
      right: 'Objection',
      description: 'Object to processing of your data for specific purposes'
    },
    {
      right: 'Restriction',
      description: 'Request restriction of processing in certain situations'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about Zion Tech Group's privacy policy, data protection practices, and how we safeguard your personal information."
        keywords="privacy policy, data protection, GDPR, data privacy, Zion Tech Group"
        canonical="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy is our priority. Learn how we protect and manage your personal information.
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest standards of data protection
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index)   => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-slate-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Information We Collect
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services and improve your experience
            </p>
          </motion.div>
          
          <div className="grid lg: anygrid-cols-3 gap-8">
            {dataCategories.map((category, index)   => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How We Use Your Information
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We use your information responsibly and only for purposes that benefit you and our services
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {dataUses.map((use, index) => (
              <motion.div
                key={use.purpose}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
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

      {/* Data Sharing and Security */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Data Sharing and Security
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">We Never Sell Your Data</h3>
                    <p className="text-slate-300">Your personal information is never sold, rented, or shared with third parties for marketing purposes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-slate-300">We implement ISO 27001 certified security measures including encryption, access controls, and regular security audits.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Limited Third-Party Access</h3>
                    <p className="text-slate-300">We only share data with trusted service providers who help us deliver our services and maintain security standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Security Measures</h3>
                <div className="space-y-4">
                  {[
                    'End-to-end encryption for data transmission',
                    'Multi-factor authentication for all accounts',
                    'Regular security audits and penetration testing',
                    '24/7 security monitoring and threat detection',
                    'Compliance with industry security standards',
                    'Regular employee security training'
                  ].map((measure, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              You have complete control over your personal data and how it is used
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index)   => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{right.right}</h3>
                  <p className="text-slate-300 leading-relaxed">{right.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Privacy rights requests: 30 days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Security incidents: Immediate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Questions About Privacy?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our privacy team is here to help with any questions or concerns about your data
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="mailto:privacy@ziontechgroup.com" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Privacy Team
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              General Contact
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
