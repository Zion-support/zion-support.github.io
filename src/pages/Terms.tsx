<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
=======
import { SEO              } from '@/components/SEO';
import { Shield, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Calendar
import { SEO              } from '../components/SEO';
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Calendar,
  Scale,
  Lock,
  Zap
} from 'lucide-react';

<<<<<<< HEAD
const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const companyAddress = '123 Innovation Drive, Middletown, DE 19709';
  const companyEmail = 'legal@ziontechgroup.com';
  const companyPhone = '+1 (302) 464-0950';

  const serviceCategories = [
=======
const Terms: React.FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function Terms(...args: any[]): any {
  const lastUpdated = 'December 15, 2024';

  const termsSections = [
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
          
<<<<<<< HEAD
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
=======
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {termsSections.map((section, index)               => (
=======
      
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
              <motion.div
<<<<<<< HEAD
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"

                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-400" />
=======
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                  <FileText className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium">Legal Information</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Terms of Service
                </h1>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  These terms govern your use of Zion Tech Group's services. Please read them carefully 
                  before using our AI-powered technology solutions and consulting services.
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {lastUpdated}</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </motion.div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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

<<<<<<< HEAD
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
=======





}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities
              that help ensure a secure and productive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{activity}</span>
                </div>
=======
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index)               => (
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
<<<<<<< HEAD

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{level.level}</h3>
                    {level.included && (
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-center mb-4">{level.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-400">Response Time:</span>
                    <div className="text-lg font-semibold text-white">{level.response}</div>
                  </div>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{activity}</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </motion.div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              ))}
            </div>
          </div>
        </div>
      </motion.div>

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}

              <h2 className="text-4xl font-bold text-white mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Understanding intellectual property rights is crucial for both
                protecting our innovations and respecting your contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Our IP</h3>
                    <p className="text-gray-300 text-sm">All software, designs, and proprietary technology remain our property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Your IP</h3>
                    <p className="text-gray-300 text-sm">You retain ownership of content and data you provide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Licenses</h3>
                    <p className="text-gray-300 text-sm">We grant limited licenses for authorized use of our services</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"

              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <Scale className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">IP Protection</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Copyright</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Trademarks</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Patents</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Trade Secrets</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
=======
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
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
              {terminationConditions.map((condition, index)               => (
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
=======
          {/* Terms Content */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Terms Sections */}
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {termsSections.map((section, index)              => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* User Obligations */}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
<<<<<<< HEAD
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <term.icon className="w-6 h-6 text-white" />
=======
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  User Obligations
                </h2>
                
                <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
                  {userObligations.map((obligation, index)              => (
                    <motion.div
                      key={obligation.obligation}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {obligation.obligation}
                      </h3>
                      <p className="text-gray-300">
                        {obligation.description}
                      </p>
                    </motion.div>
                  ))}
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
                <Mail className="w-4 h-4 mr-2" />
                Contact Legal Team
              </a>
=======
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Prohibited Activities
                </h2>
                
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {prohibitedActivities.map((activity, index)              => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Termination Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Termination Conditions
                </h2>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-8">
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {terminationConditions.map((condition, index)              => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Questions About These Terms?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you have any questions about these Terms of Service or need clarification 
                  on any provision, please don't hesitate to contact our legal team.
                </p>
                
                <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6 max-w-4xl mx-auto">
                  {contactInfo.map((contact, index)              => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {contact.label}
                      </h3>
                      
                      <a
                        href={contact.href}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
<<<<<<< HEAD
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

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms.
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
