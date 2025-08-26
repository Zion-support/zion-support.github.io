import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Globe,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Information We Collect",
      content: "We collect personal information you provide when creating an account or using our services. This may include your name, email, professional information, and any other details required to deliver our marketplace features."
    },
    {
      icon: <Eye className="w-6 h-6 text-green-400" />,
      title: "How We Use Information",
      content: "Zion Tech Group uses this data solely to operate and improve our platform. We do not sell your personal information to third parties. Your data is used for account management, service delivery, and platform optimization."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: "Data Protection",
      content: "We implement industry-standard security measures to protect your personal information. This includes encryption, secure data storage, access controls, and regular security audits to ensure your data remains safe."
    },
    {
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      title: "Data Retention",
      content: "We retain your personal information only as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time through your account settings."
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: "Third-Party Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share data only with trusted service providers who assist in operating our platform, and only under strict confidentiality agreements."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "International Transfers",
      content: "Your data may be processed in countries other than your own. We ensure all international data transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This page explains how we collect,
            use, and safeguard your information.
          </p>
          <p className="text-zion-slate-light mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Additional Privacy Information */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Access and Control</h3>
                <p className="text-zion-slate-light mb-4">
                  You have the right to access, update, or delete your personal information at any time. 
                  You can manage your privacy settings through your account dashboard or contact us directly.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Data Portability</h3>
                <p className="text-zion-slate-light mb-4">
                  You can request a copy of your personal data in a machine-readable format. 
                  This allows you to transfer your information to other services if needed.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Opt-Out Options</h3>
                <p className="text-zion-slate-light mb-4">
                  You can opt out of marketing communications and certain data processing activities. 
                  We respect your preferences and will honor your choices regarding how your data is used.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Children's Privacy</h3>
                <p className="text-zion-slate-light">
                  Our services are not intended for children under 13 years of age. 
                  We do not knowingly collect personal information from children under 13.
                </p>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              If you have questions about our privacy practices or would like to exercise your privacy rights, 
              our team is here to help. Contact us for assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
