'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';
<<<<<<< HEAD
export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';
  const sections = [
    {
=======
export default function TermsPage() {;
const lastUpdated = 'January 1, 2024';
;
const sections = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
        {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
        {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to modify or discontinue services.'
    },
        {
      title: 'User Responsibilities',
      icon: User,
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.'
    },
        {
      title: 'Intellectual Property',
      icon: FileText,
      content: 'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group and protected by applicable copyright and trademark laws.'
    },
        {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
    };
  ];
<<<<<<< HEAD
  const prohibitedUses = [
=======
;
const prohibitedUses = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Violating any applicable laws or regulations',
    'Transmitting malicious code or harmful content',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with the proper functioning of our services',
    'Using our services for illegal or unauthorized purposes',
    'Impersonating another person or entity',
    'Collecting user information without consent',
    'Engaging in any form of harassment or abuse'
  ];
<<<<<<< HEAD
  const serviceLevels = [
    {
=======
;
const serviceLevels = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      service: 'AI Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour'
    },
        {
      service: 'IT Infrastructure',
      uptime: '99.95%',
      support: '24/7',
      response: '30 minutes'
    },
        {
      service: 'Cloud Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour'
    },
        {
      service: 'Support Services',
      uptime: 'N/A',
      support: 'Business Hours',
      response: '4 hours'
    };
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
              Terms of Service,
  </
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Legal Agreement</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Protection</span>
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
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Key Terms */}
=======
      {/* Key Terms */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <section .icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{section.content}</p>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Prohibited Uses */}
=======
      {/* Prohibited Uses */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Uses</h2>
            <p className="text-gray-300 mb-8 text-center">
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{use}</span>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Service Level Agreements */}
=======
      {/* Service Level Agreements */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Agreements</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Uptime</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Support</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceLevels.map((level, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="px-6 py-4 text-white font-medium">{level.service}</td>
                      <td className="px-6 py-4 text-cyan-400">{level.uptime}</td>
                      <td className="px-6 py-4 text-purple-400">{level.support}</td>
                      <td className="px-6 py-4 text-green-400">{level.response}</td>
                    </tr>
                  ))};
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Payment Terms */}
=======
      {/* Payment Terms */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Terms</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Billing</h3>
                <p className="text-gray-300">
                  Services are billed monthly or annually as agreed upon in your service contract. 
                  Payment is due within 30 days of invoice date.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Refunds</h3>
                <p className="text-gray-300">
                  Refunds are provided at our discretion and are subject to the terms of your specific service agreement. 
                  No refunds for services already delivered.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Late Payments</h3>
                <p className="text-gray-300">
                  Late payments may result in service suspension. A late fee of 1.5% per month may be applied to overdue accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Termination */}
=======
      {/* Termination */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Termination</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Termination by You</h3>
                <p className="text-gray-300">
                  You may terminate your account at any time by providing 30 days written notice. 
                  Data will be provided in a standard format upon request.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Termination by Us</h3>
                <p className="text-gray-300">
                  We may terminate your account immediately if you violate these terms or engage in prohibited activities. 
                  We will provide reasonable notice when possible.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Effect of Termination</h3>
                <p className="text-gray-300">
                  Upon termination, your right to use our services ceases immediately. 
                  We will retain your data for 90 days after termination for recovery purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Governing Law */}
=======
      {/* Governing Law */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
            <p className="text-xl text-gray-300 mb-8">
              These terms are governed by the laws of the State of Delaware, United States. 
              Any disputes will be resolved in the courts of Delaware.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Delaware, USA</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white">US Law</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-white">English Language</span>
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please contact us.
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
