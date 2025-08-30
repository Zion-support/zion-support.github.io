import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Lock,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Terms: React.FC = (): JSX.Element => {
  const lastUpdated = 'December 15, 2024';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
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
      obligation: 'Content Standards',
      description: 'Ensure all content submitted through our services meets our content standards.'
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account credentials and report any suspicious activity.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'legal@ziontechgroup.com',
      href: 'mailto:legal@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand the rules and guidelines for using our AI-powered technology solutions and services."
        keywords="terms of service, Zion Tech Group, legal terms, service agreement, user responsibilities"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Terms Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Terms Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding these fundamental terms helps ensure a smooth
                relationship between you and Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {termsSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                  <p className="text-gray-300">{obligation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
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
                  <span>Prohibited Activities</span>
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

        {/* Termination Conditions */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Service Termination
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We reserve the right to terminate services under the following conditions
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {terminationConditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
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
              <div className="grid md:grid-cols-3 gap-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{contact.label}</h3>
                    <a
                      href={contact.href}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-center block"
                    >
                      {contact.value}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                By using our services, you agree to these terms.
                Contact us if you need any clarification or have questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300"
                >
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
