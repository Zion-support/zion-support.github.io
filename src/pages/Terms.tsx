import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Lock, 
  Scale, 
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-zion-cyan" />,
      title: "Acceptance of Terms",
      content: "By accessing and using Zion Tech Group's marketplace platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <Users className="w-6 h-6 text-zion-purple" />,
      title: "Description of Service",
      content: "Zion Tech Group provides a marketplace platform that connects AI and technology professionals with opportunities, services, and equipment. Our platform includes talent marketplace, service listings, equipment marketplace, community forums, and AI matching services."
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: "User Accounts",
      content: "To access certain features, you must create an account with accurate information. You are responsible for safeguarding your password and all activities under your account."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: "User Conduct",
      content: "You agree not to violate laws, infringe rights, upload malicious content, gain unauthorized access, interfere with service, engage in fraud, or harm other users."
    },
    {
      icon: <Scale className="w-6 h-6 text-red-400" />,
      title: "Content and Intellectual Property",
      content: "You retain ownership of your content but grant us a license to use it. Platform content is owned by Zion Tech Group and protected by intellectual property laws."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
      title: "Marketplace Transactions",
      content: "When engaging with services through our platform, you enter agreements with service providers. Zion Tech Group acts as a facilitator and is not a party to these agreements."
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
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

        {/* Additional Terms */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Privacy Policy</h3>
                <p className="text-zion-slate-light mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Modifications to Terms</h3>
                <p className="text-zion-slate-light mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Termination</h3>
                <p className="text-zion-slate-light mb-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms of Service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Governing Law</h3>
                <p className="text-zion-slate-light mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zion Tech Group operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Contact Information</h3>
                <p className="text-zion-slate-light">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                    legal@ziontechgroup.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about our Terms of Service, 
              our legal team is here to help clarify any points.
            </p>
            <a 
              href="mailto:legal@ziontechgroup.com" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Contact Legal Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
