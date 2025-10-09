'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertCircle, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not use our services.',
        'We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.',
        'These terms apply to all users of our services, including visitors, customers, and clients.'
      ]
    },
    {
      title: 'Service Description',
      icon: Scale,
      content: [
        'Zion Tech Group provides AI and IT solutions including but not limited to machine learning, automation, cloud services, and cybersecurity.',
        'Our services are provided on an "as is" and "as available" basis.',
        'We reserve the right to modify, suspend, or discontinue any part of our services at any time.',
        'We do not guarantee uninterrupted access to our services or that they will be error-free.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You must provide accurate and complete information when using our services.',
        'You agree not to use our services for any unlawful or prohibited activities.',
        'You are responsible for all activities that occur under your account.',
        'You must comply with all applicable laws and regulations when using our services.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: FileText,
      content: [
        'All content, trademarks, and intellectual property on our platform are owned by Zion Tech Group or our licensors.',
        'You may not copy, modify, distribute, or create derivative works without our written permission.',
        'Any feedback or suggestions you provide may be used by us without compensation.',
        'You retain ownership of any data you provide, but grant us a license to use it for service provision.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: Scale,
      content: [
        'Payment terms are specified in your service agreement or subscription plan.',
        'All fees are non-refundable unless otherwise specified in writing.',
        'We may change our pricing with 30 days notice to existing customers.',
        'Late payments may result in service suspension or termination.',
        'You are responsible for all taxes associated with your use of our services.'
      ]
    },
    {
      title: 'Service Level Agreement',
      icon: Shield,
      content: [
        'We strive to maintain 99.9% uptime for our core services.',
        'Scheduled maintenance will be announced at least 24 hours in advance.',
        'We provide support during business hours (9 AM - 6 PM EST, Monday-Friday).',
        'Emergency support is available 24/7 for critical issues.',
        'Service credits may be provided for downtime exceeding our SLA thresholds.'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertCircle,
      content: [
        'To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages.',
        'Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.',
        'We are not responsible for any loss of data, profits, or business opportunities.',
        'These limitations apply even if we have been advised of the possibility of such damages.'
      ]
    },
    {
      title: 'Termination',
      icon: FileText,
      content: [
        'Either party may terminate the service agreement with 30 days written notice.',
        'We may immediately suspend or terminate services for breach of these terms.',
        'Upon termination, you must cease all use of our services and return any confidential information.',
        'Provisions regarding intellectual property, liability, and dispute resolution survive termination.'
      ]
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Infringing on intellectual property rights',
    'Transmitting malicious code or viruses',
    'Attempting to gain unauthorized access to our systems',
    'Using our services for illegal or fraudulent activities',
    'Interfering with the proper functioning of our services',
    'Collecting user data without permission',
    'Spamming or sending unsolicited communications'
  ];

  const disputeResolution = [
    'Any disputes will be resolved through binding arbitration',
    'Arbitration will be conducted in Delaware, United States',
    'The arbitration will be governed by the rules of the American Arbitration Association',
    'Each party will bear their own costs and attorney fees',
    'Class action lawsuits are waived to the extent permitted by law'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's AI and IT services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-8 h-8 text-cyan-400 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, 
              services, and any related applications (collectively, the "Services") provided by Zion Tech Group 
              ("we," "our," or "us").
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any 
              part of these terms, then you may not access the Services.
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

          {/* Prohibited Uses */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="w-8 h-8 text-cyan-400 mr-3" />
              Prohibited Uses
            </h2>
            <p className="text-gray-300 mb-6">
              You may not use our Services for any of the following purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                  {use}
                </div>
              ))}
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Scale className="w-8 h-8 text-cyan-400 mr-3" />
              Dispute Resolution
            </h2>
            <p className="text-gray-300 mb-6">
              Any disputes arising from these Terms or your use of our Services will be resolved as follows:
            </p>
            <ul className="space-y-3">
              {disputeResolution.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Governing Law */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Scale className="w-8 h-8 text-cyan-400 mr-3" />
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
              United States, without regard to its conflict of law provisions. Any legal action or proceeding arising 
              under these Terms will be brought exclusively in the courts of Delaware.
            </p>
          </div>

          {/* Severability */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              Severability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will 
              remain in full force and effect. We will replace any invalid provision with a valid provision that 
              most closely approximates the intent and economic effect of the invalid provision.
            </p>
          </div>

          {/* Entire Agreement */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-8 h-8 text-cyan-400 mr-3" />
              Entire Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy and any other legal notices published by us on the 
              Services, shall constitute the entire agreement between you and Zion Tech Group concerning the Services. 
              If any provision of these Terms is deemed invalid by a court of competent jurisdiction, the invalidity 
              of such provision shall not affect the validity of the remaining provisions of these Terms.
            </p>
          </div>

          {/* Contact */}
          <div className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Mail className="w-8 h-8 text-cyan-400 mr-3" />
              Contact Information
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  legal@ziontechgroup.com
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

export default TermsPage;