import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
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
  Calendar
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Terms() {
  const termsSections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
      details: 'These terms constitute a legally binding agreement between you and Zion Tech Group. Continued use of our services indicates acceptance of any updates to these terms.'
    },
    {
      icon: Shield,
      title: 'Service Description',
      description: 'We provide technology consulting, development, and digital transformation services.',
      details: 'Our services include AI solutions, cloud computing, cybersecurity, software development, and digital transformation consulting across various industries.'
    },
    {
      icon: Lock,
      title: 'User Responsibilities',
      description: 'Users must comply with applicable laws and respect intellectual property rights.',
      details: 'You are responsible for maintaining account security, using services lawfully, and respecting the rights of other users and third parties.'
    },
    {
      icon: Globe,
      title: 'Intellectual Property',
      description: 'All content and technology remain the property of Zion Tech Group.',
      details: 'We retain ownership of our proprietary technology, while you maintain rights to your content and data provided to our services.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'All services must be used in compliance with applicable laws and regulations.',
      details: 'We operate under US law and international regulations, and users must ensure their use complies with local, national, and international laws.'
    },
    {
      icon: Calendar,
      title: 'Service Availability',
      description: 'We strive for high availability but cannot guarantee uninterrupted service.',
      details: 'Services are provided on an "as-is" basis with scheduled maintenance windows and potential for unscheduled downtime.'
    }
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.',
      examples: ['Data protection laws', 'Industry regulations', 'Export controls', 'Tax obligations'],
      severity: 'high'
    },
    {
      obligation: 'Account Security',
      description: 'Maintain the security of your account credentials and notify us of any unauthorized access.',
      examples: ['Strong passwords', '2FA when available', 'Immediate breach notification', 'Regular credential updates'],
      severity: 'high'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.',
      examples: ['Business purposes only', 'No illegal activities', 'Respect service limits', 'Proper authentication'],
      severity: 'high'
    },
    {
      obligation: 'Content Standards',
      description: 'Ensure all content you provide is accurate, lawful, and does not infringe on others\' rights.',
      examples: ['Original content only', 'No copyright violations', 'Accurate information', 'Respectful communication'],
      severity: 'medium'
    },
    {
      obligation: 'Payment Terms',
      description: 'Pay all fees and charges in accordance with agreed payment schedules.',
      examples: ['Timely payments', 'Valid payment methods', 'Dispute resolution', 'Late fee acceptance'],
      severity: 'medium'
    },
    {
      obligation: 'Confidentiality',
      description: 'Maintain the confidentiality of any proprietary information shared with you.',
      examples: ['NDA compliance', 'Secure storage', 'Limited disclosure', 'Return of materials'],
      severity: 'high'
    },
    {
      obligation: 'Data Protection',
      description: 'Handle personal and sensitive data in accordance with privacy laws and our policies.',
      examples: ['GDPR compliance', 'Data minimization', 'Secure processing', 'Breach notification'],
      severity: 'high'
    },
    {
      obligation: 'Service Limits',
      description: 'Respect service usage limits and not attempt to circumvent restrictions.',
      examples: ['Rate limiting', 'Bandwidth restrictions', 'Storage quotas', 'API usage limits'],
      severity: 'medium'
    }
  ];

  const prohibitedActivities = [
    {
      activity: 'Attempting to gain unauthorized access to our systems or other users\' accounts',
      category: 'Security Violations',
      consequences: ['Immediate account suspension', 'Legal action', 'Reporting to authorities']
    },
    {
      activity: 'Transmitting viruses, malware, or other harmful code',
      category: 'Malicious Software',
      consequences: ['Service termination', 'Legal action', 'Damage claims']
    },
    {
      activity: 'Interfering with the proper functioning of our services',
      category: 'Service Disruption',
      consequences: ['Account suspension', 'Service limitations', 'Performance monitoring']
    },
    {
      activity: 'Using our services for illegal or fraudulent activities',
      category: 'Illegal Activities',
      consequences: ['Immediate termination', 'Legal action', 'Law enforcement reporting']
    },
    {
      activity: 'Reverse engineering or attempting to extract source code',
      category: 'Intellectual Property',
      consequences: ['Legal action', 'Injunction requests', 'Damages claims']
    },
    {
      activity: 'Harassing, threatening, or abusing other users',
      category: 'User Conduct',
      consequences: ['Account suspension', 'Service termination', 'Legal action']
    },
    {
      activity: 'Violating intellectual property rights',
      category: 'IP Violations',
      consequences: ['Content removal', 'Account suspension', 'Legal action']
    },
    {
      activity: 'Collecting personal information without consent',
      category: 'Privacy Violations',
      consequences: ['Data deletion', 'Account suspension', 'Regulatory reporting']
    },
    {
      activity: 'Attempting to circumvent security measures or access controls',
      category: 'Security Bypass',
      consequences: ['Immediate termination', 'Legal action', 'Security monitoring']
    },
    {
      activity: 'Using services for cryptocurrency mining without authorization',
      category: 'Resource Abuse',
      consequences: ['Service termination', 'Usage restrictions', 'Additional charges']
    }
  ];

  const serviceLevels = [
    {
      level: 'Standard Support',
      description: 'Email support during business hours',
      response: '24-48 hours',
      included: true,
      features: ['Email support', 'Business hours only', 'Documentation access', 'Community forums'],
      sla: '99.5% uptime'
    },
    {
      level: 'Priority Support',
      description: 'Phone and email support with faster response times',
      response: '4-8 hours',
      included: false,
      features: ['Phone & email support', 'Extended hours', 'Priority ticket handling', 'Dedicated support engineer'],
      sla: '99.8% uptime'
    },
    {
      level: 'Premium Support',
      description: 'Dedicated support team and 24/7 emergency response',
      response: '1-2 hours',
      included: false,
      features: ['24/7 phone support', 'Dedicated team', 'Emergency response', 'Custom SLA agreements'],
      sla: '99.9% uptime'
    },
    {
      level: 'Enterprise Support',
      description: 'Custom support agreements with dedicated resources',
      response: 'Custom SLA',
      included: false,
      features: ['Custom SLA', 'Dedicated account manager', 'On-site support', 'Training & consulting'],
      sla: '99.99% uptime'
    }
  ];

  const dataHandlingTerms = [
    {
      category: 'Data Ownership',
      description: 'You retain ownership of your data, while we maintain rights to aggregated and anonymized usage data.',
      details: 'Your business data remains your property. We may use anonymized, aggregated data for service improvement and analytics.'
    },
    {
      category: 'Data Processing',
      description: 'We process your data only as necessary to provide our services and as outlined in our Privacy Policy.',
      details: 'Data processing follows GDPR principles and is limited to service delivery, support, and legal compliance.'
    },
    {
      category: 'Data Security',
      description: 'We implement industry-standard security measures to protect your data from unauthorized access.',
      details: 'Security measures include encryption, access controls, regular audits, and compliance with SOC 2 standards.'
    },
    {
      category: 'Data Retention',
      description: 'We retain your data according to our data retention policy and legal requirements.',
      details: 'Data is retained for the duration of service provision and as required by law or business needs.'
    }
  ];

  const paymentTerms = [
    {
      term: 'Billing Cycles',
      description: 'Services are billed according to agreed-upon cycles (monthly, quarterly, or annually).',
      details: 'Invoices are generated at the beginning of each billing cycle with payment due within 30 days.'
    },
    {
      term: 'Payment Methods',
      description: 'We accept major credit cards, bank transfers, and other approved payment methods.',
      details: 'Payment methods may vary by region and service type. All payments are processed securely.'
    },
    {
      term: 'Late Payments',
      description: 'Late payments may result in service suspension and additional fees.',
      details: 'Services may be suspended after 15 days of non-payment. Reinstatement requires full payment plus fees.'
    },
    {
      term: 'Refunds',
      description: 'Refunds are provided according to our refund policy and service agreements.',
      details: 'Refunds are typically processed within 30 days and may be subject to administrative fees.'
    }
  ];

  const disputeResolution = [
    {
      step: 'Direct Communication',
      description: 'Attempt to resolve disputes through direct communication with our support team.',
      timeframe: 'Within 30 days'
    },
    {
      step: 'Mediation',
      description: 'If direct communication fails, we may engage in formal mediation.',
      timeframe: 'Within 60 days'
    },
    {
      step: 'Arbitration',
      description: 'Disputes may be resolved through binding arbitration in accordance with our agreement.',
      timeframe: 'Within 90 days'
    },
    {
      step: 'Legal Action',
      description: 'As a last resort, disputes may be resolved through legal proceedings.',
      timeframe: 'As required by law'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our technology services and solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Legal Terms & Conditions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully 
              before using our technology solutions.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these fundamental terms helps ensure a smooth 
              relationship between you and Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300 mb-3">{section.description}</p>
                <p className="text-sm text-blue-400">{section.details}</p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{obligation.obligation}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    obligation.severity === 'high' ? 'bg-red-500/20 text-red-400 border border-red-400/30' :
                    obligation.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                    'bg-green-500/20 text-green-400 border border-green-400/30'
                  }`}>
                    {obligation.severity}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{obligation.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Examples:</h4>
                  <div className="space-y-1">
                    {obligation.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To maintain a secure and professional environment, certain activities 
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <div className="flex items-start space-x-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{activity.activity}</span>
                    </div>
                    <div className="ml-8">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-400 border border-red-400/30 mb-2">
                        {activity.category}
                      </span>
                      <div className="space-y-1">
                        {activity.consequences.map((consequence, consequenceIndex) => (
                          <div key={consequenceIndex} className="flex items-center text-xs text-gray-400">
                            <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                            {consequence}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Levels & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide different levels of support to meet your business needs 
              and ensure optimal service delivery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
                >
                                  <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{level.level}</h3>
                  {level.included && (
                    <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                      Included
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-center mb-4">{level.description}</p>
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-400">Response Time:</span>
                  <div className="text-lg font-semibold text-white">{level.response}</div>
                </div>
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-400">SLA:</span>
                  <div className="text-lg font-semibold text-green-400">{level.sla}</div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2 text-center">Features:</h4>
                  <div className="space-y-1">
                    {level.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling Terms */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Data Handling & Privacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we handle your data is crucial for maintaining trust and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataHandlingTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{term.category}</h3>
                <p className="text-gray-300 mb-4">{term.description}</p>
                <p className="text-sm text-blue-400">{term.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Payment Terms & Billing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear payment terms help ensure smooth business operations and avoid misunderstandings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{term.term}</h3>
                <p className="text-gray-300 mb-4">{term.description}</p>
                <p className="text-sm text-blue-400">{term.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dispute Resolution Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in resolving disputes amicably through clear communication and fair processes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {disputeResolution.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.step}</h3>
                  <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">
                    {step.timeframe}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
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
            >
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
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about these terms or need clarification, 
              please contact our legal team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">legal@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
