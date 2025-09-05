import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, CheckCircle, AlertTriangle, Shield, Users, 
  Globe, Lock, Database, Info, AlertCircle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TermsPage() {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className=&quot;w-6 h-6&quot; />,
      content: [
        'By accessing or using our services, you agree to be bound by these terms',
        'If you do not agree to these terms, do not use our services',
        'We may modify these terms at any time with notice',
        'Continued use after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: <Info className=&quot;w-6 h-6&quot; />,
      content: [
        'AI and machine learning platforms and services',
        'Quantum computing solutions and infrastructure',
        'Cybersecurity and data protection services',
        'Consulting and professional services',
        'Technical support and maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <Users className=&quot;w-6 h-6&quot; />,
      content: [
        'Provide accurate and complete information',
        'Maintain security of your account credentials',
        'Comply with applicable laws and regulations',
        'Use services for lawful purposes only',
        'Respect intellectual property rights'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      content: [
        'Our services and content are protected by copyright',
        'You retain rights to your data and content',
        'You grant us license to use your content for service provision',
        'No transfer of intellectual property rights',
        'Respect for third-party intellectual property'
      ]
    },
    {
      title: 'Privacy and Data',
      icon: <Lock className=&quot;w-6 h-6&quot; />,
      content: [
        'Collection and use of data as described in Privacy Policy',
        'Implementation of appropriate security measures',
        'Compliance with data protection regulations',
        'Data retention and deletion policies',
        'Your rights regarding your personal data'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: <AlertTriangle className=&quot;w-6 h-6&quot; />,
      content: [
        'Services provided &quot;as is&quot; without warranties',
        'Limitation of liability to extent permitted by law',
        'No liability for indirect or consequential damages',
        'Force majeure events and circumstances',
        'Your responsibility for backup and data protection'
      ]
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Terms of Service — Zion Tech Group | Service Terms & Conditions</title>
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group's terms of service outline the rules and conditions for using our technology services. Read our comprehensive terms and conditions.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Terms of Service — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive terms of service detailing the rules and conditions for using our technology solutions.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/terms&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
              <FileText className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Terms of Service
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed&quot;>
              Please read these terms carefully before using our services.
            </p>
            <div className=&quot;mt-8 text-gray-300&quot;>
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Agreement to Terms</h2>
            <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
              These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group's services, including our website, 
              applications, and any related services (collectively, the &quot;Services&quot;).
            </p>
            <p className=&quot;text-gray-300 leading-relaxed&quot;>
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, you may not access the Services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                  <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center&quot;>
                    {section.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{section.title}</h3>
                </div>
                <ul className=&quot;space-y-2&quot;>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className=&quot;flex items-start space-x-3&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5&quot; />
                      <span className=&quot;text-gray-300 text-sm&quot;>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <AlertCircle className=&quot;w-6 h-6 text-yellow-400 mr-3&quot; />
                Payment Terms
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                Payment for our services is due according to the terms specified in your service agreement. 
                We reserve the right to suspend services for non-payment.
              </p>
              <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                <li>• Payment due dates and late fees</li>
                <li>• Subscription billing and renewal</li>
                <li>• Refund policies and procedures</li>
                <li>• Payment method requirements</li>
                <li>• Tax obligations and compliance</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Shield className=&quot;w-6 h-6 text-green-400 mr-3&quot; />
                Security and Compliance
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                We implement industry-standard security measures to protect your data and ensure compliance 
                with applicable regulations and standards.
              </p>
              <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                <li>• ISO 27001 security standards</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• Regular security audits and assessments</li>
                <li>• Data encryption and access controls</li>
                <li>• Incident response and notification procedures</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Globe className=&quot;w-6 h-6 text-cyan-400 mr-3&quot; />
                Termination and Suspension
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                Either party may terminate the service agreement with appropriate notice. We may suspend 
                services for violations of these terms or security concerns.
              </p>
              <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                <li>• Termination notice requirements</li>
                <li>• Service suspension conditions</li>
                <li>• Data retention after termination</li>
                <li>• Effect of termination on obligations</li>
                <li>• Survival of certain terms</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Governing Law and Disputes</h2>
            <div className=&quot;space-y-6 text-gray-300&quot;>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration 
                in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                You agree to resolve disputes on an individual basis and waive any right to participate in a class 
                action lawsuit or class-wide arbitration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Questions About These Terms?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              We're here to help clarify any questions you may have about our terms of service.
            </p>
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 text-left&quot;>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Contact Information</h3>
                  <div className=&quot;space-y-3 text-gray-300&quot;>
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Legal Department</h3>
                  <div className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                    <p>• Terms of service questions</p>
                    <p>• Contract negotiations</p>
                    <p>• Compliance inquiries</p>
                    <p>• Dispute resolution</p>
                    <p>• Legal documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}