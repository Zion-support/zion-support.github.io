import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Server,
  Key,
  RefreshCw
} from 'lucide-react';

export function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2024';
  const effectiveDate = 'January 15, 2024';

  const dataCategories = [
    {
      icon: Users,
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information, and job title.',
      examples: ['Contact details', 'Professional information', 'Communication preferences']
    },
    {
      icon: Database,
      title: 'Technical Data',
      description: 'IP addresses, browser type, device information, and usage analytics.',
      examples: ['Log files', 'Cookies', 'Device identifiers', 'Usage patterns']
    },
    {
      icon: Server,
      title: 'Service Data',
      description: 'Information related to our services, including usage data and performance metrics.',
      examples: ['Service usage', 'Performance data', 'Error logs', 'Feature preferences']
    },
    {
      icon: Globe,
      title: 'Third-party Data',
      description: 'Information we receive from partners, vendors, and other third parties.',
      examples: ['Partner referrals', 'Vendor information', 'Public records', 'Social media']
    }
  ];

  const dataUses = [
    {
      icon: CheckCircle,
      title: 'Service Delivery',
      description: 'To provide, maintain, and improve our services and customer support.'
    },
    {
      icon: CheckCircle,
      title: 'Communication',
      description: 'To communicate with you about our services, updates, and important information.'
    },
    {
      icon: CheckCircle,
      title: 'Security',
      description: 'To protect our services, users, and prevent fraud and abuse.'
    },
    {
      icon: CheckCircle,
      title: 'Analytics',
      description: 'To analyze usage patterns and improve our services and user experience.'
    },
    {
      icon: CheckCircle,
      title: 'Legal Compliance',
      description: 'To comply with applicable laws, regulations, and legal processes.'
    },
    {
      icon: CheckCircle,
      title: 'Business Operations',
      description: 'To manage our business operations and strategic planning.'
    }
  ];

  const dataProtection = [
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Shield,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data from unauthorized access.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Our infrastructure is built with security best practices and regular security audits.'
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      description: 'We regularly update our security measures and conduct vulnerability assessments.'
    }
  ];

  const userRights = [
    {
      title: 'Access',
      description: 'Request access to your personal data and information about how it\'s processed.'
    },
    {
      title: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances.'
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a structured, machine-readable format.'
    },
    {
      title: 'Restriction',
      description: 'Request limitation of processing under certain circumstances.'
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal data for specific purposes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection and Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices, data protection policies, and how we safeguard your information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy practices, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy-policy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how Zion Tech Group collects, uses, 
              and protects your personal information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Effective Date: {effectiveDate}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Privacy Commitment</h2>
              <p className="text-xl text-gray-300">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Commitment</h3>
                  <p className="text-gray-300">
                    We are committed to transparency, security, and compliance with applicable privacy laws and regulations. 
                    Your trust is essential to our business, and we take your privacy seriously.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, 
              ensure security, and comply with legal obligations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{category.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{category.description}</p>
                <div className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the information we collect for specific, legitimate business purposes 
              and always strive to be transparent about our data practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={use.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <use.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{use.title}</h3>
                <p className="text-gray-300 text-center text-sm">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Data Protection & Security</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataProtection.map((protection, index) => (
              <motion.div
                key={protection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <protection.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{protection.title}</h3>
                <p className="text-gray-300 text-center">{protection.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Data Sharing & Disclosure</h2>
              <p className="text-xl text-gray-300">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in specific, limited circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">When We May Share Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">With your explicit consent</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">To comply with legal obligations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">To protect our rights and safety</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">With trusted service providers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">In business transfers or mergers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">For research and analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Service Providers</h3>
                <p className="text-gray-300 mb-4">
                  We work with trusted third-party service providers who assist us in operating our business, 
                  providing services, and protecting your information. These providers are contractually obligated 
                  to protect your data and use it only for specified purposes.
                </p>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Key className="w-4 h-4" />
                  <span className="text-sm">All service providers are vetted and bound by strict data protection agreements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have certain rights regarding your personal information. 
              We are committed to honoring these rights and providing you with control over your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{right.title}</h3>
                <p className="text-gray-300 text-center text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">To exercise your rights, contact us using the information below</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Cookies & Tracking Technologies</h2>
              <p className="text-xl text-gray-300">
                We use cookies and similar technologies to enhance your experience, 
                analyze usage patterns, and provide personalized content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Types of Cookies We Use</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Essential Cookies</h4>
                    <p className="text-gray-300 text-sm mb-3">Required for basic website functionality and security.</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Authentication
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Security
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Session management
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Analytics Cookies</h4>
                    <p className="text-gray-300 text-sm mb-3">Help us understand how visitors interact with our website.</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Usage analytics
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Performance monitoring
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        User behavior
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Managing Cookies</h3>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies through your browser settings. However, 
                  disabling certain cookies may affect the functionality of our services.
                </p>
                <div className="flex items-center gap-2 text-yellow-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">Most browsers allow you to view, manage, and delete cookies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-xl text-gray-300">
                If you have questions about this Privacy Policy or our data practices, 
                please contact our privacy team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-cyan-400 font-medium">privacy@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">For privacy-related inquiries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm mt-2">Middletown, DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Policy Updates</h2>
              <p className="text-xl text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Important Notice</h3>
                  <p className="text-gray-300">We will notify you of any material changes to this policy</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">How We Notify You</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Email notifications
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Website announcements
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Service notifications
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Review Changes</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Check this page regularly
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Review update dates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Contact us with questions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}