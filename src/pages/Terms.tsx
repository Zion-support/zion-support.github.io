import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
  Lock,
  Clock,
  Mail,
  Phone,
<<<<<<< HEAD
  MapPin
 } from 'lucide-react';
=======
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand the rules and conditions for using our AI and technology services."
        keywords="terms of service, legal terms, service agreement, Zion Tech Group"
        canonical="https://ziontechgroup.com/terms"
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
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully
              before using our technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Terms Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* Key Terms Overview */}
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
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these fundamental terms helps ensure a smooth
              relationship between you and Zion Tech Group.
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {termsSections.map((section, index)  => (
              <motion.div
<<<<<<< HEAD
                key={section.title}
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
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{section.content}</p>
                </div>
<<<<<<< HEAD
=======
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
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
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities
              that help ensure a secure and productive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
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
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-gray-300">{obligation.description}</p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
=======
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
                To maintain a secure and professional environment, certain activities
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">First Offense</span>
                    <span className="text-yellow-400">Warning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Second Offense</span>
                    <span className="text-orange-400">Suspension</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Third Offense</span>
                    <span className="text-red-400">Termination</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide different levels of support to meet your business needs
              and ensure optimal service delivery.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md: grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index)  => (
                <motion.div
                  key={index}
<<<<<<< HEAD
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
                  className="flex items-start space-x-3"
=======
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
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Termination Conditions */}
      <section className="py-20 bg-slate-800/50">
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
              Service Termination
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We reserve the right to terminate services under the following conditions
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md: grid-cols-2 gap-6">
              {terminationConditions.map((condition, index)  => (
                <motion.div
                  key={index}
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
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{condition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
<<<<<<< HEAD
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
              initial = {
  { opacity: 0,
  x: -20 






}}
              whileInView = {
  { opacity: 1,
  x: 0 






}}
              transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Legal Information
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Understanding intellectual property rights is crucial for both
                protecting our innovations and respecting your contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Usage</h3>
                    <p>You must be at least 18 years old to use our services, or have parental consent if under 18.</p>
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
                <Zap className="w-6 h-6 text-cyan-400" />
                <span>Description of Service</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Zion Tech Group provides technology consulting, AI solutions, quantum computing services, cybersecurity, and digital transformation services.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">AI Solutions</h3>
                      <p>Machine learning, automation, and intelligent systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Cpu className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Technology Consulting</h3>
                      <p>Strategic planning and implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Cybersecurity</h3>
                      <p>Security assessments and protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Digital Transformation</h3>
                      <p>Modernization and optimization</p>
                    </div>
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
                <span>User Responsibilities</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Account Security</h3>
                    <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Acceptable Use</h3>
                    <p>You agree to use our services only for lawful purposes and in accordance with these terms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Prohibited Activities</h3>
                    <p>You may not use our services to transmit harmful code, violate intellectual property rights, or engage in illegal activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Compliance</h3>
                    <p>You must comply with all applicable laws and regulations when using our services.</p>
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
                <span>Intellectual Property</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Our Rights</h3>
                    <p>All content, features, and functionality on our platforms are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Your Content</h3>
                    <p>You retain ownership of content you submit, but grant us a license to use it for service provision and improvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">License</h3>
                    <p>We grant you a limited, non-exclusive, non-transferable license to access and use our services for your business needs.</p>
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
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>Privacy and Data</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Protection</h3>
                    <p>We implement appropriate security measures to protect your personal information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Usage</h3>
                    <p>We use your data only for the purposes outlined in our Privacy Policy and with your consent.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Third Parties</h3>
                    <p>We do not sell your personal information to third parties.</p>
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
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <span>Limitation of Liability</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Availability</h3>
                    <p>We strive to provide reliable services but cannot guarantee uninterrupted access or error-free operation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Damages</h3>
                    <p>Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Maximum Liability</h3>
                    <p>Our total liability shall not exceed the amount paid by you for the specific service in question.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                <span>Termination</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Your Rights</h3>
                    <p>You may terminate your use of our services at any time by discontinuing use or contacting us.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Our Rights</h3>
                    <p>We may terminate or suspend access to our services for violations of these terms or for any other reason.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Effect of Termination</h3>
                    <p>Upon termination, your right to use the services will cease immediately.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Database className="w-6 h-6 text-cyan-400" />
                <span>Changes to Terms</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We reserve the right to modify these terms at any time. We will notify users of any material changes.</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Notification</h3>
                    <p>Material changes will be communicated through our website, email, or other appropriate channels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Continued Use</h3>
                    <p>Your continued use of our services after changes constitutes acceptance of the new terms.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Contact Information</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
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
      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* Limitation of Liability */}
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
              Limitation of Liability
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We strive to provide reliable services, but it's important to understand
              the scope of our liability and your responsibilities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Direct damages up to the amount paid for services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Service availability and performance issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Data security and privacy protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Don't Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Third-party service failures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Termination & Cancellation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the terms for ending our service relationship
              helps ensure a smooth transition for all parties.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">You May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">With 30 days written notice</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For material breach by us</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">If we become insolvent</span>
                    </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">We May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For violation of terms</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Non-payment of fees</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Illegal or harmful use</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about these terms or need clarification,
              please contact our legal team.
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
                <h3 className="text-2xl font-bold text-white mb-6">Legal Department</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">legal@ziontechgroup.com</span>
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
                    <span className="text-slate-300">Legal matters: 3-5 business days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Urgent issues: Same day</span>
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
            Ready to Get Started?
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
            By using our services, you agree to these terms. Contact us if you have  questions.
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
              href="mailto:legal@ziontechgroup.com" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Legal Team
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms.
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
};

export default Terms;
