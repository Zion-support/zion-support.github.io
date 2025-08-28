import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Scale, Lock, Users, Eye, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Legal() {
  const legalDocuments = [
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      href: '/privacy',
      icon: Eye
    },
    {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our services',
      href: '/terms',
      icon: FileText
    },
    {
      title: 'Cookie Policy',
      description: 'Information about cookies and tracking technologies',
      href: '/cookies',
      icon: Lock
    },
    {
      title: 'Data Processing Agreement',
      description: 'GDPR compliance and data processing terms',
      href: '/data-processing-agreement',
      icon: Shield
    }
  ];

  const complianceFeatures = [
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance',
      icon: CheckCircle,
      color: 'text-blue-400'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security and availability controls certification',
      icon: CheckCircle,
      color: 'text-purple-400'
    },
    {
      title: 'ISO 27001',
      description: 'Information security management certification',
      icon: CheckCircle,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Legal & Compliance - Zion Tech Group"
        description="Legal documents, compliance information, and data protection policies for Zion Tech Group services."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Legal & Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent legal information and compliance standards. 
              We're committed to protecting your rights and maintaining the highest standards of data protection.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Legal Documents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Legal Documents</h2>
            <div className="space-y-6">
              {legalDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <document.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{document.title}</h3>
                      <p className="text-gray-300 mb-4">{document.description}</p>
                      <a
                        href={document.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        Read Document
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Compliance & Certifications</h2>
            <div className="space-y-6">
              {complianceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Data Protection Commitment</h3>
              <p className="text-gray-300 mb-4">
                We prioritize the security and privacy of your data. Our comprehensive compliance 
                framework ensures we meet or exceed industry standards for data protection.
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Enterprise-grade security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Legal Team */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Legal Matters?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our legal team is available to answer your questions about compliance, 
              data protection, or any legal aspects of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Legal Team
              </a>
              <a
                href="mailto:legal@ziontechgroup.com"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/20"
              >
                legal@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
