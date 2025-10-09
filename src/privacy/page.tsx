'use client';
import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        'Personal Information: Name, email address, phone number, company information',
        'Usage Data: How you interact with our website and services',
        'Technical Data: IP address, browser type, device information',
        'Cookies: We use cookies to enhance your experience and analyze usage patterns'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide and improve our AI and IT services',
        'To communicate with you about our services and updates',
        'To process payments and manage your account',
        'To analyze usage patterns and improve our platform',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data is encrypted in transit and at rest',
        'We regularly audit our security practices and systems',
        'Access to personal data is restricted to authorized personnel only',
        'We maintain incident response procedures for data breaches'
      ]
    },
    {
      title: 'Data Sharing',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share data with trusted service providers who assist in our operations',
        'We may disclose information if required by law or to protect our rights',
        'We may share aggregated, non-personal data for research and analytics',
        'We ensure all third parties maintain appropriate data protection standards'
      ]
    }
  ];

  const rights = [
    'Access your personal data and receive a copy',
    'Correct inaccurate or incomplete data',
    'Request deletion of your personal data',
    'Object to processing of your data',
    'Request data portability',
    'Withdraw consent at any time',
    'File a complaint with supervisory authorities'
  ];

  const cookies = [
    {
      type: 'Essential Cookies',
      purpose: 'Required for basic website functionality',
      duration: 'Session',
      examples: 'Login status, security tokens'
    },
    {
      type: 'Analytics Cookies',
      purpose: 'Help us understand how visitors use our website',
      duration: '2 years',
      examples: 'Google Analytics, page views, user behavior'
    },
    {
      type: 'Marketing Cookies',
      purpose: 'Used to deliver relevant advertisements',
      duration: '1 year',
      examples: 'Ad targeting, remarketing, conversion tracking'
    },
    {
      type: 'Preference Cookies',
      purpose: 'Remember your settings and preferences',
      duration: '1 year',
      examples: 'Language settings, theme preferences'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our AI and IT services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-12 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <section.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Your Rights */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-8 h-8 text-cyan-400 mr-3" />
              Your Rights
            </h2>
            <p className="text-gray-300 mb-6">
              Under applicable data protection laws, you have the following rights regarding your personal data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                  {right}
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              To exercise any of these rights, please contact us using the information provided in the Contact section below.
            </p>
          </div>

          {/* Cookies */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 text-cyan-400 mr-3" />
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Here's what you need to know:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-cyan-400">Cookie Type</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Purpose</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Duration</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-medium">{cookie.type}</td>
                      <td className="py-3 px-4 text-gray-300">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-gray-300">{cookie.duration}</td>
                      <td className="py-3 px-4 text-gray-300">{cookie.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 mt-6">
              You can control cookies through your browser settings. However, disabling certain cookies may 
              affect the functionality of our website.
            </p>
          </div>

          {/* Data Retention */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-8 h-8 text-cyan-400 mr-3" />
              Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or 
              anonymize your personal data when it is no longer needed for these purposes.
            </p>
          </div>

          {/* International Transfers */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              International Data Transfers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              that such transfers comply with applicable data protection laws and that appropriate safeguards 
              are in place to protect your personal data.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-8 h-8 text-cyan-400 mr-3" />
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
              this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact */}
          <div className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Mail className="w-8 h-8 text-cyan-400 mr-3" />
              Contact Us
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="text-gray-300">
                Zion Tech Group<br />
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;