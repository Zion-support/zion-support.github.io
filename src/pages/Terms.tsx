import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, Globe, Calendar, Mail, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the website and services operated by Zion Tech Group ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you disagree with any part of these terms, you may not access our services. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </motion.div>

            {/* Services Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                Description of Services
              </h2>
              <p className="text-gray-300 mb-4">Zion Tech Group provides technology consulting, development, and AI solutions including:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI and machine learning solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Software development and consulting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>IT infrastructure and cybersecurity services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Business process optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology strategy and consulting</span>
                </li>
              </ul>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-cyan-400 mr-3" />
                User Responsibilities
              </h2>
              <p className="text-gray-300 mb-4">When using our services, you agree to:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Use services only for lawful purposes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Maintain the security of your account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Not interfere with service operation</span>
                </li>
              </ul>
            </motion.div>

            {/* Prohibited Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Prohibited Activities
              </h2>
              <p className="text-gray-300 mb-4">You may not use our services to:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Violate any applicable laws or regulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Infringe on intellectual property rights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transmit harmful or malicious code</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Attempt to gain unauthorized access to systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Engage in spam or unsolicited communications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Harass, abuse, or harm others</span>
                </li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Intellectual Property Rights
              </h2>
              <p className="text-gray-300 mb-4">Our services and their original content, features, and functionality are owned by Zion Tech Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What We Own</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Website design and layout</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Software and technology solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Brand names, logos, and trademarks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What You Retain</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your original content and data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Intellectual property you own</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Privacy and Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Privacy and Data Protection
              </h2>
              <p className="text-gray-300 mb-4">Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              <div className="space-y-3 text-gray-300">
                <p>By using our services, you consent to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collection of information necessary for service provision</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use of data to improve our services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communication regarding service updates and support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-gray-300 mb-4">To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
              <div className="space-y-3 text-gray-300">
                <p>Our liability is limited to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The amount you paid for our services in the 12 months preceding the claim</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct damages caused by our gross negligence or willful misconduct</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                Termination
              </h2>
              <p className="text-gray-300 mb-4">We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <div className="space-y-3 text-gray-300">
                <p>Upon termination:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your right to use the services will cease immediately</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We may delete your account and data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provisions of these Terms that should survive termination will remain in effect</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-300 mb-4">These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
              <div className="space-y-3 text-gray-300">
                <p>Any disputes arising from these Terms or our services will be resolved through:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Good faith negotiations between the parties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mediation if negotiations fail</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Binding arbitration in Delaware, if required</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                Changes to Terms
              </h2>
              <p className="text-gray-300 mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
              <div className="space-y-3 text-gray-300">
                <p>What constitutes a material change:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Changes to your rights or obligations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modifications to service availability or pricing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Updates to privacy or data handling practices</span>
                  </li>
                </ul>
                <p className="mt-4">Your continued use of our services after any changes constitutes acceptance of the new Terms.</p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">legal@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                We will respond to your inquiry within 5 business days and work to address any concerns you may have about these terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
