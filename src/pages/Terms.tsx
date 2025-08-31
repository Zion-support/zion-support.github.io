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
      description: 'Credit cards, bank transfers, and approved payment methods',
      icon: CheckCircle
    },
    {
      title: 'Late Fees',
      description: '1.5% monthly interest on overdue balances',
      icon: AlertTriangle
    },
    {
      title: 'Refunds',
      description: '30-day satisfaction guarantee for most services',
      icon: CheckCircle
    }
  ];

  const terminationConditions = [
    {
      condition: 'Breach of Terms',
      description: 'Immediate termination for serious violations',
      timeframe: 'Immediate'
    },
    {
      condition: 'Non-Payment',
      description: 'Termination after 30 days of non-payment',
      timeframe: '30 days'
    },
    {
      condition: 'Service Discontinuation',
      description: 'Advance notice for service changes',
      timeframe: '60 days'
    },
    {
      condition: 'Mutual Agreement',
      description: 'Termination by mutual written agreement',
      timeframe: 'As agreed'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            These terms govern your use of Zion Tech Group's services. By using our services, 
            you agree to be bound by these terms and conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              Version: 3.0
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">{companyAddress}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Legal Email</h3>
                  <a href={`mailto:${companyEmail}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {companyEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href={`tel:${companyPhone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {companyPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Scale className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Governing Law</h3>
                  <p className="text-gray-300">Delaware, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Services Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyan-400">Includes:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* User Obligations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Obligations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <obligation.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{obligation.title}</h3>
                <p className="text-gray-400 text-sm">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Prohibited Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">Prohibited Activities</h2>
            </div>
            <p className="text-gray-300 mb-6">
              The following activities are strictly prohibited and may result in immediate service termination:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Terms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <term.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{term.title}</h3>
                <p className="text-gray-400 text-sm">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Termination Conditions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Service Termination</h2>
            <div className="space-y-4">
              {terminationConditions.map((condition, index) => (
                <div key={condition.condition} className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{condition.condition}</h3>
                      <p className="text-gray-400 text-sm">{condition.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {condition.timeframe}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Intellectual Property */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Intellectual Property</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Our Rights</h3>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group retains all rights, title, and interest in and to our services, 
                  including all intellectual property rights. Our services are protected by copyright, 
                  trademark, and other laws.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• All software, code, and technology developed by us</li>
                  <li>• Our brand names, logos, and trademarks</li>
                  <li>• Documentation, training materials, and content</li>
                  <li>• Any improvements or modifications to our services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Your Rights</h3>
                <p className="text-gray-300 mb-4">
                  You retain ownership of your data and any customizations you create using our services. 
                  You grant us a limited license to use your data to provide and improve our services.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Your business data and content</li>
                  <li>• Custom configurations and workflows</li>
                  <li>• Feedback and suggestions you provide</li>
                  <li>• Any custom code you develop independently</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Limitation of Liability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Limitation of Liability</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                To the maximum extent permitted by law, Zion Tech Group's total liability to you for any 
                claims arising from or related to these terms or our services shall not exceed the amount 
                you paid us in the 12 months preceding the claim.
              </p>
              <p className="text-gray-300">
                We are not liable for any indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to loss of profits, data, or business opportunities.
              </p>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-yellow-400 mb-1">Important Notice</h3>
                    <p className="text-yellow-300 text-sm">
                      These limitations do not apply to claims for personal injury, fraud, or willful misconduct. 
                      Some jurisdictions do not allow liability limitations, so these may not apply to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these terms of service or need clarification on any provision, 
              please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Legal Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                General Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
