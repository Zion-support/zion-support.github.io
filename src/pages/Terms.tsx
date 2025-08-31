import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Scale,
  Lock
} from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    email: 'legal@ziontechgroup.com',
    phone: '+1 302 464 0950'
  };

  const serviceCategories = [
    {
      icon: Shield,
      title: 'Technology Solutions',
      description: 'AI, machine learning, and business intelligence services',
      includes: ['Custom AI development', 'Data analytics', 'Business intelligence']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Strategic technology consulting and advisory',
      includes: ['Technology strategy', 'Digital transformation', 'Process optimization']
    },
    {
      icon: Globe,
      title: 'Digital Services',
      description: 'Web development, mobile apps, and digital platforms',
      includes: ['Web applications', 'Mobile development', 'Cloud solutions']
    }
  ];

  const userObligations = [
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Comply with all applicable laws and regulations'
    },
    {
      icon: CheckCircle,
      title: 'Account Security',
      description: 'Maintain the security of your account credentials'
    },
    {
      icon: CheckCircle,
      title: 'Acceptable Use',
      description: 'Use our services for lawful purposes only'
    },
    {
      icon: CheckCircle,
      title: 'Payment Terms',
      description: 'Pay all fees and charges in a timely manner'
    }
  ];

  const intellectualProperty = [
    {
      icon: Lock,
      title: 'Our IP Rights',
      description: 'We retain all rights to our proprietary technology and content'
    },
    {
      icon: Users,
      title: 'Your Content',
      description: 'You retain rights to content you create using our services'
    },
    {
      icon: Scale,
      title: 'Licenses',
      description: 'We grant limited licenses for service usage'
    },
    {
      icon: FileText,
      title: 'Third-Party IP',
      description: 'Respect intellectual property rights of third parties'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-indigo-200">
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms of Service ("Terms") govern your use of the website and services 
              operated by Zion Tech Group ("Company," "we," "us," or "our"). By accessing 
              or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you disagree with any part of these terms, then you may not access our 
              services. These Terms apply to all visitors, users, and others who access 
              or use our services.
            </p>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-indigo-800">
                    These terms constitute a legally binding agreement. Please read them 
                    carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zion Tech Group provides a comprehensive range of technology solutions 
              and consulting services to help businesses innovate and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                  <category.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {category.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
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

      {/* User Obligations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations 
              that help ensure a safe and productive environment for all users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                  <obligation.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{obligation.title}</h3>
                <p className="text-gray-600 leading-relaxed">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intellectual Property Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding intellectual property rights is crucial for both parties. 
              This section outlines the ownership and usage rights for various types of content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {intellectualProperty.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                  <item.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Payment Terms and Billing
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our payment terms are designed to be clear and fair for all parties. 
              Please review these terms carefully before engaging our services.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Schedule</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Project-based services:</strong> 50% upfront, 50% upon completion
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Recurring services:</strong> Monthly or quarterly billing cycles
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Consulting services:</strong> Hourly or daily rates with net 30 terms
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    Late Payment Policy
                  </h3>
                  <p className="text-yellow-800">
                    Payments are due within 30 days of invoice date. Late payments may 
                    result in service suspension and additional fees.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Limitation of Liability and Disclaimers
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We strive to provide high-quality services, but it's important to understand 
              the limitations of our liability and the disclaimers that apply to our services.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
                <p className="text-gray-600 text-sm">
                  We strive to maintain high service availability but cannot guarantee 
                  uninterrupted access. Services are provided "as is" and "as available."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Loss</h3>
                <p className="text-gray-600 text-sm">
                  We implement backup and recovery procedures, but we are not responsible 
                  for data loss or corruption that may occur during service delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h3>
                <p className="text-gray-600 text-sm">
                  We may use third-party services and tools. We are not responsible for 
                  the performance or reliability of these third-party services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Termination and Cancellation
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Either party may terminate the service agreement under certain conditions. 
              This section outlines the termination process and its implications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Immediate Termination</h3>
                <p className="text-red-800 text-sm">
                  We may terminate services immediately for violations of these terms, 
                  illegal activities, or failure to pay fees.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Notice Period</h3>
                <p className="text-blue-800 text-sm">
                  For other terminations, we require 30 days written notice. You may 
                  cancel recurring services at any time.
                </p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Upon termination, you will lose access to our services, and we will 
              delete or return your data according to our data retention policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These terms are governed by the laws of Delaware, United States. 
              We encourage resolving disputes through direct communication first.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Direct communication and negotiation</li>
                <li>Mediation (if required)</li>
                <li>Arbitration in Delaware (if mediation fails)</li>
                <li>Legal proceedings in Delaware courts (as last resort)</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to These Terms
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update these terms from time to time to reflect changes in our 
              services, legal requirements, or business practices.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Notification of Changes
                  </h3>
                  <p className="text-blue-800">
                    We will notify you of any material changes to these terms via email 
                    or through our website. Continued use of our services after changes 
                    constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification 
              on any provision, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-indigo-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-indigo-100">{companyInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-indigo-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-indigo-100">{companyInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-indigo-200 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-indigo-100 text-center">{companyInfo.address}</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Legal Department</h3>
              <p className="text-indigo-100 mb-4">
                For legal inquiries and questions about these terms, please contact 
                our legal department. We typically respond within 2-3 business days.
              </p>
              <p className="text-indigo-200 text-sm">
                For urgent matters, please call us directly during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
