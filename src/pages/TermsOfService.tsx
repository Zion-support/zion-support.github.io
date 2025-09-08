import React from 'react';
import { motion   } from 'framer-motion';
import { FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  Eye,
  Database
  } from 'lucide-react';

const TermsOfService: React.FC = (): JSX.Element => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  const email = 'legal@ziontechgroup.com';
  const phone = '+1 (555) 123-4567';
  const address = '123 Technology Drive, Innovation City, IC 12345, United States';

  return (
  {/* Empty JSX fragment */}
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the legal terms and conditions governing your use of our services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, Zion Tech Group, service agreement" />
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
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Terms of Service
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By using our services, you agree to these terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
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
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Provisions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Key Provisions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyProvisions.map((provision, index) => (
                  <motion.div
                    key={provision.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-purple-200"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <provision.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{provision.title}</h3>
                    <p className="text-slate-600 text-center text-sm">{provision.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
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

        {/* Dispute Resolution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Dispute Resolution Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disputeResolution.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-indigo-200 text-center"
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Our legal team is here to help clarify  questions about our Terms of Service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                  Contact Legal Team
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Request Clarification
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </
  );
};

export default TermsOfService;>