import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '123 Innovation Drive, Tech Valley, CA 94000',
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    website: 'https://ziontechgroup.com'
  };

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, usage analytics',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      title: 'Business Information',
      description: 'Company details, project requirements, service preferences',
      examples: ['Service inquiries', 'Project consultations', 'Client communications']
    },
    {
      title: 'Communication Data',
      description: 'Email correspondence, chat logs, support tickets',
      examples: ['Customer support', 'Project updates', 'Marketing communications']
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
      description: 'To protect against fraud and ensure system security'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal obligations and regulatory requirements'
    },
    {
      purpose: 'Marketing',
      description: 'To send relevant updates and promotional materials (with consent)'
    }
  ];

  const dataSharing = [
    {
      category: 'Service Providers',
      description: 'Trusted third-party vendors who assist in service delivery',
      examples: ['Cloud hosting providers', 'Payment processors', 'Analytics services']
    },
    {
      category: 'Legal Requirements',
      description: 'When required by law or to protect our rights',
      examples: ['Court orders', 'Government requests', 'Legal proceedings']
    },
    {
      category: 'Business Transfers',
      description: 'In connection with business mergers or acquisitions',
      examples: ['Company sale', 'Asset transfer', 'Corporate restructuring']
    },
    {
      category: 'Consent',
      description: 'When you explicitly authorize us to share your information',
      examples: ['Partner integrations', 'Case studies', 'Testimonials']
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data'
    },
    {
      right: 'Correction',
      description: 'Request correction of inaccurate information'
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data'
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service'
    },
    {
      right: 'Restriction',
      description: 'Request limitation of data processing'
    },
    {
      right: 'Objection',
      description: 'Object to certain types of data processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Privacy <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your privacy is fundamental to us. This policy explains how we collect, 
              use, and protect your personal information.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center gap-4 text-zion-slate-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Last Updated: {lastUpdated}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency in how we handle your data
            </p>
          </motion.div>

          <motion.div
            className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Company Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-zion-slate-light">
                    <Users className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.name}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information We <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Collect</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We collect only the information necessary to provide our services and improve your experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
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

      {/* Data Usage */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Use</span> Your Data
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use your information responsibly and only for purposes that benefit you and our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataUses.map((use, index) => (
              <motion.div
                key={use.purpose}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{use.purpose}</h3>
                <p className="text-zion-slate-light text-sm">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Sharing</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are committed to protecting your privacy and only share data when necessary and appropriate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataSharing.map((share, index) => (
              <motion.div
                key={share.category}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{share.category}</h3>
                <p className="text-zion-slate-light mb-4">{share.description}</p>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {share.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
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

      {/* User Rights */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Rights</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              You have control over your personal data. Here are your rights and how to exercise them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{right.right}</h3>
                <p className="text-zion-slate-light text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, access controls, and regular security audits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    End-to-end encryption for sensitive data
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Regular security assessments and penetration testing
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Employee training on data protection
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  If you have questions about this privacy policy or want to exercise your data rights, 
                  please contact our privacy team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates & Changes */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Policy <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new policy on our website.
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6">
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
    </div>
  );
};

export default Privacy;
