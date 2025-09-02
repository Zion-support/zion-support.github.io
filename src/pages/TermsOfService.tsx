import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Shield, 
  Users, 
  Globe, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Lock,
  Brain,
  Rocket,
  Zap
} from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = 'December 15, 2024';
  const effectiveDate = 'January 1, 2025';

  const keyTerms = [
    {
      term: 'Service Provider',
      definition: 'Zion Tech Group, a technology company providing AI, cloud, and cybersecurity services.'
    },
    {
      term: 'Services',
      definition: 'All products, platforms, and services offered by Zion Tech Group, including AI solutions, cloud infrastructure, and cybersecurity services.'
    },
    {
      term: 'User/Client',
      definition: 'Any individual or entity that uses our services, visits our website, or enters into a business relationship with us.'
    },
    {
      term: 'Content',
      definition: 'Any information, data, text, software, graphics, or other materials provided through our services.'
    }
  ];

  const serviceCategories = [
    {
      category: 'AI & Machine Learning',
      services: ['AI Business Intelligence', 'AI Compliance Assistant', 'AI Sales Copilot', 'AI Content Marketing Suite'],
      description: 'Advanced artificial intelligence solutions for business automation and insights'
    },
    {
      category: 'Cloud & Infrastructure',
      services: ['Cloud DevOps', 'IT Infrastructure', 'FinOps Advisor', 'Digital Transformation'],
      description: 'Cloud computing, infrastructure management, and digital transformation services'
    },
    {
      category: 'Cybersecurity',
      services: ['AI Cybersecurity Platform', 'Security Headers & CSP', 'Zero Trust Network Access', 'DSR Portal'],
      description: 'Comprehensive security solutions and compliance management'
    },
    {
      category: 'Emerging Technologies',
      services: ['Quantum Computing', 'IoT Edge Computing', 'AI Quantum Hybrid Platform', 'Space Technology'],
      description: 'Cutting-edge technology solutions and research platforms'
    },
    {
      category: 'Micro SaaS',
      services: ['Micro CRM', 'Helpdesk Platform', 'Website Analytics', 'Micro SaaS Platform'],
      description: 'Specialized software-as-a-service solutions for specific business needs'
    }
  ];

  const userObligations = [
    {
      obligation: 'Account Security',
      description: 'Maintain the security of your account credentials and notify us immediately of any unauthorized access.',
      icon: Lock
    },
    {
      obligation: 'Compliance',
      description: 'Use our services in compliance with all applicable laws, regulations, and these terms.',
      icon: Shield
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with our acceptable use policy.',
      icon: Users
    },
    {
      obligation: 'Payment',
      description: 'Pay all fees and charges associated with your use of our services in a timely manner.',
      icon: CheckCircle
    },
    {
      obligation: 'Data Accuracy',
      description: 'Provide accurate and complete information when using our services.',
      icon: FileText
    },
    {
      obligation: 'Intellectual Property',
      description: 'Respect our intellectual property rights and the rights of other users.',
      icon: Brain
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or other users\' accounts',
    'Using our services for illegal, harmful, or fraudulent activities',
    'Interfering with or disrupting the operation of our services',
    'Attempting to reverse engineer, decompile, or disassemble our software',
    'Using our services to transmit malware, viruses, or other harmful code',
    'Violating any applicable laws or regulations',
    'Harassing, abusing, or harming other users',
    'Attempting to circumvent any security measures or access controls'
  ];

  const intellectualProperty = [
    {
      type: 'Our IP',
      description: 'All content, software, and technology used in our services remain our exclusive property.',
      rights: ['Trademarks and service marks', 'Copyrighted materials', 'Trade secrets and know-how', 'Patents and inventions']
    },
    {
      type: 'Your Content',
      description: 'You retain ownership of content you submit, but grant us license to use it for service provision.',
      rights: ['Content ownership', 'License to Zion Tech Group', 'Content removal rights', 'Data portability']
    },
    {
      type: 'Third-Party IP',
      description: 'We respect third-party intellectual property and expect users to do the same.',
      rights: ['Third-party licenses', 'Attribution requirements', 'Infringement reporting', 'DMCA compliance']
    }
  ];

  const dataPrivacy = [
    {
      aspect: 'Data Collection',
      description: 'We collect and process data as described in our Privacy Policy to provide and improve our services.',
      details: ['Service usage data', 'Account information', 'Communication records', 'Analytics and performance data']
    },
    {
      aspect: 'Data Security',
      description: 'We implement industry-standard security measures to protect your data.',
      details: ['Encryption in transit and at rest', 'Access controls and authentication', 'Regular security audits', 'Incident response procedures']
    },
    {
      aspect: 'Data Sharing',
      description: 'We do not sell your personal data and only share it as described in our Privacy Policy.',
      details: ['Service providers', 'Legal requirements', 'Business transfers', 'With your consent']
    }
  ];

  const paymentTerms = [
    {
      term: 'Fees',
      description: 'Service fees are as quoted at the time of purchase or as specified in your service agreement.'
    },
    {
      term: 'Billing',
      description: 'Billing occurs according to your selected plan (monthly, annually, or usage-based).'
    },
    {
      term: 'Payment Methods',
      description: 'We accept major credit cards, bank transfers, and other payment methods as specified.'
    },
    {
      term: 'Late Payments',
      description: 'Late payments may result in service suspension and additional fees.'
    },
    {
      term: 'Refunds',
      description: 'Refund policies vary by service and are specified in individual service agreements.'
    }
  ];

  const terminationConditions = [
    {
      condition: 'Breach of Terms',
      description: 'We may terminate services if you materially breach these terms and fail to cure within 30 days.',
      action: 'Immediate suspension or termination'
    },
    {
      condition: 'Non-Payment',
      description: 'Services may be suspended for non-payment after 15 days past due.',
      action: 'Service suspension until payment received'
    },
    {
      condition: 'Illegal Activity',
      description: 'Immediate termination for use of services in illegal activities.',
      action: 'Immediate termination without notice'
    },
    {
      condition: 'Mutual Agreement',
      description: 'Services may be terminated by mutual agreement of both parties.',
      action: 'Orderly service wind-down'
    }
  ];

  const limitations = [
    {
      limitation: 'Service Availability',
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service availability.',
      exclusions: ['Scheduled maintenance', 'Force majeure events', 'Third-party service disruptions']
    },
    {
      limitation: 'Data Loss',
      description: 'We implement backup and recovery procedures but cannot guarantee against all data loss.',
      exclusions: ['Hardware failures', 'Natural disasters', 'Cyber attacks', 'Human error']
    },
    {
      limitation: 'Third-Party Services',
      description: 'We are not responsible for the performance or availability of third-party services.',
      exclusions: ['Cloud providers', 'Payment processors', 'Analytics services', 'External APIs']
    }
  ];

  const governingLaw = [
    {
      jurisdiction: 'Primary Law',
      law: 'Delaware State Law',
      description: 'These terms are governed by and construed in accordance with the laws of Delaware.'
    },
    {
      jurisdiction: 'Dispute Resolution',
      law: 'Arbitration Agreement',
      description: 'Disputes are resolved through binding arbitration in Wilmington, Delaware.'
    },
    {
      jurisdiction: 'International Users',
      law: 'Applicable Local Laws',
      description: 'International users remain subject to applicable local laws and regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, mobile applications, AI platforms, cloud infrastructure, cybersecurity solutions, and any other services we provide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Zion Tech Group.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-blue-800">
                    These Terms apply to all users of our services. We may update these Terms from time to time, and we will notify you of any material changes. Your continued use of our services after changes become effective constitutes acceptance of the new Terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Terms and Definitions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding these key terms will help you better understand your rights and obligations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.term}</h3>
                <p className="text-gray-600 leading-relaxed">{term.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zion Tech Group provides a comprehensive range of technology services and solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <obligation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{obligation.obligation}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The following activities are strictly prohibited when using our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Prohibited Activities</h3>
              </div>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-800">{activity}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Consequences:</strong> Violation of these prohibitions may result in immediate account suspension, termination of services, and legal action as appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding intellectual property rights is crucial for all parties involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {intellectualProperty.map((ip, index) => (
              <motion.div
                key={ip.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{ip.type}</h3>
                <p className="text-gray-600 mb-4">{ip.description}</p>
                <ul className="space-y-2">
                  {ip.rights.map((right, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{right}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Privacy and Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting your data and maintaining the highest security standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataPrivacy.map((privacy, index) => (
              <motion.div
                key={privacy.aspect}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{privacy.aspect}</h3>
                <p className="text-gray-600 mb-4">{privacy.description}</p>
                <ul className="space-y-2">
                  {privacy.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Privacy Policy</h3>
                <p className="text-blue-800">
                  For detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy. These Terms incorporate our Privacy Policy by reference.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding our payment terms and billing practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.term}</h3>
                <p className="text-gray-600 leading-relaxed">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Termination
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding when and how services may be terminated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {terminationConditions.map((condition, index) => (
              <motion.div
                key={condition.condition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.condition}</h3>
                <p className="text-gray-600 mb-4">{condition.description}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Action: {condition.action}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations of Liability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Limitations of Liability
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the scope and limitations of our liability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.limitation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{limitation.limitation}</h3>
                <p className="text-gray-600 mb-4">{limitation.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusions:</h4>
                  <ul className="space-y-1">
                    {limitation.exclusions.map((exclusion, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the legal framework that governs these terms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governingLaw.map((law, index) => (
              <motion.div
                key={law.jurisdiction}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{law.jurisdiction}</h3>
                <div className="bg-white rounded-lg p-3 mb-4">
                  <span className="text-lg font-semibold text-blue-700">{law.law}</span>
                </div>
                <p className="text-gray-600">{law.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <Mail className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">legal@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <Phone className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Wilmington, Delaware</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Department</h3>
              <p className="text-gray-600 mb-4">
                For legal inquiries, contract negotiations, or compliance questions, our legal team is here to help.
              </p>
              <p className="text-gray-600">
                <strong>Response Time:</strong> We typically respond to legal inquiries within 2 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}