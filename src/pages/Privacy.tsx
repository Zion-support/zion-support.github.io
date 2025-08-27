import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Lock,
  Trash
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account registration']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, and usage analytics',
      examples: ['Website analytics', 'Security monitoring', 'Performance optimization']
    },
    {
      title: 'Business Information',
      description: 'Company details, project requirements, and service inquiries',
      examples: ['Service requests', 'Consultation bookings', 'Partnership inquiries']
    }
  ];

  const dataUsage = [
    {
      purpose: 'Service Delivery',
      description: 'To provide our technology solutions and consulting services',
      examples: ['Project management', 'Client communication', 'Service customization']
    },
    {
      purpose: 'Communication',
      description: 'To respond to inquiries and provide customer support',
      examples: ['Email responses', 'Phone support', 'Technical assistance']
    },
    {
      purpose: 'Marketing',
      description: 'To share relevant content and service updates (with consent)',
      examples: ['Newsletter distribution', 'Event invitations', 'Service announcements']
    },
    {
      purpose: 'Legal Compliance',
      description: 'To meet regulatory requirements and legal obligations',
      examples: ['Tax reporting', 'Contract enforcement', 'Regulatory compliance']
    }
  ];

  const dataProtection = [
    {
      measure: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols',
      icon: Lock
    },
    {
      measure: 'Access Controls',
      description: 'Strict access controls and authentication measures for all systems',
      icon: Shield
    },
    {
      measure: 'Regular Audits',
      description: 'Comprehensive security audits and vulnerability assessments',
      icon: Eye
    },
    {
      measure: 'Employee Training',
      description: 'Regular privacy and security training for all team members',
      icon: CheckCircle
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data that we hold',
      icon: Database
    },
    {
      right: 'Correction',
      description: 'Request correction of inaccurate or incomplete data',
      icon: CheckCircle
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data (with limitations)',
      icon: Trash
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider',
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-zion-cyan/20 rounded-2xl mb-6"
          >
            <Shield className="w-10 h-10 text-zion-cyan" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Your privacy is our priority. This policy explains how we collect, use, and protect 
            your personal information when you interact with Zion Tech Group.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-zion-cyan/60"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Last updated: {lastUpdated}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy describes how we collect, use, 
                disclose, and safeguard your information when you visit our website, use our services, or 
                otherwise interact with us.
              </p>
              <p>
                By using our services or providing us with your information, you agree to the collection and 
                use of information in accordance with this policy. If you do not agree with our policies and 
                practices, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, 
              communicate with you, and ensure security.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-cyan/80 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We use the information we collect for specific, legitimate business purposes 
              and always strive to be transparent about our data practices.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataUsage.map((usage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{usage.purpose}</h3>
                <p className="text-zion-cyan/80 mb-4">{usage.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan">Examples:</h4>
                  <ul className="space-y-1">
                    {usage.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">How We Protect Your Data</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataProtection.map((protection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <protection.icon className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-xl font-bold text-white">{protection.measure}</h3>
                </div>
                <p className="text-zion-cyan/80">{protection.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Data Sharing and Disclosure</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span><strong>Service Providers:</strong> We may share information with trusted third-party 
                  service providers who assist us in operating our business and providing services to you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span><strong>Legal Requirements:</strong> We may disclose information when required by law, 
                  court order, or government request.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                  your information may be transferred as part of the business transaction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span><strong>Protection of Rights:</strong> We may disclose information to protect our rights, 
                  property, or safety, or that of our users or others.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              You have certain rights regarding your personal information. We are committed to 
              helping you exercise these rights and maintaining transparency about your data.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <right.icon className="w-6 h-6 text-zion-cyan" />
                  <h3 className="text-lg font-bold text-white">{right.right}</h3>
                </div>
                <p className="text-zion-cyan/80 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-zion-cyan/80 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us using the information below:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>https://ziontechgroup.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
                <p className="text-zion-cyan/80 mb-4">
                  For privacy-related inquiries and data subject requests, you can also contact 
                  our Data Protection Officer directly.
                </p>
                <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Contact DPO
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Updates to This Policy</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Update the "Last Updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Notify you of significant changes through email or website announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Provide you with an opportunity to review and accept the updated policy</span>
                </li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about 
                how we protect your information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have control over your personal information
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{right.right}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to keep your information safe
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Encryption in transit and at rest
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Multi-factor authentication
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Regular security audits
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Access controls and monitoring
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Employee privacy training
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Data minimization practices
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Incident response procedures
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Regular policy reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you have any questions about our privacy practices or want to exercise your rights, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/terms"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
