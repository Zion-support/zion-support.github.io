import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
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
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

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
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our services, process transactions, and deliver support.'
    },
    {
      purpose: 'Communication',
      description: 'To send important updates, respond to inquiries, and provide customer support.'
    },
    {
      purpose: 'Improvement',
      description: 'To analyze usage patterns and improve our services and user experience.'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud, abuse, and ensure the security of our services.'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data that we hold.'
    },
    {
      right: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances.'
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider.'
    },
    {
      right: 'Objection',
      description: 'Object to processing of your personal data in certain situations.'
    },
    {
      right: 'Restriction',
      description: 'Request limitation of processing your personal data.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy ensures transparency and data protection."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Policy</span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services
              and improve your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
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

      {/* Your Rights */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Data Security
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
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Security Standards</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                General Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
