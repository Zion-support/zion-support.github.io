import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Database,
  Globe,
  Mail
} from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, company information, and other contact details."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information, as well as the right to restrict or object to certain processing activities."
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements."
    },
    {
      title: "Third-Party Services",
      content: "Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties."
    },
    {
      title: "Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations, unless you request deletion."
    }
  ];

  const dataTypes = [
    {
      icon: <User className="h-6 w-6 text-zion-cyan" />,
      title: "Personal Information",
      examples: ["Name", "Email", "Phone", "Company"]
    },
    {
      icon: <Database className="h-6 w-6 text-zion-purple" />,
      title: "Usage Data",
      examples: ["Login times", "Pages visited", "Features used"]
    },
    {
      icon: <Globe className="h-6 w-6 text-zion-cyan" />,
      title: "Technical Data",
      examples: ["IP address", "Browser type", "Device information"]
    },
    {
      icon: <Mail className="h-6 w-6 text-zion-purple" />,
      title: "Communication Data",
      examples: ["Support tickets", "Feedback", "Survey responses"]
    }
  ];

  const securityMeasures = [
    "End-to-end encryption for sensitive data",
    "Regular security audits and penetration testing",
    "Multi-factor authentication for account access",
    "Secure data centers with 24/7 monitoring",
    "Compliance with industry security standards",
    "Regular employee security training"
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-zion-purple/20 border border-zion-purple/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-zion-cyan" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-zion-cyan">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Last updated: January 2024</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <Shield className="h-5 w-5" />
                <span className="text-sm">GDPR & CCPA compliant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Types of Data We Collect</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <ul className="space-y-1">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-zion-slate-light text-sm">
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                      <span className="text-zion-cyan font-bold text-sm">{index + 1}</span>
                    </div>
                    {section.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Security Measures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{measure}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Privacy Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• View your personal information</li>
                    <li>• Update or correct your data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Export your data</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Opt out of marketing emails</li>
                    <li>• Control notification settings</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Unsubscribe from newsletters</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Breach Notification</h3>
                    <p className="text-zion-slate-light">
                      In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate steps to secure the data and prevent further unauthorized access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">International Data Transfers</h3>
                    <p className="text-zion-slate-light">
                      Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during these transfers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Third-Party Analytics</h3>
                    <p className="text-zion-slate-light">
                      We may use third-party analytics services to understand how our services are used. These services have their own privacy policies and may collect information about your online activities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              If you have any questions about our privacy practices or would like to exercise your rights, please contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Lock className="h-5 w-5" />
                Contact Privacy Team
              </Link>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="border-2 border-zion-purple/30 text-white hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Privacy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-zion-blue-dark border-t border-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zion-slate-light text-sm">
            This privacy policy is effective as of January 1, 2024. We may update this policy from time to time, and any changes will be posted on this page with an updated effective date.
          </p>
        </div>
      </section>
    </div>
  );
}
