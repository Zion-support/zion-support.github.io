import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, FileText, CheckCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-400" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-400" />
                Information We Collect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Name and contact information
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Company and job title
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Email and phone number
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      IP address and device information
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Browser type and version
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      Usage analytics and cookies
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-400" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Service Delivery</h4>
                    <p className="text-gray-300 text-sm">
                      Provide and maintain our services, respond to inquiries, and deliver requested information.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Communication</h4>
                    <p className="text-gray-300 text-sm">
                      Send important updates, newsletters, and respond to your requests.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Improvement</h4>
                    <p className="text-gray-300 text-sm">
                      Analyze usage patterns to improve our website and services.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Legal Compliance</h4>
                    <p className="text-gray-300 text-sm">
                      Comply with legal obligations and protect our rights and safety.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-400" />
                Information Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>To comply with legal requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>With trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>To protect our rights, property, or safety</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-400" />
                Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Encryption</h4>
                  <p className="text-gray-300 text-sm">SSL/TLS encryption for data transmission</p>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Access Control</h4>
                  <p className="text-gray-300 text-sm">Strict access controls and authentication</p>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Secure Storage</h4>
                  <p className="text-gray-300 text-sm">Secure data centers and backup systems</p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Access & Portability</h4>
                  <p className="text-gray-300 text-sm">
                    Request access to your data and receive it in a portable format.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Correction</h4>
                  <p className="text-gray-300 text-sm">
                    Request correction of inaccurate or incomplete information.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Deletion</h4>
                  <p className="text-gray-300 text-sm">
                    Request deletion of your personal information.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Objection</h4>
                  <p className="text-gray-300 text-sm">
                    Object to processing of your personal information.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies & Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and provide personalized content. You can control cookie settings through your browser.
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-medium text-white mb-3">Types of Cookies We Use:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Essential:</strong> Required for basic website functionality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Analytics:</strong> Help us understand how visitors use our site</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Functional:</strong> Remember your preferences and settings</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-2">Zion Tech Group</h4>
                    <p className="text-gray-300 text-sm">
                      Email: privacy@ziontechgroup.com<br />
                      Phone: +1 (555) 123-4567<br />
                      Address: 123 Tech Street, Innovation City, IC 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Data Protection Officer</h4>
                    <p className="text-gray-300 text-sm">
                      Email: dpo@ziontechgroup.com<br />
                      For urgent privacy concerns
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" date. 
                We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
