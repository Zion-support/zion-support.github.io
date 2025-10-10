'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
<<<<<<< HEAD
export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';
  const dataTypes = [
    {
=======
export default function PrivacyPage() {;
const lastUpdated = 'January 1, 2024';
;
const dataTypes = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
        {
      category: 'Usage Data',
      icon: Eye,
      description: 'Website interactions, pages visited, time spent',
      examples: ['Analytics data', 'User behavior', 'Performance metrics']
    },
        {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, device information',
      examples: ['Log files', 'Error reports', 'System diagnostics']
    },
        {
      category: 'Communication Data',
      icon: Mail,
      description: 'Messages, emails, support tickets',
      examples: ['Contact forms', 'Support requests', 'Email correspondence']
    };
  ];
<<<<<<< HEAD
  const rights = [
    {
=======
;
const rights = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Right to Access',
      description: 'Request a copy of your personal data',
      icon: Eye
    },
        {
      title: 'Right to Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: FileText
    },
        {
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data',
      icon: Database
    },
        {
      title: 'Right to Portability',
      description: 'Receive your data in a structured format',
      icon: ArrowRight
    },
        {
      title: 'Right to Object',
      description: 'Object to processing of your data',
      icon: AlertTriangle
    },
        {
      title: 'Right to Restrict',
      description: 'Limit how we process your data',
      icon: Lock
    };
  ];
<<<<<<< HEAD
  const securityMeasures = [
=======
;
const securityMeasures = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'SSL/TLS encryption for data transmission',
    'Regular security audits and penetration testing',
    'Access controls and authentication systems',
    'Data backup and disaster recovery procedures',
    'Employee training on data protection',
    'Incident response and breach notification procedures'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
=======
      {/* Hero Section */};
      <section className="relative py-20 lg:py-32 overflow-hidden">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Privacy Policy,
  </
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Secure Data</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Last Updated */}
=======
      {/* Last Updated */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <p className="text-gray-300">
                <strong>Last Updated:</strong> {lastUpdated};
              </p>
              <p className="text-sm text-gray-400 mt-2">
                This privacy policy may be updated from time to time. We will notify you of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Introduction */}
=======
      {/* Introduction */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p className="text-gray-300 mb-6">
                By using our website or services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Information We Collect */}
=======
      {/* Information We Collect */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <type .icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {example};
                        </li>
                      ))};
                    </ul>
                  </div>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* How We Use Your Information */}
=======
      {/* How We Use Your Information */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Service Delivery</h3>
                <p className="text-gray-300">
                  To provide, maintain, and improve our services, including AI solutions, IT services, and customer support.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Communication</h3>
                <p className="text-gray-300">
                  To respond to your inquiries, send important updates, and provide customer support.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Marketing</h3>
                <p className="text-gray-300">
                  To send you newsletters, promotional materials, and information about our services (with your consent).
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Analytics</h3>
                <p className="text-gray-300">
                  To analyze website usage, improve user experience, and understand how our services are used.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Legal Compliance</h3>
                <p className="text-gray-300">
                  To comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Data Security */}
=======
      {/* Data Security */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security</h2>
            <p className="text-gray-300 mb-8 text-center">
              We implement appropriate technical and organizational measures to protect your personal information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{measure}</span>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Your Rights */}
=======
      {/* Your Rights */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <right .icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Contact Information */}
=======
      {/* Contact Information */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE</span>
              </div>
            </div>
<<<<<<< HEAD
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover: bg-cyan-600 transition-colors inline-flex items-center">
=======
            <a href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
  </
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  ),
}
  </a>
  </h1>
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
