import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Policy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-gray-400 text-lg">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Information We Collect',
                'How We Use Your Information',
                'Information Sharing and Disclosure',
                'Data Security',
                'Your Rights and Choices',
                'Cookies and Tracking Technologies',
                'International Data Transfers',
                'Children\'s Privacy',
                'Changes to This Policy',
                'Contact Us'
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg"
                >
                  {index + 1}. {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Information We Collect */}
          <motion.div
            id="information-we-collect"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">1. Information We Collect</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Personal Information</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li>• Create an account or profile</li>
                  <li>• Request a quote or consultation</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Contact our support team</li>
                  <li>• Apply for a job</li>
                  <li>• Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  This may include your name, email address, phone number, company information, 
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Usage Information</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We automatically collect certain information about your use of our services, including:
                </p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referring website</li>
                  <li>• Error logs and performance data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cookies and Similar Technologies</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            id="how-we-use-your-information"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">2. How We Use Your Information</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 text-gray-300 ml-6">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices, updates, and support messages</li>
                <li>• Respond to your comments, questions, and requests</li>
                <li>• Communicate with you about products, services, and events</li>
                <li>• Monitor and analyze trends, usage, and activities</li>
                <li>• Detect, investigate, and prevent fraudulent transactions</li>
                <li>• Personalize and improve your experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>
          </motion.div>

          {/* Information Sharing and Disclosure */}
          <motion.div
            id="information-sharing-and-disclosure"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">3. Information Sharing and Disclosure</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Service Providers</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We may share information with trusted third-party service providers who assist us 
                    in operating our website, conducting business, or servicing you.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Legal Requirements</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We may disclose information if required by law or in response to valid legal process, 
                    such as a subpoena or court order.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Business Transfers</h4>
                  <p className="text-gray-300 leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred as part of that transaction.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Protection of Rights</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We may disclose information to protect our rights, property, or safety, or that of 
                    our users or the public.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            id="data-security"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">4. Data Security</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-3">Technical Measures</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Encryption in transit and at rest</li>
                    <li>• Secure authentication systems</li>
                    <li>• Regular security assessments</li>
                    <li>• Access controls and monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-3">Organizational Measures</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Employee training and awareness</li>
                    <li>• Data handling policies</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                While we strive to protect your information, no method of transmission over the internet 
                or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </motion.div>

          {/* Your Rights and Choices */}
          <motion.div
            id="your-rights-and-choices"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">5. Your Rights and Choices</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Access and Portability</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Request access to your personal information and receive a copy in a portable format.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Correction</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Request correction of inaccurate or incomplete personal information.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Deletion</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Request deletion of your personal information, subject to certain exceptions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Objection</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Object to processing of your personal information for certain purposes.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, please contact us using the information provided below. 
                We will respond to your request within the timeframes required by applicable law.
              </p>
            </div>
          </motion.div>

          {/* Cookies and Tracking Technologies */}
          <motion.div
            id="cookies-and-tracking-technologies"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">6. Cookies and Tracking Technologies</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience and 
                provide personalized content. Here's what you should know:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Types of Cookies We Use</h4>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• <strong>Essential cookies:</strong> Required for basic website functionality</li>
                    <li>• <strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li>• <strong>Functional cookies:</strong> Remember your preferences and settings</li>
                    <li>• <strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Managing Cookies</h4>
                  <p className="text-gray-300 leading-relaxed">
                    You can control and manage cookies through your browser settings. However, 
                    disabling certain cookies may limit your ability to use some features of our website.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* International Data Transfers */}
          <motion.div
            id="international-data-transfers"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">7. International Data Transfers</h2>
            
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement 
              appropriate safeguards to protect your information.
            </p>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            id="childrens-privacy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">8. Children's Privacy</h2>
            
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under the age of 16. We do not knowingly 
              collect personal information from children under 16. If you believe we have collected 
              such information, please contact us immediately.
            </p>
          </motion.div>

          {/* Changes to This Policy */}
          <motion.div
            id="changes-to-this-policy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">9. Changes to This Policy</h2>
            
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date. 
              Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            id="contact-us"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">10. Contact Us</h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Email</h4>
                  <a 
                    href="mailto:privacy@ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    privacy@ziontechgroup.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Address</h4>
                  <p className="text-gray-300 text-sm">
                    Zion Tech Group<br />
                    Privacy Team<br />
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">Data Protection Officer</h4>
                <p className="text-gray-300 text-sm">
                  For EU residents, you may also contact our Data Protection Officer at{' '}
                  <a 
                    href="mailto:dpo@ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    dpo@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Have Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We're here to help. Contact our privacy team for any concerns or questions about your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Email Privacy Team
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Privacy;