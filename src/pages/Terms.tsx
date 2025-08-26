import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our website and services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time, with changes effective immediately upon posting.',
        'Your continued use of our services after changes constitutes acceptance of the modified terms.'
      ]
    },
    {
      title: 'Description of Services',
      content: [
        'Zion Tech Group provides technology consulting, AI solutions, and digital transformation services.',
        'Our services include but are not limited to AI strategy, cloud solutions, cybersecurity, and IT infrastructure.',
        'We may offer additional services or discontinue existing services at our discretion.',
        'All services are provided "as is" and "as available" without warranties of any kind.'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when using our services.',
        'Maintain the security of your account credentials and notify us of any unauthorized access.',
        'Use our services only for lawful purposes and in accordance with these terms.',
        'Respect intellectual property rights and not infringe on the rights of others.',
        'Comply with all applicable laws and regulations when using our services.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content, trademarks, logos, and intellectual property on our website belong to Zion Tech Group.',
        'You may not copy, reproduce, distribute, or create derivative works without our written permission.',
        'Our services and technology remain our exclusive property.',
        'You retain ownership of any content you submit, but grant us license to use it for service provision.'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.',
        'We implement appropriate security measures to protect your personal information.',
        'We may collect and process data as necessary to provide our services.',
        'You consent to our data practices as described in our Privacy Policy.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages.',
        'Our total liability shall not exceed the amount paid for the specific service in question.',
        'We are not responsible for third-party services or external websites linked from our platform.',
        'These limitations apply to the fullest extent permitted by applicable law.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-4"
          >
            Please read these terms carefully before using our services.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-blue-100"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Introduction
            </h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, 
              and any related applications (collectively, the "Services"). By using our Services, you 
              agree to these Terms and our Privacy Policy.
            </p>
            <p className="text-slate-700">
              Zion Tech Group ("we," "our," or "us") reserves the right to modify these Terms at any 
              time. We will notify users of any material changes by posting the new Terms on our website.
            </p>
          </motion.div>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Payment Terms
            </h2>
            <p className="text-slate-700 mb-4">
              Payment terms vary by service and will be specified in individual service agreements. 
              Generally, payment is due upon receipt of invoice unless otherwise agreed in writing.
            </p>
            <p className="text-slate-700 mb-4">
              We reserve the right to suspend or terminate services for non-payment. Late payments may 
              incur additional fees or interest charges as specified in your service agreement.
            </p>
            <p className="text-slate-700">
              All fees are non-refundable unless otherwise specified in writing or required by law.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Termination
            </h2>
            <p className="text-slate-700 mb-4">
              Either party may terminate these Terms or any service agreement with written notice as 
              specified in the applicable agreement.
            </p>
            <p className="text-slate-700 mb-4">
              Upon termination, your right to use our Services ceases immediately. We may delete or 
              deactivate your account and any associated data at our discretion.
            </p>
            <p className="text-slate-700">
              Provisions relating to intellectual property, confidentiality, and limitation of liability 
              survive termination of these Terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Dispute Resolution
            </h2>
            <p className="text-slate-700 mb-4">
              Any disputes arising from these Terms or our Services shall be resolved through good faith 
              negotiation between the parties.
            </p>
            <p className="text-slate-700 mb-4">
              If negotiation fails, disputes may be resolved through mediation or binding arbitration 
              as specified in individual service agreements.
            </p>
            <p className="text-slate-700">
              These Terms are governed by the laws of Delaware, United States, without regard to 
              conflict of law principles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Force Majeure
            </h2>
            <p className="text-slate-700 mb-4">
              Neither party shall be liable for any failure or delay in performance due to circumstances 
              beyond their reasonable control, including but not limited to acts of God, natural disasters, 
              war, terrorism, or government actions.
            </p>
            <p className="text-slate-700">
              The affected party shall promptly notify the other party of such circumstances and use 
              reasonable efforts to resume performance as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Severability
            </h2>
            <p className="text-slate-700 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
              otherwise remain in full force and effect.
            </p>
            <p className="text-slate-700">
              The remaining provisions of these Terms shall continue to be valid and enforceable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Contact Information
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> legal@ziontechgroup.com</p>
              <p><strong>Phone:</strong> +1 (302) 464-0950</p>
              <p><strong>Address:</strong> Zion Tech Group, Wilmington, DE</p>
            </div>
            <p className="text-slate-700 mt-4">
              We will respond to your inquiry as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            We're here to help clarify any questions you may have about our terms of service 
            or how we operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;