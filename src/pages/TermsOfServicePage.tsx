import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Users, 
  Lock, 
  Eye, 
  Server, 
  Brain, 
  Cloud,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight
} from 'lucide-react';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-lg prose-invert max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-400" />
                  1. Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website 
                  and services. By accessing or using our services, you agree to be bound by these Terms. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              {/* Services */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-purple-400" />
                  2. Services Description
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides cutting-edge technology solutions including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center p-4 bg-blue-600/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">AI & Machine Learning Solutions</span>
                  </div>
                  <div className="flex items-center p-4 bg-purple-600/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Quantum Computing Services</span>
                  </div>
                  <div className="flex items-center p-4 bg-green-600/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Cybersecurity Solutions</span>
                  </div>
                  <div className="flex items-center p-4 bg-orange-600/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    <span className="text-gray-300">Cloud & DevOps Services</span>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-green-400" />
                  3. User Responsibilities
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-green-600/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Accurate Information</h4>
                      <p className="text-gray-300">Provide accurate and complete information when using our services.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-600/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Compliance</h4>
                      <p className="text-gray-300">Comply with all applicable laws and regulations.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-orange-600/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Prohibited Activities</h4>
                      <p className="text-gray-300">Do not engage in unauthorized access, data breaches, or malicious activities.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy & Data */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lock className="w-8 h-8 mr-3 text-red-400" />
                  4. Privacy & Data Protection
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your privacy is important to us. Our data collection and processing practices are governed by our Privacy Policy.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Data Collection
                    </h4>
                    <p className="text-gray-300 text-sm">
                      We collect information necessary to provide our services, including contact details, 
                      usage data, and technical information.
                    </p>
                  </div>
                  <div className="p-6 bg-green-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Data Security
                    </h4>
                    <p className="text-gray-300 text-sm">
                      We implement industry-standard security measures to protect your data from unauthorized access.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-yellow-400" />
                  5. Intellectual Property
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on this website are owned by Zion Tech Group 
                  or our licensors and are protected by copyright and other intellectual property laws.
                </p>
                <div className="bg-yellow-600/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3">License to Use</h4>
                  <p className="text-gray-300">
                    We grant you a limited, non-exclusive, non-transferable license to access and use our services 
                    for your business purposes, subject to these Terms.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-orange-400" />
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
                <div className="bg-orange-600/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3">Service Availability</h4>
                  <p className="text-gray-300">
                    While we strive to maintain high service availability, we do not guarantee uninterrupted 
                    access to our services and are not liable for any downtime or service interruptions.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Server className="w-8 h-8 mr-3 text-gray-400" />
                  7. Termination
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Either party may terminate these Terms at any time with written notice. Upon termination, 
                  your right to use our services will cease immediately.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Info className="w-8 h-8 mr-3 text-blue-400" />
                  8. Governing Law
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                  where Zion Tech Group is incorporated, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <ArrowRight className="w-8 h-8 mr-3 text-green-400" />
                  9. Contact Information
                </h2>
                <div className="bg-green-600/10 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>📧 Email: legal@ziontechgroup.com</p>
                    <p>📞 Phone: +1 (555) 123-4567</p>
                    <p>📍 Address: Zion Tech Group Headquarters</p>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Info className="w-8 h-8 mr-3 text-purple-400" />
                  10. Updates to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to update these Terms at any time. We will notify users of any material 
                  changes by posting the new Terms on this page and updating the "Last updated" date.
                </p>
              </section>

            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-400">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default TermsOfServicePage;