import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  AlertTriangle, 
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Scale,
  Lock,
  Zap
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const companyAddress = '123 Innovation Drive, Middletown, DE 19709';
  const companyEmail = 'legal@ziontechgroup.com';
  const companyPhone = '+1 (302) 464-0950';

  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Artificial intelligence and machine learning solutions',
      includes: [
        'AI-powered analytics platforms',
        'Machine learning model development',
        'Natural language processing services',
        'Computer vision solutions',
        'Predictive analytics tools'
      ]
    },
    {
      title: 'IT Services',
      description: 'Information technology consulting and implementation',
      includes: [
        'System architecture design',
        'Cloud infrastructure setup',
        'Cybersecurity implementation',
        'Data migration services',
        'Technical consulting'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services',
      includes: [
        'Process optimization',
        'Technology stack modernization',
        'Change management',
        'Digital strategy consulting',
        'Implementation support'
      ]
    },
    {
      title: 'Custom Development',
      description: 'Tailored software and application development',
      includes: [
        'Web application development',
        'Mobile app development',
        'API development and integration',
        'Database design and optimization',
        'Maintenance and support'
      ]
    }
  ];

  const userObligations = [
    {
      title: 'Account Security',
      description: 'Maintain the security of your account credentials',
      icon: Lock
    },
    {
      title: 'Compliance',
      description: 'Use services in compliance with applicable laws',
      icon: Shield
    },
    {
      title: 'Payment',
      description: 'Pay all fees and charges in a timely manner',
      icon: CheckCircle
    },
    {
      title: 'Acceptable Use',
      description: 'Use services only for lawful and intended purposes',
      icon: Users
    },
    {
      title: 'Data Protection',
      description: 'Protect any sensitive data you handle',
      icon: Shield
    },
    {
      title: 'Cooperation',
      description: 'Cooperate with our support and security teams',
      icon: Zap
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using services for illegal or fraudulent activities',
    'Interfering with other users\' access to services',
    'Reverse engineering or attempting to copy our technology',
    'Distributing malware or harmful code',
    'Violating intellectual property rights',
    'Engaging in activities that could harm our infrastructure',
    'Using services to harass or harm others'
  ];

  const paymentTerms = [
    {
      title: 'Billing Cycle',
      description: 'Monthly billing on the anniversary of service activation',
      icon: Calendar
    },
    {
      title: 'Payment Methods',
      description: 'Credit card, bank transfer, and invoice payment options',
      icon: CheckCircle
    },
    {
      title: 'Late Fees',
      description: '5% late fee applied to overdue balances after 30 days',
      icon: AlertTriangle
    },
    {
      title: 'Refund Policy',
      description: '30-day money-back guarantee for new service subscriptions',
      icon: Shield
    }
  ];

  const privacyCommitments = [
    {
      title: 'Data Protection',
      description: 'GDPR and CCPA compliant data handling practices',
      icon: Shield
    },
    {
      title: 'Encryption',
      description: 'End-to-end encryption for all sensitive data',
      icon: Lock
    },
    {
      title: 'Access Control',
      description: 'Role-based access control and audit logging',
      icon: Users
    },
    {
      title: 'Data Retention',
      description: 'Clear policies for data retention and deletion',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>Last Updated: {lastUpdated}</span>
              <span>•</span>
              <span>Version: 2.1</span>
              <span>•</span>
              <span>Effective Date: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyName}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyAddress}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyEmail}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyPhone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive technology solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              User Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your responsibilities when using our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <obligation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{obligation.title}</h3>
                <p className="text-gray-300">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-900/20 backdrop-blur-sm border border-red-700/50 rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h2 className="text-3xl font-bold text-white">Prohibited Activities</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The following activities are strictly prohibited and may result in immediate account termination:
            </p>
            <ul className="space-y-3">
              {prohibitedActivities.map((activity, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Payment Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding our billing and payment policies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <term.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{term.title}</h3>
                <p className="text-gray-300">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Commitments */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Privacy & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to protecting your data and privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{commitment.title}</h3>
                <p className="text-gray-300">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Legal */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our legal team is here to help clarify any questions you may have about these terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Legal Team</span>
              </a>
              <a
                href={`tel:${companyPhone}`}
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;