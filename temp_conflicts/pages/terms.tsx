import React from 'react';
import Head from 'next/head';
import {_FileText, _CheckCircle, _AlertTriangle, _Shield, _Users, _Globe, _Lock, _Database, _Info, _AlertCircle} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TermsPage() {_const _lastUpdated = 'January 15, _2025';

  const _sections = [
    {
      title: 'Acceptance of Terms', _icon: <CheckCircle className="w-6 h-6" />, _content: [
        'By accessing or using our services, _you agree to be bound by these terms', _'If you do not agree to these terms, _do not use our services', _'We may modify these terms at any time with notice', _'Continued use after changes constitutes acceptance of new terms'
      ]},
    {_title: 'Service Description', _icon: <Info className="w-6 h-6" />, _content: [
        'AI and machine learning platforms and services', _'Quantum computing solutions and infrastructure', _'Cybersecurity and data protection services', _'Consulting and professional services', _'Technical support and maintenance'
      ]},
    {_title: 'User Responsibilities', _icon: <Users className="w-6 h-6" />, _content: [
        'Provide accurate and complete information', _'Maintain security of your account credentials', _'Comply with applicable laws and regulations', _'Use services for lawful purposes only', _'Respect intellectual property rights'
      ]},
    {_title: 'Intellectual Property', _icon: <Shield className="w-6 h-6" />, _content: [
        'Our services and content are protected by copyright', _'You retain rights to your data and content', _'You grant us license to use your content for service provision', _'No transfer of intellectual property rights', _'Respect for third-party intellectual property'
      ]},
    {_title: 'Privacy and Data', _icon: <Lock className="w-6 h-6" />, _content: [
        'Collection and use of data as described in Privacy Policy', _'Implementation of appropriate security measures', _'Compliance with data protection regulations', _'Data retention and deletion policies', _'Your rights regarding your personal data'
      ]},
    {_title: 'Limitation of Liability', _icon: <AlertTriangle className="w-6 h-6" />, _content: [
        'Services provided "as is" without warranties', _'Limitation of liability to extent permitted by law', _'No liability for indirect or consequential damages', _'Force majeure events and circumstances', _'Your responsibility for backup and data protection'
      ]}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Terms of Service — Zion Tech Group | Service Terms & Conditions</title>
        <meta name="description" content="Zion Tech Group's terms of service outline the rules and conditions for using our technology services. Read our comprehensive terms and conditions." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive terms of service detailing the rules and conditions for using our technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-8 text-gray-300">
              <p>Last updated: {_lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group&apos;s services, including our website, 
              applications, and any related services (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, you may not access the Services.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Terms Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_sections.map(_(section, _index) => (_<motion.div
                key={section.title}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    {_section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{_section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {_section.content.map((item, _itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{_item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Additional Terms */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-3" />
                Payment Terms
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Payment for our services is due according to the terms specified in your service agreement. 
                We reserve the right to suspend services for non-payment.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Payment due dates and late fees</li>
                <li>• Subscription billing and renewal</li>
                <li>• Refund policies and procedures</li>
                <li>• Payment method requirements</li>
                <li>• Tax obligations and compliance</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                Security and Compliance
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data and ensure compliance 
                with applicable regulations and standards.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• ISO 27001 security standards</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• Regular security audits and assessments</li>
                <li>• Data encryption and access controls</li>
                <li>• Incident response and notification procedures</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                Termination and Suspension
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate the service agreement with appropriate notice. We may suspend 
                services for violations of these terms or security concerns.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
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

      {_/* Governing Law */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law and Disputes</h2>
            <div className="space-y-6 text-gray-300">
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

      {_/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re here to help clarify any questions you may have about our terms of service.
            </p>
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Legal Department</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
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