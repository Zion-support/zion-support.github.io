import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

export default function Privacy() {
  const lastUpdated = "August 26, 2025";

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Control",
      description: "You have control over your personal data and can request changes or deletion"
    },
    {
      icon: Users,
      title: "Privacy First",
      description: "Privacy is built into everything we do, not added as an afterthought"
    }
  ];

  const dataCategories = [
    {
      category: "Personal Information",
      examples: ["Name, email address, phone number", "Company information", "Job title and role"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address, browser type", "Device information", "Usage analytics"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Communication Data",
      examples: ["Email correspondence", "Support tickets", "Feedback and surveys"],
      purpose: "To provide customer support and improve our services"
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our technology services and solutions'
    },
    {
      purpose: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      purpose: 'Improvement',
      description: 'To enhance our services and develop new features'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud and ensure platform security'
    }
  ];

  const yourRights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request deletion of your data",
    "Object to data processing",
    "Data portability",
    "Withdraw consent"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              This Privacy Policy explains how Zion Tech Group collects, uses, and protects your personal information 
              when you use our services or visit our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Privacy <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest standards of data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-zion-slate-light">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Data We <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Collect</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We collect only the information necessary to provide our services and improve your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-medium mb-2">Purpose:</h4>
                  <p className="text-zion-slate-light text-sm">{category.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Use Your <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Data</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use your data responsibly and only for purposes that benefit you and our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{use.purpose}</h3>
                <p className="text-zion-slate-light">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Privacy <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Rights</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              You have control over your personal data. Here are your rights and how to exercise them.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yourRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-white">{right}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Data <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your information from unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
                  <ul className="space-y-2">
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Encryption in transit and at rest
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Multi-factor authentication
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Regular security audits
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Access controls and monitoring
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                  <ul className="space-y-2">
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Employee privacy training
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Data minimization practices
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Incident response procedures
                    </li>
                    <li className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      Regular policy reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-20 bg-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Policy <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new policy on our website.
            </p>
            <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate border border-zion-cyan/20 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-zion-cyan mr-3" />
                <span className="text-zion-cyan font-semibold">Important Notice</span>
              </div>
              <p className="text-zion-slate-light text-center">
                This privacy policy was last updated on <strong>{lastUpdated}</strong>. 
                Please review it periodically to stay informed about how we protect your information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            If you have any questions about our privacy practices or want to exercise your rights, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/terms"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
