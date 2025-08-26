import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number)',
        'Company information (company name, industry, size)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions)',
        'Communication preferences and marketing consent'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Send marketing and promotional materials (with consent)',
        'Analyze usage patterns and optimize user experience',
        'Comply with legal obligations and enforce our terms'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Share with trusted service providers who assist in operations',
        'Disclose when required by law or to protect rights',
        'Share with business partners only with explicit consent',
        'Aggregate, anonymized data may be shared for research'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Implement industry-standard security measures',
        'Encrypt sensitive data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication protocols',
        'Incident response and breach notification procedures'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request correction of inaccurate data',
        'Request deletion of your personal information',
        'Opt-out of marketing communications',
        'Data portability and transfer requests'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'Use essential cookies for website functionality',
        'Analytics cookies to understand usage patterns',
        'Marketing cookies for personalized content',
        'Third-party cookies from trusted partners',
        'Cookie preferences can be managed in browser settings'
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-4"
          >
            Your privacy is important to us. Learn how we protect and handle your information.
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
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website, use our services, or 
              interact with us.
            </p>
            <p className="text-slate-700">
              By using our services, you agree to the collection and use of information in accordance with 
              this policy. If you have any questions about this Privacy Policy, please contact us.
            </p>
          </motion.div>

          {/* Policy Sections */}
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
              Data Retention
            </h2>
            <p className="text-slate-700 mb-4">
              We retain your personal information for as long as necessary to provide our services, 
              comply with legal obligations, resolve disputes, and enforce our agreements. The retention 
              period varies depending on the type of information and the purpose for which it was collected.
            </p>
            <p className="text-slate-700">
              When we no longer need your personal information, we will securely delete or anonymize it 
              in accordance with our data retention policies.
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
              International Data Transfers
            </h2>
            <p className="text-slate-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement 
              appropriate safeguards to protect your information.
            </p>
            <p className="text-slate-700">
              For transfers to countries outside the European Economic Area (EEA), we rely on adequacy 
              decisions, standard contractual clauses, or other appropriate safeguards as required by law.
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
              Children's Privacy
            </h2>
            <p className="text-slate-700 mb-4">
              Our services are not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us immediately.
            </p>
            <p className="text-slate-700">
              We will take steps to delete such information from our records if we become aware that 
              we have collected personal information from a child under 13.
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
              Changes to This Policy
            </h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make changes, we will update 
              the "Last Updated" date at the top of this policy.
            </p>
            <p className="text-slate-700">
              We encourage you to review this Privacy Policy periodically to stay informed about how 
              we protect your information. Your continued use of our services after any changes 
              constitutes acceptance of the updated policy.
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
              Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our 
              data practices, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p><strong>Phone:</strong> +1 (302) 464-0950</p>
              <p><strong>Address:</strong> Zion Tech Group, Wilmington, DE</p>
            </div>
            <p className="text-slate-700 mt-4">
              We will respond to your inquiry as soon as possible and within the timeframes required 
              by applicable law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy. If you have any questions 
            or need clarification about our privacy practices, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;