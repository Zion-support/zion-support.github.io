import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, Globe, CheckCircle, AlertTriangle, Clock, Building } from 'lucide-react';

export default function Terms() {
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
            <div className="p-3 bg-green-100 rounded-full">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
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
                <FileText className="h-6 w-6 mr-3 text-green-400" />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Zion Tech Group's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services. These terms apply to 
                all visitors, users, and others who access or use our services.
              </p>
            </section>

            {/* Services Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Building className="h-6 w-6 mr-3 text-green-400" />
                Description of Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group provides technology consulting, AI solutions, cloud services, cybersecurity, 
                and other technology-related services. Our services include but are not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Technology Consulting</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• AI and machine learning solutions</li>
                    <li>• Cloud infrastructure and DevOps</li>
                    <li>• Cybersecurity and compliance</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Digital Solutions</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Digital transformation services</li>
                    <li>• Micro SaaS platforms</li>
                    <li>• Data analytics and insights</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3 text-green-400" />
                User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Provide accurate and complete information when using our services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Use our services only for lawful purposes and in accordance with these terms</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Maintain the security of your account credentials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Not attempt to gain unauthorized access to our systems</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Respect intellectual property rights and not infringe on others' rights</span>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-yellow-400" />
                Prohibited Uses
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may not use our services to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Violate any applicable laws or regulations</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Transmit harmful, offensive, or inappropriate content</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Attempt to breach security measures</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Interfere with other users' access to services</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Use services for commercial purposes without authorization</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Reverse engineer or attempt to extract source code</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-green-400" />
                Intellectual Property Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our services and their original content, features, and functionality are owned by Zion Tech Group 
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                property laws.
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-medium text-white mb-3">What We Own:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All content, software, and technology used in our services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zion Tech Group trademarks, logos, and brand elements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proprietary algorithms, methodologies, and know-how</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Data Collection</h4>
                  <p className="text-gray-300 text-sm">
                    We collect information necessary to provide our services and improve user experience.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Data Security</h4>
                  <p className="text-gray-300 text-sm">
                    We implement appropriate security measures to protect your personal information.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-green-400" />
                Service Availability
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We strive to provide reliable and continuous service, but we cannot guarantee that our services 
                will be available 100% of the time. Our services may be temporarily unavailable due to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Scheduled maintenance and updates</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Technical issues or system failures</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Force majeure events</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Third-party service disruptions</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Financial Losses</h4>
                  <p className="text-gray-300 text-sm">
                    Loss of profits, revenue, or business opportunities
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Data Loss</h4>
                  <p className="text-gray-300 text-sm">
                    Loss or corruption of data or information
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Service Interruption</h4>
                  <p className="text-gray-300 text-sm">
                    Downtime or unavailability of services
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Third-Party Issues</h4>
                  <p className="text-gray-300 text-sm">
                    Problems with third-party services or integrations
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach these Terms of Service.
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-medium text-white mb-3">Upon Termination:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your right to use our services will cease immediately</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We may delete your account and associated data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provisions of these terms that should survive termination will remain in effect</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-green-400" />
                Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions.
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Dispute Resolution</h4>
                <p className="text-gray-300 text-sm">
                  Any disputes arising from these terms or our services will be resolved through binding arbitration 
                  in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Your Responsibility</h4>
                <p className="text-gray-300 text-sm">
                  It is your responsibility to review these terms periodically for changes. Your continued use of our 
                  services after any modifications constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-2">Zion Tech Group</h4>
                    <p className="text-gray-300 text-sm">
                      Email: legal@ziontechgroup.com<br />
                      Phone: +1 (555) 123-4567<br />
                      Address: 123 Tech Street, Innovation City, IC 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Legal Department</h4>
                    <p className="text-gray-300 text-sm">
                      Email: legal@ziontechgroup.com<br />
                      For legal inquiries and concerns
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
