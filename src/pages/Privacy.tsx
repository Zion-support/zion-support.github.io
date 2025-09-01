import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Globe, 
  UserCheck,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 15, 2025';
  const effectiveDate = 'January 15, 2025';

  const dataCategories = [
    {
      icon: UserCheck,
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information, and other contact details.',
      examples: ['Full name', 'Email address', 'Phone number', 'Company name', 'Job title']
    },
    {
      icon: Database,
      title: 'Technical Data',
      description: 'Information about your device, browser, and how you interact with our services.',
      examples: ['IP address', 'Browser type', 'Device information', 'Usage analytics', 'Cookies']
    },
    {
      icon: Globe,
      title: 'Usage Information',
      description: 'Data about how you use our website, services, and applications.',
      examples: ['Pages visited', 'Time spent on site', 'Features used', 'Search queries', 'Error logs']
    },
    {
      icon: Eye,
      title: 'Marketing Data',
      description: 'Information about your preferences and interactions with our marketing communications.',
      examples: ['Email preferences', 'Content interests', 'Campaign responses', 'Social media interactions']
    }
  ];

  const dataUses = [
    {
      icon: CheckCircle,
      title: 'Service Provision',
      description: 'To provide, maintain, and improve our services and customer support.'
    },
    {
      icon: CheckCircle,
      title: 'Communication',
      description: 'To communicate with you about our services, updates, and relevant information.'
    },
    {
      icon: CheckCircle,
      title: 'Analytics',
      description: 'To analyze usage patterns and improve our website and services.'
    },
    {
      icon: CheckCircle,
      title: 'Marketing',
      description: 'To send you relevant marketing communications with your consent.'
    },
    {
      icon: CheckCircle,
      title: 'Legal Compliance',
      description: 'To comply with legal obligations and protect our rights and safety.'
    }
  ];

  const dataSharing = [
    {
      icon: Shield,
      title: 'Service Providers',
      description: 'Trusted third-party vendors who help us operate our business and provide services.',
      examples: ['Cloud hosting providers', 'Analytics services', 'Email marketing platforms', 'Customer support tools']
    },
    {
      icon: Globe,
      title: 'Business Partners',
      description: 'Strategic partners with whom we collaborate to provide integrated solutions.',
      examples: ['Technology partners', 'Consulting firms', 'Industry associations', 'Research institutions']
    },
    {
      icon: FileText,
      title: 'Legal Requirements',
      description: 'When required by law, court order, or government request.',
      examples: ['Regulatory compliance', 'Legal proceedings', 'Government investigations', 'Public safety']
    },
    {
      icon: UserCheck,
      title: 'With Your Consent',
      description: 'When you explicitly authorize us to share your information.',
      examples: ['Integration requests', 'Referral programs', 'Joint marketing initiatives', 'Custom solutions']
    }
  ];

  const userRights = [
    {
      icon: Eye,
      title: 'Access',
      description: 'Request a copy of the personal data we hold about you.'
    },
    {
      icon: FileText,
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Database,
      title: 'Deletion',
      description: 'Request deletion of your personal data in certain circumstances.'
    },
    {
      icon: Lock,
      title: 'Restriction',
      description: 'Request restriction of processing in certain circumstances.'
    },
    {
      icon: Globe,
      title: 'Portability',
      description: 'Request transfer of your data to another service provider.'
    },
    {
      icon: UserCheck,
      title: 'Objection',
      description: 'Object to processing of your data for certain purposes.'
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols.'
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data.'
    },
    {
      icon: Database,
      title: 'Data Minimization',
      description: 'We only collect and retain data that is necessary for our services.'
    },
    {
      icon: Eye,
      title: 'Regular Audits',
      description: 'Regular security audits and assessments ensure ongoing protection.'
    },
    {
      icon: UserCheck,
      title: 'Employee Training',
      description: 'All employees receive regular training on data protection and privacy.'
    },
    {
      icon: Globe,
      title: 'Incident Response',
      description: 'Comprehensive incident response plans for any data security issues.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Data Protection
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Privacy
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Policy
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#data-collection"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Policy Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This Privacy Policy describes how Zion Tech Group collects, uses, and protects your personal information when you use our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Last Updated</h3>
                <p className="text-gray-400">{lastUpdated}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <FileText className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Effective Date</h3>
                <p className="text-gray-400">{effectiveDate}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Globe className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Scope</h3>
                <p className="text-gray-400">Global Coverage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section id="data-collection" className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, ensure security, and communicate with you effectively.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Examples:</p>
                    <ul className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the information we collect for specific, legitimate business purposes that benefit both you and our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={use.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <use.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{use.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{use.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Information Sharing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and only share your information in specific, limited circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSharing.map((sharing, index) => (
              <motion.div
                key={sharing.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <sharing.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{sharing.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{sharing.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Examples:</p>
                    <ul className="space-y-1">
                      {sharing.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have important rights regarding your personal information. We are committed to honoring these rights and providing you with control over your data.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{right.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Data Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <measure.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{measure.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{measure.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Questions About Privacy?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-blue-100">privacy@ziontechgroup.com</p>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-blue-100">+1 (302) 555-0123</p>
                  </div>
                  
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-blue-100">123 Innovation Drive<br />Middletown, DE 19709</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white mb-2">Data Protection Officer</h4>
                      <p className="text-blue-100">
                        For specific privacy concerns or to exercise your data rights, you can also contact our Data Protection Officer directly at{' '}
                        <a href="mailto:dpo@ziontechgroup.com" className="underline hover:text-white transition-colors">
                          dpo@ziontechgroup.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
