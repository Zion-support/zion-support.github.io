import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn about Zion Tech Group's privacy policy, data protection practices, and how we safeguard your personal information."
        keywords="privacy policy, data protection, GDPR, data privacy, Zion Tech Group"
        canonical="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency
              in how we handle your personal information.
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index)  => (
              <motion.div
<<<<<<< HEAD
                key={principle.title}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="text-center group"
=======
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-slate-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services
              and improve your experience.
            </p>
          </motion.div>
          
          <div className="grid lg: grid-cols-3 gap-8">
            {dataCategories.map((category, index)  => (
              <motion.div
<<<<<<< HEAD
                key={category.title}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="group"
=======
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How We Use Your Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* How We Use Your Data */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information only for legitimate business purposes
              and with your consent where required.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {dataUses.map((use, index) => (
              <motion.div
<<<<<<< HEAD
                key={use.purpose}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
=======
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{use.purpose}</h3>
                    <p className="text-slate-300">{use.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Data Sharing and Security */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial = {
  { opacity: 0,
  x: -30 

}}
              whileInView = {
  { opacity: 1,
  x: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
=======
      {/* Your Rights */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have important rights regarding your personal data.
              We are committed to honoring these rights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{right.right}</h3>
                <p className="text-gray-300">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Last Updated</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We implement comprehensive security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">We Never Sell Your Data</h3>
                    <p className="text-slate-300">Your personal information is never sold, rented, or shared with third parties for marketing purposes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-slate-300">We implement ISO 27001 certified security measures including encryption, access controls, and regular security audits.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Limited Third-Party Access</h3>
                    <p className="text-slate-300">We only share data with trusted service providers who help us deliver our services and maintain security standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                <span>Information We Collect</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Personal Information</h3>
                    <p>Name, email address, phone number, company information, and other contact details you provide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Usage Data</h3>
                    <p>Information about how you use our services, including access times, pages viewed, and features used.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Technical Data</h3>
                    <p>IP address, browser type, device information, and other technical details.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Database className="w-6 h-6 text-cyan-400" />
                <span>How We Use Your Information</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Delivery</h3>
                    <p>To provide, maintain, and improve our services and customer support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Communication</h3>
                    <p>To send you important updates, respond to inquiries, and provide customer service.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Analytics</h3>
                    <p>To analyze usage patterns and improve our services and user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Legal Compliance</h3>
                    <p>To comply with applicable laws, regulations, and legal processes.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>Information Sharing</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">We Do Not Sell Your Data</h3>
                    <p>Zion Tech Group does not sell, trade, or rent your personal information to third parties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Providers</h3>
                    <p>We may share information with trusted third-party service providers who assist us in operating our services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Legal Requirements</h3>
                    <p>We may disclose information when required by law or to protect our rights and safety.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Lock className="w-6 h-6 text-cyan-400" />
                <span>Data Security</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Encryption</h3>
                    <p>We use industry-standard encryption to protect your data during transmission and storage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Access Controls</h3>
                    <p>Strict access controls ensure only authorized personnel can access your information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Regular Audits</h3>
                    <p>We conduct regular security audits and assessments to maintain data protection standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span>Your Rights</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Access & Update</h3>
                    <p>You can access, update, or correct your personal information at any time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Portability</h3>
                    <p>You can request a copy of your data in a portable format.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Deletion</h3>
                    <p>You can request deletion of your personal information, subject to legal requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Opt-out</h3>
                    <p>You can opt-out of marketing communications and certain data processing activities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Contact Us</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Your Rights */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about this privacy policy or want to exercise your rights,
              please contact our privacy team.
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index)  => (
              <motion.div
                key={right.right}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{right.right}</h3>
                  <p className="text-slate-300 leading-relaxed">{right.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Our Privacy Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions about your privacy or want to exercise your rights? We're here to help.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial = {
  { opacity: 0,
  x: -30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Privacy Officer</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span className="text-slate-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial = {
  { opacity: 0,
  x: 30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Privacy rights requests: 30 days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Security incidents: Immediate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Questions About Privacy?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
          >
            Our privacy team is here to help with  questions or concerns about your data
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          >
            <a 
              href="mailto:privacy@ziontechgroup.com" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Privacy Team
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              General Contact
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
=======
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help. Contact our privacy team for any questions
              about your data or this privacy policy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                General Contact;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};

export default Privacy;
