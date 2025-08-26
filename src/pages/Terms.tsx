import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Service
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Please read these terms carefully before using our services. By using our services, 
            you agree to be bound by these terms.
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
                'Acceptance of Terms',
                'Description of Services',
                'User Accounts and Registration',
                'Acceptable Use Policy',
                'Intellectual Property Rights',
                'Privacy and Data Protection',
                'Payment Terms',
                'Service Availability and Support',
                'Limitation of Liability',
                'Indemnification',
                'Termination',
                'Governing Law and Disputes',
                'Changes to Terms',
                'Contact Information'
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
          {/* Acceptance of Terms */}
          <motion.div
            id="acceptance-of-terms"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">1. Acceptance of Terms</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the services provided by Zion Tech Group ("we," "us," or "our"), 
                including our website, applications, and any related services (collectively, the "Services"), 
                you agree to be bound by these Terms of Service ("Terms").
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                If you do not agree to these Terms, you must not use our Services. These Terms apply to all 
                users of our Services, including without limitation users who are browsers, vendors, customers, 
                merchants, and/or contributors of content.
              </p>
              
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-3">Important Notice</h4>
                <p className="text-blue-200 text-sm leading-relaxed">
                  These Terms constitute a legally binding agreement between you and Zion Tech Group. 
                  Please read them carefully and ensure you understand your rights and obligations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Description of Services */}
          <motion.div
            id="description-of-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">2. Description of Services</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group provides a comprehensive range of technology services and solutions, including but not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-3">Technology Services</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• AI and Machine Learning Solutions</li>
                    <li>• Cloud Computing and DevOps</li>
                    <li>• Cybersecurity Services</li>
                    <li>• Digital Transformation Consulting</li>
                    <li>• IT Infrastructure Management</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-white mb-3">Digital Solutions</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Web and Mobile Applications</li>
                    <li>• Blockchain and Web3 Solutions</li>
                    <li>• IoT and Edge Computing</li>
                    <li>• Data Analytics and BI</li>
                    <li>• Custom Software Development</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time 
                with or without notice. We will not be liable to you or any third party for any modification, 
                suspension, or discontinuance of the Services.
              </p>
            </div>
          </motion.div>

          {/* User Accounts and Registration */}
          <motion.div
            id="user-accounts-and-registration"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">3. User Accounts and Registration</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                To access certain features of our Services, you may be required to create an account. 
                When creating an account, you agree to:
              </p>
              
              <ul className="space-y-3 text-gray-300 ml-6">
                <li>• Provide accurate, current, and complete information</li>
                <li>• Maintain and promptly update your account information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Accept responsibility for all activities under your account</li>
                <li>• Notify us immediately of any unauthorized use</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account information and password. 
                You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </div>
          </motion.div>

          {/* Acceptable Use Policy */}
          <motion.div
            id="acceptable-use-policy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">4. Acceptable Use Policy</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Services:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Prohibited Activities</h4>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• In any way that violates any applicable federal, state, local, or international law or regulation</li>
                    <li>• To transmit, or procure the sending of, any advertising or promotional material</li>
                    <li>• To impersonate or attempt to impersonate Zion Tech Group, an employee, or any other person</li>
                    <li>• To engage in any other conduct that restricts or inhibits anyone's use of the Services</li>
                    <li>• To introduce viruses, trojans, worms, logic bombs, or other malicious material</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Content Standards</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Any content you submit must not be defamatory, obscene, offensive, or otherwise objectionable. 
                    We reserve the right to remove any content that violates these standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property Rights */}
          <motion.div
            id="intellectual-property-rights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">5. Intellectual Property Rights</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The Services and their entire contents, features, and functionality are owned by Zion Tech Group, 
                its licensors, or other providers of such material and are protected by copyright, trademark, 
                patent, trade secret, and other intellectual property laws.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Our Rights</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• All trademarks, service marks, and trade names</li>
                    <li>• Software, code, and technical specifications</li>
                    <li>• Design elements and visual assets</li>
                    <li>• Business processes and methodologies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Your Rights</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Personal use of our Services</li>
                    <li>• Fair use of our content for educational purposes</li>
                    <li>• Content you create and submit</li>
                    <li>• Your own intellectual property</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                publicly perform, republish, download, store, or transmit any of the material on our Services, 
                except as expressly permitted by these Terms.
              </p>
            </div>
          </motion.div>

          {/* Privacy and Data Protection */}
          <motion.div
            id="privacy-and-data-protection"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">6. Privacy and Data Protection</h2>
            
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information in connection 
              with the Services is governed by our Privacy Policy, which is incorporated into these Terms 
              by reference. Please review our Privacy Policy to understand our practices.
            </p>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            id="payment-terms"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">7. Payment Terms</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                For paid services, the following terms apply:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Pricing and Billing</h4>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• All prices are quoted in US dollars unless otherwise specified</li>
                    <li>• Prices are subject to change with 30 days' notice</li>
                    <li>• Payment is due upon receipt of invoice</li>
                    <li>• Late payments may incur additional charges</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Refunds and Cancellations</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Refund policies vary by service type. Please refer to your service agreement for specific 
                    refund and cancellation terms. We reserve the right to refuse refunds in certain circumstances.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Availability and Support */}
          <motion.div
            id="service-availability-and-support"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">8. Service Availability and Support</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We strive to provide reliable and high-quality services, but we cannot guarantee:
              </p>
              
              <ul className="space-y-3 text-gray-300 ml-6">
                <li>• Uninterrupted or error-free service</li>
                <li>• Immediate resolution of all issues</li>
                <li>• Compatibility with all devices or browsers</li>
                <li>• Availability during maintenance windows</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed">
                We provide support during business hours and will respond to support requests as quickly 
                as possible. Emergency support may be available for premium service tiers.
              </p>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            id="limitation-of-liability"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">9. Limitation of Liability</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by applicable law, Zion Tech Group shall not be liable for:
              </p>
              
              <ul className="space-y-3 text-gray-300 ml-6">
                <li>• Indirect, incidental, special, consequential, or punitive damages</li>
                <li>• Loss of profits, revenue, data, or business opportunities</li>
                <li>• Damages resulting from third-party actions or inactions</li>
                <li>• Force majeure events beyond our reasonable control</li>
              </ul>
              
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-red-300 mb-3">Important Limitation</h4>
                <p className="text-red-200 text-sm leading-relaxed">
                  Our total liability to you for any claims arising from these Terms or the Services 
                  shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Indemnification */}
          <motion.div
            id="indemnification"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">10. Indemnification</h2>
            
            <p className="text-gray-300 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, 
              employees, and agents from and against any claims, liabilities, damages, judgments, awards, 
              losses, costs, expenses, or fees arising out of or relating to your violation of these Terms 
              or your use of the Services.
            </p>
          </motion.div>

          {/* Termination */}
          <motion.div
            id="termination"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">11. Termination</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to the Services immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Upon termination, your right to use the Services will cease immediately. If you wish to 
                terminate your account, you may simply discontinue using the Services.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                All provisions of the Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </div>
          </motion.div>

          {/* Governing Law and Disputes */}
          <motion.div
            id="governing-law-and-disputes"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">12. Governing Law and Disputes</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                These Terms and any disputes arising out of or related to the Services shall be governed by 
                and construed in accordance with the laws of the State of California, without regard to its 
                conflict of law provisions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Any dispute arising out of or relating to these Terms or the Services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association. 
                The arbitration shall be conducted in San Francisco, California.
              </p>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            id="changes-to-terms"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">13. Changes to Terms</h2>
            
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material 
              changes by posting the new Terms on this page and updating the "Last updated" date. Your 
              continued use of the Services after any changes constitutes acceptance of the new Terms.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            id="contact-information"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">14. Contact Information</h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Email</h4>
                  <a 
                    href="mailto:legal@ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    legal@ziontechgroup.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Address</h4>
                  <p className="text-gray-300 text-sm">
                    Zion Tech Group<br />
                    Legal Department<br />
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our legal team is here to help clarify any questions about these terms of service.
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
              href="mailto:legal@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Email Legal Team
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Terms;