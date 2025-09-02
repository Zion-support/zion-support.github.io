<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Scale, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Eye, 
  Database, 
  Zap, 
  Rocket, 
  Brain, 
  Cpu, 
  FileText 
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = 'December 15, 2024';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: "By accessing and using Zion Tech Group's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      content: 'Zion Tech Group provides AI-powered technology solutions, cloud services, cybersecurity, digital transformation, and IT consulting services. We reserve the right to modify or discontinue services at any time.',
      icon: Shield
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the security of their accounts, and complying with all applicable laws and regulations when using our services.',
      icon: Users
    },
    {
      title: 'Intellectual Property',
      content: 'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights. Users may not copy, modify, or distribute our proprietary materials without permission.',
      icon: Lock
    },
    {
      title: 'Privacy and Data Protection',
      content: 'Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',
      icon: Shield
    },
    {
      title: 'Limitation of Liability',
      content: 'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',
      icon: AlertTriangle
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using our services for illegal or harmful purposes',
    'Interfering with the operation of our services',
    'Attempting to reverse engineer our software',
    'Sharing account credentials with unauthorized users',
    'Violating any applicable laws or regulations'
  ];

  const terminationConditions = [
    'Violation of these Terms of Service',
    'Non-payment of service fees',
    'Engagement in prohibited activities',
    'Breach of security or privacy policies',
    'Failure to comply with legal requirements',
    'Mutual agreement to terminate services'
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.'
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account and notify us of any unauthorized access.'
    },
    {
      obligation: 'Payment',
      description: 'Pay all applicable fees for services rendered in a timely manner.'
    }
  ];

  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service. Learn about our service terms, user responsibilities, and policies."
        keywords="terms of service, service terms, user agreement, Zion Tech Group, legal terms"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Please read these Terms of Service carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Calendar className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm">Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Terms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These terms outline the rules and guidelines for using our services 
                and establish the relationship between you and Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{section.title}</h3>
                  <p className="text-gray-300 text-sm">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prohibited Activities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To maintain the security and integrity of our services, the following activities are strictly prohibited.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">User Obligations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                As a user of our services, you have certain responsibilities and obligations 
                that help maintain a secure and compliant environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <motion.div
                  key={obligation.obligation}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{obligation.obligation}</h3>
                  </div>
                  <p className="text-gray-300">{obligation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Termination Conditions */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Termination</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Services may be terminated under certain conditions to protect the integrity 
                of our platform and other users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {terminationConditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center"
                >
                  <AlertTriangle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{condition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About These Terms?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service or need clarification 
                on any provision, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Legal Team
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
=======
import React from 'react'; import { SEO } from '../components/SEO'; const Terms: React.FC = () => { return ( <> <SEO title="Terms of Service" description="Zion Tech Group's terms of service and usage policies." keywords="terms, service, usage, policies" /> <div className="min-h-screen bg-zion-slate-dark flex items-center justify-center"> <div className="text-center"> <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1> <p className="text-gray-300">Coming soon...</p> </div> </div> </> ); }; export default Terms;
>>>>>>> origin/main
