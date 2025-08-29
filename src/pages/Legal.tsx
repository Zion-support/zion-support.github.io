import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  FileText, 
  Scale, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight,
  Download,
  ExternalLink,
  Building2,
  Users,
  Globe,
  Server,
  Database,
  ShieldCheck,
  Gavel,
  BookOpen,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Legal: React.FC = () => {
  const legalDocuments = [
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      lastUpdated: 'December 15, 2024',
      category: 'Data Protection',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      href: '/privacy'
    },
    {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our products and services',
      lastUpdated: 'December 15, 2024',
      category: 'Service Agreement',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      href: '/terms'
    },
    {
      title: 'Cookie Policy',
      description: 'Information about cookies and tracking technologies',
      lastUpdated: 'December 15, 2024',
      category: 'Data Collection',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      href: '/cookies'
    },
    {
      title: 'Data Processing Agreement',
      description: 'GDPR-compliant data processing terms for enterprise customers',
      lastUpdated: 'December 15, 2024',
      category: 'Compliance',
      icon: ShieldCheck,
      color: 'from-orange-500 to-red-500',
      href: '/data-processing-agreement'
    },
    {
      title: 'Service Level Agreement',
      description: 'Performance commitments and service guarantees',
      lastUpdated: 'December 15, 2024',
      category: 'Service Quality',
      icon: CheckCircle,
      color: 'from-indigo-500 to-purple-500',
      href: '/sla'
    },
    {
      title: 'Acceptable Use Policy',
      description: 'Guidelines for acceptable use of our services',
      lastUpdated: 'December 15, 2024',
      category: 'Usage Guidelines',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-500',
      href: '/acceptable-use'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-500',
      details: ['Data processing agreements', 'Right to be forgotten', 'Data portability', 'Privacy by design']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: ShieldCheck,
      color: 'text-blue-500',
      details: ['Security controls', 'Availability monitoring', 'Confidentiality protection', 'Regular audits']
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Lock,
      color: 'text-purple-500',
      details: ['Risk management', 'Security policies', 'Incident response', 'Business continuity']
    },
    {
      name: 'HIPAA Compliance',
      description: 'Healthcare data protection standards',
      status: 'Certified',
      icon: Users,
      color: 'text-cyan-500',
      details: ['PHI protection', 'Access controls', 'Audit logging', 'Encryption standards']
    }
  ];

  const dataProtection = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
      icon: Lock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access management',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Residency',
      description: 'Compliance with local data sovereignty requirements',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive logging of all data access and modifications',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const legalContact = {
    general: {
      email: 'legal@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    dataProtection: {
      email: 'dpo@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    compliance: {
      email: 'compliance@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  };

  return (
    <>
      <SEO 
        title="Legal & Compliance - Zion Tech Group"
        description="Legal information, privacy policies, terms of service, and compliance frameworks for Zion Tech Group."
        keywords="legal, privacy policy, terms of service, compliance, GDPR, SOC 2, data protection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                     <div className="absolute inset-0 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=)] opacity-20"></div>
          
          <div className="container-responsive relative z-10 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Legal & Compliance
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Legal Information
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transparency and compliance are core to our mission. Access our legal documents, 
                privacy policies, and compliance certifications to understand how we protect your data and rights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  View All Documents
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  Contact Legal Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="py-24 bg-white">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Legal Documents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive legal documentation and policies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalDocuments.map((document, index) => (
                <motion.div
                  key={document.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${document.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <document.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                      {document.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {document.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {document.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Last updated: {document.lastUpdated}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      View Document
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of security, privacy, and compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center`}>
                        <framework.icon className={`w-6 h-6 ${framework.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {framework.name}
                        </h3>
                        <p className="text-gray-600">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                    
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {framework.status}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {framework.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-24 bg-white">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Data Protection & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security measures to protect your data and privacy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataProtection.map((protection, index) => (
                <motion.div
                  key={protection.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${protection.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <protection.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {protection.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {protection.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Team Contact */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Legal Team Contact
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our legal team is available to address your questions about our policies, 
                  compliance, and legal matters. We're committed to transparency and open communication.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      General Legal Inquiries
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700">{legalContact.general.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700">{legalContact.general.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Data Protection Officer
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{legalContact.dataProtection.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{legalContact.dataProtection.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Compliance Team
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{legalContact.compliance.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{legalContact.compliance.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{legalContact.general.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Legal Inquiry Form
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option>Select inquiry type</option>
                      <option>Privacy Policy Questions</option>
                      <option>Terms of Service</option>
                      <option>Data Protection</option>
                      <option>Compliance</option>
                      <option>Legal Agreement</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Describe your legal inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Submit Legal Inquiry
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                Need Legal Assistance?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our legal team is here to help with any questions about our policies, 
                compliance, or legal matters. We're committed to transparency and your rights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  Contact Legal Team
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  Download Legal Documents
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Legal;