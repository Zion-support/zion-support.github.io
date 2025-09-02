import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Users,
  Database,
  Globe,
  Clock,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const DataProtection = () => {
  return (
    <>
      <Helmet>
        <title>Data Protection Policy | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive data protection policies, GDPR compliance, and how we safeguard your personal information." />
        <meta name="keywords" content="data protection, GDPR, privacy, data security, personal information, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/data-protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl">
                  <Shield className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Protection
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  {" "}Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy and data security are our top priorities. Learn about our comprehensive 
                data protection measures and how we comply with international privacy regulations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Commitment to Data Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Zion Tech Group is committed to protecting your personal data and ensuring compliance 
                with all applicable data protection laws and regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "GDPR Compliant",
                  description: "Full compliance with the General Data Protection Regulation (GDPR) and other international privacy laws."
                },
                {
                  icon: <Lock className="w-8 h-8 text-blue-400" />,
                  title: "Data Encryption",
                  description: "All personal data is encrypted both in transit and at rest using industry-standard encryption protocols."
                },
                {
                  icon: <Eye className="w-8 h-8 text-blue-400" />,
                  title: "Transparency",
                  description: "Clear and transparent information about how we collect, use, and protect your personal data."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Access Control",
                  description: "Strict access controls ensure only authorized personnel can access personal data when necessary."
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-400" />,
                  title: "Data Minimization",
                  description: "We only collect and process the minimum amount of personal data necessary for our services."
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "International Standards",
                  description: "Compliance with international data protection standards and best practices."
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-300">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                <div className="space-y-4">
                  {[
                    "Name and contact information (email, phone, address)",
                    "Account credentials and preferences",
                    "Payment and billing information",
                    "Communication history and support interactions",
                    "Professional information (job title, company)",
                    "Usage data and service interactions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technical Data</h3>
                <div className="space-y-4">
                  {[
                    "IP addresses and device information",
                    "Browser type and version",
                    "Operating system details",
                    "Website usage patterns and analytics",
                    "Cookies and similar technologies",
                    "Log files and error reports"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Data Protection Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have comprehensive rights regarding your personal data under applicable data protection laws.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Eye className="w-8 h-8 text-blue-400" />,
                  title: "Right to Access",
                  description: "Request access to your personal data and information about how it's being processed."
                },
                {
                  icon: <FileText className="w-8 h-8 text-blue-400" />,
                  title: "Right to Rectification",
                  description: "Request correction of inaccurate or incomplete personal data."
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-blue-400" />,
                  title: "Right to Erasure",
                  description: "Request deletion of your personal data under certain circumstances."
                },
                {
                  icon: <Lock className="w-8 h-8 text-blue-400" />,
                  title: "Right to Restriction",
                  description: "Request restriction of processing of your personal data."
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-400" />,
                  title: "Right to Portability",
                  description: "Request transfer of your personal data to another service provider."
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Right to Object",
                  description: "Object to processing of your personal data for certain purposes."
                }
              ].map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="mb-4">{right.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Our Data Protection Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our data protection practices or wish to exercise your rights, 
                please contact our Data Protection Officer.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">privacy@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400"
            >
              <p className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataProtection;