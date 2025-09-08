import React from 'react';
import { motion   } from 'framer-motion';
import { Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  Share
  } from 'lucide-react';

const PrivacyPolicy: React.FC = (): JSX.Element => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  const email = 'privacy@ziontechgroup.com';
  const phone = '+1 (555) 123-4567';
  const address = '123 Technology Drive, Innovation City, IC 12345, United States';

  return (
  {/* Empty JSX fragment */}
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices, data protection measures, and how we handle your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, Zion Tech Group, privacy practices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Table of Contents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 hover:border-slate-300"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Categories and Retention
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Purpose:</h4>
                        <p className="text-slate-600">{category.purpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Retention Period:</h4>
                        <p className="text-slate-600">{category.retention}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Security Measures
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure.measure}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-green-200"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <measure.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{measure.measure}</h3>
                    <p className="text-slate-600 text-center">{measure.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our privacy team is here to help. Contact us with  questions about your data or our privacy practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FileText className="w-5 h-5" />
                  <span>Data Protection Officer</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Contact Privacy Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </
  );
};

export default PrivacyPolicy;>