import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
>>>>>>> cursor/website-audit-and-enhancement-1eed
import { 
  Shield, 
  Eye, 
  Lock, 
<<<<<<< HEAD
  Users, 
  Globe, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect, how we use it, and who we share it with."
    },
    {
      icon: Lock,
      title: "Security",
      description: "Your data is encrypted and stored securely using enterprise-grade security protocols."
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have full control over your data and can request access, modification, or deletion."
    }
  ];

  const dataCategories = [
    {
      category: "Personal Information",
      examples: ["Name, email address, phone number", "Company name and job title", "Profile information and preferences"],
      purpose: "Account creation, communication, service delivery"
    },
    {
      category: "Usage Data",
      examples: ["Website interactions and navigation", "Service usage patterns", "Performance metrics and analytics"],
      purpose: "Improve user experience, optimize services, provide support"
    },
    {
      category: "Technical Data",
      examples: ["IP address, device information", "Browser type and version", "Operating system and platform"],
      purpose: "Security, compatibility, troubleshooting"
    },
    {
      category: "Communication Data",
      examples: ["Support tickets and inquiries", "Feedback and survey responses", "Marketing preferences"],
      purpose: "Customer service, product improvement, personalized communication"
    }
  ];

  const userRights = [
    {
      title: "Access",
      description: "Request a copy of your personal data and information about how it's processed."
    },
    {
      title: "Rectification",
      description: "Request correction of inaccurate or incomplete personal data."
    },
    {
      title: "Erasure",
      description: "Request deletion of your personal data in certain circumstances."
    },
    {
      title: "Portability",
      description: "Receive your personal data in a structured, machine-readable format."
    },
    {
      title: "Objection",
      description: "Object to processing of your personal data for specific purposes."
    },
    {
      title: "Restriction",
      description: "Request limitation of processing in certain situations."
=======
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
>>>>>>> cursor/website-audit-and-enhancement-1eed
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect 
              your personal information when you use our services.
            </p>
            <div className="flex items-center justify-center gap-2 text-zion-slate-light">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're committed to protecting your privacy through these core principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-zion-slate-light">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We collect information to provide and improve our services while maintaining your privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zion-cyan mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-zion-slate-light text-sm flex items-start">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zion-purple mb-2">Purpose:</h4>
                  <p className="text-zion-slate-light text-sm">{category.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use your information responsibly to provide and improve our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Primary Uses
              </h3>
              <ul className="space-y-3">
                <li className="text-zion-slate-light">• Provide and maintain our services</li>
                <li className="text-zion-slate-light">• Process transactions and payments</li>
                <li className="text-zion-slate-light">• Communicate with you about services</li>
                <li className="text-zion-slate-light">• Provide customer support</li>
                <li className="text-zion-slate-light">• Ensure platform security and safety</li>
              </ul>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Improvement & Analytics
              </h3>
              <ul className="space-y-3">
                <li className="text-zion-slate-light">• Analyze usage patterns and trends</li>
                <li className="text-zion-slate-light">• Improve user experience and features</li>
                <li className="text-zion-slate-light">• Develop new products and services</li>
                <li className="text-zion-slate-light">• Conduct research and analysis</li>
                <li className="text-zion-slate-light">• Prevent fraud and abuse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Sharing & Disclosure</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're committed to keeping your information private and only share it in specific circumstances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                When We May Share
              </h3>
              <ul className="space-y-3">
                <li className="text-zion-slate-light">• With your explicit consent</li>
                <li className="text-zion-slate-light">• To comply with legal obligations</li>
                <li className="text-zion-slate-light">• To protect rights and safety</li>
                <li className="text-zion-slate-light">• With trusted service providers</li>
                <li className="text-zion-slate-light">• During business transfers or mergers</li>
              </ul>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-zion-cyan mr-3" />
                What We Never Share
              </h3>
              <ul className="space-y-3">
                <li className="text-zion-slate-light">• Personal financial information</li>
                <li className="text-zion-slate-light">• Private communications</li>
                <li className="text-zion-slate-light">• Sensitive personal data</li>
                <li className="text-zion-slate-light">• Information for marketing without consent</li>
                <li className="text-zion-slate-light">• Data with unauthorized third parties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Rights & Choices</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              You have control over your personal information and can exercise these rights at any time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-lg font-semibold text-white mb-3">{right.title}</h3>
                <p className="text-zion-slate-light text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Security & Protection</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Security</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li>• End-to-end encryption for data transmission</li>
                <li>• Secure data centers with 24/7 monitoring</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Multi-factor authentication for account access</li>
                <li>• Automated threat detection and response</li>
              </ul>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <h3 className="text-xl font-semibold text-white mb-4">Organizational Security</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li>• Employee background checks and training</li>
                <li>• Strict access controls and permissions</li>
                <li>• Regular security awareness programs</li>
                <li>• Incident response and recovery procedures</li>
                <li>• Compliance with industry standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            If you have questions about this privacy policy or want to exercise your rights, 
            our privacy team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center"
            >
              Contact Privacy Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              privacy@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20">
            <h3 className="text-lg font-semibold text-white mb-3">Policy Updates</h3>
            <p className="text-zion-slate-light text-sm">
              We may update this privacy policy from time to time. We'll notify you of any material changes 
              via email or through our platform. Continued use of our services after changes constitutes 
              acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
=======
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
>>>>>>> cursor/website-audit-and-enhancement-1eed
    </div>
  );
}
