import React from 'react',
      ]
    },
    {
      title: 'Quantum Technology Services',
      terms: [
        'Quantum computing resources are allocated based on service tierUsers must comply with export control regulations',
        'Performance metrics are provided for informational purposes onlyService interruptions may occur during quantum system calibration'
      ]
    },
    {
      title: 'Cybersecurity Services',
      terms: [
        'Security assessments are conducted according to industry standardsVulnerability reports are confidential and must not be shared',
        'Penetration testing requires written authorizationIncident response follows our established protocols'
      ]
    }
  ],

  const prohibitedActivities = [
import { motion } from 'framer-motion',
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  Globe, Calendar, Scale, Users, ArrowRight,
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react',

import { motion } from 'framer-motion',
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react',
import Layout from '../components/layout/Layout',

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      icon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on Zion Tech Group's website, remove any copyright or other proprietary notations from the materials, or transfer the materials to another person or "mirror" the materials on any other server.`,
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`,
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`,
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`,
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ],

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    },
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ],

const terms: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
import { motion } from 'framer-motion',
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  },
  {
    title: 'Use License',
    icon: <Scale className="w-6 h-6 text-blue-400" />,
    content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.'
  },
  {
    title: 'Disclaimer',
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
    content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.'
  },
  {
    title: 'Limitations',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  }
],

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service, including usage policies, user agreements, and legal conditions for accessing our technology services."
        keywords={["terms of service", "user agreement", "legal terms", "conditions of use", "service agreement", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These terms govern your use of our services and establish our mutual rights and obligations.
              </p>
            </div>
          </div>
        </section>

        {/* User Obligations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                User Obligations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                By using our services, you agree to fulfill these obligations.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Your Responsibilities:</h3>
                  <ul className="space-y-3">
                    {userObligations.map((obligation, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Consequences of Non-Compliance:</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">Warning</h4>
                      <p className="text-gray-300 text-sm">
                        First violations may result in warnings and temporary service restrictions.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Suspension</h4>
                      <p className="text-gray-300 text-sm">
                        Repeated violations may lead to temporary service suspension.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-red-400 mb-2">Termination</h4>
                      <p className="text-gray-300 text-sm">
                        Severe or repeated violations may result in permanent service termination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liability Limitations */}
        {/* Intellectual Property Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Liability & Limitations
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intellectual Property
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding our intellectual property rights and your usage permissions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Additional Terms
              </h2>
              <p className="text-lg text-gray-300">
                Additional terms that apply to specific services or situations.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability to you for any claims arising from the use of our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Governing Law</h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of the United States.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Changes to Terms</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Questions About Terms?
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limitation of Liability
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the scope of our liability and your rights as a user.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Service Limitations:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Services are provided "as-is" without warranties</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>We are not liable for indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Liability is limited to the amount paid for services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Force Majeure:</h3>
                  <p className="text-gray-300 mb-4">
                    We are not liable for delays or failures due to circumstances beyond our control, including:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Natural disasters and extreme weather</li>
                    <li>• Government actions and regulations</li>
                    <li>• Infrastructure failures and cyber attacks</li>
                    <li>• Global pandemics and health emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're here to clarify any questions about our terms of service and help ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Legal Team
                  <FileText className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Download Terms PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
      {/* Terms Overview */}
      <section id="terms-sections" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key sections of our terms of service and what they cover
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-300 text-sm">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
},

export default terms,
