import React from 'react';
import { FileText, Shield, Users, Globe, Lock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please read these terms carefully before using our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version: 2.0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300">
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. Definitions</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Service</h3>
                <p className="text-gray-300">The Zion Tech Group website, mobile applications, and related services.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">User</h3>
                <p className="text-gray-300">Any individual or entity accessing or using our Service.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Content</h3>
                <p className="text-gray-300">Any information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.</p>
              </div>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Acceptance of Terms</h2>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">By Using Our Service, You Agree To:</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Provide accurate and complete information</li>
                <li>• Maintain the security of your account</li>
                <li>• Accept responsibility for all activities under your account</li>
              </ul>
            </div>
          </section>

          {/* Use License */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">This License Shall Automatically Terminate If You Violate Any Of These Restrictions:</h3>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose</li>
                <li>• Attempt to reverse engineer any software</li>
                <li>• Remove any copyright or proprietary notations</li>
                <li>• Transfer the materials to another person</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. User Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <Users className="w-5 h-5 text-cyan-500 mr-2" />
                  Account Security
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Keep your login credentials secure</li>
                  <li>• Notify us of any unauthorized access</li>
                  <li>• Use strong, unique passwords</li>
                  <li>• Enable two-factor authentication when available</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <Globe className="w-5 h-5 text-cyan-500 mr-2" />
                  Acceptable Use
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Use services for lawful purposes only</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Avoid harmful or malicious activities</li>
                  <li>• Comply with our content guidelines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">6. Prohibited Activities</h2>
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-6 border border-red-500/20">
              <div className="flex items-center mb-4">
                <XCircle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">You May Not:</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Infringe on intellectual property rights</li>
                  <li>• Transmit harmful or malicious code</li>
                  <li>• Attempt to gain unauthorized access</li>
                </ul>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Interfere with service operation</li>
                  <li>• Harass or harm other users</li>
                  <li>• Use services for illegal activities</li>
                  <li>• Violate privacy rights of others</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">7. Intellectual Property Rights</h2>
            <p className="text-gray-300 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Protected Content Includes:</h3>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Website design and layout</li>
                <li>• Software and applications</li>
                <li>• Trademarks and service marks</li>
                <li>• Copyrighted materials and content</li>
                <li>• Trade secrets and proprietary information</li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">8. Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>Note:</strong> Our Privacy Policy is incorporated by reference into these Terms of Service.
              </p>
            </div>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">9. Service Availability</h2>
            <p className="text-gray-300 mb-4">
              We strive to maintain high service availability, but we do not guarantee that the Service will be available at all times or that it will be error-free.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Service Maintenance</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Scheduled maintenance windows</li>
                  <li>• Emergency maintenance when necessary</li>
                  <li>• Advance notice when possible</li>
                  <li>• Minimal disruption during maintenance</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Uptime Commitment</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 99.9% uptime target</li>
                  <li>• 24/7 monitoring and support</li>
                  <li>• Rapid response to issues</li>
                  <li>• SLA compliance for enterprise clients</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">10. Limitation of Liability</h2>
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Important Limitations</h3>
              </div>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
              <p className="text-gray-300">
                This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the Service.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">11. Indemnification</h2>
            <p className="text-gray-300 mb-4">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt.
            </p>
            <p className="text-gray-300">
              This includes reasonable attorney's fees arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">12. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Grounds for Termination Include:</h3>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Violation of these Terms</li>
                <li>• Fraudulent or illegal activities</li>
                <li>• Non-payment of fees (if applicable)</li>
                <li>• Extended periods of inactivity</li>
                <li>• Request by law enforcement</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">13. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300">
              Any disputes arising from these Terms or your use of the Service shall be resolved in the courts of Delaware.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">14. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>Your continued use of the Service after any changes constitutes acceptance of the new Terms.</strong>
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Contact Us</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Phone</span>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Address</span>
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}