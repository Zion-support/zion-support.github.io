import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, Eye, Lock, Database, Users, Globe,
  CheckCircle, AlertTriangle, Info
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: <Database className=&quot;w-6 h-6&quot; />,
      content: [
        'Personal information (name, email, phone number)',
        'Company information and business details',
        'Usage data and analytics',
        'Technical information (IP address, browser type)',
        'Communication records and support interactions'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Users className=&quot;w-6 h-6&quot; />,
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Process payments and transactions',
        'Send marketing communications (with consent)',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      content: [
        'We do not sell your personal information',
        'Share with service providers and partners',
        'Comply with legal requirements',
        'Protect our rights and safety',
        'Business transfers (with notice)'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className=&quot;w-6 h-6&quot; />,
      content: [
        'Industry-standard encryption protocols',
        'Regular security audits and assessments',
        'Access controls and authentication',
        'Data backup and recovery procedures',
        'Employee training on data protection'
      ]
    },
    {
      title: 'Your Rights',
      icon: <CheckCircle className=&quot;w-6 h-6&quot; />,
      content: [
        'Access your personal information',
        'Correct inaccurate data',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Data portability'
      ]
    },
    {
      title: 'Data Retention',
      icon: <Info className=&quot;w-6 h-6&quot; />,
      content: [
        'Retain data as long as necessary',
        'Comply with legal requirements',
        'Resolve disputes and enforce agreements',
        'Improve our services',
        'Regular data cleanup procedures'
      ]
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Privacy Policy — Zion Tech Group | Data Protection & Privacy</title>
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group's privacy policy outlines how we collect, use, and protect your personal information. Learn about your rights and our data protection practices.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Privacy Policy — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive privacy policy detailing how we protect your data and respect your privacy rights.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/privacy&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
              <Shield className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Privacy Policy
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed&quot;>
              Your privacy is our priority. Learn how we protect your data and respect your rights.
            </p>
            <div className=&quot;mt-8 text-gray-300&quot;>
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Commitment to Privacy</h2>
            <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className=&quot;text-gray-300 leading-relaxed&quot;>
              We believe in transparency and want you to understand how your data is handled. If you have any questions about this policy, 
              please contact us at{' '}
              <a href=&quot;mailto:privacy@ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                privacy@ziontechgroup.com
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                  <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center&quot;>
                    {section.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{section.title}</h3>
                </div>
                <ul className=&quot;space-y-2&quot;>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className=&quot;flex items-start space-x-3&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5&quot; />
                      <span className=&quot;text-gray-300 text-sm&quot;>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <AlertTriangle className=&quot;w-6 h-6 text-yellow-400 mr-3&quot; />
                Cookies and Tracking
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. 
                You can control cookie settings through your browser preferences.
              </p>
              <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to understand usage patterns</li>
                <li>• Marketing cookies for personalized content</li>
                <li>• Third-party cookies from trusted partners</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Globe className=&quot;w-6 h-6 text-cyan-400 mr-3&quot; />
                International Data Transfers
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply 
                with applicable data protection laws and implement appropriate safeguards.
              </p>
              <ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                <li>• Data processing in the United States and other countries</li>
                <li>• Adequacy decisions and standard contractual clauses</li>
                <li>• Appropriate technical and organizational measures</li>
                <li>• Regular compliance assessments</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Shield className=&quot;w-6 h-6 text-green-400 mr-3&quot; />
                Children's Privacy
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed&quot;>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from 
                children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Questions About Privacy?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              We're here to help. Contact our privacy team for any questions or concerns about your data.
            </p>
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 text-left&quot;>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Contact Information</h3>
                  <div className=&quot;space-y-3 text-gray-300&quot;>
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Your Rights</h3>
                  <div className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                    <p>• Request access to your data</p>
                    <p>• Correct inaccurate information</p>
                    <p>• Request data deletion</p>
                    <p>• Opt-out of communications</p>
                    <p>• File a complaint</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}